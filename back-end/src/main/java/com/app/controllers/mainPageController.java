package com.app.controllers;


import com.app.db.entities.CourseWork;
import com.app.repositories.CourseWorkRepository;
import java.util.List;
import java.util.stream.IntStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainPageController {
    @Autowired
    private CourseWorkRepository courseWorkRepository;

    @GetMapping("/back/main")
    private ResponseEntity<?> displayPage(@RequestParam @PathVariable int page) {
        var firstId = 0;
        List<CourseWork> courseWorks = null;
        boolean gotIt = false;
        while (!gotIt) {
            try {
                courseWorks = courseWorkRepository.findByCourseWorkIdIn(
                    IntStream.range(firstId, firstId + 10000).boxed().toList());
                gotIt = true;
            } catch (JpaSystemException exception) {
                gotIt = false;
            }
        }
        if(courseWorks == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(courseWorks, HttpStatus.OK);
    }
}
