package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.Category;
import com.example.auctionappbe.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "${application.api.prefix}")
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/items/categories")
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
}
