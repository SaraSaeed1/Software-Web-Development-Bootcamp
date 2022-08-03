package com.ProductsCategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductsCategories.models.Category;
import com.ProductsCategories.models.Product;
import com.ProductsCategories.repository.ProductsRepository;

@Service
public class ProductService {
    @Autowired
    private ProductsRepository productsRepo;

    @Autowired
    private CategoryService categoryServ;

    public List<Product> AllProduct(){
        return productsRepo.findAll();
    }

    public List<Product> otherCategories(Category category){
        return productsRepo.findByCategoriesNotContains(category);
    }


    //Create Product
    public Product createProduct(Product product){
        return productsRepo.save(product);
    }


    //add category to product
    public Product addCategory(Product product, Long categoryId) {
		Category category = categoryServ.findCategory(categoryId);
		product.getCategories().add(category);
		return productsRepo.save(product);
	}


    //find product 
    public Product findProduct(Long id){
        Optional<Product> product = productsRepo.findById(id);
        if (product.isPresent()) {
            return product.get();
        } else {
            return null;
        }
    }
}
