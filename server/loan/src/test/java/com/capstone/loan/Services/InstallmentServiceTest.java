package com.capstone.loan.Services;

import com.capstone.loan.Model.Installment;
import com.capstone.loan.Repositories.InstallmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class InstallmentServiceTest {

    @Mock
    private InstallmentRepository installmentRepository;

    @InjectMocks
    private InstallmentService installmentService;

    private Installment installment1, installment2;
    private List<Installment> installmentList;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        // Create Installment objects using the different constructor
        Installment installment1 = new Installment(12, "loan1", 1000, 500);
        Installment installment2 = new Installment(23, "loan2", 1500, 1000);

        installmentList = new ArrayList<>();
        installmentList.add(installment1);
        installmentList.add(installment2);
    }

    @Test
    void givenInstallmentToCreateThenShouldReturnSuccessMessage() {
        when(installmentRepository.save(any())).thenReturn(installment1);

        String result = installmentService.createInstallment(installment1);

        assertEquals("Installment Added", result);
        verify(installmentRepository, times(1)).save(any());
    }

    @Test
    void givenGetAllInstallmentsThenShouldReturnListOfAllInstallments() {
        when(installmentRepository.findAll()).thenReturn(installmentList);

        List<Installment> result = installmentService.getAllInstallments();

        assertEquals(installmentList, result);
        verify(installmentRepository, times(1)).findAll();
    }

    // Add more test cases as needed
}