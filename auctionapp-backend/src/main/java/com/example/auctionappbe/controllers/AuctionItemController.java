package com.example.auctionappbe.controllers;

import com.example.auctionappbe.model.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AuctionItemController {
    @Autowired
    private AuctionItemRepository auctionItemRepository;

    @GetMapping("/items")
    public List<AuctionItem> getAllItems(){
        return auctionItemRepository.findAll();

    }
}
