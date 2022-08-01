package com.DojoandNinjas.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.DojoandNinjas.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository <Ninja, Long>{
	// this method retrieves all the Expense from the database
    List<Ninja> findAll();
}
