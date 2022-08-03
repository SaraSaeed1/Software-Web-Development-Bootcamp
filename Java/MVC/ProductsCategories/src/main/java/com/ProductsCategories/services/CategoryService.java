package com.ProductsCategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductsCategories.models.Category;
import com.ProductsCategories.models.Product;
import com.ProductsCategories.repository.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private ProductService productServ;

    public List<Category> AllCategories(){
        return categoryRepo.findAll();
    }

    public List<Category> otherProduct(Product product){
        return categoryRepo.findByProductsNotContains(product);
    }

    //Create Category
    public Category createCategory(Category category){
        return categoryRepo.save(category);
    }


    //add product to category
    public Category addProduct(Category category, Long ProductId) {
		Product product = productServ.findProduct(ProductId);
		category.getProducts().add(product);
		return categoryRepo.save(category);
	}


    //find Category 
    public Category findCategory(Long id){
        Optional<Category> category = categoryRepo.findById(id);
		if (category.isPresent()) {
			return category.get();
		} else {
			return null;
		}
    }

}
