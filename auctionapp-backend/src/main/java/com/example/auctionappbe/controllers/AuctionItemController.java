package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @GetMapping("/items/sortByStartDate")
    public List<AuctionItem> getItemsSortedByStartDate() {
        return auctionItemRepository.findAllByOrderByStartDate();
    }
    @GetMapping("/items/sortByPrice")
    public List<AuctionItem> getItemsSortedByPrice() {
        return auctionItemRepository.findAllByOrderByPrice();
    }
    @GetMapping("/items/sortByNewness")
    public List<AuctionItem> getItemsSortedByNewness() {
        return auctionItemRepository.findAllByOrderByIdDesc();
    }
    @GetMapping("/items/sortByName")
    public List<AuctionItem> getItemsSortedByName() {
        return auctionItemRepository.findAllByOrderByName();
    }
    @GetMapping("items/category/{categoryId}")
    public List<AuctionItem> getItemsByCategory(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryId(categoryId);
    }
}
