package com.example.auctionappbe.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "photo", schema = "public")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String url;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "photo", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<AuctionItem> auction_item = new HashSet<>();
}
