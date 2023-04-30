package com.example.auctionappbe.service.implementation;

import com.example.auctionappbe.model.User;
import com.example.auctionappbe.repository.UserRepository;
import com.example.auctionappbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if(userOpt.isPresent())
            return userOpt.get();
        else
            throw new RuntimeException("user not found.");
    }

    @Override
    public void saveUser(User user) {
        User userDetail = userRepository.save(user);
        System.out.println("user saved to db with userId : " + userDetail.getId());
    }

    @Override
    public void updateUser(User user, Long userId) {
        Optional<User> userDetailOpt = userRepository.findById(userId);
        if(userDetailOpt.isPresent()){
            User userDetail = userDetailOpt.get();
            if(user.getFirstName() != null || user.getFirstName().isEmpty())
                userDetail.setFirstName(user.getFirstName());
            if(user.getLastName() != null || user.getLastName().isEmpty())
                userDetail.setLastName(user.getLastName());
            if(user.getPassword() != null || user.getPassword().isEmpty())
                userDetail.setPassword(user.getPassword());
            if(user.getEmail() != null || user.getEmail().isEmpty())
                userDetail.setEmail(user.getEmail());
            if(user.getUsername() != null || user.getUsername().isEmpty())
                userDetail.setUsername(user.getUsername());
            if(user.getRole() != null || user.getRole().isEmpty())
                userDetail.setRole(user.getRole());
            userRepository.save(userDetail);
        }else{
            throw new RuntimeException("user not found.");
        }
    }

    @Override
    public void deleteUserById(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if(userOpt.isPresent())
            userRepository.deleteById(userId);
        else
            throw new RuntimeException("user not found.");
    }
}
