# Student Management System

## Overview
A complete full-stack Student Management System built with **React** (frontend) and **Spring Boot** (backend) that supports full CRUD operations.

## Project Structure
```
student-management-system/
├── backend/          (Spring Boot Application)
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/student/
│   │       │   ├── StudentManagementSystemApplication.java
│   │       │   ├── controller/StudentController.java
│   │       │   ├── service/StudentService.java
│   │       │   ├── repository/StudentRepository.java
│   │       │   └── model/Student.java
│   │       └── resources/application.properties
│   └── pom.xml
└── frontend/         (React Application)
    ├── src/
    │   ├── components/
    │   │   ├── StudentList.jsx
    │   │   └── AddStudent.jsx
    │   ├── App.js
    │   ├── App.css
    │   ├── api.js
    │   └── index.js
    ├── public/index.html
    └── package.json
```

## Technologies Used

### Backend
- Java 17
- Spring Boot 3.2.0
- Spring Web
- Spring Data JPA
- H2 Database
- Lombok
- Maven

### Frontend
- React 18.2.0
- Axios
- CSS3
- Create React App

## Prerequisites
- Java 17 or higher
- Node.js 14.0 or higher
- npm (Node Package Manager)
- Maven 3.6.0 or higher

## Installation & Running Instructions

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Build the project (Optional):**
   ```bash
   mvn clean install
   ```

3. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

   You can access the H2 Console at: `http://localhost:8080/h2-console`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The frontend will automatically open in your browser at `http://localhost:3000`

## API Endpoints

### GET /students
- Retrieve all students
- **Response:** Array of student objects

### GET /students/{id}
- Retrieve a specific student by ID
- **Response:** Student object

### POST /students
- Add a new student
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "course": "Computer Science"
  }
  ```
- **Response:** Created student object with ID

### PUT /students/{id}
- Update a student by ID
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "course": "Engineering"
  }
  ```
- **Response:** Updated student object

### DELETE /students/{id}
- Delete a student by ID
- **Response:** Success message

## Features

✅ **Add Students** - Form to add new students with name, email, and course
✅ **View Students** - Display all students in a responsive table
✅ **Update Students** - Click the Update button to modify student details
✅ **Delete Students** - Remove students with confirmation dialog
✅ **Auto Refresh** - Student list automatically updates after each operation
✅ **Form Validation** - All fields are required before submission
✅ **Responsive Design** - Works on desktop and mobile devices
✅ **Error Handling** - User-friendly error messages
✅ **CORS Enabled** - Frontend can communicate with backend

## Database Configuration

The application uses H2 in-memory database. Configuration in `application.properties`:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
```

**Note:** Data is stored in memory and will be reset when the application restarts.

## Usage

1. **Start both backend and frontend**
2. **Open the application** at `http://localhost:3000`
3. **Add a Student:**
   - Fill in the name, email, and course fields
   - Click "Add Student"
   - The student list will automatically refresh
4. **Update a Student:**
   - Click the "Update" button next to any student
   - The form will be pre-filled with student data
   - Modify the fields and click "Update Student"
5. **Delete a Student:**
   - Click the "Delete" button next to any student
   - Confirm the deletion
6. **View All Students:**
   - The student list displays all students in a table format

## Troubleshooting

### Backend won't start
- Ensure Java 17 is installed: `java -version`
- Check if port 8080 is available
- Try: `mvn clean install && mvn spring-boot:run`

### Frontend won't connect to backend
- Ensure backend is running on http://localhost:8080
- Check CORS configuration in `StudentController.java`
- Check browser console for error messages

### npm start fails
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Ensure Node.js and npm are properly installed

## Sample Data

You can add sample students directly through the web interface:

1. **John Doe** - john@example.com - Computer Science
2. **Jane Smith** - jane@example.com - Engineering
3. **Bob Johnson** - bob@example.com - Data Science

## License
This project is open-source and available for educational purposes.

## Support
For any issues or questions, please check the error messages in the browser console or terminal output.
