# Git & Version Control Rules

Standardizing collaboration and ensuring secret safety.

## 1. Secrets Management
- **Rule**: Never commit `.env` files to the repository.
- **Action**: Add `.env` to `.gitignore` immediately.
- **Tip**: Use `dotenv-safe` to ensure all required env vars are present without committing them.

## 2. `.gitignore` Essentials
Ensure your `.gitignore` includes:
- `node_modules/`
- `.env`
- `dist/` or `build/`
- `.DS_Store` (for macOS)
- Logs (`npm-debug.log`, etc.)

## 3. Commit Message Convention
Follow Conventional Commits:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature

## 4. Branch Protection
- **Rule**: Never push directly to `main` or `master`.
- Require Pull Request reviews before merging.
- Ensure CI checks (linting, tests) pass before merging.

> [!CAUTION]
> If a secret is accidentally committed, rotate it immediately. Deleting the commit is NOT enough to secure the secret.

---

### Secure vs Insecure Git Practices

#### ❌ Insecure
```bash
git add .
git commit -m "added stuff and fixed secrets"
git push origin main
```

#### ✅ Secure
```bash
git checkout -b feat/add-login
# ... code ...
git add .
git commit -m "feat: implement login with bcrypt hashing"
git push origin feat/add-login
# Open PR for review
```
