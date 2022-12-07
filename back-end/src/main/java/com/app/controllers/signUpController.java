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

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
        System.out.println(signUpRequest.getEmail());
        System.out.println(signUpRequest.getPassword());
        Student student = new Student();
        student.setName(signUpRequest.getName());
        student.setCourse(2);
        student.setEmail(signUpRequest.getEmail());
        student.setSurname("Airat");
        student.setPatronymic("Airat");
        student.setPassword(signUpRequest.getPassword());
        studentRepository.save(student);
        return ResponseEntity.ok("Пользователь был успешно зарегистрирован");
    }
}
