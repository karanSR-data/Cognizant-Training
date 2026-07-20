package com.cognizant.springlearn.service;


import java.util.ArrayList;
import java.util.List;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;


import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;



@Service
public class CountryService {


    private List<Country> countries = new ArrayList<>();


    public CountryService(){

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");


        countries.add(
                context.getBean("countryIndia", Country.class)
        );


        countries.add(
                context.getBean("countryUS", Country.class)
        );


        countries.add(
                context.getBean("countryJapan", Country.class)
        );


        countries.add(
                context.getBean("countryGermany", Country.class)
        );

    }



    public Country getCountry(String code){


        for(Country country : countries){


            if(country.getCode()
                    .equalsIgnoreCase(code)){


                return country;

            }

        }


        throw new CountryNotFoundException();

    }



    public List<Country> getAllCountries(){

        return countries;

    }

}