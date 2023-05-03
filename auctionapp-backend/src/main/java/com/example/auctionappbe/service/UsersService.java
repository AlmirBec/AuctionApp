package com.example.auctionappbe.service;

import com.example.auctionappbe.model.Users;

import java.util.List;

public interface UsersService {
    List<Users> getAllUser();

    Users getUserById(Long userId);

    void saveUser(Users users);

    void updateUser(Users users, Long userid);

    void deleteUserById(Long userId);
}
