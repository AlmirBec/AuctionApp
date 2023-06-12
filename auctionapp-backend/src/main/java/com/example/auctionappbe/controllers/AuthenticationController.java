package com.example.auctionappbe.controllers;

import com.example.auctionappbe.models.authentication.AuthenticationResponse;
import com.example.auctionappbe.models.authentication.LoginRequest;
import com.example.auctionappbe.models.authentication.RegisterRequest;
import com.example.auctionappbe.service.AuthenticationService;
import com.example.auctionappbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "${application.api.prefix}/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authenticationService.login(request));
    }
}
