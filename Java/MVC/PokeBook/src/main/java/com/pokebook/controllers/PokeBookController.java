package com.pokebook.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping("/expenses")
	public String index(@ModelAttribute("ex") Expense expense , Model model) {
		model.addAttribute("expenses", pokeBookService.allExpense());
		return "index.jsp";
	}

	@RequestMapping(value="/expenses", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("ex") Expense expense, BindingResult result, Model model) {
		model.addAttribute("expenses", pokeBookService.allExpense());
		if (result.hasErrors()) {
			return "index.jsp";
		} else {
			pokeBookService.createExpense(expense);
			return "redirect:/expenses";
		}
	}

    @RequestMapping("/expenses/edit/{id}")
    public String goEdit(Model model ,@PathVariable ("id") Long id ) {
        Expense expense = pokeBookService.findExpense(id);
        model.addAttribute("ex", expense);
        return "edit.jsp";
    }

	@RequestMapping(value="/expenses/edit/{id}", method=RequestMethod.PUT )
	public String edit(@Valid @ModelAttribute("ex") Expense expense, BindingResult result, @PathVariable ("id") Long id) {
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			pokeBookService.updateExpense(expense, id);
			return "redirect:/expenses";
		}
	}

	@RequestMapping("/expenses/show/{id}")
    public String show(Model model ,@PathVariable ("id") Long id ) {
        Expense expense = pokeBookService.findExpense(id);
        model.addAttribute("ex", expense);
        return "show.jsp";
    }

	@RequestMapping("delete/{id}")
    public String delete(@PathVariable ("id") Long id ) {
		pokeBookService.deleteExpense( id);
		return "redirect:/expenses";
    }


}

