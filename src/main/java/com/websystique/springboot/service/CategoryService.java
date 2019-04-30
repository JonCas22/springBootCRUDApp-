package com.websystique.springboot.service;


import com.websystique.springboot.model.Category;

import java.util.List;

public interface CategoryService {
	
	Category findById(Long id);

	Category findByName(String name);

	void saveCategory(Category category);

	void updateCategory(Category category);

	void deleteCategoryById(Long id);

	void deleteAllCategories();

	List<Category> findAllCategories();

	boolean isCategoryExist(Category category);
}