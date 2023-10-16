package com.Natwest.Bank.Model;

import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Customer {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
    private String userName;
    private String customerName;
    private long phoneNumber;
    private long aadhar;
    private String dateOfBirth;
    private String address;
    private String email;
    private String password;
    private long accountNumber;
    private String ifsc;

    // Parameterized constructor

	public Customer(String userName, String customerName, long phoneNumber, long aadhar, String dateOfBirth,
			String address, String email, String password) {
		super();
		this.id = generateCustomerId();
		this.userName = userName;
		this.customerName = customerName;
		this.phoneNumber = phoneNumber;
		this.aadhar = aadhar;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.email = email;
		this.password = password;
		this.accountNumber = generateAccountNumber();
	    this.ifsc = generateIFSC();
	}

	// Non-parameterized constructor
    public Customer() {
        this.id = generateCustomerId();
        this.accountNumber = generateAccountNumber();
        this.ifsc = generateIFSC();
    }

    // Getters and setters for all properties
    


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

    // Generate a 4-digit customer ID
    private int generateCustomerId() {
        Random rand = new Random();
        return rand.nextInt(9000) + 1000; // Generates a random 4-digit number
    }
    
    
	// Generate a 12-digit account number
    private long generateAccountNumber() {
        Random rand = new Random();
        long accountNumber = rand.nextLong() % 1000000000000L;
        return Math.abs(accountNumber); // Ensure it's positive and 12 digits
    }

    // Generate a 7-digit IFSC starting with 'NAT'
    private String generateIFSC() {
        Random rand = new Random();
        int randomDigits = rand.nextInt(9000) + 1000; // Generates a random 4-digit number
        return "NAT" + randomDigits;
    }

	@Override
	public String toString() {
		return "Customer [id=" + id + ", userName=" + userName + ", customerName=" + customerName + ", phoneNumber="
				+ phoneNumber + ", aadhar=" + aadhar + ", dateOfBirth=" + dateOfBirth + ", address=" + address
				+ ", email=" + email + ", password=" + password + ", accountNumber=" + accountNumber + ", ifsc=" + ifsc
				+ "]";
	}
    
    
    
}
