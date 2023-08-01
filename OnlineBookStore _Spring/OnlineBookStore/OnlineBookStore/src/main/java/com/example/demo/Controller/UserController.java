package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserRepository;

import com.example.demo.model.User;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserRepository repo;
	
	@PostMapping("/user")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		System.out.println("Controller is called");
		return ResponseEntity.ok(repo.save(user));
		
	}
	
	@GetMapping("/user")
	public ResponseEntity<User> getUserByEmail(@RequestParam String email) {
	    Optional<User> userOptional = repo.findByEmail(email);
	    
	    if (userOptional.isPresent()) {
	        return ResponseEntity.ok(userOptional.get());
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	

}
