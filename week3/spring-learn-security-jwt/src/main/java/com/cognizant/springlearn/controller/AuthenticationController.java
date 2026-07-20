package com.cognizant.springlearn.controller;


import java.util.Map;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.cognizant.springlearn.model.AuthenticationRequest;
import com.cognizant.springlearn.security.JwtUtil;



@RestController
public class AuthenticationController {


    private JwtUtil jwtUtil;



    public AuthenticationController(JwtUtil jwtUtil){

        this.jwtUtil=jwtUtil;

    }



    @PostMapping("/authenticate")
    public Map<String,String> authenticate(
            @RequestBody AuthenticationRequest request){


        String token =
                jwtUtil.generateToken(
                        request.getUsername()
                );


        return Map.of(
                "jwt-token",
                token
        );

    }

}