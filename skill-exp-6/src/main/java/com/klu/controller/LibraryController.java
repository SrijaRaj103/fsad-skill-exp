package com.klu.controller;

import com.klu.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LibraryController {

    List<Book> books = new ArrayList<>();
    // 1. Welcome message
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to the Online Library System";
    }

    // 2. Total books count
    @GetMapping("/count")
    public int countBooks() {
        return 4;
    }

    // 3. Sample price
    @GetMapping("/price")
    public double price() {
        return 499.99;
    }

    // 4. List of book titles
    @GetMapping("/books")
    public List<String> getBooks() {

        List<String> titles = new ArrayList<>();
        titles.add("Spring Boot Guide");
        titles.add("Java Programming");
        titles.add("Microservices Architecture");

        return titles;
    }

    // 5. Book details by ID
    @GetMapping("/books/{id}")
    public Book getBookById(@PathVariable int id) {
        return new Book(id, "Spring Boot Guide", "John Doe", 450.0);
    }

    // 6. Search using request parameter
    @GetMapping("/search")
    public String searchBook(@RequestParam String title) {
        return "Searching for book: " + title;
    }

    // 7. Author endpoint
    @GetMapping("/author/{name}")
    public String author(@PathVariable String name) {
        return "Books written by author: " + name;
    }

    // 8. Add book (POST)
    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book) {
        books.add(book);
        return "Book added successfully";
    }

    // 9. View all added books
    @GetMapping("/viewbooks")
    public List<Book> viewBooks() {
        return books;
    }
}