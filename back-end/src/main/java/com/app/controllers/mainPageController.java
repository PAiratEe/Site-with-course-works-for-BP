package com.app.controllers;


import com.app.repositories.CourseWorkRepository;
import java.util.stream.IntStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainPageController {
    @Autowired
    private CourseWorkRepository courseWorkRepository;

    @GetMapping("/main")
    private ResponseEntity<?> displayPage(@RequestParam @PathVariable int page) {
        var firstId = 0;
        var courseWorks = courseWorkRepository.findByCourseWorkIdIn(IntStream.range(firstId, firstId + 10000).boxed().toList());
        if(courseWorks == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(courseWorks, HttpStatus.OK);
    }
}
