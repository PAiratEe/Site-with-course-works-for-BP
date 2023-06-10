package com.app.controllers.responseBody;

import com.app.db.entities.Professor;
import com.app.db.entities.Student;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String jwt;
    private Student student;
    private Professor professor;
    private boolean isProfessor;
}
