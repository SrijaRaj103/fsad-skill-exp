package com.example.hql;

import com.example.entity.Product;
import com.example.util.HibernateUtil;

import org.hibernate.*;
import java.util.List;

public class App {

    public static void main(String[] args) {

        Session session = HibernateUtil.getFactory().openSession();
        Transaction tx = session.beginTransaction();

        /* Insert Sample Data */
        session.save(new Product("Laptop","Electronics",80000,5));
        session.save(new Product("Mouse","Electronics",500,20));
        session.save(new Product("Keyboard","Electronics",2000,10));
        session.save(new Product("Chair","Furniture",3000,7));
        session.save(new Product("Table","Furniture",6000,3));
        session.save(new Product("Monitor","Electronics",12000,6));

        tx.commit();

        /* Sorting ASC */
        Query<Product> q1 = session.createQuery(
                "FROM Product ORDER BY price ASC", Product.class);
        List<Product> list1 = q1.list();

        System.out.println("Products sorted by price ASC:");
        list1.forEach(p -> System.out.println(p.getName()+" "+p.getPrice()));

        /* Sorting DESC */
        Query<Product> q2 = session.createQuery(
                "FROM Product ORDER BY price DESC", Product.class);

        System.out.println("\nProducts sorted by price DESC:");
        q2.list().forEach(p -> System.out.println(p.getName()+" "+p.getPrice()));

        /* Pagination */
        Query<Product> q3 = session.createQuery("FROM Product", Product.class);
        q3.setFirstResult(0);
        q3.setMaxResults(3);

        System.out.println("\nFirst 3 products:");
        q3.list().forEach(p -> System.out.println(p.getName()));

        /* Aggregate count */
        Query<Long> q4 = session.createQuery(
                "SELECT COUNT(p.id) FROM Product p", Long.class);

        System.out.println("\nTotal products: " + q4.uniqueResult());

        /* Min Max Price */
        Query<Object[]> q5 = session.createQuery(
                "SELECT MIN(p.price), MAX(p.price) FROM Product p", Object[].class);

        Object[] result = q5.uniqueResult();
        System.out.println("Min price: " + result[0]);
        System.out.println("Max price: " + result[1]);

        /* Group By */
        Query<Object[]> q6 = session.createQuery(
                "SELECT p.description, COUNT(p.id) FROM Product p GROUP BY p.description");

        System.out.println("\nProducts grouped by description:");
        for(Object[] row : q6.list()){
            System.out.println(row[0]+" : "+row[1]);
        }

        /* WHERE price range */
        Query<Product> q7 = session.createQuery(
                "FROM Product WHERE price BETWEEN 1000 AND 10000", Product.class);

        System.out.println("\nProducts between price range:");
        q7.list().forEach(p -> System.out.println(p.getName()));

        /* LIKE examples */
        Query<Product> q8 = session.createQuery(
                "FROM Product WHERE name LIKE 'L%'", Product.class);

        System.out.println("\nNames starting with L:");
        q8.list().forEach(p -> System.out.println(p.getName()));

        session.close();
        HibernateUtil.getFactory().close();
    }
}