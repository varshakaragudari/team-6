package com.capstone.loan.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;


@Document(collection = "Installment" )
public class Installment {
	
    @Id
    private String id;
    private int customerId;
    private String loanId;
    private LocalDate installmentDate;
    private int amountToBePaid;
    private int amountLeft;
    
    

	public Installment(int customerId, String loanId, int amountToBePaid,
			int amountLeft) {
		super();

		this.customerId = customerId;
		this.loanId = loanId;
		this.installmentDate = LocalDate.now();;
		this.amountToBePaid = amountToBePaid;
		this.amountLeft = amountLeft;
	}

	
    
	public Installment() {
	}



	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public int getCustomerId() {
		return customerId;
	}


	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}


	public String getLoanId() {
		return loanId;
	}


	public void setLoanId(String loanId) {
		this.loanId = loanId;
	}


	public LocalDate getInstallmentDate() {
		return installmentDate;
	}


	public void setInstallmentDate(LocalDate installmentDate) {
		this.installmentDate = installmentDate;
	}


	public int getAmountToBePaid() {
		return amountToBePaid;
	}


	public void setAmountToBePaid(int amountToBePaid) {
		this.amountToBePaid = amountToBePaid;
	}


	public int getAmountLeft() {
		return amountLeft;
	}


	public void setAmountLeft(int amountLeft) {
		this.amountLeft = amountLeft;
	}
	
	

	

}
