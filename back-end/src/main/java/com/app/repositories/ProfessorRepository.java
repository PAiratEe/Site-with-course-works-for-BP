package com.app.repositories;

import com.app.db.entities.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor,Integer> {
    Professor findByProfessorNameAndProfessorSecondNameAndProfessorPatronymic(String Name,
                                                                              String SecondName,
                                                                              String Patronymic);

    Boolean existsProfessorByProfessorNameAndProfessorSecondNameAndProfessorPatronymic(String Name,
                                                                            String SecondName,
                                                                            String Patronymic);

    Boolean existsProfessorByProfessorEmail(String email);

    Professor getProfessorByProfessorEmail(String email);
}
