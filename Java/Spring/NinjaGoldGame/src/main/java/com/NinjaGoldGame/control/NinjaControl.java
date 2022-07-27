package com.NinjaGoldGame.control;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class NinjaControl {
    
    @RequestMapping("/")
    public String index(HttpSession session) {
        if(session.getAttribute("gold") == null) {
            session.setAttribute("gold", 0);
            session.setAttribute("activities", new ArrayList<String>());
        }
        return "index.jsp";
    }

    // https://www.baeldung.com/spring-pathvariable
    @RequestMapping("/{place}")
    public String ninja(@PathVariable()String place, HttpSession session) {

        Integer gold = (Integer) session.getAttribute("gold");
        ArrayList<String> activity =(ArrayList<String>) session.getAttribute("activities");
        Random ran = new Random();
        int random = ran.nextInt();

        //Create Date Object
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy");
        String date = myDateObj.format(myFormatObj);

        if(place.equals("farm")){
            random = ran.nextInt(10, 20);
        }

        else if(place.equals("cave")){
            random = ran.nextInt(5, 10);
        }

        else if(place.equals("house")){
            random = ran.nextInt(2, 5);
        }

        else if(place.equals("casino")){
            random = ran.nextInt(-50, 50);
        }

        //add to gold after check:
        int newGold = gold+random;
        session.setAttribute("gold", newGold);
        int earned = random;

        String message ;
        if(earned < 0){
            message = "You failed a "+ place + " ,and lost " + earned + " gold.....Ouch ( "+date+" )"; 
            activity.add(message);
        }
        else{
            message = "You entered a "+ place + " ,and earned " + earned + " gold. ( "+date+" )"; 
            activity.add(message);
            }

        return "redirect:/";
    }

    @RequestMapping("reset")
    public String reset(HttpSession session) {
        session.setAttribute("gold", 0);
        session.setAttribute("activities", new ArrayList<String>());
        return "redirect:/";
    }

}
