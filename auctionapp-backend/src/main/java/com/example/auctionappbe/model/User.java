package com.example.auctionappbe.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table(name = "user", schema = "public")

public class User {
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
    private String username;

    @Column
    private String role;

    @Column
    private Date datejoined;

    public User(Long id, String firstName, String lastName, String email, String password, String username, String role, Date dateJoined) {
        this.id = id;
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.password = password;
        this.username = username;
        this.role = role;
        this.datejoined = dateJoined;
    }
    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        this.firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getDateJoined() {
        return datejoined;
    }

    public void setDateJoined(Date dateJoined) {
        this.datejoined = dateJoined;
    }
}
