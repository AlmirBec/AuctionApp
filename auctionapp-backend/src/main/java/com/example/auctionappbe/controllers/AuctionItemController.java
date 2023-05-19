package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "${application.api.prefix}/items")
@CrossOrigin("http://localhost:3000")
public class AuctionItemController {
    @Autowired
    private AuctionItemRepository auctionItemRepository;

    @GetMapping("/")
    public List<AuctionItem> getAllItems(){
        return auctionItemRepository.findAll();
    }
    @GetMapping("/sortByStartDate")
    public List<AuctionItem> getItemsSortedByStartDate() {
        return auctionItemRepository.findAllByOrderByStartDate();
    }
    @GetMapping("/sortByPrice")
    public List<AuctionItem> getItemsSortedByPrice() {
        return auctionItemRepository.findAllByOrderByPrice();
    }
    @GetMapping("/sortByNewness")
    public List<AuctionItem> getItemsSortedByNewness() {
        return auctionItemRepository.findAllByOrderByIdDesc();
    }
    @GetMapping("/sortByName")
    public List<AuctionItem> getItemsSortedByName() {
        return auctionItemRepository.findAllByOrderByName();
    }
    @GetMapping("/category/{categoryId}")
    public List<AuctionItem> getItemsByCategory(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryId(categoryId);
    }
    @GetMapping("/sortInCategoryByName/{categoryId}")
    public List<AuctionItem> getItemsFromCategorySortedByName(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryIdOrderByName(categoryId);
    }
    @GetMapping("/sortInCategoryByPrice/{categoryId}")
    public List<AuctionItem> getItemsFromCategorySortedByPrice(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryIdOrderByPrice(categoryId);
    }
    @GetMapping("/sortInCategoryByStartDate/{categoryId}")
    public List<AuctionItem> getItemsFromCategorySortedByStartDate(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryIdOrderByStartDate(categoryId);
    }
    @GetMapping("/sortInCategoryByNewness/{categoryId}")
    public List<AuctionItem> getItemsFromCategorySortedByIdDesc(@PathVariable Long categoryId) {
        return auctionItemRepository.findAllByCategoryIdOrderByIdDesc(categoryId);
    }
}
