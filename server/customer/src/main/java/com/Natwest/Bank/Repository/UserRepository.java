package com.Natwest.Bank.Repository;

import com.Natwest.Bank.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Customer,Integer> {
    Customer findByUserName(String username);
    
}
