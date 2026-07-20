package com.cognizant.springlearn;


import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;



import com.cognizant.springlearn.controller.CountryController;



@SpringBootTest
@AutoConfigureMockMvc
public class SpringLearnApplicationTests {


    @Autowired
    private CountryController countryController;


    @Autowired
    private MockMvc mvc;



    @Test
    void contextLoads(){

        assertNotNull(countryController);

    }



    @Test
    void testGetCountry() throws Exception{


        mvc.perform(get("/country"))
        .andExpect(status().isOk());

    }


}