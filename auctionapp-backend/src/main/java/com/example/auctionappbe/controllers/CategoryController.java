package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.Category;
import com.example.auctionappbe.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "${application.api.prefix}")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/items/categories")
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();

    }
}
