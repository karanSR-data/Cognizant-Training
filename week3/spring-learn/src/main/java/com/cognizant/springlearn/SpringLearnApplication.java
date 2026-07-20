package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SpringLearnApplication {


    public static void main(String[] args) {


        SpringApplication.run(SpringLearnApplication.class, args);


        CountryService service = new CountryService();


        Country country = service.getCountry();


        System.out.println(country);

    }

}