package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import com.example.auctionappbe.service.AuctionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "${application.api.prefix}/items")
@CrossOrigin("http://localhost:3000")
public class AuctionItemController {
    @Autowired
    private AuctionItemService auctionItemService;

    @GetMapping("/{pageSize}")
    public Page<AuctionItem> getAllItems(@PathVariable int pageSize) {
        Page<AuctionItem> items = auctionItemService.getItemsWithPagination(0, pageSize);
        return items;
    }

    @GetMapping("/category/{categoryId}")
    public List<AuctionItem> getItemsByCategory(@PathVariable Long categoryId) {
        return auctionItemService.getItemsByCategory(categoryId);
    }

    @GetMapping("/sortBy")
    public List<AuctionItem> getItemsSortedByColumn(@RequestParam("id") Long id,
                                                    @RequestParam("value") String value) {
        if (id == 0) return auctionItemService.getAllItemsSorted(value);
        return auctionItemService.getItemsByCategorySorted(id, value);
    }

}
