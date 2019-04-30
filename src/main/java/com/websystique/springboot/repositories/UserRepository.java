package com.websystique.springboot.repositories;

import com.websystique.springboot.model.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);
    
    List<User> findAllUsersByCompany(String company);

}
