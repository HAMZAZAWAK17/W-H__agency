# Database Security Rules

Managing data integrity and security for MongoDB or Firebase.

## 1. Principle of Least Privilege

- **Rule**: The database user used by the application should only have the permissions it strictly needs (e.g., read/write but not delete-database).

## 2. Injection Prevention

- **MongoDB**: Use Mongoose schemas to enforce data types. Never pass user-controlled objects directly into query methods.
- **Firebase**: Use Firebase Security Rules to restrict access at the granular level.

## 3. Indexing & Performance

- Index sensitive and frequently queried fields (e.g., `email`, `userId`).
- Avoid over-indexing as it impacts write performance.

## 4. Sensitive Data

- **Encryption**: If storing highly sensitive data (PII), encrypt it at the application level before saving it to the database.
- **Warning**: Never store plain-text passwords or credit card numbers.

## 5. Backup & Recovery

- Enable automated daily backups.
- Regularly test the restoration process.

## 6. Connection Security

- Always connect to the database via TLS/SSL.
- Whitelist the IP addresses of the application servers.

---

### Secure vs Insecure Code Examples

#### ❌ Insecure (Query Injection)

```javascript
// A malicious user could send { "$gt": "" } as the email
const user = await User.findOne({ email: req.body.email });
```

#### ✅ Secure (Explicit Typing)

```javascript
// Ensure email is a string
const user = await User.findOne({ email: String(req.body.email) });
```

IMPORTANT: RULES ENFORCEMENT

A "rules/" directory exists in the project.
You MUST strictly follow all rules defined inside:

- rules/security.md
- rules/frontend.md
- rules/code-style.md
- rules/git.md

These rules override any default behavior.

If any generated code violates these rules, you must:

1. Refactor it to comply
2. Explain how the rule is being respected

Never ignore these rules.
Security rules have the highest priority over performance or simplicity.
