package com.app.repositories;

import com.app.db.entities.CourseWork;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseWorkRepository extends JpaRepository<CourseWork,Integer> {
    CourseWork findByCourseWorkId(String id);

    Boolean existsByTitle(String title);

    List<CourseWork> findByIdIn(Collection<Integer> ids);
}
