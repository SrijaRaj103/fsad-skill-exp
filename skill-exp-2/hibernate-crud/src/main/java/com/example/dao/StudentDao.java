package com.example.dao;
import com.example.entity.Student;
import com.example.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import java.util.List;
public class StudentDao {
    public void saveStudent(Student s) {
        Transaction tx = null;
        try (Session session = HibernateUtil.getFactory().openSession()) {
            tx = session.beginTransaction();
            session.save(s);
            tx.commit(); } }
    public Student getStudent(int id) {
        try (Session session = HibernateUtil.getFactory().openSession()) {
            return session.get(Student.class, id);  } }
    public List<Student> getAllStudents() {
        try (Session session = HibernateUtil.getFactory().openSession()) {
            return session.createQuery("from Student", Student.class).list(); 
            } }
    public void updateStudent(Student s) {
        Transaction tx = null;
        try (Session session = HibernateUtil.getFactory().openSession()) {
            tx = session.beginTransaction();
            session.update(s);
            tx.commit();
        } }
    public boolean deleteStudent(int id) {
        Transaction tx = null;
        try (Session session = HibernateUtil.getFactory().openSession()) {
            Student s = session.get(Student.class, id);
            if (s == null) {
                return false; }
            tx = session.beginTransaction();
            session.delete(s);
            tx.commit();
            return true; 
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
            return false;
        } } }
