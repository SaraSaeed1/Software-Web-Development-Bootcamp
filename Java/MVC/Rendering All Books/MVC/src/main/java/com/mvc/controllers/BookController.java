package com.mvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mvc.models.Book;
import com.mvc.services.BookService;

import java.util.List;
@Controller
public class BookController {
    private final BookService bookService;
    
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    
    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
    }

    
    @GetMapping("/books/{id}")
    public String index(Model model ,@PathVariable ("id") Long id ) {
        Book book = bookService.findBook(id);
        System.out.println(book);
        model.addAttribute("book", book);
        return "show.jsp";
    }
    

}
