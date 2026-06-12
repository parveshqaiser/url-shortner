# 🔗 URL Shortener API

A secure and scalable URL Shortener built with **Node.js**, **Express.js**, **PostgreSQL**, and **Drizzle ORM**. The application allows users to create, manage, and track shortened URLs with authentication powered by JWT.

## 🚀 Features

* User Registration & Login
* JWT-based Authentication & Authorization
* Create Short URLs
* Redirect Short URLs to Original URLs
* Custom Short Codes (Optional)
* Input Validation using Zod
* PostgreSQL Database Integration
* Drizzle ORM for Type-Safe Database Operations
* RESTful API Architecture

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### ORM

* Drizzle ORM

### Validation

* Zod

### Authentication

* JSON Web Token (JWT)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git

cd url-shortener
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DATABASE_URL=postgresql://username:password@localhost:5432/url_shortener

JWT_SECRET=your_super_secret_key

BASE_URL=http://localhost:5000
```

### 4. Run Database Migrations

```bash
npm run db:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Server will run at:

```bash
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token_here"
}
```

---

## 🔗 URL APIs

### Create Short URL

```http
POST /api/url/shorten
```

Headers:

```http
Authorization: Bearer <jwt_token>
```

Request Body:

```json
{
  "originalUrl": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### Redirect to Original URL

```http
GET /:shortCode
```

Example:

```http
GET /abc123
```

Redirects user to:

```bash
https://example.com
```

---

### Get User URLs

```http
GET /api/url
```

Returns all URLs created by the authenticated user.

---

### Delete URL

```http
DELETE /api/url/:id
```

Deletes a URL owned by the authenticated user.

---

## 📊 URL Analytics

Track:

* Total Clicks
* Created Date
* Last Accessed Date

Example Endpoint:

```http
GET /api/url/:id/stats
```

---

## 🧪 Validation

All incoming request data is validated using **Zod** to ensure:

* Correct URL format
* Required fields are present
* Strong input validation
* Consistent API responses

---

## 📜 Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run start
```

Runs the production server.

```bash
npm run db:generate
```

Generate Drizzle migrations.

```bash
npm run db:migrate
```

Apply database migrations.

```bash
npm run db:studio
```

Open Drizzle Studio.

---

## 🔒 Security Features

* Password Hashing
* JWT Authentication
* Protected Routes
* Input Validation with Zod
* Environment Variable Management
* SQL Injection Protection via Drizzle ORM

---

## 📈 Future Enhancements

* Custom Alias Support
* QR Code Generation
* URL Expiration
* Rate Limiting
* User Dashboard
* Public API Keys
* Advanced Analytics

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

--

---

## 👨‍💻 Author

Built with ❤️ using Node.js, Express.js, PostgreSQL, Drizzle ORM, Zod, and JWT.
