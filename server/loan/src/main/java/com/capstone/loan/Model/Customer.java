package com.capstone.loan.Model;
import java.util.Random;

import org.springframework.data.annotation.Id;



public class Customer {
	@Id
    private int id;
	
    private String customerName;
    private long phoneNumber;
    private long aadhar;
    private String dateOfBirth;
    private String address;
    private String email;
    private String password;
    private long accountNumber;
    private String ifsc;
    
    
    public Customer(int id, String customerName, long phoneNumber, long aadhar, String dateOfBirth, String address,
			String email, String password, long accountNumber, String ifsc) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.phoneNumber = phoneNumber;
		this.aadhar = aadhar;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.email = email;
		this.password = password;
		this.accountNumber = accountNumber;
		this.ifsc = ifsc;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public long getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public long getAadhar() {
		return aadhar;
	}


	public void setAadhar(long aadhar) {
		this.aadhar = aadhar;
	}


	public String getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public long getAccountNumber() {
		return accountNumber;
	}


	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}


	public String getIfsc() {
		return ifsc;
	}


	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}

    
    


}
