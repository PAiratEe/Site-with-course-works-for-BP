package com.app.repositories;

import com.app.db.entities.CourseWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseWorkRepository extends JpaRepository<CourseWork,Long> {
    CourseWork findByCourseWorkId(String id);
}
