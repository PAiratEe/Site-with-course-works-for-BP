package com.app.controllers.requestBody;


import lombok.Data;
import lombok.ToString;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@ToString
public class SignUpRequest {
    @NotBlank
    @Size(max =24)
    private String email;

    @NotBlank
    @Size(min = 5)
    private String password;

    @NotBlank
    @Size(min =3, max = 24)
    private String name;

    @NotBlank
    @Size(min =3, max = 24)
    private String surname;

    @NotBlank
    @Size(min =3, max = 24)
    private String patronymic;

    @NotBlank
    @Size(min =3, max = 24)
    private String course;

    @NotBlank
    @Size(min = 2, max = 50)
    private String department;
}
