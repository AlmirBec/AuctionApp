package com.example.auctionappbe.service.implementation;

import com.example.auctionappbe.models.User;
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

    /*@Override
    public void updateUser(User user, Long userId) {
        Optional<User> userDetailOpt = userRepository.findById(userId);
        if(userDetailOpt.isPresent()){
            User usersDetail = userDetailOpt.get();
            if(user.getFirstname() != null || user.getFirstname().isEmpty())
                usersDetail.setFirstname(user.getFirstname());
            if(user.getLastname() != null || user.getLastname().isEmpty())
                usersDetail.setLastname(user.getLastname());
            if(user.getPassword() != null || user.getPassword().isEmpty())
                usersDetail.setPassword(user.getPassword());
            if(user.getEmail() != null || user.getEmail().isEmpty())
                usersDetail.setEmail(user.getEmail());
            if(user.getUsername() != null || user.getUsername().isEmpty())
                usersDetail.setNickname(user.getNickname());
            userRepository.save(usersDetail);
        }else{
            throw new RuntimeException("user not found.");
        }
    }*/

    @Override
    public void deleteUserById(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if(userOpt.isPresent())
            userRepository.deleteById(userId);
        else
            throw new RuntimeException("user not found.");
    }
}
