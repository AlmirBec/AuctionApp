package com.example.auctionappbe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class AuctionappBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuctionappBeApplication.class, args);
	}

}
