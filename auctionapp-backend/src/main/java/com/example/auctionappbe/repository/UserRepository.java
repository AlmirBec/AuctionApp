package com.example.auctionappbe.repository;

import com.example.auctionappbe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
