package com.LoginandRegistration.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import com.LoginandRegistration.models.User;

@Repository
public interface UserRepository  extends CrudRepository <User, Long>{

    Optional<User> findByEmail(String email);
    Optional<User> findById(Long id);

}
