package com.example.demo.ServiceImple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.ProductDao;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

@Transactional
@Component
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductDao productDao;
	@Override
	public Product addProduct(Product product) {
		return productDao.save(product);
	}

}
