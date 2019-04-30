package com.websystique.springboot.service;

import java.util.List;

import com.websystique.springboot.model.Company;
import com.websystique.springboot.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service("companyService")
@Transactional
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	private CompanyRepository companyRepository;

	public Company findById(Long id) {
		return companyRepository.findOne(id);
	}

	public Company findByName(String name) {
		return companyRepository.findByName(name);
	}

	public void saveCompany(Company company) {
		companyRepository.save(company);
	}

	public void updateCompany(Company company){
		saveCompany(company);
	}

	public void deleteCompanyById(Long id){
		companyRepository.delete(id);
	}

	public void deleteAllCompanies(){
		companyRepository.deleteAll();
	}

	public List<Company> findAllCompanies(){
		return companyRepository.findAll();
	}

	public boolean isCompanyExist(Company company) {
		return findByName(company.getName()) != null;
	}


}
