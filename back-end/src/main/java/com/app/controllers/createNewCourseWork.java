package com.app.controllers;

import com.app.controllers.requestBody.CreateCourseWorkRequest;
import com.app.db.entities.CourseWork;
import com.app.repositories.CourseWorkRepository;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class createNewCourseWork {

    @Autowired
    CourseWorkRepository courseWorkRepository;

    @Autowired
    ProfessorRepository professorRepository;

    @Autowired
    DepartmentRepository departmentRepository;

    @PostMapping("/createNewCourseWork")
    public ResponseEntity<?> createNewCourseWork(@RequestBody CreateCourseWorkRequest request) {

        if(courseWorkRepository.existsByTitle(request.getTitle())){
            return ResponseEntity.badRequest().body("Тема с таким названием уже существует");
        }
        CourseWork courseWork = new CourseWork();
        courseWork.setTitle(request.getTitle());
        courseWork.setShortDescription(request.getShortDescription());
        courseWork.setLongDescription(request.getLongDescription());
        courseWork.setRequirements(request.getRequirements());
        var NSP = request.getProfessor().split(" ");
        courseWork.setProfessor(professorRepository
                .findByProfessorNameAndProfessorSecondNameAndProfessorPatronymic(NSP[0],NSP[1],NSP[2]));
        courseWork.setDepartment(departmentRepository.findByDepartmentName(request.getDepartment()));

        courseWorkRepository.save(courseWork);
        return ResponseEntity.ok("Новая тема создана!");
    }


}
