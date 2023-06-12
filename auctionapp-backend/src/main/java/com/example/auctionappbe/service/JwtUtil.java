package com.example.auctionappbe.service;

import com.example.auctionappbe.config.JWTConfig;
import com.example.auctionappbe.models.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.userdetails.UserDetails;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JwtUtil {

    private final Environment environment;
    private final String SECRET_KEY;
    private final JWTConfig jwtConfig;

    @Autowired
    public JwtUtil(Environment environment, JWTConfig jwtConfig) {
        this.environment = environment;
        this.SECRET_KEY = environment.getProperty("secret_key");
        this.jwtConfig = jwtConfig;
    }

    public String extractUseremail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    //generate token with only user details
    public String generateToken(User user) {
        return generateToken(new HashMap<>(), user);
    }

    //generate token with extra claims
    public String generateToken(Map<String, Object> extraClaims,
                                User user) {
            extraClaims.put("id", user.getId());
            extraClaims.put("firstname", user.getFirstname());
            extraClaims.put("lastname", user.getFirstname());


        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(user.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtConfig.getTokenExpirationMillis()))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userEmail = extractUseremail(token);
        return (userEmail.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
