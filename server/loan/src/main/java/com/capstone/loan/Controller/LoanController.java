package com.capstone.loan.Controller;

import com.capstone.loan.CustomException.NoLoansFoundException;
import com.capstone.loan.Model.Loan;
import com.capstone.loan.Services.LoanService;

import java.util.List;
import java.util.Optional;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan")
public class LoanController {
	
	
    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;

    }
    
    @CrossOrigin
    @PostMapping("")
    public String postLoan(@RequestBody Loan loan) {
    	
        return loanService.createLoan(loan);
    }
    
    @CrossOrigin
    @GetMapping("")
    public List<Loan> getLoans(){
    	return loanService.getAllLoans();
    }
    
    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Loan> getLoanById(@PathVariable String id){
    	return loanService.getLoan(id);
    }
    
//    @CrossOrigin
//    @GetMapping("user/{customerId}")
//    public List<Loan> getLoanByCustomerId(@PathVariable Integer customerId){
//    	return loanService.getLoanByCustomerId(customerId);
//    }
    
    @CrossOrigin
    @PutMapping(value = "/increament/{id}", produces = "application/json")    
    public Loan increaseInstallmentByOne(@PathVariable String id) {
    	return loanService.increamentInstallment(id);
    }
    
    @CrossOrigin
    @PutMapping(value = "/approvedStatus/{id}", produces = "application/json")    
    public Loan updateLoan(@PathVariable String id, @RequestBody Loan l) {
    	return loanService.updateApprovedStatus(id, l);
    }
    
    
    @CrossOrigin
    @GetMapping("/byCustomerId/{id}")
    public ResponseEntity<?> getLoansByCustomerId(@PathVariable Integer id) {
        try {
            List<Loan> loans = loanService.getLoansByCustomerId(id);
            return ResponseEntity.ok(loans);
        } catch (NoLoansFoundException ex) {
            return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).body(ex.getMessage());
            
        }
        }    

}