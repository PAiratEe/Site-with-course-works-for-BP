package com.app.repositories;

import com.app.db.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
    Boolean existsStudentByEmail(String email);
}
