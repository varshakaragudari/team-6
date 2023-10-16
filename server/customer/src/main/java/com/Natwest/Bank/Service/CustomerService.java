package com.Natwest.Bank.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Natwest.Bank.Model.Customer;
import com.Natwest.Bank.Repository.CustomerRepo;


@Service
public class CustomerService {
	@Autowired
	CustomerRepo customerrepo;
	
	public Customer saveCustomer(Customer c) {
		return customerrepo.save(c);
//		return "Customer details saved";
	}
	
	public List<Customer> getAllCustomers() {
	    return customerrepo.findAll();
	}
	
	public Optional<Customer> getCustomerById(int customer_id) {
        return customerrepo.findById(customer_id);
    }
	
}
