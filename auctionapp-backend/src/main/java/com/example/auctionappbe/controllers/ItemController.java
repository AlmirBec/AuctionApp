package com.example.auctionappbe.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @GetMapping("/items")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("List of items");
    }
}
