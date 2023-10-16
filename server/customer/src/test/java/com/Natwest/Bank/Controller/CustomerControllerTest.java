package com.Natwest.Bank.Controller;
import com.Natwest.Bank.Controller.CustomerController;
import com.Natwest.Bank.Model.Customer;
import com.Natwest.Bank.Service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CustomerControllerTest {

    @InjectMocks
    private CustomerController customerController;

    @Mock
    private CustomerService customerService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSaveCustomer() {
        Customer customer = new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password");

        when(customerService.saveCustomer(customer)).thenReturn(customer);
        Customer result = customerController.saveCustomer(customer);

        assertEquals(customer, result);
//        verify(customerService, times(1)).saveCustomer(customer);
    }

    @Test
    void testGetAllCustomers() {
        List<Customer> customers = new ArrayList<>();
        customers.add(new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password"));

        when(customerService.getAllCustomers()).thenReturn(customers);

        List<Customer> result = customerController.getAllCustomers();

        assertEquals(customers, result);
        verify(customerService, times(1)).getAllCustomers();
    }

    @Test
    void testGetCustomerById() {
        int customerId = 1;
        Customer customer = new Customer("John Doe", "johndoe", 1234567890, 123456789012L, "2000-01-01",
                "123 Main St", "johndoe@example.com", "password");

        when(customerService.getCustomerById(customerId)).thenReturn(Optional.of(customer));

        ResponseEntity<Optional<Customer>> response = customerController.getCustomerById(customerId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(Optional.of(customer), response.getBody());
        verify(customerService, times(1)).getCustomerById(customerId);
    }

    // Add more test cases as needed
}

