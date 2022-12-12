package com.app.repositories;

import com.app.db.entities.CourseWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseWorkRepository extends JpaRepository<CourseWork,Integer> {
    CourseWork findByCourseWorkId(String id);

    Boolean existsByTitle(String title);
}
