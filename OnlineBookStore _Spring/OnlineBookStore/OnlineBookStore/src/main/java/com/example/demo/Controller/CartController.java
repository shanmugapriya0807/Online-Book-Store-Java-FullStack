package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {
	@Autowired
	private CartService cartService;
	
	@PostMapping("/addCart")
	Cart addCart(@RequestBody Cart cart) {
		return cartService.addCart(cart);
	}

}
