package com.app.controllers;

import com.app.auth.AuthenticationService;
import com.app.controllers.requestBody.AuthenticationRequest;
import com.app.controllers.requestBody.RegisterRequest;
import com.app.controllers.responseBody.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
        @RequestBody RegisterRequest request
    ) throws Exception {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
        @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.login(request));
    }

//    @Autowired
//    StudentRepository studentRepository;
//
//    @Autowired
//    ProfessorRepository professorRepository;
//
//    @Autowired
//    DepartmentRepository departmentRepository;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody SignUpStudentRequest signUpStudentRequest) {
//
//        if (studentRepository.existsStudentByStudentEmail(signUpStudentRequest.getEmail())) {
//            return ResponseEntity
//                    .badRequest()
//                    .body("Этот логин уже занят");
//        }
//
//        Student student = new Student();
//        student.setStudentName(signUpStudentRequest.getName());
//        student.setStudentCourseNumber(Integer.parseInt(signUpStudentRequest.getCourse()));
//        student.setStudentEmail(signUpStudentRequest.getEmail());
//        student.setStudentSurname(signUpStudentRequest.getSurname());
//        student.setStudentPatronymic(signUpStudentRequest.getPatronymic());
//        student.setPassword(signUpStudentRequest.getPassword());
//        studentRepository.save(student);
//        return ResponseEntity.ok("Пользователь был успешно зарегистрирован");
//    }
//
//    @GetMapping("/login")
//    public ResponseEntity<?> checkUser(@RequestParam String email, @RequestParam String password) {
//
//        if (professorRepository.existsProfessorByProfessorEmail(email)) {
//            var professor = professorRepository.getProfessorByProfessorEmail(email);
//            if (professor.getProfessorPassword().equals(password)) {
//                return new ResponseEntity<>(professorRepository.getProfessorByProfessorEmail(email), HttpStatus.OK);
//            }
//        }
//        if(studentRepository.existsStudentByStudentEmail(email)){
//            var student = studentRepository.getStudentByStudentEmail(email);
//            if(student.getPassword().equals(password)){
//                return  new ResponseEntity<>(studentRepository.getStudentByStudentEmail(email),HttpStatus.OK);
//            }
//        }
////        return new ResponseEntity<>("Введен неправильно email или пароль", HttpStatus.BAD_REQUEST);
//    }


}
