package com.example.auctionappbe.repository;

import com.example.auctionappbe.models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepository extends JpaRepository<Bid, Long> {
}
