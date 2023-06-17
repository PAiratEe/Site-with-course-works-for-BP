package com.app.db.entities;

import com.app.db.entities.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student",schema = "projectschema")
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentid")
    private Integer studentId;
//
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "userid", referencedColumnName = "userid")
//    private User user;

    @Column(name = "studentname")
    private String studentName;
    @Column(name = "studentsurname")
    private String studentSurname;
    @Column(name = "studentpatronymic")
    private String studentPatronymic;


    @Column(name = "studentemail")
    private String studentEmail;

    @Column(name = "studentcoursenumber")
    private Integer studentCourseNumber;

    @Column(name = "studentcoursename")
    private String studentCourseName;
    @Column(name = "studentpassword")
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "studentdepartment", referencedColumnName = "departmentid")
    private Department department;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "studentcoursework", referencedColumnName = "courseworkid")
    private CourseWork courseWork;
//
//
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "studenteducationprogramm", referencedColumnName = "educationprogrammid")
//    private EducationProgramm educationProgramm;


    public Integer getId() {
        return this.studentId;
    }

    public String getStudentName() {
        return this.studentName;
    }

    public String getStudentSurname() {
        return this.studentSurname;
    }

    public String getStudentPatronymic() {
        return this.studentPatronymic;
    }

    public String getStudentEmail() {
        return this.studentEmail;
    }

    public Integer getStudentCourseNumber() {
        return this.studentCourseNumber;
    }

    public void setId(Integer id) {
        this.studentId = id;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public void setStudentSurname(String studentSurname) {
        this.studentSurname = studentSurname;
    }

    public void setStudentPatronymic(String studentPatronymic) {
        this.studentPatronymic = studentPatronymic;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public void setStudentCourseNumber(Integer studentCourseNumber) {
        this.studentCourseNumber = studentCourseNumber;
    }

    public Department getDepartment() {
        return this.department;
    }

    public CourseWork getCourseWork() {
        return this.courseWork;
    }

//    public EducationProgramm getEducationProgramm() {
//        return this.educationProgramm;
//    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public void setCourseWork(CourseWork courseWork) {
        this.courseWork = courseWork;
    }

//    public void setEducationProgramm(EducationProgramm educationProgramm) {
//        this.educationProgramm = educationProgramm;
//    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStudentCourseName() {
        return this.studentCourseName;
    }

    public void setStudentCourseName(String StudentCourseName) {
        this.studentCourseName = StudentCourseName;
    }
}
