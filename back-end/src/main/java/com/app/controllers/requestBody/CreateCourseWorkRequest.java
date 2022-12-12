package com.app.controllers.requestBody;


import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Data
@ToString
public class CreateCourseWorkRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String shortDescription;

    @NotBlank
    private String longDescription;

    @NotBlank
    private String requirements;

    @NotBlank
    private String department;

    @NotBlank
    private String professor;

}
