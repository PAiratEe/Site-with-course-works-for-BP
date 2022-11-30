package com.app.db.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "Student")
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentId;

    private String name;
    private String surname;
    private String patronymic;
    private String email;
    private Integer course;

    @Getter
    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId", referencedColumnName = "studentId")
    private Department department;

    @Getter
    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "courseWorkId", referencedColumnName = "studentId")
    private CourseWork courseWork;


    @Getter
    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "studentId")
    private EducationalProgramm educationalProgramm;


    public Long getId() {
        return this.studentId;
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

    public Integer getCourse() {
        return this.course;
    }

    public void setId(Long id) {
        this.studentId = id;
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

    public void setCourse(Integer course) {
        this.course = course;
    }
}
