# Backend Development Rules

The backend must be a robust, secure, and scalable API built with Node.js and Express.

## 1. Zero-Trust Architecture
- **Rule**: Treat every request as potentially malicious.
- **Implementation**: Every route should have a validation middleware and an authorization check.

## 2. Validation Middleware
- Use centralized validation schemas (Zod/Joi).
- Apply validation before any business logic executes.

## 3. Centralized Error Handling
- Never expose stack traces to the client in production.
- Use a global error-handling middleware.
- Create custom error classes (e.g., `AppError`, `ValidationError`).

> [!TIP]
> Catch all asynchronous errors using a wrapper function to avoid server crashes.

## 4. Logging & Monitoring
- Log important events (logins, errors, sensitive data changes).
- Use a logger like `winston` or `pino`.
- **Warning**: Never log sensitive information like passwords or credit card numbers.

## 5. API Structure Best Practices
- Follow RESTful conventions.
- Version your API (e.g., `/api/v1/...`).
- Keep controllers thin; put business logic in services.

## 6. Secure Routes
- Create a reusable `protect` middleware to verify JWTs.
- Create a `restrictTo` middleware for role-based access.

---

### Secure vs Insecure Code Examples

#### ❌ Insecure (Exposing Errors)
```javascript
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message, stack: err.stack });
});
```

#### ✅ Secure (Masking Errors)
```javascript
app.use((err, req, res, next) => {
  const statusCode = err.isOperational ? err.statusCode : 500;
  const message = err.isOperational ? err.message : 'Something went wrong';
  
  res.status(statusCode).json({
    status: 'error',
    message: message
  });
});
```
