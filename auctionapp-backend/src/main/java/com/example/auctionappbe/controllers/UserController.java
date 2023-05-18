package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.User;
import com.example.auctionappbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "${application.api.prefix}/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> getAllUser(){
        List<User> users = userService.getAllUser();
        return users;
    }
}
