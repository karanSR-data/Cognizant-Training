package com.cognizant.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryService {


    public Country getCountry() {


        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");


        Country country =
                context.getBean("country", Country.class);


        return country;

    }

}