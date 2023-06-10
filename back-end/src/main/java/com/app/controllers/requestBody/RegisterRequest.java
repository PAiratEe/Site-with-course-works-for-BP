package com.app.controllers.requestBody;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;

    private String password;

    private String name;

    private String surname;

    private String patronymic;

    private String course;

    private String department;

    private boolean isProfessor;

    private String program;
}
