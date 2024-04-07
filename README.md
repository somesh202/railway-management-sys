# Railway Management System API Documentation

This document provides an overview of all the endpoints available in the Railway Management System API.


## Authentication

To access protected endpoints, you need to obtain an authentication token by logging in. Send a POST request to `/auth/login` with your username and password to receive a token. Include this token in the `Authorization` header for subsequent requests.

## Endpoints

### Register a User

Registers a new user in the system.

- **URL**: `/auth/register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "username": "exampleuser",
    "email": "example@example.com",
    "password": "password123"
  }
Response:
```
{
  "message": "User registered successfully"
}
```
# Login User
Logs in an existing user and returns an authentication token.

URL: /auth/login
Method: POST
Request Body:
```
{
  "username": "exampleuser",
  "password": "password123"
}
```
Response:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
# Add a New Train
Adds a new train to the system.

URL: /trains
Method: POST
Request Body:
```
{
  "train_number": "12345",
  "source": "Station A",
  "destination": "Station B",
  "total_seats": 100
}
```
Response:
```
{
  "message": "Train added successfully"
}
```
# Get Seat Availability
Retrieves the availability of seats between two stations.

URL: /seat-availability
Method: GET
Query Parameters:
source: Source station name (required)
destination: Destination station name (required)
Response:
```
{
  "train_number": "12345",
  "source": "Station A",
  "destination": "Station B",
  "available_seats": 50
}
```
# Book a Seat
Books a seat on a particular train.

URL: /bookings
Method: POST
Request Body:
```
{
  "user_id": 1,
  "train_id": 12345
}
```
Response:
```
{
  "message": "Seat booked successfully"
}
```
# Get Specific Booking Details
Retrieves details of a specific booking.

URL: /bookings/{bookingId}
Method: GET
Path Parameters:
bookingId: ID of the booking (required)
Response:
```
{
  "booking_id": 123,
  "user_id": 1,
  "train_id": 12345,
  "booking_date": "2023-04-10T10:00:00Z"
}
```
