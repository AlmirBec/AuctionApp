package com.example.auctionappbe.repository;

import com.example.auctionappbe.model.Photo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
