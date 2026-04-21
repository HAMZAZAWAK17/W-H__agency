# Code Style & Architecture

Maintaining a clean, readable, and modular codebase.

## 1. Clean Code Principles
- **KISS**: Keep It Simple, Stupid.
- **DRY**: Don't Repeat Yourself (abstract into reusable components/functions).
- Use descriptive variable and function names (e.g., `getUserById` vs `gUB`).

## 2. Naming Conventions
- **React Components**: PascalCase (e.g., `UserCard.tsx`).
- **Files/Folders**: kebab-case or camelCase (be consistent).
- **Functions/Variables**: camelCase (e.g., `isValidUser`).
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`).

## 3. Modular Architecture
- **Frontend**: Organize by features or components.
  - `/components`: Generic UI components.
  - `/hooks`: Custom React hooks.
  - `/services`: API calls.
- **Backend**:
  - `/controllers`: Request handling.
  - `/models`: Database schemas.
  - `/routes`: API endpoints.
  - `/middlewares`: Auth, validation, errors.

## 4. Reusable Components
- Build small, single-responsibility components.
- Use TypeScript interfaces/types for all props to ensure type safety.

## 5. Formatting
- Use Prettier and ESLint for automated styling.
- Follow the project's `.eslintrc` and `.prettierrc` rules.

---

### Clean vs Messy Code Examples

#### ❌ Messy
```tsx
const Data = (p) => {
  return <div>{p.name} {p.age}</div>
}
```

#### ✅ Clean (Typed and Readable)
```tsx
interface UserProps {
  name: string;
  age: number;
}

const UserDisplay: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
};
```
