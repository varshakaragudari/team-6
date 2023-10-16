package com.capstone.loan.Repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.capstone.loan.Model.Installment;
import com.capstone.loan.Repositories.InstallmentRepository;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
@SpringBootTest
public class InstallmentRepositoryTest {

    @Mock
    private InstallmentRepository installmentRepository;

    @BeforeEach
    public void setUp() {
        // Define the behavior of the mock repository here
        List<Installment> mockInstallments = new ArrayList<>();
        // Add some mock Installment objects to the list

        // Define the behavior of the mock repository method
        when(installmentRepository.findByCustomerId(1)).thenReturn(mockInstallments);
    }

    @Test
    public void testFindByCustomerId() {
        // Perform the test
        List<Installment> installments = installmentRepository.findByCustomerId(1);

        // Assertions
        assertThat(installments).isNotNull();
        // Add more assertions based on your test data and expectations
    }

    @Test
    public void testFindByCustomerIdWithNoResults() {
        // Define behavior for a scenario where no results are expected
        when(installmentRepository.findByCustomerId(1)).thenReturn(new ArrayList<>());

        // Perform the test
        List<Installment> installments = installmentRepository.findByCustomerId(1);

        // Assertions
        assertThat(installments).isEmpty(); // Expecting an empty list
    }

    // Add more test cases as needed
}