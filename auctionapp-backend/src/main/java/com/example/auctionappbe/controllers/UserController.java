package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.User;
import com.example.auctionappbe.service.AuthenticationService;
import com.example.auctionappbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/auth/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authenticationService.login(request));
    }


    @GetMapping("/user")
    public List<User> getAllUser(){
        List<User> users = userService.getAllUser();
        System.out.println("user : "+users);
        return users;
    }
    @GetMapping("/user/{userId}")
    public User getUserById(@PathVariable Long userId){
        User user = userService.getUserById(userId);
        System.out.println("userId : "+userId+" : user : "+ user);
        return user;
    }



    /*@PutMapping("/user/{userId}")
    public String updateUser(@RequestBody User user, @PathVariable Long userId){
        userService.updateUser(user, userId);
        return "user updated successfully.";
    }*/

    @DeleteMapping("/user/{userId}")
    public String deleteUserById(@PathVariable Long userId){
        userService.deleteUserById(userId);
        return "user deleted successfully.";
    }
}
