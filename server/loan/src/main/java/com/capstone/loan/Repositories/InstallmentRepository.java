package com.capstone.loan.Repositories;

import com.capstone.loan.Model.Installment;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstallmentRepository extends MongoRepository<Installment, String> {
    List<Installment> findByCustomerId(Integer id);

}
