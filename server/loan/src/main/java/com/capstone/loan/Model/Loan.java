package com.capstone.loan.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "Loan")
public class Loan {
	
    @Id
    private String id;
    
    private Customer customer;
    private String loanType;
    private float rateOfInterest;
    private LocalDate loanDate;
    private int age;
    private int income;
    private int loanAmount;
    private String docs;
    private String reasonForLoan;
    private int tenure;
    private float installmentAmount;
    private int totalNumberOfInstallments;
    private int totalNumberOfInstallmentsDone;
    private String approvedStatus;





	public Loan(Customer customer, String loanType, float rateOfInterest, LocalDate loanDate, int age, int income,
			int loanAmount, String docs, String reasonForLoan, int tenure, float installmentAmount,
			int totalNumberOfInstallments, int totalNumberOfInstallmentsDone, String approvedStatus) {
		super();
		this.customer = customer;
		this.loanType = loanType;
		this.rateOfInterest = rateOfInterest;
		this.loanDate = loanDate;
		this.age = age;
		this.income = income;
		this.loanAmount = loanAmount;
		this.docs = docs;
		this.reasonForLoan = reasonForLoan;
		this.tenure = tenure;
		this.installmentAmount = installmentAmount;
		this.totalNumberOfInstallments = totalNumberOfInstallments;
		this.totalNumberOfInstallmentsDone = totalNumberOfInstallmentsDone;
		this.approvedStatus = approvedStatus;
	}

	
	

	public Loan() {
		super();
	}




	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public Customer getCustomer() {
		return customer;
	}


	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	public String getLoanType() {
		return loanType;
	}


	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}


	public float getRateOfInterest() {
		return rateOfInterest;
	}


	public void setRateOfInterest(float rateOfInterest) {
		this.rateOfInterest = rateOfInterest;
	}


	public LocalDate getLoanDate() {
		return loanDate;
	}


	public void setLoanDate(LocalDate loanDate) {
		this.loanDate = loanDate;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public int getIncome() {
		return income;
	}


	public void setIncome(int income) {
		this.income = income;
	}


	public int getLoanAmount() {
		return loanAmount;
	}


	public void setLoanAmount(int loanAmount) {
		this.loanAmount = loanAmount;
	}


	public String getDocs() {
		return docs;
	}


	public void setDocs(String docs) {
		this.docs = docs;
	}


	public String getReasonForLoan() {
		return reasonForLoan;
	}


	public void setReasonForLoan(String reasonForLoan) {
		this.reasonForLoan = reasonForLoan;
	}


	public int getTenure() {
		return tenure;
	}


	public void setTenure(int tenure) {
		this.tenure = tenure;
	}


	public float getInstallmentAmount() {
		return installmentAmount;
	}


	public void setInstallmentAmount(float installmentAmount) {
		this.installmentAmount = installmentAmount;
	}


	public int getTotalNumberOfInstallments() {
		return totalNumberOfInstallments;
	}


	public void setTotalNumberOfInstallments(int totalNumberOfInstallments) {
		this.totalNumberOfInstallments = totalNumberOfInstallments;
	}


	public int getTotalNumberOfInstallmentsDone() {
		return totalNumberOfInstallmentsDone;
	}


	public void setTotalNumberOfInstallmentsDone(int totalNumberOfInstallmentsDone) {
		this.totalNumberOfInstallmentsDone = totalNumberOfInstallmentsDone;
	}


	public String getApprovedStatus() {
		return approvedStatus;
	}


	public void setApprovedStatus(String approvedStatus) {
		this.approvedStatus = approvedStatus;
	}


	@Override
	public String toString() {
		return "Loan [id=" + id + ", customer=" + customer + ", loanType=" + loanType + ", rateOfInterest="
				+ rateOfInterest + ", loanDate=" + loanDate + ", age=" + age + ", income=" + income + ", loanAmount="
				+ loanAmount + ", docs=" + docs + ", reasonForLoan=" + reasonForLoan + ", tenure=" + tenure
				+ ", installmentAmount=" + installmentAmount + ", totalNumberOfInstallments="
				+ totalNumberOfInstallments + ", totalNumberOfInstallmentsDone=" + totalNumberOfInstallmentsDone
				+ ", approvedStatus=" + approvedStatus + "]";
	}



}