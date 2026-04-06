# Quick Setup Guide

## Step 1: Backend Setup & Run

```bash
cd student-management-system/backend
mvn spring-boot:run
```

Expected output - Backend running on http://localhost:8080

## Step 2: Frontend Setup & Run (in another terminal)

```bash
cd student-management-system/frontend
npm install
npm start
```

Expected output - Frontend opens automatically at http://localhost:3000

## Step 3: Test the Application

1. Add a student using the form on the left
2. See the student appear in the table on the right
3. Click "Update" to edit a student
4. Click "Delete" to remove a student
5. All changes are reflected instantly

That's it! The application is fully functional.

## Troubleshooting

**Backend won't compile:**
- Ensure Java 17+ is installed: `java -version`
- Run: `mvn clean install`

**Frontend npm errors:**
- Delete node_modules: `rm -r node_modules` (Windows: `rmdir /s node_modules`)
- Reinstall: `npm install`

**Connection issues:**
- Verify backend is running on localhost:8080
- Check browser console (F12) for CORS errors
- Restart both servers

## Key Features Implemented

✅ CRUD Operations (Create, Read, Update, Delete)
✅ Responsive Design
✅ Form Validation
✅ Auto-refresh after operations
✅ Error Handling
✅ CORS Configuration
✅ H2 In-Memory Database
✅ Professional UI with styled components
