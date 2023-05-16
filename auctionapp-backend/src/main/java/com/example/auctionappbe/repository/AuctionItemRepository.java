package com.example.auctionappbe.repository;

import com.example.auctionappbe.models.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuctionItemRepository extends JpaRepository<AuctionItem, Long> {
    List<AuctionItem> findAllByOrderByName();
    List<AuctionItem> findAllByOrderByStartDate();
    List<AuctionItem> findAllByOrderByPrice();
    List<AuctionItem> findAllByOrderByIdDesc();

    List<AuctionItem> findAllByCategoryId(Long categoryId);

}
