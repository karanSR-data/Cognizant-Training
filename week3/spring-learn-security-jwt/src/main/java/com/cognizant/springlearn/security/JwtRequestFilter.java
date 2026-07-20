package com.cognizant.springlearn.security;


import java.io.IOException;


import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Component
public class JwtRequestFilter 
extends OncePerRequestFilter {


    private JwtUtil jwtUtil;



    public JwtRequestFilter(JwtUtil jwtUtil){

        this.jwtUtil=jwtUtil;

    }



    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {


        String header =
                request.getHeader("Authorization");


        if(header != null && header.startsWith("Bearer ")){

            String token =
                    header.substring(7);


            jwtUtil.extractUsername(token);

        }


        chain.doFilter(request,response);

    }

}