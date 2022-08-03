package com.ProductsCategories.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ProductsCategories.models.Category;
import com.ProductsCategories.models.Product;

@Repository
public interface ProductsRepository extends CrudRepository<Product, Long> {
    List<Product> findAll();
    List<Product> findByCategoriesNotContains(Category category);
}
