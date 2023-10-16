package com.Natwest.Bank.Controller;

import java.util.List;
import java.util.Optional;

import com.Natwest.Bank.Model.AuthRequest;
import com.Natwest.Bank.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import com.Natwest.Bank.Model.Customer;
import com.Natwest.Bank.Service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	CustomerService customerservice;
	@PostMapping("/customers")
	public Customer saveCustomer(@RequestBody Customer c)
	{
		return customerservice.saveCustomer(c);
	}

	@Autowired
	AuthRequest authRequest;

	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
//		System.out.println("hello");
	    return customerservice.getAllCustomers();
	}
	
	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome to jwt !!";
	}

	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			System.out.println(authRequest.getUserName()+" ----- "+authRequest.getPassword());
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
			);
		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		System.out.println(jwtUtil.generateToken(authRequest.getUserName()));
		return jwtUtil.generateToken(authRequest.getUserName());
	}
	
	
	@GetMapping("/customers/{id}")
	public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable int id) {
	    Optional<Customer> customer = customerservice.getCustomerById(id);
	    if (customer != null) {
	        return ResponseEntity.ok(customer);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
//	@DeleteMapping("/customers/{id}")
//    public ResponseEntity<String> deleteBook(@PathVariable int id) {
//        customerservice.deletecustomer(id);
//        return ResponseEntity.ok("Book deleted");
//    }
}
