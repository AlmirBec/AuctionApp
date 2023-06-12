package com.example.auctionappbe.service;

import com.example.auctionappbe.models.authentication.AuthenticationResponse;
import com.example.auctionappbe.models.authentication.LoginRequest;
import com.example.auctionappbe.models.authentication.RegisterRequest;
import com.example.auctionappbe.models.Role;
import com.example.auctionappbe.models.User;
import com.example.auctionappbe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        User user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .date_joined(new Date())
                .Role(Role.USER)
                .build();
        userRepository.save(user);

        String jwtToken = jwtUtil.generateToken(user);

        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();

        String jwtToken = jwtUtil.generateToken(user);
        return new AuthenticationResponse(jwtToken);
    }
}
