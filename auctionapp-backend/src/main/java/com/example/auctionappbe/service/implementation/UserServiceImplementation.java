package com.example.auctionappbe.service.implementation;

import com.example.auctionappbe.models.User;
import com.example.auctionappbe.repository.UserRepository;
import com.example.auctionappbe.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

}
