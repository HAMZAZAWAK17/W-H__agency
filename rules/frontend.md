# Frontend Development Rules

Building secure and performant interfaces with React, Vite, and Tailwind CSS.

## 1. Environment Variables & Secrets
- **Rule**: Never store sensitive secrets (API keys, DB passwords) in the frontend.
- **Vite**: Use `.env` files with the `VITE_` prefix for public configuration only.
- **Warning**: Anything in the frontend is visible to the user.

## 2. Secure API Calls
- Use an `axios` instance with a base URL and interceptors for adding auth headers.
- Handle loading and error states gracefully.

## 3. Input Sanitization in UI
- React automatically escapes strings to prevent XSS, but be extremely careful with `dangerouslySetInnerHTML`.
- If you must use it, sanitize the content first with `dompurify`.

## 4. Route Protection
- Implement Auth Guards/Protected Routes using React Router.
- Redirect unauthenticated users to the `/login` page.

## 5. Form Handling
- Use `react-hook-form` for efficient form state management.
- Validate inputs on the client for UX, but remember this is NOT a replacement for server validation.

## 6. HTTPS Only
- Ensure all external resources (scripts, images, API calls) use HTTPS.

---

### Secure vs Insecure Code Examples

#### ❌ Insecure (XSS Risk)
```tsx
const UserProfile = ({ bio }) => {
  return <div dangerouslySetInnerHTML={{ __html: bio }} />;
};
```

#### ✅ Secure (Sanitized XSS Protection)
```tsx
import DOMPurify from 'dompurify';

const UserProfile = ({ bio }) => {
  const cleanBio = DOMPurify.sanitize(bio);
  return <div dangerouslySetInnerHTML={{ __html: cleanBio }} />;
};
```
