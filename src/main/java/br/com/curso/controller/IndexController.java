package br.com.curso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	
    @GetMapping("/")
    public String index() {
        return "ajax";
    }
    
    @GetMapping("/reset-password")
    public String reset() {
    	return "reset";
    }
}