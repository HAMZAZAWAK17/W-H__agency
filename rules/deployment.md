# Deployment Guidelines

Ensuring a secure and stable production environment on Vercel, Render, or AWS.

## 1. Environment Variables in Production
- **Rule**: Set environment variables through the provider's dashboard or CLI (e.g., Vercel Dashboard).
- Use distinct variables for `STAGING` and `PRODUCTION`.

## 2. SSL/TLS & HTTPS
- **Rule**: Force SSL on the deployment platform.
- Ensure all redirects from HTTP to HTTPS are handled automatically.

## 3. Firewall & Rate Limiting
- Use a Web Application Firewall (WAF) if possible (e.g., Cloudflare, AWS WAF).
- Configure firewall rules to block suspicious IP patterns.

## 4. Monitoring & Logging
- Integrate with tools like Sentry for error tracking.
- Use Logtail or Datadog for centralized log management.
- **Alerts**: Set up alerts for 5xx errors and high latency.

## 5. Build Pipeline Security
- Use `npm audit` in CI/CD to check for vulnerable dependencies.
- Ensure only production dependencies are installed in the final container/bundle.

> [!IMPORTANT]
> Change all default passwords and secret keys (JWT secret, DB password) before moving from development to production.

---

### Secure vs Insecure Deployment

#### ❌ Insecure
- Hardcoding API URLs in code.
- Using `development` mode in production.
- Manual FTP uploads.

#### ✅ Secure
- Using CI/CD pipelines (GitHub Actions).
- Automated tests passing before deployment.
- Environment-specific config via variables.
