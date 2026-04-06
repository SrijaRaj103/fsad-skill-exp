# FSAD-Skill13: Full-Stack Application Deployment

A complete full-stack web application combining a **React frontend** with a **Spring Boot backend**, demonstrating modern deployment practices.

## 📋 Project Overview

This project showcases the deployment of a full-stack application where:
- **Frontend**: React single-page application (SPA)
- **Backend**: Spring Boot REST API server
- **Deployment**: Integrated deployment with React build embedded in Spring Boot JAR

### Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Frontend | React | 18.2.0 |
| Backend | Spring Boot | 3.2.0 |
| Java | OpenJDK | 21 LTS |
| Build Tool (Frontend) | npm | 10.9.3 |
| Build Tool (Backend) | Maven | 3.9.12 |
| Package Manager | npm | 10.9.3 |

---

## 📁 Project Structure

```
skill-13-fullstack-app/
│
├── frontend/                          # React Application
│   ├── src/
│   │   ├── App.js                    # Main React component
│   │   ├── App.css                   # Component styling
│   │   └── index.js                  # React entry point
│   ├── public/
│   │   └── index.html                # HTML template
│   ├── package.json                  # NPM dependencies
│   ├── package-lock.json             # Locked dependency versions
│   ├── .env                          # Environment variables
│   └── .gitignore
│
├── backend/                          # Spring Boot Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/fullstack/
│   │   │   │   ├── FullStackApplication.java    # Main Spring Boot app
│   │   │   │   └── ApiController.java           # REST API endpoints
│   │   │   └── resources/
│   │   │       ├── static/                      # React build (deployed here)
│   │   │       └── application.properties       # Spring Boot config
│   │   └── test/
│   │       └── java/com/example/fullstack/
│   │           └── ApiControllerTest.java       # Unit tests
│   ├── pom.xml                       # Maven configuration
│   └── .gitignore
│
├── .vscode/                          # VS Code settings
├── README.md                         # Project documentation
└── .gitignore                        # Git ignore rules

```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** v14+ and **npm** v6+
- **Java JDK** 21 or later
- **Maven** 3.6+
- **Git**

### Installation & Build

#### 1. Clone the Repository
```bash
git clone https://github.com/sivamanikantavasu/FSAD-Skill13.git
cd FSAD-Skill13
```

#### 2. Frontend Setup
```bash
cd frontend
npm install
npm run build
cd ..
```

#### 3. Copy Build to Backend
```bash
# Copy React build to backend static resources
cp -r frontend/build/* backend/src/main/resources/static/
```

#### 4. Backend Build
```bash
cd backend
mvn clean package -DskipTests
cd ..
```

#### 5. Run the Application
```bash
cd backend
java -jar target/fullstack-app-1.0.0.jar
```

#### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:8080
```

---

## 📝 API Endpoints

The backend provides the following REST API endpoints:

| Endpoint | Method | Response | Description |
|----------|--------|----------|-------------|
| `/api/hello` | GET | JSON message | Returns backend status message |
| `/api/users` | GET | JSON array | Returns list of sample users |
| `/api/status` | GET | JSON object | Returns application health status |
| `/` | GET | HTML | Serves React frontend |

### Example API Responses

**GET /api/hello**
```json
{
  "message": "✅ Backend API is running successfully!",
  "timestamp": "2026-03-14T14:06:27.195156700"
}
```

**GET /api/users**
```json
[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob@example.com"
  },
  ...
]
```

**GET /api/status**
```json
{
  "status": "OK",
  "service": "Full-Stack Application",
  "version": "1.0.0",
  "uptime": "62 MB"
}
```

---

## 🔧 Frontend Development

### Available Scripts

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm eject
```

### Environment Variables

The frontend uses the following environment variables defined in `.env`:

```
REACT_APP_API_URL=/api
```

The API URL is relative to the application root, allowing seamless integration with the backend.

---

## 🔧 Backend Development

### Available Maven Commands

```bash
# Clean and build the project
mvn clean package

# Build without running tests
mvn clean package -DskipTests

# Run unit tests
mvn test

# Run the application locally
mvn spring-boot:run
```

### Application Properties

Key configurations in `application.properties`:

```properties
server.port=8080
spring.application.name=fullstack-app
spring.application.version=1.0.0
logging.level.root=INFO
logging.level.com.example.fullstack=DEBUG
```

---

## 📦 Deployment

### Docker Deployment (Optional)

The application can be containerized for deployment:

```bash
# Build Docker image
docker build -t fullstack-app:1.0.0 -f backend/Dockerfile .

# Run container
docker run -p 8080:8080 fullstack-app:1.0.0
```

### Cloud Deployment

The JAR file can be deployed to:
- **AWS EC2** or **Elastic Beanstalk**
- **Azure App Service**
- **Google Cloud Run**
- **Heroku**

Simply upload `backend/target/fullstack-app-1.0.0.jar` to your cloud platform.

---

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
mvn test
```

---

## 📋 Features

### Frontend Features
- ✅ React 18.2.0 with functional components
- ✅ Responsive dark theme UI
- ✅ Real-time API data fetching
- ✅ Error handling with retry functionality
- ✅ CORS-enabled communication with backend
- ✅ User list display from backend

### Backend Features
- ✅ Spring Boot 3.2.0 with Java 21
- ✅ RESTful API architecture
- ✅ CORS configuration for frontend access
- ✅ Comprehensive JSON response formatting
- ✅ Unit test coverage
- ✅ Static file serving (React build)
- ✅ Error handling and logging

---

## 🔐 Security Considerations

- CORS is configured to accept all origins (`*`)
- For production, restrict CORS origins to your domain
- Implement authentication if handling sensitive data
- Use HTTPS in production environments
- Validate all user inputs on the backend

---

## 🐛 Troubleshooting

### React Build Shows White Screen
- Ensure the API URL in `.env` is correct
- Check browser console for JavaScript errors
- Verify backend API is running on port 8080
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Backend API Not Responding
- Confirm Java process is running: `netstat -ano | findstr :8080`
- Check if port 8080 is in use
- Review server logs for errors
- Restart the application

### Port Already in Use
```bash
# Kill process using port 8080
# Windows PowerShell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess -Force

# macOS/Linux
lsof -ti:8080 | xargs kill -9
```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Maven Guide](https://maven.apache.org/guides/)
- [Create React App Documentation](https://create-react-app.dev)

---

## 👤 Author

Created as part of FSAD (Full-Stack Application Development) Skill 13.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Support

For issues or questions, please open an issue on the GitHub repository:
https://github.com/sivamanikantavasu/FSAD-Skill13/issues

---

**Last Updated**: March 14, 2026  
**Version**: 1.0.0
