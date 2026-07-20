# HIT Egypt - API Reference

## 📚 Overview

Complete API reference for HIT Egypt backend services. All endpoints are RESTful and use JSON for request/response bodies.

**Base URL (Production):** `https://api.hitegypt.com/v1`  
**Base URL (Development):** `http://localhost:3000/api/v1`  
**Authentication:** Bearer Token (JWT)  
**Response Format:** JSON  
**Rate Limiting:** 1000 requests/hour

---

## 🔐 Authentication

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response (200 OK):
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "uuid", "email": "user@example.com" }
}
```

### Register
```http
POST /auth/register
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "securePass123!",
  "firstName": "John",
  "lastName": "Doe"
}

Response (201 Created):
{
  "user": { "id": "uuid", "email": "newuser@example.com" },
  "message": "Registration successful. Check email for verification."
}
```

---

## 👥 Users API

### Get Current User
```http
GET /users/me
Authorization: Bearer <token>

Response (200 OK):
{
  "id": "uuid",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+201234567890",
  "createdAt": "2026-07-20T10:00:00Z"
}
```

### Update Profile
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "+201234567890",
  "bio": "Fitness enthusiast"
}

Response (200 OK):
{ "message": "Profile updated successfully" }
```

---

## 📅 Sessions API

### List Sessions
```http
GET /sessions?date=2026-08-01&program=fitness&limit=20&offset=0
Authorization: Bearer <token>

Response (200 OK):
{
  "data": [
    {
      "id": "uuid",
      "program": "Fitness Program",
      "date": "2026-08-01",
      "startTime": "09:00",
      "endTime": "10:00",
      "capacity": 20,
      "enrolled": 15,
      "trainer": { "id": "uuid", "name": "John" }
    }
  ],
  "total": 42,
  "limit": 20,
  "offset": 0
}
```

### Get Session Details
```http
GET /sessions/{sessionId}
Authorization: Bearer <token>

Response (200 OK):
{
  "id": "uuid",
  "program": { "id": "uuid", "name": "Fitness" },
  "trainer": { "id": "uuid", "name": "John", "rating": 4.8 },
  "date": "2026-08-01",
  "startTime": "09:00",
  "endTime": "10:00",
  "location": { "id": "uuid", "name": "Main Branch" },
  "capacity": 20,
  "enrolled": 15,
  "description": "High-intensity interval training"
}
```

---

## 📋 Bookings API

### Create Booking
```http
POST /bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "sessionId": "uuid"
}

Response (201 Created):
{
  "id": "uuid",
  "sessionId": "uuid",
  "status": "confirmed",
  "bookingDate": "2026-07-20T10:30:00Z"
}
```

### Get My Bookings
```http
GET /bookings?status=confirmed&limit=10
Authorization: Bearer <token>

Response (200 OK):
{
  "data": [
    {
      "id": "uuid",
      "session": {
        "id": "uuid",
        "program": "Fitness",
        "date": "2026-08-01",
        "startTime": "09:00"
      },
      "status": "confirmed",
      "bookingDate": "2026-07-20T10:30:00Z"
    }
  ],
  "total": 5
}
```

### Cancel Booking
```http
DELETE /bookings/{bookingId}
Authorization: Bearer <token>

Response (200 OK):
{ "message": "Booking cancelled successfully" }
```

---

## 💳 Payments API

### Create Payment
```http
POST /payments
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 150.00,
  "currency": "USD",
  "method": "stripe",
  "bookingId": "uuid"
}

Response (201 Created):
{
  "id": "uuid",
  "amount": 150.00,
  "status": "pending",
  "clientSecret": "pi_xxx_secret_xxx"
}
```

### Get Payment History
```http
GET /payments?limit=20&offset=0
Authorization: Bearer <token>

Response (200 OK):
{
  "data": [
    {
      "id": "uuid",
      "amount": 150.00,
      "status": "completed",
      "date": "2026-07-20T10:30:00Z"
    }
  ],
  "total": 12
}
```

---

## 📊 Programs API

### List Programs
```http
GET /programs?category=fitness&limit=20
Authorization: Bearer <token>

Response (200 OK):
{
  "data": [
    {
      "id": "uuid",
      "name": "High Intensity Training",
      "category": "fitness",
      "duration": 60,
      "price": 150,
      "description": "Intense workout program",
      "maxParticipants": 20
    }
  ],
  "total": 12
}
```

### Get Program Details
```http
GET /programs/{programId}

Response (200 OK):
{
  "id": "uuid",
  "name": "High Intensity Training",
  "description": "Intense workout...",
  "category": "fitness",
  "difficulty": "advanced",
  "duration": 60,
  "price": 150,
  "features": ["weight loss", "strength building"],
  "trainers": [{ "id": "uuid", "name": "John" }],
  "upcomingSessions": 5
}
```

---

## 🗣️ Testimonials API

### Get Testimonials
```http
GET /testimonials?approved=true&limit=10

Response (200 OK):
{
  "data": [
    {
      "id": "uuid",
      "rating": 5,
      "comment": "Great experience!",
      "user": { "name": "John", "image": "url" },
      "date": "2026-07-20"
    }
  ],
  "total": 42
}
```

### Submit Testimonial
```http
POST /testimonials
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "comment": "Amazing experience!",
  "image": "url" (optional)
}

Response (201 Created):
{
  "id": "uuid",
  "status": "pending_approval",
  "message": "Thank you! Your testimonial is pending approval."
}
```

---

## 📧 Contact API

### Submit Contact Form
```http
POST /contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+201234567890",
  "subject": "Inquiry",
  "message": "I have a question about..."
}

Response (201 Created):
{
  "id": "uuid",
  "message": "Thank you! We'll get back to you soon."
}
```

---

## ❌ Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

### Common Status Codes
- **200 OK:** Successful request
- **201 Created:** Resource created successfully
- **204 No Content:** Successful but no content to return
- **400 Bad Request:** Invalid input
- **401 Unauthorized:** Missing/invalid authentication
- **403 Forbidden:** Insufficient permissions
- **404 Not Found:** Resource not found
- **409 Conflict:** Resource already exists
- **500 Server Error:** Internal server error

---

## 🔄 Pagination

All list endpoints support pagination:
```
GET /sessions?limit=20&offset=0

Response includes:
{
  "data": [...],
  "total": 100,
  "limit": 20,
  "offset": 0,
  "hasMore": true
}
```

---

**API Version:** 1.0  
**Last Updated:** July 20, 2026  
**Status:** Ready for Phase 2 Implementation
