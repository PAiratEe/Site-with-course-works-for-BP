package com.app.controllers;

import com.app.controllers.requestBody.CreateCourseWorkRequest;
import com.app.db.entities.CourseWork;
import com.app.repositories.CourseWorkRepository;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class courseWorkController {
    @Autowired
    CourseWorkRepository courseWorkRepository;

    @Autowired
    ProfessorRepository professorRepository;

    @Autowired
    DepartmentRepository departmentRepository;

    @PostMapping("/createNewCourseWork")
    public ResponseEntity<?> createNewCourseWork(@RequestBody CreateCourseWorkRequest request) {
        //if(courseWorkRepository.existsCourseWorkByTitle(request.getTitle())){
         //   return ResponseEntity.badRequest().body("Тема с таким названием уже существует");
        //}
        CourseWork courseWork = new CourseWork();
        courseWork.setTitle(request.getTitle());
        courseWork.setShortDescription(request.getShortDescription());
        courseWork.setDescription(request.getLongDescription());
        courseWork.setRequirements(request.getRequirements());
        System.out.println(courseWork.getTitle());
        var rep = professorRepository.getProfessorByProfessorId(Integer.parseInt(request.getProfessorid()));
        System.out.println(rep.getId());
        courseWork.setProfessor(rep);
        courseWork.setDepartment(departmentRepository.findByDepartmentName(request.getDepartment()));

        courseWorkRepository.save(courseWork);
        return ResponseEntity.ok("Новая тема создана!");
    }

    @GetMapping("/getAllCourseWorksByUserId")
    public ResponseEntity<?> getAllCourseWorksByUserId(@RequestParam String id){
        if(!courseWorkRepository.existsByProfessorId(Integer.parseInt(id))){
            return ResponseEntity.ok("У вас еще нет работ!");
        }
        return new ResponseEntity<>(courseWorkRepository.findCourseWorksByProfessorId(Integer.parseInt(id)),
                HttpStatus.OK);
    }
}
