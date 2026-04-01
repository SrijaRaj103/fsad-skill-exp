package com.klu.controller;
import com.klu.model.Product;
import com.klu.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductRepository repo;
    public ProductController(ProductRepository repo) {
        this.repo = repo;
    }
    // Insert sample product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return repo.save(product);
    }
    // Find by category
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return repo.findByCategory(category);
    }
    // Filter price range
    @GetMapping("/filter")
    public List<Product> filterByPrice(@RequestParam double min,
                                       @RequestParam double max) {
        return repo.findByPriceBetween(min, max);
    }
    // Sorted products
    @GetMapping("/sorted")
    public List<Product> getSortedProducts() {
        return repo.getProductsSortedByPrice();
    }
    // Expensive products
    @GetMapping("/expensive/{price}")
    public List<Product> getExpensive(@PathVariable double price) {
        return repo.getExpensiveProducts(price);
    }
}