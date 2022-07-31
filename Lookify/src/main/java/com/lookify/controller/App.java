package com.lookify.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.lookify.models.Lookify;
import com.lookify.service.LookifyService;

@Controller
public class App {
	private final LookifyService lookifyService;

	public App(LookifyService lookifyService) {
		this.lookifyService = lookifyService;
	}
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}

	@RequestMapping("/dashboard")
	public String dashboard(@ModelAttribute("lookify") Lookify lookify , Model model) {
		model.addAttribute("lookify", lookifyService.allLookify());
		return "dashboard.jsp";
	}

	// new songs
	@RequestMapping("songs/new")
    public String goNew(@ModelAttribute("lookify") Lookify lookify) {
        return "newSong.jsp";
    }
	@PostMapping(value="/new")
	public String create(@Valid @ModelAttribute("lookify") Lookify lookify, BindingResult result) {
		if (result.hasErrors()) {
			return "newSong.jsp";
		} else {
			lookifyService.createLookify(lookify);
			return "redirect:/dashboard";
		}
	}

	// Show 
	@GetMapping("songs/{id}")
	public String show(Model model, @PathVariable("id") Long id){
		Lookify l = lookifyService.findLookify(id);
		model.addAttribute("song", l);
		return "show.jsp";
	}

	// TopTen
	@RequestMapping("/search/topTen")
	public String top(Model model){
		model.addAttribute("songs", lookifyService.topTenSongs());
		return "topTen.jsp";
	}


	// search
	@RequestMapping("/search")
    public String search(Model model, @RequestParam("artist") String artist) {
        return "redirect:/search/"+artist;
    }
	@RequestMapping ("/search/{artist}")
	public String searchArt(Model model,@PathVariable("artist")String artist){
		List<Lookify> artistSong =lookifyService.findArtist(artist);
		model.addAttribute("artistSong", artistSong);
		model.addAttribute("artist", artist);
		return "search.jsp";
		
	}

	// Delete
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id){
		lookifyService.deleteLookify(id);
		return "redirect:/dashboard";
	}
}
