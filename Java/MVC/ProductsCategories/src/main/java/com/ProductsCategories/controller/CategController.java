package com.ProductsCategories.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ProductsCategories.models.Category;
import com.ProductsCategories.services.CategoryService;
import com.ProductsCategories.services.ProductService;

@Controller
public class CategController {

    @Autowired
    private CategoryService categoryServ;
	@Autowired
    private ProductService productServ;

    @GetMapping("categories/new")
	public String index(@ModelAttribute("newCategory") Category category) {
		return "NewCategory.jsp";
	}
    @PostMapping("categories/new")
	public String createCategory(@Valid @ModelAttribute("newCategory") Category category, BindingResult result) {
		if (result.hasErrors()) {
			return "NewCategory.jsp";
		} else {
			categoryServ.createCategory(category);
			return "redirect:/categories/new";
		}
	}
	//details Category
	@GetMapping("/categories/{id}")
	public String addCategory(@PathVariable("id") Long id , Model model) {
		Category category = categoryServ.findCategory(id);
		model.addAttribute("category", category);
		model.addAttribute("products", productServ.otherCategories(category));
		return "category.jsp";
	}
	// Add Product to Category 
	@PostMapping("/categories/{id}")
    public String AddProduct(@RequestParam(value = "product") Long productId,@PathVariable("id") Long categoryId) {
        Category thisCategory = categoryServ.findCategory(categoryId);
        categoryServ.addProduct(thisCategory, productId);
        return "redirect:/categories/{id}";
    }

}
