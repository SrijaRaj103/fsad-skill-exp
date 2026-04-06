package com.example.fullstack;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "✅ Backend API is running successfully!");
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return response;
    }

    @GetMapping("/users")
    public List<Map<String, Object>> getUsers() {
        return Arrays.asList(
            createUser(1, "Alice Johnson", "alice@example.com"),
            createUser(2, "Bob Smith", "bob@example.com"),
            createUser(3, "Carol White", "carol@example.com"),
            createUser(4, "David Brown", "david@example.com")
        );
    }

    @GetMapping("/status")
    public Map<String, Object> status() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "OK");
        status.put("service", "Full-Stack Application");
        status.put("version", "1.0.0");
        status.put("uptime", Runtime.getRuntime().totalMemory() / 1024 / 1024 + " MB");
        return status;
    }

    private Map<String, Object> createUser(int id, String name, String email) {
        Map<String, Object> user = new HashMap<>();
        user.put("id", id);
        user.put("name", name);
        user.put("email", email);
        return user;
    }
}
