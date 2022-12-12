package com.app.controllers;

import com.app.controllers.requestBody.SignUpRequest;
import com.app.db.entities.Student;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class signUpController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    DepartmentRepository departmentRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {


        Student student = new Student();
        student.setStudentName(signUpRequest.getName());
        student.setStudentCourseNumber(Integer.parseInt(signUpRequest.getCourse()));
        student.setStudentEmail(signUpRequest.getEmail());
        student.setStudentSurname(signUpRequest.getSurname());
        student.setStudentPatronymic(signUpRequest.getPatronymic());
        student.setPassword(signUpRequest.getPassword());
        studentRepository.save(student);
        return ResponseEntity.ok("Пользователь был успешно зарегистрирован");
    }
}
