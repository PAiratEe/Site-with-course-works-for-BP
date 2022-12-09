package com.app.controllers;

import com.app.controllers.requestBody.SignUpRequest;
import com.app.db.entities.Student;
import com.app.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class signUpController {

    @Autowired(required = false)
    StudentRepository studentRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
        Student student = new Student();
        student.setName(signUpRequest.getName());
        student.setCourse(Integer.parseInt(signUpRequest.getCourse()));
        student.setEmail(signUpRequest.getEmail());
        student.setSurname(signUpRequest.getSurname());
        student.setPatronymic(signUpRequest.getPatronymic());
        student.setPassword(signUpRequest.getPassword());
        return ResponseEntity.ok("Пользователь был успешно зарегистрирован");
    }
}
