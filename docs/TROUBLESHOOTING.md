# HIT Egypt - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Build Issues

**Problem: Build fails with TypeScript errors**
```
Solution:
1. Clear cache: npm run clean
2. Reinstall: npm install
3. Check tsconfig.json is valid
4. Run: npm run build
```

**Problem: Module not found error**
```
Solution:
1. Verify path alias in tsconfig.json
2. Check file exists at specified path
3. Ensure barrel export (index.ts) exists
4. Restart dev server: npm start
```

**Problem: Styles not applying**
```
Solution:
1. Check Tailwind CSS is configured
2. Verify component has styleUrls or styles
3. Check CSS is imported in styles.scss
4. Clear browser cache
5. Restart dev server
```

---

### Runtime Issues

**Problem: Component not rendering**
```
Solution:
1. Check template syntax ({{ }}, *ngIf, etc.)
2. Verify component is exported in module
3. Check component selector in HTML
4. Open DevTools → check console for errors
5. Verify inputs/outputs are correct
```

**Problem: Service injection fails**
```
Solution:
1. Ensure service is provided (providedIn: 'root')
2. Check for circular dependencies
3. Verify constructor injection syntax
4. Check service is exported from barrel
5. Restart dev server
```

**Problem: API calls not working**
```
Solution:
1. Check network tab in DevTools
2. Verify API URL is correct
3. Check CORS configuration
4. Verify authentication token is valid
5. Check server is running
```

---

### Performance Issues

**Problem: Application loads slowly**
```
Solution:
1. Run Lighthouse audit
2. Check bundle size: npm run analyze
3. Verify images are optimized
4. Check for large dependencies
5. Enable gzip compression
```

**Problem: Memory leak detected**
```
Solution:
1. Unsubscribe from observables
2. Use takeUntil pattern:
   this.obs$.pipe(takeUntil(this.destroy$)).subscribe()
3. Check for circular references
4. Profile in Chrome DevTools
```

---

### Development Issues

**Problem: Hot reload not working**
```
Solution:
1. Restart dev server: npm start
2. Check file is saved
3. Clear browser cache
4. Hard refresh: Ctrl+Shift+R
5. Check terminal for errors
```

**Problem: Git merge conflicts**
```
Solution:
1. Identify conflicted files
2. Resolve conflicts manually
3. Mark as resolved
4. Commit merge: git commit -m "merge: resolve conflicts"
```

---

### SEO Issues

**Problem: Meta tags not updating**
```
Solution:
1. Check SeoService is injected
2. Verify updatePageSEO() is called
3. Check meta tags in DevTools
4. Use inspector to verify og: tags
5. Share URL on social to test
```

**Problem: Sitemap not found**
```
Solution:
1. Verify public/sitemap.xml exists
2. Check angular.json includes asset
3. Verify build includes sitemap
4. Check server serves at /sitemap.xml
```

---

### Database Issues (Phase 2+)

**Problem: Database connection failed**
```
Solution:
1. Verify PostgreSQL is running
2. Check connection string
3. Verify credentials
4. Check firewall rules
5. Review database logs
```

**Problem: Migration failed**
```
Solution:
1. Check migration SQL syntax
2. Verify schema exists
3. Check for duplicate constraints
4. Rollback: npm run migrate:rollback
5. Check migration logs
```

---

### Authentication Issues (Phase 2+)

**Problem: Login not working**
```
Solution:
1. Verify API endpoint is correct
2. Check credentials in request
3. Verify JWT is being generated
4. Check token storage (localStorage/cookies)
5. Review auth logs
```

**Problem: Token expired, user logged out**
```
Solution:
1. Implement refresh token logic
2. Catch 401 responses in interceptor
3. Call refresh endpoint
4. Retry original request
5. Redirect to login if refresh fails
```

---

### Payment Issues (Phase 2+)

**Problem: Payment processing fails**
```
Solution:
1. Verify Stripe keys are correct
2. Check payment amount is valid
3. Verify customer in Stripe dashboard
4. Check webhook configuration
5. Review payment logs
```

---

## 🔍 Debugging Techniques

### Console Logging
```typescript
// Use LoggerService instead of console.log
this.logger.debug('Debug message');
this.logger.info('Info message');
this.logger.warn('Warning message');
this.logger.error('Error message');
```

### Angular DevTools
1. Install Angular DevTools Chrome extension
2. Open DevTools → Angular tab
3. Inspect component tree
4. View component properties
5. Modify state for testing

### Network Debugging
1. Open DevTools → Network tab
2. Monitor API calls
3. Check request/response headers
4. Verify status codes (200, 401, 500, etc.)
5. Check response payload

### Performance Profiling
1. Open DevTools → Performance tab
2. Record interaction
3. Analyze flame chart
4. Identify bottlenecks
5. Optimize slow operations

---

## 📋 Diagnostic Checklist

Before reporting an issue, verify:

- [ ] Node version: `node --version` (should be 18+)
- [ ] npm version: `npm --version` (should be 10+)
- [ ] Dependencies installed: `npm install`
- [ ] Dev server running: `npm start`
- [ ] Browser console clear of errors
- [ ] Network requests returning 200/201/204
- [ ] No red X marks in DevTools
- [ ] Cache cleared: Hard refresh (Ctrl+Shift+R)
- [ ] Restart dev server: `npm start`
- [ ] Latest code pulled: `git pull`

---

## 🆘 Getting Help

### Information to Provide

When reporting an issue, include:
1. **Error message** - Exact error text
2. **Steps to reproduce** - What you did when error occurred
3. **Expected behavior** - What should happen
4. **Actual behavior** - What actually happened
5. **Environment** - Node version, OS, browser
6. **Screenshots** - If visual issue
7. **Terminal output** - Full error stack

### Debug Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list

# Check for outdated packages
npm outdated

# Verify build
npm run build

# Run tests
npm run test

# Run linter
npm run lint

# Check dependencies
npm ls

# Clear cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support Resources

- **Documentation:** See /docs folder
- **GitHub Issues:** Report bugs
- **Stack Overflow:** Tag with [angular] [fitness-coaching]
- **Angular Docs:** https://angular.io/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

**Last Updated:** July 20, 2026  
**Version:** 1.0
