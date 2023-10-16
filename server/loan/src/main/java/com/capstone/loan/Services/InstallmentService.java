package com.capstone.loan.Services;

import com.capstone.loan.Model.Installment;
import com.capstone.loan.Repositories.InstallmentRepository;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstallmentService {
    private final InstallmentRepository installmentRepository;

    @Autowired
    public InstallmentService(InstallmentRepository installmentRepository) {
        this.installmentRepository = installmentRepository;
    }
    public String createInstallment(Installment inst) {
    	installmentRepository.save(inst);
    	return "Installment Added";
    }
    
    public List<Installment> getAllInstallments(){
    	return installmentRepository.findAll();
    }
    
    public List<Installment> findByCustomerId(Integer id) {
        return installmentRepository.findByCustomerId(id);
    }
}
