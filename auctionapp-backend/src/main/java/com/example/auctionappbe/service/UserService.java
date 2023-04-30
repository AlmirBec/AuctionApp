package com.example.auctionappbe.service;

import com.example.auctionappbe.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUser();

    User getUserById(Long userId);

    void saveUser(User user);

    void updateUser(User user, Long userid);

    void deleteUserById(Long userId);
}
