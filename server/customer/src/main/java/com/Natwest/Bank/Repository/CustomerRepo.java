package com.Natwest.Bank.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Natwest.Bank.Model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer>{
	Customer findByUserName(String userName);
}