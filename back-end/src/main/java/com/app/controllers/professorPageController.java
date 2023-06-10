package com.app.controllers;

import com.app.repositories.ProfessorRepository;
import com.app.repositories.StudentRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class professorPageController {

    @Autowired
    ProfessorRepository professorRepository;

    @Autowired
    StudentRepository studentRepository;

    @GetMapping("/back/getProfessorsList")
    ResponseEntity<?> getProfessorsList(){
        var professors = professorRepository.findAll();
        if(professors == null){
            return ResponseEntity.badRequest().body("Ошибка!");
        }
        return new ResponseEntity<>(professors, HttpStatus.OK);

    }

    @GetMapping("/back/infoAboutProf")
    ResponseEntity<?> getInfoAboutProf(@RequestParam String id){
        var professorInfo = professorRepository.getProfessorByProfessorId(Integer.parseInt(id));
        return new ResponseEntity<>(professorInfo,HttpStatus.OK);
    }

    @GetMapping("/back/infoAboutStud")
    ResponseEntity<?> getInfoAboutStud(@RequestParam String id){
        var studentInfo = studentRepository.getStudentById(Integer.parseInt(id));
        return new ResponseEntity<>(studentInfo,HttpStatus.OK);
    }

}
