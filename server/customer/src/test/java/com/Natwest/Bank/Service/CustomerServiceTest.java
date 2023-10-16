package com.Natwest.Bank.Service;
import com.Natwest.Bank.Model.Customer;
import com.Natwest.Bank.Repository.CustomerRepo;
import com.Natwest.Bank.Service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CustomerServiceTest {

    @InjectMocks
    private CustomerService customerService;

    @Mock
    private CustomerRepo customerRepo;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSaveCustomer() {
        Customer customer = new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password");

        when(customerRepo.save(customer)).thenReturn(customer);

        Customer result = customerService.saveCustomer(customer);

        assertEquals(customer, result);
        verify(customerRepo, times(1)).save(customer);
    }

    @Test
    void testGetAllCustomers() {
        List<Customer> customers = new ArrayList<>();
        customers.add(new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password"));

        when(customerRepo.findAll()).thenReturn(customers);

        List<Customer> result = customerService.getAllCustomers();

        assertEquals(customers, result);
        verify(customerRepo, times(1)).findAll();
    }

    @Test
    void testGetCustomerById() {
        int customerId = 1;
        Customer customer = new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password");

        when(customerRepo.findById(customerId)).thenReturn(Optional.of(customer));

        Optional<Customer> result = customerService.getCustomerById(customerId);

        assertEquals(Optional.of(customer), result);
        verify(customerRepo, times(1)).findById(customerId);
    }

    // Add more test cases as needed
}

