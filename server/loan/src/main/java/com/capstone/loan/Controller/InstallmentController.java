package com.capstone.loan.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.loan.Model.Installment;
import com.capstone.loan.Services.InstallmentService;

@RestController
@RequestMapping("/installments")
public class InstallmentController {
	private final InstallmentService installmentService;

    @Autowired
    public InstallmentController(InstallmentService installmentService) {
        this.installmentService = installmentService;
    }
    
    @CrossOrigin
    @PostMapping("")
    public String postInstallment(@RequestBody Installment inst) {
        return installmentService.createInstallment(inst);
    }
    
    @CrossOrigin
    @GetMapping("")
    public List<Installment> getLoans(){
    	return installmentService.getAllInstallments();
    }
    
    @CrossOrigin
    @GetMapping("/byCustomerId/{customerId}")
    public List<Installment> findByCustomerId(@PathVariable Integer customerId) {
        return installmentService.findByCustomerId(customerId);
    }


}
