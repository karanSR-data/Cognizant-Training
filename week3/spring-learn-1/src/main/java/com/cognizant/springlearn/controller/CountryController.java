package com.cognizant.springlearn.controller;


import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;



@RestController
public class CountryController {


    private CountryService countryService;


    public CountryController(CountryService countryService){

        this.countryService = countryService;

    }



    @GetMapping("/country")
    public Country getCountryIndia(){

        return countryService.getCountry("IN");

    }



    @GetMapping("/countries")
    public List<Country> getAllCountries(){

        return countryService.getAllCountries();

    }



    @GetMapping("/countries/{code}")
    public Country getCountry(
            @PathVariable String code){

        return countryService.getCountry(code);

    }

}