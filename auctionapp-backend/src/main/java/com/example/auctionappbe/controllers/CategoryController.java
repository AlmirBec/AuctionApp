package com.example.auctionappbe.controllers;

import com.example.auctionappbe.model.AuctionItem;
import com.example.auctionappbe.model.Category;
import com.example.auctionappbe.repository.AuctionItemRepository;
import com.example.auctionappbe.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/items/categories")
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();

    }
}
