package com.lookify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.lookify.models.Lookify;


public interface LookifyRepository extends CrudRepository <Lookify, Long>{
	// this method retrieves all the Expense from the database
    List<Lookify> findAll();
    List<Lookify> findTop10ByOrderByRatingDesc();
	List<Lookify> findByArtist(String artist);

}
