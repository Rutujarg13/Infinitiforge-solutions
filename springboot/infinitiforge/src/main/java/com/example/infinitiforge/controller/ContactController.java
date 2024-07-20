 package com.example.infinitiforge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.infinitiforge.model.Contact;
import com.example.infinitiforge.repo.ContactRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ContactController {
	
	@Autowired
	private ContactRepository contactRepository;

	// create employee rest api
		@PostMapping("/contact")
		public Contact createEmployee(@RequestBody Contact contact) {
			return contactRepository.save(contact);
		}
		
}
