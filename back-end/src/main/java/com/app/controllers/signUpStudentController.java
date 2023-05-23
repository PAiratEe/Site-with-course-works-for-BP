package com.app.controllers;

import com.app.controllers.requestBody.SignUpStudentRequest;
import com.app.db.entities.Student;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
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
    ProfessorRepository professorRepository;

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
    public ResponseEntity<?> checkUser(@RequestParam String email, @RequestParam String password) {

        if (professorRepository.existsProfessorByProfessorEmail(email)) {
            var professor = professorRepository.getProfessorByProfessorEmail(email);
            if (professor.getProfessorPassword().equals(password)) {
                return new ResponseEntity<>(professorRepository.getProfessorByProfessorEmail(email), HttpStatus.OK);
            }
        }
        if(studentRepository.existsStudentByStudentEmail(email)){
            var student = studentRepository.getStudentByStudentEmail(email);
            if(student.getPassword().equals(password)){
                return  new ResponseEntity<>(studentRepository.getStudentByStudentEmail(email),HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Введен неправильно email или пароль", HttpStatus.BAD_REQUEST);
    }


}
