package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "professor",schema = "projectschema")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "professorid")
    private Integer professorId;

    @Column(name = "professorname")
    private String professorName;

    @Column(name = "professorsecondname")
    private String professorSecondName;

    @Column(name = "professorpatronymic")
    private String professorPatronymic;
    @Column(name = "professoremail")
    private String professorEmail;

    @Column(name = "professorpost")
    private String professorPost;

    @Column(name = "professorpassword")
    private String professorPassword;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentid", referencedColumnName = "departmentid")
    private Department department;


    public Integer getId() {
        return this.professorId;
    }

    public String getProfessorName() {
        return this.professorName;
    }

    public String getProfessorSecondName() {
        return this.professorSecondName;
    }

    public String getProfessorPatronymic() {
        return this.professorPatronymic;
    }

    public String getProfessorEmail() {
        return this.professorEmail;
    }

    public String getProfessorPost() {
        return this.professorPost;
    }

    public void setId(Integer id) {
        this.professorId = id;
    }

    public void setProfessorName(String professorName) {
        this.professorName = professorName;
    }

    public void setProfessorSecondName(String professorSecondName) {
        this.professorSecondName = professorSecondName;
    }

    public void setProfessorPatronymic(String professorPatronymic) {
        this.professorPatronymic = professorPatronymic;
    }

    public void setProfessorEmail(String professorEmail) {
        this.professorEmail = professorEmail;
    }

    public void setProfessorPost(String professorPost) {
        this.professorPost = professorPost;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public String getProfessorPassword() {
        return this.professorPassword;
    }

    public void setProfessorPassword(String ProfessorPassword) {
        this.professorPassword = ProfessorPassword;
    }
}
