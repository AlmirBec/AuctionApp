package com.example.auctionappbe.controlers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControler {
    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
