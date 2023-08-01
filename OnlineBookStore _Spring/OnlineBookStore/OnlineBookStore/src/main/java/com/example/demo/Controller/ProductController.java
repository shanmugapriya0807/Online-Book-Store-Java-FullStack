package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductService productService;
		
//	@Autowired
//	private ProductDao repoaddbook;
//	@PostMapping("/addbook")
//	public ResponseEntity<AddBook> registerAddbook(@RequestBody AddBook addbook){
//		System.out.println("Controller is called");
//		return ResponseEntity.ok(repoaddbook.save(addbook));
//		
//	}
	@PostMapping("/addProduct")
	Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}
}
