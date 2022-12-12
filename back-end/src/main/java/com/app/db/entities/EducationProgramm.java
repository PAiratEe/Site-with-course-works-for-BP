package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "EducationProgramm",schema = "projectschema")
public class EducationProgramm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "educationprogrammid")
    private Long EducationProgrammId;

    @Column(name = "educationprogrammname")
    private String EducationProgrammName;

    public Long getEducationProgrammId() {
        return this.EducationProgrammId;
    }

    public String getEducationProgrammName() {
        return this.EducationProgrammName;
    }

    public void setEducationProgrammId(Long educationProgrammId) {
        this.EducationProgrammId = educationProgrammId;
    }

    public void setEducationProgrammName(String educationProgrammName) {
        this.EducationProgrammName = educationProgrammName;
    }
}
