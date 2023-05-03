package com.example.auctionappbe.service.implementation;

import com.example.auctionappbe.model.Users;
import com.example.auctionappbe.repository.UsersRepository;
import com.example.auctionappbe.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImplementation implements UsersService {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public List<Users> getAllUser() {
        return usersRepository.findAll();
    }

    @Override
    public Users getUserById(Long userId) {
        Optional<Users> userOpt = usersRepository.findById(userId);
        if(userOpt.isPresent())
            return userOpt.get();
        else
            throw new RuntimeException("user not found.");
    }

    @Override
    public void saveUser(Users users) {
        Users usersDetail = usersRepository.save(users);
        System.out.println("user saved to db with userId : " + usersDetail.getId());
    }

    @Override
    public void updateUser(Users users, Long userId) {
        Optional<Users> userDetailOpt = usersRepository.findById(userId);
        if(userDetailOpt.isPresent()){
            Users usersDetail = userDetailOpt.get();
            if(users.getFirstname() != null || users.getFirstname().isEmpty())
                usersDetail.setFirstname(users.getFirstname());
            if(users.getLastname() != null || users.getLastname().isEmpty())
                usersDetail.setLastname(users.getLastname());
            if(users.getPassword() != null || users.getPassword().isEmpty())
                usersDetail.setPassword(users.getPassword());
            if(users.getEmail() != null || users.getEmail().isEmpty())
                usersDetail.setEmail(users.getEmail());
            if(users.getUsername() != null || users.getUsername().isEmpty())
                usersDetail.setUsername(users.getUsername());
            if(users.getRole() != null || users.getRole().isEmpty())
                usersDetail.setRole(users.getRole());
            usersRepository.save(usersDetail);
        }else{
            throw new RuntimeException("user not found.");
        }
    }

    @Override
    public void deleteUserById(Long userId) {
        Optional<Users> userOpt = usersRepository.findById(userId);
        if(userOpt.isPresent())
            usersRepository.deleteById(userId);
        else
            throw new RuntimeException("user not found.");
    }
}
