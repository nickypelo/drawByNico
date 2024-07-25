package org.drawByNico.controller;

import io.javalin.Javalin;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import io.javalin.http.HttpStatus;

import java.util.Map;
import java.util.Collections;
public class Server{

    public static void main(String[] args) {
        // Set the Stripe API key
        Stripe.apiKey = "sk_test_51PeoqB2MvK0fDw6SqTSvJOD3Oy2ZWrx7wGFX7SBlRO43e0lLJ7SaGwj3DJJDy5Av9TEmuU2Sx2V2wopY1alsGQ2Q001448gfix";

        // Create a Javalin app
        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> {
                    it.anyHost();
                });
            });
            config.staticFiles.add(staticFiles -> {
                staticFiles.directory = "src/main/resources/static";
                staticFiles.location = io.javalin.http.staticfiles.Location.EXTERNAL;
            });
        }).start(7070);

// Define the POST endpoint for creating a Stripe Checkout session
        app.post("/create-checkout-session", ctx -> {
            // Parse request body to get quantity and price data
            Map<String, Object> requestBody = ctx.bodyAsClass(Map.class);
            long quantity = ((Number) requestBody.get("quantity")).longValue();
            long totalPrice = ((Number) requestBody.get("totalPrice")).longValue();

            // Create a checkout session with Stripe
            String YOUR_DOMAIN = "http://localhost:7070"; // Your frontend domain
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl(YOUR_DOMAIN + "/success.html")
                    .setCancelUrl(YOUR_DOMAIN + "/cancel.html")
                    .addLineItem(SessionCreateParams.LineItem.builder()
                            .setQuantity(quantity)
                            .setPriceData(
                                    SessionCreateParams.LineItem.PriceData.builder()
                                            .setCurrency("zar")
                                            .setUnitAmount(totalPrice)
                                            .setProductData(
                                                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                            .setName("Drawings") // Set your product name here
                                                            .build())
                                            .build())
                            .build())
                    .build();

            Session session = Session.create(params);
            ctx.json(Collections.singletonMap("sessionId", session.getId()));
        });
    }
}
