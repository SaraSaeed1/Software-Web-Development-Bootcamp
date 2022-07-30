package com.pokebook.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.pokebook.Service.PokeBookService;
import com.pokebook.models.Expense;

@Controller
public class PokeBookController {
	private final PokeBookService pokeBookService;
	public PokeBookController(PokeBookService pokeBookService) {
		this.pokeBookService = pokeBookService;
	}

	@RequestMapping("/expense")
		public String index(@ModelAttribute("ex") Expense expense , Model model) {
		model.addAttribute("expenses", pokeBookService.allExpense());
		return "index.jsp";
		}

	@RequestMapping(value="/expense", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("ex") Expense expense, BindingResult result, Model model) {
		model.addAttribute("expenses", pokeBookService.allExpense());
		if (result.hasErrors()) {
			return "index.jsp";
		} else {
			pokeBookService.createExpense(expense);
			return "redirect:/expense";
		}
	}
}

