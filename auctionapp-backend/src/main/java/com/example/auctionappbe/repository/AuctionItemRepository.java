package com.example.auctionappbe.repository;

import com.example.auctionappbe.models.AuctionItem;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuctionItemRepository extends JpaRepository<AuctionItem, Long> {
    List<AuctionItem> findAllByCategoryId(Long categoryId);

    List<AuctionItem> findByCategoryId(Long categoryId, Sort sort);
}
