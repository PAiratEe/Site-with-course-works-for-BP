package com.app.db.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "department",schema = "projectschema")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "departmentid")
    private Integer departmentId;

    @Column(name = "departmentname")
    private String departmentName;

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
