package com.languages.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.languages.models.Language;
import com.languages.service.LanguageService;

@Controller
public class LanguageApp {
	private final LanguageService languageService;
	public LanguageApp(LanguageService languageService) {
		this.languageService = languageService;
	}
	@RequestMapping("/languages")
	public String index(@ModelAttribute("languages") Language language , Model model) {
		model.addAttribute("lang", languageService.allLanguage());
		return "index.jsp";
	}

	@RequestMapping(value="/languages", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("languages") Language language, BindingResult result, Model model) {
		model.addAttribute("lang", languageService.allLanguage());
		if (result.hasErrors()) {
			return "index.jsp";
		} else {
			languageService.createLanguage(language);
			return "redirect:/languages";
		}
	}

	// Show
	@RequestMapping("/languages/{id}")
    public String show(Model model ,@PathVariable ("id") Long id ) {
        Language language = languageService.findLanguage(id);
        model.addAttribute("language", language);
        return "show.jsp";
    }

	//Edit
	@RequestMapping("/languages/{id}/edit")
    public String goEdit(Model model ,@PathVariable ("id") Long id ) {
        Language language = languageService.findLanguage(id);
        model.addAttribute("language", language);
        return "edit.jsp";
    }

	@RequestMapping(value="/languages/{id}", method=RequestMethod.PUT )
	public String edit(@Valid @ModelAttribute("language") Language language, BindingResult result, @PathVariable ("id") Long id) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		else {
			languageService.updateLanguage(language, id);
			return "redirect:/languages";
		}
	}

	// Delete
	@RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE )
    public String delete(@PathVariable ("id") Long id ) {
		languageService.deleteLanguage(id);
		return "redirect:/languages";
    }

}
