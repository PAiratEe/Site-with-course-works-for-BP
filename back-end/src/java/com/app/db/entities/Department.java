package com.app.db.entities;

import javax.persistence.*;

@Entity
@Table(name = "Departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "departmentName")
    private String departmentName;

    public Long getId() {
        return this.id;
    }

    public String getDepartmentName() {
        return this.departmentName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
