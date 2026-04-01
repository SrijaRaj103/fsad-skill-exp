package com.example.hibernate_crud;

import com.example.dao.StudentDao;
import com.example.entity.Student;

public class App {
    public static void main(String[] args) {
        StudentDao dao = new StudentDao();
        Student s1 = new Student("RAMA", "Hyderabad");
        dao.saveStudent(s1);
        Student s3 = new Student("VIJAY", "Nellore");
        dao.saveStudent(s3);
        int generatedId = s1.getId(); 
        System.out.println("Generated ID = " + generatedId);

        // READ
        Student s2 = dao.getStudent(generatedId);
        if (s2 != null) {
            System.out.println("Student: " + s2.getName());
        } else {
            System.out.println("Student not found.");
        }

        // UPDATE
        if (s2 != null) {
            s2.setCity("Vijayawada");
            dao.updateStudent(s2);
            System.out.println("Updated City to Vijayawada");
        }

        // DELETE
        boolean deleted = dao.deleteStudent(generatedId);
        if (deleted) {
            System.out.println("Student deleted successfully.");
        } else {
            System.out.println("Student not found for delete.");
        }

        System.out.println("CRUD Completed!");
    }
}
