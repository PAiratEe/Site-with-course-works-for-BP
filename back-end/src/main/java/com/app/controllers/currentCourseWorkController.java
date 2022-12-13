package com.app.controllers;

import com.app.repositories.CourseWorkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class currentCourseWorkController {

    @Autowired
    CourseWorkRepository courseWorkRepository;


    @GetMapping("/getInfoAboutCourseWork")
    public ResponseEntity<?> getInfoAboutSelectedCourseWork(@RequestParam String id){
        var courseWork =courseWorkRepository.findByCourseWorkId(Integer.parseInt(id));
        if(courseWork == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(courseWork, HttpStatus.OK);
    }
}
