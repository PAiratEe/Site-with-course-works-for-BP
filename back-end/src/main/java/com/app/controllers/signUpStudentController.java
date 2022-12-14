package com.app.controllers;

import com.app.controllers.requestBody.SignUpStudentRequest;
import com.app.db.entities.Student;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class signUpStudentController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    DepartmentRepository departmentRepository;
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignUpStudentRequest signUpStudentRequest) {

        if (studentRepository.existsStudentByStudentEmail(signUpStudentRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body("Этот логин уже занят");
        }

        Student student = new Student();
        student.setStudentName(signUpStudentRequest.getName());
        student.setStudentCourseNumber(Integer.parseInt(signUpStudentRequest.getCourse()));
        student.setStudentEmail(signUpStudentRequest.getEmail());
        student.setStudentSurname(signUpStudentRequest.getSurname());
        student.setStudentPatronymic(signUpStudentRequest.getPatronymic());
        student.setPassword(signUpStudentRequest.getPassword());
        studentRepository.save(student);
        return ResponseEntity.ok("Пользователь был успешно зарегистрирован");
    }

    @GetMapping("/login")
    public ResponseEntity<?> checkUser(@RequestParam String email,@RequestParam String password){

        if(studentRepository.existsStudentByStudentEmail(email)){
            var student = studentRepository.getStudentByStudentEmail(email);
            if(student.getPassword().equals(password)){
                return new ResponseEntity<>(student,HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Введен неправильно пароль или email",HttpStatus.BAD_REQUEST);
    }


}
