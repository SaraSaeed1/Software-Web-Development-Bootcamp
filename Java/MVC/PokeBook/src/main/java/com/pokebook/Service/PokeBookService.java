package com.pokebook.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pokebook.models.Expense;
import com.pokebook.repositories.PokeBookRepository;

@Service
public class PokeBookService {
	private final PokeBookRepository pokeRepository;

	public PokeBookService(PokeBookRepository pokeRepository) {
		this.pokeRepository = pokeRepository;
	}
	// returns all the Expense
    public List<Expense> allExpense() {
        return pokeRepository.findAll();
    }
    // creates a Expense
    public Expense createExpense(Expense e) {
        return pokeRepository.save(e);
    }


	// retrieves a Expense
	public Expense findExpense(Long id) {
		Optional<Expense> optionalExpense = pokeRepository.findById(id);
		if (optionalExpense.isPresent()) {
			return optionalExpense.get();
		} else {
			return null;
		}
	}

	//update Expense 
	public Expense updateExpense(Expense expense, Long id){
		Expense e =pokeRepository.findById(id).get();
		e.setExpense(expense.getExpense());
		e.setVendor(expense.getVendor());
		e.setAmount(expense.getAmount());
		e.setDescription(expense.getDescription());
		return pokeRepository.save(e);
	}


	public void deleteExpense(Long id) {
		pokeRepository.deleteById(id);
	}
}