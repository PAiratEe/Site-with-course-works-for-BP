package com.app.db.entities;

import javax.persistence.*;

@Entity
@Table(name = "Professor")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long professorId;

    private String name;
    private String surname;
    private String patronymic;
    private String email;
    private String post;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "professorId")
    private Department department;


    public Long getId() {
        return this.professorId;
    }

    public String getName() {
        return this.name;
    }

    public String getSurname() {
        return this.surname;
    }

    public String getPatronymic() {
        return this.patronymic;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPost() {
        return this.post;
    }

    public void setId(Long id) {
        this.professorId = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public Department getDepartment() {
        return this.department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
