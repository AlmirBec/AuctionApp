package com.example.auctionappbe.repository;

import com.example.auctionappbe.model.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionItemRepository extends JpaRepository<AuctionItem, Long> {

}
