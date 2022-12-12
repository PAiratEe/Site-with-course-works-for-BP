package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Professor",schema = "projectschema")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "professorid")
    private Long professorId;

    @Column(name = "professorname")
    private String ProfessorName;

    @Column(name = "professorsecondname")
    private String ProfessorSecondName;

    @Column(name = "professorpatronymic")
    private String ProfessorPatronymic;
    @Column(name = "professoremail")
    private String ProfessorEmail;

    @Column(name = "professorpost")
    private String ProfessorPost;

    @Column(name = "professorpassword")
    private String ProfessorPassword;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "departmentId")
    private Department department;


    public Long getId() {
        return this.professorId;
    }

    public String getProfessorName() {
        return this.ProfessorName;
    }

    public String getProfessorSecondName() {
        return this.ProfessorSecondName;
    }

    public String getProfessorPatronymic() {
        return this.ProfessorPatronymic;
    }

    public String getProfessorEmail() {
        return this.ProfessorEmail;
    }

    public String getProfessorPost() {
        return this.ProfessorPost;
    }

    public void setId(Long id) {
        this.professorId = id;
    }

    public void setProfessorName(String professorName) {
        this.ProfessorName = professorName;
    }

    public void setProfessorSecondName(String professorSecondName) {
        this.ProfessorSecondName = professorSecondName;
    }

    public void setProfessorPatronymic(String professorPatronymic) {
        this.ProfessorPatronymic = professorPatronymic;
    }

    public void setProfessorEmail(String professorEmail) {
        this.ProfessorEmail = professorEmail;
    }

    public void setProfessorPost(String professorPost) {
        this.ProfessorPost = professorPost;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public String getProfessorPassword() {
        return this.ProfessorPassword;
    }

    public void setProfessorPassword(String ProfessorPassword) {
        this.ProfessorPassword = ProfessorPassword;
    }
}
