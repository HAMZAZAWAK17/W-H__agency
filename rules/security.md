# Security Guidelines

Security is the highest priority in this project. All development must adhere to these standards to protect user data and system integrity.

## 1. Input Validation & Sanitization
- **Rule**: Never trust client-side data. All input must be validated on the server.
- **Tools**: Use libraries like `zod` or `joi` for schema validation.
- **Sanitization**: Strip HTML tags and escape special characters to prevent injection attacks.

> [!WARNING]
> Failing to validate input is the #1 cause of security vulnerabilities (XSS, Injection).

## 2. Authentication & Authorization
- **Bcrypt**: Always hash passwords using `bcrypt` with a salt round of at least 10. Never store plain-text passwords.
- **JWT Handling**:
  - Store secrets in environment variables.
  - Set reasonable expiration times (e.g., 15m for access tokens, 7d for refresh tokens).
  - Use `HttpOnly` and `Secure` cookies for storing tokens to prevent XSS access.
- **RBAC**: Implement Role-Based Access Control to ensure users only access what they are permitted to.

## 3. Network Security
- **HTTPS**: Enforce HTTPS in all environments. Use HSTS headers.
- **CORS**: Configure Cross-Origin Resource Sharing to only allow trusted domains. Avoid `origin: '*'`.
- **Secure Headers**: Use `helmet` middleware in Express to set security-related HTTP headers.

## 4. Protection Against Common Attacks
- **XSS**: Sanitize user-generated content before rendering. Use Content Security Policy (CSP).
- **CSRF**: Use Anti-CSRF tokens for state-changing operations if not using `SameSite` cookies.
- **NoSQL Injection**: Use parameterized queries or ORM/ODM features to prevent injection.

## 5. Rate Limiting & Brute Force
- **Rule**: Implement rate limiting on all sensitive endpoints (Login, Signup, Forgot Password).
- **Tool**: `express-rate-limit`.

## 6. File Upload Security
- Limit file size and allowed MIME types.
- Rename files to random strings upon upload.
- Store files outside the web root or in a dedicated S3 bucket with restricted access.

## 7. Environment Variables
- Never commit `.env` files.
- Use a `.env.example` to document required keys.
- Access variables via a centralized config utility.

---

### Secure vs Insecure Code Examples

#### ❌ Insecure (NoSQL Injection)
```javascript
// User input directly in query
const user = await User.findOne({ username: req.body.username, password: req.body.password });
```

#### ✅ Secure (Sanitized/Validated)
```javascript
// Using schema validation and properly handled inputs
const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(8)
});
const { username, password } = schema.parse(req.body);
const user = await User.findOne({ username });
// Then compare hashed password with bcrypt.compare()
```
