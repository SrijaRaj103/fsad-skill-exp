package com.klu.controller;
import com.klu.model.Course;
import com.klu.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/courses")
public class CourseController {
    private final CourseService service;
    public CourseController(CourseService service) {
        this.service = service;
    }
    @PostMapping
    public ResponseEntity<?> addCourse(@RequestBody Course course) {

        if(course.getCourseId() <= 0) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Invalid Course ID");
        }
        service.addCourse(course);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("Course added successfully");
    }
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.getAllCourses());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getCourse(@PathVariable int id) {
        Course course = service.getCourse(id);
        if(course == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Course not found");
        }

        return ResponseEntity.ok(course);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable int id,
                                          @RequestBody Course course) {

        if(service.getCourse(id) == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Course not found");
        }

        service.updateCourse(id, course);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Course updated successfully");
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable int id) {

        boolean deleted = service.deleteCourse(id);

        if(!deleted) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Course not found");
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Course deleted successfully");
    }

    // SEARCH BY TITLE
    @GetMapping("/search/{title}")
    public ResponseEntity<?> searchCourse(@PathVariable String title) {

        List<Course> result = service.searchByTitle(title);

        if(result.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No courses found");
        }

        return ResponseEntity.ok(result);
    }
}