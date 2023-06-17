package com.app.db.entities;

import jakarta.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "department",schema = "projectschema")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "departmentid")
    private Integer departmentId;

    @Column(name = "departmentname")
    private String departmentName;

    @OneToOne(mappedBy = "department")
    private Student student;

    @OneToMany(mappedBy = "department")
    private Collection<Professor> professor;

    public Integer getId() {
        return this.departmentId;
    }

    public String getDepartmentName() {
        return this.departmentName;
    }

    public void setId(Integer id) {
        this.departmentId = id;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
