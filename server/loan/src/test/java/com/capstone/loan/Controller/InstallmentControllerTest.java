package com.capstone.loan.Controller;

import com.capstone.loan.Model.Installment;
import com.capstone.loan.Services.InstallmentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

class InstallmentControllerTest {

    @Mock
    private InstallmentService installmentService;

    @InjectMocks
    private InstallmentController installmentController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(installmentController).build();
    }

    @Test
    void testPostInstallment() throws Exception {
        Installment installment = new Installment(123, "loan1", 1000, 500);
        when(installmentService.createInstallment(any())).thenReturn("Installment Added");

        mockMvc.perform(MockMvcRequestBuilders
                .post("/installments")
                .content("{\"customerId\":123,\"loanId\":\"loan1\",\"dueDate\":\"2023-10-10\",\"totalAmount\":1000,\"amountPaid\":500}")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Installment Added"));

        verify(installmentService, times(1)).createInstallment(any());
    }

    @Test
    void testGetLoans() throws Exception {
        Installment installment1 = new Installment(12, "loan1", 1000, 500);
        Installment installment2 = new Installment(23, "loan2", 1500, 1000);
        List<Installment> installmentList = new ArrayList<>();
        installmentList.add(installment1);
        installmentList.add(installment2);
        
        when(installmentService.getAllInstallments()).thenReturn(installmentList);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/installments")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].customerId").value(12))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].customerId").value(23));

        verify(installmentService, times(1)).getAllInstallments();
    }

//    @Test
//    void testFindByCustomerId() throws Exception {
//        Installment installment1 = new Installment(12, "loan1", 1000, 500);
//        Installment installment2 = new Installment(23, "loan2", 1500, 1000);
//        List<Installment> installmentList = new ArrayList<>();
//        installmentList.add(installment1);
//        installmentList.add(installment2);
//        
//        when(installmentService.findByCustomerId(1)).thenReturn(installmentList);
//
//        mockMvc.perform(MockMvcRequestBuilders
//                .get("/installments/findByCustomerId/1")
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("$[0].loanId").value(12))
//                .andExpect(MockMvcResultMatchers.jsonPath("$[1].loanId").value(23));
//
//        verify(installmentService, times(1)).findByCustomerId(1);
//    }
    
    
}