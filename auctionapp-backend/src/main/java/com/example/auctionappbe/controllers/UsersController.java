package com.example.auctionappbe.controllers;

import com.example.auctionappbe.model.Users;
import com.example.auctionappbe.service.AuthenticationService;
import com.example.auctionappbe.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UsersController {

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UsersService usersService;

    @GetMapping("/users")
    public List<Users> getAllUser(){
        List<Users> users = usersService.getAllUser();
        System.out.println("users : "+users);
        return users;
    }
    @GetMapping("/user/{userId}")
    public Users getUserById(@PathVariable Long userId){
        Users users = usersService.getUserById(userId);
        System.out.println("userId : "+userId+" : user : "+ users);
        return users;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/auth/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authenticationService.login(request));
    }

    /*@PutMapping("/user/{userId}")
    public String updateUser(@RequestBody Users users, @PathVariable Long userId){
        usersService.updateUser(users, userId);
        return "user updated successfully.";
    }*/

    @DeleteMapping("/user/{userId}")
    public String deleteUserById(@PathVariable Long userId){
        usersService.deleteUserById(userId);
        return "user deleted successfully.";
    }
}
