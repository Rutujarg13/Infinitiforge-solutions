package com.example.infinitiforge.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.infinitiforge.model.Contact;



@Repository
	public interface ContactRepository extends JpaRepository<Contact, Long>{

}
