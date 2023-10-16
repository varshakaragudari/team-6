package com.capstone.loan.Services;

import java.util.List;
import java.util.Optional;

import com.capstone.loan.CustomException.NoLoansFoundException;
import com.capstone.loan.Model.Loan;
import com.capstone.loan.Repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanService {

    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }
    
    public String createLoan(Loan loan) {
        loanRepository.save(loan);
        System.out.println(loanRepository.save(loan));
        return "Added";
    }
    
    public List<Loan> getAllLoans(){
    	return loanRepository.findAll();
    }
    
    public Optional<Loan> getLoan(String id){
    	return loanRepository.findById(id);
    }
    
    public List<Loan> getLoansByCustomerId(Integer id){
    	List<Loan> loans = loanRepository.findByCustomerId(id);

        if (loans.isEmpty()) {
            throw new NoLoansFoundException("No loans found for the customer with ID: " + id);
        }
        return loans;

    }
    
    public Loan updateApprovedStatus(String id, Loan l) {
    	Loan existing=loanRepository.findById(id).orElseThrow(() -> new RuntimeException("loan not found"));
    	existing.setApprovedStatus(l.getApprovedStatus());
    	return loanRepository.save(existing);
    }
    
      
    public Loan increamentInstallment(String id) {
    	Loan existing=loanRepository.findById(id).orElseThrow(() -> new RuntimeException("loan not found"));
    	existing.setTotalNumberOfInstallmentsDone(existing.getTotalNumberOfInstallmentsDone()+1);
    	return loanRepository.save(existing);
    }
}
