package com.app.controllers;

import com.app.repositories.ProfessorRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class professorPageController {

    @Autowired
    ProfessorRepository professorRepository;

    @GetMapping("/getProfessorsList")
    ResponseEntity<?> getProfessorsList(){
        var professors = professorRepository.findAll();
        if(professors == null){
            return ResponseEntity.badRequest().body("Ошибка!");
        }
        return new ResponseEntity<>(professors, HttpStatus.OK);

    }



}
