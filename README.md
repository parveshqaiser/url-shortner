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
npm start
```

Server will run at:

```bash
http://localhost:5000
```
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

## 👨‍💻 Author

Built with ❤️ using Node.js, Express.js, PostgreSQL, Drizzle ORM, Zod, and JWT.
