package com.app.repositories;

import com.app.db.entities.CourseWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface CourseWorkRepository extends JpaRepository<CourseWork,Integer> {
    CourseWork findByCourseWorkId(Integer id);

    Boolean existsCourseWorkByTitle(String title);

    List<CourseWork> findByCourseWorkIdIn(Collection<Integer> ids);

    Boolean existsByProfessorId(Integer id);

    List<CourseWork> findCourseWorksByProfessorId(Integer id);
}