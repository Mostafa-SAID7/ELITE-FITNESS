# HIT Egypt - Glossary & Terminology

## 📖 Project Terminology

### Architecture Terms

**Feature-Based Architecture**
Organizing code by business features rather than technical layers. Each feature is self-contained with its own components, services, and models.

**Standalone Component**
Angular component that doesn't belong to any NgModule. Uses `standalone: true` in component decorator.

**Path Alias**
Shorthand import path configured in tsconfig.json. Example: `@shared/components` instead of `../../../shared/components`

**Barrel Export**
File (index.ts) that re-exports multiple items from a folder. Simplifies imports: `import { Component } from '@shared/components'`

**Lazy Loading**
Loading code only when needed. Routes are lazy-loaded, reducing initial bundle size.

**Interceptor**
Service that intercepts HTTP requests/responses. Used for adding tokens, handling errors, logging.

**Guard**
Service that controls route access. Types: CanActivate (prevent route entry), CanDeactivate (prevent route exit).

---

### Angular Terms

**Component**
Reusable UI element with template, logic, and styling. Standalone components use `standalone: true`.

**Service**
Shared business logic, often used for API calls, logging, or managing state.

**Module**
Container for components, services, and other code. Standalone components reduce module dependencies.

**Directive**
Marker on a DOM element that tells Angular to attach behavior. Example: `*ngIf`, `*ngFor`

**Pipe**
Function that transforms data for display. Example: `{{ date | date:'short' }}`

**Observable**
RxJS pattern for handling asynchronous data. Used for HTTP requests, events, timers.

**Reactive Forms**
Angular form handling with FormControl, FormGroup. Provides more control than template-driven forms.

---

### Styling Terms

**Tailwind CSS**
Utility-first CSS framework. Uses classes like `bg-red-600`, `p-4` directly in HTML.

**SCSS**
Sass CSS preprocessor. Supports variables, nesting, mixins. Files end with `.scss`

**CSS-in-JS**
Styling approach using JavaScript. Not used here; we use Tailwind + SCSS.

**Responsive Design**
Design that adapts to different screen sizes. Mobile-first approach: design for mobile first, then add enhancements.

**Breakpoint**
Screen width threshold for responsive design changes. Common: sm (640px), md (768px), lg (1024px)

---

### Database Terms

**PostgreSQL**
Relational database management system. Stores structured data with tables and relationships.

**Schema**
Structure of database tables including columns, types, and constraints.

**Primary Key**
Unique identifier for each row in a table. Usually `id` field.

**Foreign Key**
Reference to primary key in another table. Creates relationships between tables.

**UUID**
Universally Unique Identifier. 36-character string used as ID: `123e4567-e89b-12d3-a456-426614174000`

**Index**
Database structure for faster queries. Applied to frequently searched columns.

**Query**
SQL statement to retrieve or modify data. Example: `SELECT * FROM users WHERE id = 123`

---

### API Terms

**REST**
Representational State Transfer. API style using HTTP methods (GET, POST, PUT, DELETE) on resources.

**Endpoint**
Specific URL path for an API operation. Example: `GET /api/users/123`

**Request**
Data sent to API. Includes method (GET/POST/etc), URL, headers, and body.

**Response**
Data returned from API. Includes status code (200, 404, 500, etc) and body.

**Status Code**
HTTP response code indicating result. 2xx (success), 4xx (client error), 5xx (server error)

**JWT**
JSON Web Token. Authentication token containing encoded user information. Used in Authorization header.

**Bearer Token**
Token sent in HTTP header: `Authorization: Bearer <token>`

**CORS**
Cross-Origin Resource Sharing. Allows API to accept requests from different domains.

**Rate Limiting**
Restricting number of API requests per time period. Prevents abuse.

---

### SEO Terms

**Meta Tags**
HTML tags providing page information. Include title, description, keywords, og:image.

**Open Graph (OG)**
Meta tags for social media sharing. Control how content appears on Facebook, Twitter, etc.

**Canonical URL**
Preferred URL for a page. Tells search engines which version to index if duplicates exist.

**Schema.org**
Structured data markup. Helps search engines understand page content. Uses JSON-LD format.

