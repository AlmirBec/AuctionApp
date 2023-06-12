package com.example.auctionappbe.service;

import com.example.auctionappbe.models.AuctionItem;
import com.example.auctionappbe.repository.AuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionItemService {
    @Autowired
    private AuctionItemRepository auctionItemRepository;

    public List<AuctionItem> getAllItems() {
        return auctionItemRepository.findAll();
    }

    public List<AuctionItem> getAllItemsSorted(String value) {
        return auctionItemRepository.findAll(Sort.by(value));
    }

    public List<AuctionItem> getItemsByCategory(Long id) {
        List<AuctionItem> items = auctionItemRepository.findAllByCategoryId(id);
        return items;
    }

    public List<AuctionItem> getItemsByCategorySorted(Long id, String value) {
        return auctionItemRepository.findByCategoryId(id, Sort.by(value));
    }

    public Page<AuctionItem> getItemsWithPagination(int offset, int pageSize) {
        Page<AuctionItem> items = auctionItemRepository.findAll(PageRequest.of(offset, pageSize));
        return items;
    }

    public Page<AuctionItem> getItemsWithPaginationAndSorting(int offset, int pageSize, String field) {
        Page<AuctionItem> items = auctionItemRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
        return items;
    }
}
