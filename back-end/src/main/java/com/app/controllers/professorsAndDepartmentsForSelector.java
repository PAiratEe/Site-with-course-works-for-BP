package com.app.controllers;

import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class professorsAndDepartmentsForSelector {

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    ProfessorRepository professorRepository;

    @GetMapping("/getDepartments")
    public ResponseEntity<?> getDepartments(){
        return new ResponseEntity<>(departmentRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("getProfessors")
    public ResponseEntity<?> getProfessors(){
        return new ResponseEntity<>(professorRepository.findAll(),HttpStatus.OK);
    }




}
