package com.capstone.loan.Repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.capstone.loan.Model.Loan;

@Repository
public interface LoanRepository extends MongoRepository<Loan, String> {
	@Query("{'customer.id': ?0}")
	List<Loan> findByCustomerId(Integer customerId);
}