package com.languages.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.languages.models.Language;

@Repository
public interface LanguagesRepository extends CrudRepository <Language, Long>{
	// this method retrieves all the Expense from the database
    List<Language> findAll();

}
