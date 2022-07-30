package com.pokebook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pokebook.models.Expense;

public interface PokeBookRepository extends CrudRepository<Expense, Long>{
	// this method retrieves all the Expense from the database
    List<Expense> findAll();
    // this method finds books with descriptions containing the search string
    List<Expense> findByDescriptionContaining(String search);
}
