package com.example.auctionappbe.repository;

import com.example.auctionappbe.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
