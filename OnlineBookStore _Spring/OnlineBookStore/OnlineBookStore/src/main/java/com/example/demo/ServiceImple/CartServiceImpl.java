package com.example.demo.ServiceImple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.CartDao;
import com.example.demo.model.Cart;
import com.example.demo.service.CartService;
@Transactional
@Component
public class CartServiceImpl implements CartService{
	@Autowired
	private CartDao cartDao;
	
	public Cart addCart(Cart cart) {
		return cartDao.save(cart);
	}

}
