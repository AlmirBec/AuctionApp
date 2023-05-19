package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "${application.api.prefix}/items")
@CrossOrigin("http://localhost:3000")
public class AuctionItemController {
    @Autowired
    private AuctionItemRepository auctionItemRepository;

    @GetMapping("/")
    public List<AuctionItem> getAllItems() {
        return auctionItemRepository.findAll();
    }

    @GetMapping("/category/{categoryId}")
    public List<AuctionItem> getItemsByCategory(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryId(categoryId);
    }

    @GetMapping("/sortBy")
    public List<AuctionItem> getItemsSortedByColumn(@RequestParam("id") Long id,
                                                    @RequestParam("value") String value) {
        Sort sort = Sort.by(value);
        if (id == 0) return auctionItemRepository.findAll(sort);
        return auctionItemRepository.findByCategoryId(id, sort);
    }
}
