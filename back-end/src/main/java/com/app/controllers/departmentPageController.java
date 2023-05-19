package com.app.controllers;

import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class departmentPageController {

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    ProfessorRepository professorRepository;

    @GetMapping("/departments")
    public ResponseEntity<?> getDepartments(){
        var departments = departmentRepository.findAll();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    @GetMapping("/getAllFromDepartment")
    public ResponseEntity<?> getAllFromDepartment(@RequestParam @PathVariable String id){
        var proffessors = professorRepository.getProfessorsByDepartmentId(Integer.parseInt(id));
        return  new ResponseEntity<>(proffessors,HttpStatus.OK);

    }


}
