package com.websystique.springboot.service;

import com.websystique.springboot.model.Company;

import java.util.List;

public interface CompanyService {
	
	Company findById(Long id);

	Company findByName(String name);

	void saveCompany(Company company);

	void updateCompany(Company company);

	void deleteCompanyById(Long id);

	void deleteAllCompanies();

	List<Company> findAllCompanies();

	boolean isCompanyExist(Company company);
	
	
}