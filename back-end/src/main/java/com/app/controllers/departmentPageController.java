package com.app.controllers;

import com.app.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class departmentPageController {

    @Autowired
    DepartmentRepository departmentRepository;

    @GetMapping("/departments")
    public ResponseEntity<?> getDepartments(){
        var departments = departmentRepository.findAll();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

}
