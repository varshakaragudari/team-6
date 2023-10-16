package com.capstone.loan.Controller;

import com.capstone.loan.Controller.LoanController;
import com.capstone.loan.Model.Customer;
import com.capstone.loan.Model.Loan;
import com.capstone.loan.Services.LoanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


public class LoanControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private LoanController loanController;

    @Mock
    private LoanService loanService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(loanController).build();
    }

    @Test
    public void testGetLoans() throws Exception {
        // Create a list of sample loans
        List<Loan> loanList = new ArrayList<>();
        Customer customer1 = new Customer(1, "John Doe", 1234567890L, 123456789012L,
                "1990-01-01", "123 Main St", "john@example.com", "password", 9876543210L, "IFSC12345");

        Customer customer2 = new Customer(2, "Alex", 1234567890L, 123456789012L,
                "1990-01-01", "123 Main St", "john@example.com", "password", 9876543210L, "IFSC12345");

        loanList.add(new Loan(customer1, "Personal", 5, LocalDate.now(), 30, 50000, 100000, "docs", "Emergency", 12, 8500, 12, 0, "Pending"));
        loanList.add(new Loan(customer2, "Mortgage", 4, LocalDate.now(), 15, 100000, 200000, "documents", "Home Loan", 12, 12000, 10, 0, "Approved"));

        // Mock the loanService to return the sample loan list
        when(loanService.getAllLoans()).thenReturn(loanList);

        // Perform the GET request to "/loan"
        mockMvc.perform(get("/loan"))
                .andExpect(status().isOk()) // Expect HTTP 200 status
                .andExpect(jsonPath("$").isArray()) // Expect a JSON array
                .andExpect(jsonPath("$.length()").value(2)) // Expect the array to have 2 elements
                .andExpect(jsonPath("$[0].loanType").value("Personal")) // Expect the first element's loanType
                .andExpect(jsonPath("$[1].loanType").value("Mortgage")); // Expect the second element's loanType

        // Verify that loanService.getAllLoans() was called once
        verify(loanService, times(1)).getAllLoans();
    }

    @Test
    public void testGetLoansNoData() throws Exception {
        // Mock the loanService to return an empty list
        when(loanService.getAllLoans()).thenReturn(new ArrayList<>());

        // Perform the GET request to "/loan"
        mockMvc.perform(get("/loan"))
                .andExpect(status().isOk()) // Expect HTTP 200 status
                .andExpect(jsonPath("$").isArray()) // Expect a JSON array
                .andExpect(jsonPath("$.length()").value(0)); // Expect the array to have 0 elements

        // Verify that loanService.getAllLoans() was called once
        verify(loanService, times(1)).getAllLoans();
    }

    @Test
    public void testGetLoanById() throws Exception {
        // Create a sample loan with an ID
        Loan sampleLoan = new Loan();
        sampleLoan.setId("1"); // Set the ID
        sampleLoan.setLoanType("Personal"); // Set other required fields

        // Mock the loanService to return the sample loan when given an ID
        when(loanService.getLoan("1")).thenReturn(Optional.of(sampleLoan));

        // Perform the GET request to "/loan/1"
        mockMvc.perform(MockMvcRequestBuilders.get("/loan/1"))
                .andExpect(status().isOk()) // Expect HTTP 200 status
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.loanType").value("Personal")) // Expect the loanType of the returned loan
                .andExpect(jsonPath("$.id").value("1")); // Expect the ID of the returned loan

        // Verify that loanService.getLoan("1") was called once
        verify(loanService, times(1)).getLoan("1");
    }


}
