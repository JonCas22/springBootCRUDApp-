package com.websystique.springboot.service;

import java.util.List;

import com.websystique.springboot.model.Category;
import com.websystique.springboot.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service("categoryService")
@Transactional
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public Category findById(Long id) {
		return categoryRepository.findOne(id);
	}

	public Category findByName(String name) {
		return categoryRepository.findByName(name);
	}

	public void saveCategory(Category category) {
		categoryRepository.save(category);
	}

	public void updateCategory(Category category){
		saveCategory(category);
	}

	public void deleteCategoryById(Long id){
		categoryRepository.delete(id);
	}

	public void deleteAllCategory(){
		categoryRepository.deleteAll();
	}

	public List<Category> findAllCategories(){
		return categoryRepository.findAll();
	}

	public boolean isCategoryExist(Category category) {
		return findByName(category.getName()) != null;
	}

	@Override
	public void deleteAllCategories() {
				
	}

}
