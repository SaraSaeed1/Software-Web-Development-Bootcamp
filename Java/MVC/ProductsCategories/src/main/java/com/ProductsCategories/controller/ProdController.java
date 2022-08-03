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

import com.ProductsCategories.models.Product;
import com.ProductsCategories.services.CategoryService;
import com.ProductsCategories.services.ProductService;

@Controller
public class ProdController {

    @Autowired
    private ProductService productServ;
	@Autowired
    private CategoryService categoryServ;



    @GetMapping("products/new")
	public String index(@ModelAttribute("newProduct") Product product) {
		return "NewProduct.jsp";
	}
    @PostMapping("products/new")
	public String createProduct(@Valid @ModelAttribute("newProduct") Product product, BindingResult result) {
		if (result.hasErrors()) {
			return "NewProduct.jsp";
		} else {
			productServ.createProduct(product);
			return "redirect:/products/new";
		}
	}

	//details Product
	@GetMapping("/products/{id}")
	public String addCategory(@PathVariable("id") Long id , Model model) {
		Product product = productServ.findProduct(id);
		model.addAttribute("product", product);
		model.addAttribute("categories", categoryServ.otherProduct(product));
		return "product.jsp";
	}
	// Add category to Product
	@PostMapping("/products/{id}")
    public String AddCategory(@RequestParam(value = "category") Long categoryId,@PathVariable("id") Long productId) {
        Product thisProduct = productServ.findProduct(productId);
        productServ.addCategory(thisProduct, categoryId);
        return "redirect:/products/{id}";
    }
}