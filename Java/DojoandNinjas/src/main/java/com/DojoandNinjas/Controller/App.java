package com.DojoandNinjas.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.DojoandNinjas.models.Dojo;
import com.DojoandNinjas.models.Ninja;
import com.DojoandNinjas.service.DojoService;
import com.DojoandNinjas.service.NinjaService;

@Controller
public class App {
	@Autowired
	private DojoService dojoService;
	@Autowired
	private NinjaService ninjaService;
	
	//create Dojo
	@RequestMapping("/dojos/new")
	public String dojo(@ModelAttribute("dojo") Dojo dojo) {
		return "newDojo.jsp";
	}
	@RequestMapping("create/dojo")
	public String CreateDojo(@Valid @ModelAttribute("dojo") Dojo dojo ,BindingResult result) {
		if (result.hasErrors()) {
			return "newDojo.jsp";
		} else {
			dojoService.createDojo(dojo);
			return "redirect:/dojos/new";
		}
	}

	//create Ninja
	@RequestMapping("/ninjas/new")
	public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojoService.allDojo());
		return "newNinja.jsp";
	}

	@RequestMapping("/create/ninja")
	public String CreateNinja(@Valid @ModelAttribute("ninja") Ninja ninja  ,BindingResult result) {
		if (result.hasErrors()) {
			return "newNinja.jsp";
		} else {
			ninjaService.createNinja(ninja);
			return "redirect:/dojos/new";
		}
	}
	
	//show Dojo
	@RequestMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id")Long id, Model model) {
		model.addAttribute("dojo", dojoService.findDojo(id));
		return "showDojo.jsp";
	}
}
