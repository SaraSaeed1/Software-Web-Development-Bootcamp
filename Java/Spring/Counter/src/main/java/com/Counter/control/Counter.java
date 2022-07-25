package com.Counter.control;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("your_server")
public class Counter {

    @RequestMapping("")
	public String index(HttpSession session) {
        session.setAttribute("count", 0);
		return "index.jsp";
	}

    @RequestMapping("/counter")
	public String count(HttpSession session, Model model ) {
        if(session.getAttribute("count") == null) {
            session.setAttribute("count", 0);
        }
        else{
            Integer currentCount = (Integer) session.getAttribute("count");
                currentCount++;
                // set the updated count value back into session
                session.setAttribute("count", currentCount);
                model.addAttribute("count", currentCount);
        }
		return "visitCount.jsp";
	}

    @RequestMapping("increment2")
	public String increment(HttpSession session, Model model ) {
        if(session.getAttribute("count") == null) {
            session.setAttribute("count", 0);
        }
        else{
            Integer currentCount = (Integer) session.getAttribute("count");
                currentCount+=2;
                // set the updated count value back into session
                session.setAttribute("count", currentCount);
                model.addAttribute("count", currentCount);
        }
		return "increment.jsp";
	}

    @RequestMapping("back_to_zero")
	public String BackToZero(HttpSession session) {
        session.setAttribute("count", 0);
        return "visitCount.jsp";
	}

    @RequestMapping("back_to_zero2")
	public String BackToZero2(HttpSession session) {
        session.setAttribute("count", 0);
		return "increment.jsp";
	}
}
