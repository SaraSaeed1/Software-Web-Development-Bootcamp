package com.DisplayDate.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DisplayDate {
	
	@RequestMapping("/")
	public String s () {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {

		DateTimeFormatter d = DateTimeFormatter.ofPattern("E ', the 'dd 'of' MMMM yyyy");  
        LocalDateTime now = LocalDateTime.now(); 
        model.addAttribute("date", d.format(now));

		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time (Model model) {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("hh ':' mm a");  
        LocalDateTime now = LocalDateTime.now();
       model.addAttribute("time", dtf.format(now));
       
		return "time.jsp";
	}
	

}
