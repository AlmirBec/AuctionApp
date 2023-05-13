package com.example.auctionappbe.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users", schema = "public")
public class Users implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private String email;
    @Column
    private String password;

    @Column
    private String nickname;



    @Column(name = "datejoined")
    private Date datejoined;

    @Enumerated(EnumType.STRING)
    private Role Role;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Bid> bid = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "users", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<AuctionItem> auctionitem = new HashSet<>();


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(Role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
