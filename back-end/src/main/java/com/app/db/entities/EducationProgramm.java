package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "educationprogramm",schema = "projectschema")
public class EducationProgramm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "educationprogrammid")
    private Integer EducationProgrammId;

    @Column(name = "educationprogrammname")
    private String EducationProgrammName;

    public Integer getEducationProgrammId() {
        return this.EducationProgrammId;
    }

    public String getEducationProgrammName() {
        return this.EducationProgrammName;
    }

    public void setEducationProgrammId(Integer educationProgrammId) {
        this.EducationProgrammId = educationProgrammId;
    }

    public void setEducationProgrammName(String educationProgrammName) {
        this.EducationProgrammName = educationProgrammName;
    }
}
