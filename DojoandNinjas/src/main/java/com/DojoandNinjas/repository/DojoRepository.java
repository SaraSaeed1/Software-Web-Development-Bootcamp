package com.DojoandNinjas.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.DojoandNinjas.models.Dojo;

@Repository
public interface DojoRepository extends CrudRepository <Dojo, Long>{
	// this method retrieves all the Expense from the database
    List<Dojo> findAll();
}
