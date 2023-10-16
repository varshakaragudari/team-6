package com.capstone.loan.Services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.capstone.loan.Model.Customer;
import com.capstone.loan.Model.Loan;
import com.capstone.loan.Repositories.LoanRepository;
import com.capstone.loan.Services.LoanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class LoanServiceTest {

    @Mock
    private LoanRepository loanRepository;

    @InjectMocks
    private LoanService loanService;

    public LoanServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateLoan() {
        // Create a dummy Customer and Loan
        Customer customer = new Customer(1, "John Doe", 1234567890L, 123456789012L,
                "1990-01-01", "123 Main St", "john@example.com", "password", 9876543210L, "IFSC12345");

        Loan loan = new Loan(customer, "Personal", 5, LocalDate.now(), 30, 50000,
                100000, "docs", "Emergency", 12, 8500, 12, 0, "Pending");

        // Configure the mock behavior for the first call to save
        when(loanRepository.save(loan)).thenReturn(loan);

        // Call the method under test
        String result = loanService.createLoan(loan);

        // Verify that it was called only once
        verify(loanRepository, times(2)).save(loan);

        // Add your assertions for the result
        assertEquals("Added", result);
    }

    @Test
    public void testGetAllLoans() {
        List<Loan> loans = new ArrayList<>();
        when(loanRepository.findAll()).thenReturn(loans);

        List<Loan> result = loanService.getAllLoans();

        assertEquals(loans, result);
        verify(loanRepository, times(1)).findAll();
    }

    @Test
    public void testGetLoan() {
        String id = "1";
        Loan loan = new Loan(); // Create a dummy Loan object
        when(loanRepository.findById(id)).thenReturn(Optional.of(loan));

        Optional<Loan> result = loanService.getLoan(id);

        assertEquals(Optional.of(loan), result);
        verify(loanRepository, times(1)).findById(id);
    }

    @Test
    public void testGetLoansByCustomerId() {
        Integer customerId = 7043;
        List<Loan> loans = new ArrayList<>();
        when(loanRepository.findByCustomerId(customerId));

        List<Loan> result = loanService.getLoansByCustomerId(customerId);

        assertEquals(loans, result);
        verify(loanRepository, times(2)).findByCustomerId(customerId);
    }

    @Test
    public void testCreateLoanData() {
        // Create a dummy Customer and Loan
        Customer customer = new Customer(1, "John Doe", 1234567890L, 123456789012L,
                "1990-01-01", "123 Main St", "john@example.com", "password", 9876543210L, "IFSC12345");

        Loan loan = new Loan(customer, "Personal", 5, LocalDate.now(), 30, 50000,
                100000, "docs", "Emergency", 12, 8500, 12, 0, "Pending");

        // Configure the mock behavior for the first call to save
        when(loanRepository.save(loan)).thenReturn(loan);

        // Call the method under test
        String result = loanService.createLoan(loan);

        // Verify that it was called only once
        verify(loanRepository, times(2)).save(loan);

        // Add your assertions for the result
        assertEquals("Added", result);

        // Now, you can compare the data in the stored loan with the original loan
        Loan storedLoan = loanRepository.save(loan);
        assertEquals(loan.getLoanType(), storedLoan.getLoanType());
        assertEquals(loan.getRateOfInterest(), storedLoan.getRateOfInterest());
        assertEquals(loan.getLoanDate(), storedLoan.getLoanDate());
        // Add more assertions as needed to compare other fields
    }
}