**Sitemap**
XML file listing all pages on website. Helps search engines find and index content.

**Robots.txt**
Text file in root directory. Tells search engine crawlers which pages to crawl.

**Crawling**
Search engine robots reading webpage content and links.

**Indexing**
Adding webpages to search engine database.

---

### Security Terms

**Authentication**
Verifying user identity. "Who are you?"

**Authorization**
Checking user permissions. "What can you do?"

**Encryption**
Converting data to unreadable format using cipher. AES-256 for data at rest, TLS for data in transit.

**Hashing**
One-way function converting data to fixed-size string. Bcrypt used for passwords.

**HTTPS**
Secure version of HTTP. Uses SSL/TLS encryption for data in transit.

**SSL/TLS**
Secure socket/Transport layer security. Encrypts data between client and server.

**OWASP**
Open Worldwide Application Security Project. Documents top 10 web vulnerabilities.

**XSS**
Cross-Site Scripting. Injecting malicious JavaScript into webpages. Prevented by input sanitization.

**CSRF**
Cross-Site Request Forgery. Tricking user into executing unwanted actions. Prevented by CSRF tokens.

**SQL Injection**
Inserting malicious SQL code into input fields. Prevented by parameterized queries.

---

### Testing Terms

**Unit Test**
Testing individual functions or components in isolation.

**Integration Test**
Testing multiple components working together.

**E2E Test**
End-to-end test. Testing complete user workflows.

**Jasmine**
JavaScript testing framework. Used for unit tests.

**Karma**
Test runner for JavaScript tests. Runs tests in browsers.

**Cypress**
E2E testing framework. Tests applications as user would.

**Test Coverage**
Percentage of code tested. Goal: >80% coverage.

**Mock**
Fake object simulating real behavior. Used to isolate units under test.

---

### Performance Terms

**Lighthouse**
Google tool for auditing page performance, accessibility, SEO. Score 0-100.

**Core Web Vitals**
Google's key performance metrics:
- LCP: Largest Contentful Paint (< 2.5s)
- FID: First Input Delay (< 100ms)
- CLS: Cumulative Layout Shift (< 0.1)

**Bundle Size**
Total size of JavaScript sent to browser. Smaller is better for performance.

**Gzip**
Compression algorithm. Reduces file sizes for transfer.

**Tree Shaking**
Removing unused code from bundle. Works with ES6 modules.

**Minification**
Removing unnecessary characters from code. Reduces file size.

---

### DevOps Terms

**Docker**
Containerization platform. Packages application with dependencies.

**Container**
Isolated environment running application. Like lightweight VM.

**Image**
Blueprint for creating containers. Contains application and dependencies.

**CI/CD**
Continuous Integration/Continuous Deployment. Automated testing and deployment.

**Git**
Version control system. Tracks code changes.

**Branch**
Isolated copy of code for feature development.

**Commit**
Snapshot of code changes with message.

**Pull Request (PR)**
Proposed changes submitted for review before merging.

**Deploy**
Releasing application to production server.

---

### Project-Specific Terms

**HIT Egypt**
The client/project name. Elite Fitness Coaching Platform.

**Phase 1**
Foundation phase: Core application with components, services, SEO (COMPLETED ✅)

**Phase 2**
User System & Bookings: Authentication, booking system, payments (Q3-Q4 2026)

**Phase 3**
Mobile App: iOS and Android native applications (Q1-Q2 2027)

**Phase 4**
Admin Dashboard: Administrative interface and reporting (Q2-Q3 2027)

**Phase 5**
Advanced Features: AI, social features, CMS (Q3-Q4 2027)

**Phase 6**
Franchise & Expansion: Multi-location support (Q4 2027 - Q1 2028)

---

## 📊 Metrics Terminology

**Active Users**
Users engaging with application in specified time period.

**Conversion Rate**
Percentage of users completing desired action (signup, booking, payment).

**Churn Rate**
Percentage of users stopping use of service.

**Customer Acquisition Cost (CAC)**
Average cost to acquire one new customer.

**Customer Lifetime Value (LTV)**
Total revenue expected from customer relationship.

**ROI**
Return on Investment. (Profit / Investment) × 100

---

**Version:** 1.0  
**Last Updated:** July 20, 2026
