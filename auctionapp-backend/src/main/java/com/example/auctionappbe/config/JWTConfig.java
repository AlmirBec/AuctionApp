package com.example.auctionappbe.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JWTConfig {
    @Value("${application.jwt.tokenPrefix}")
    private String tokenPrefix;

    @Value("${application.jwt.tokenExpAfterMin}")
    private int tokenExpirationMinutes;

    public String getTokenPrefix() {
        return tokenPrefix;
    }

    public long getTokenExpirationMillis() {
        return tokenExpirationMinutes * 60 * 1000;
    }
}
