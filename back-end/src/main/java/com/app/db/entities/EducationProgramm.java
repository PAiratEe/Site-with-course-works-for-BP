package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "educationprogramm",schema = "projectschema")
public class EducationProgramm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "educationprogrammid")
    private Integer educationProgrammId;

    @Column(name = "educationprogrammname")
    private String educationProgrammName;

    public Integer getEducationProgrammId() {
        return this.educationProgrammId;
    }

    public String getEducationProgrammName() {
        return this.educationProgrammName;
    }

    public void setEducationProgrammId(Integer educationProgrammId) {
        this.educationProgrammId = educationProgrammId;
    }

    public void setEducationProgrammName(String educationProgrammName) {
        this.educationProgrammName = educationProgrammName;
    }
}
