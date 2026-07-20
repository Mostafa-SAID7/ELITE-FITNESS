# HIT Egypt - Database Schema Documentation

## 📊 Overview

**Database System:** PostgreSQL (Recommended)  
**Version:** 12+  
**Purpose:** Support user management, bookings, payments, and content management  
**Status:** Ready for Phase 2 Implementation

---

## 🏗️ Database Architecture

### ER Diagram Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE STRUCTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐      ┌──────────────┐     ┌──────────────┐   │
│  │    USERS     │◄─────┤   BOOKINGS   │────►│   SESSIONS   │   │
│  └──────────────┘      └──────────────┘     └──────────────┘   │
│         │                      │                     │          │
│         │                      │                     │          │
│         ▼                      ▼                     ▼          │
│  ┌──────────────┐      ┌──────────────┐     ┌──────────────┐   │
│  │   PROFILES   │      │   PAYMENTS   │     │   PROGRAMS   │   │
│  └──────────────┘      └──────────────┘     └──────────────┘   │
│                                │                     │          │
│                                ▼                     ▼          │
│                        ┌──────────────┐     ┌──────────────┐   │
│                        │  INVOICES    │     │  TRAINERS    │   │
│                        └──────────────┘     └──────────────┘   │
│                                                                 │
│  ┌──────────────┐      ┌──────────────┐     ┌──────────────┐   │
│  │ MEMBERSHIPS  │      │ TESTIMONIALS │     │    CONTENT   │   │
│  └──────────────┘      └──────────────┘     └──────────────┘   │
│         │                                            │          │
│         └──────────────────┬──────────────────────────┘          │
│                            │                                    │
│                     ┌──────▼──────┐                             │
│                     │  LOCATIONS  │                             │
│                     └─────────────┘                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📋 Table Definitions

### 1. USERS Table

**Purpose:** Store user account information  
**Primary Key:** id (UUID)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  profile_picture_url TEXT,
  bio TEXT,
  date_of_birth DATE,
  gender ENUM('M', 'F', 'Other'),
  is_active BOOLEAN DEFAULT true,
  email_verified BOOLEAN DEFAULT false,
  two_factor_enabled BOOLEAN DEFAULT false,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_is_active ON users(is_active);
```

**Sample Data:**
```
id: 123e4567-e89b-12d3-a456-426614174000
email: john.doe@example.com
first_name: John
last_name: Doe
phone: +201234567890
```

---

### 2. PROFILES Table

**Purpose:** Extended user profile information  
**Primary Key:** id (UUID)  
**Foreign Key:** user_id (references users)

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  fitness_level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  fitness_goals TEXT,
  medical_conditions TEXT,
  injuries TEXT,
  allergies TEXT,
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(20),
  membership_type ENUM('basic', 'premium', 'elite') DEFAULT 'basic',
  membership_start_date DATE,
  membership_end_date DATE,
  preferred_trainer_id UUID REFERENCES users(id),
  preferred_training_time VARCHAR(50),
  newsletter_subscription BOOLEAN DEFAULT true,
  sms_notifications BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_membership_type ON profiles(membership_type);
```

---

### 3. PROGRAMS Table

**Purpose:** Store fitness program/class information  
**Primary Key:** id (UUID)

```sql
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  category VARCHAR(50) NOT NULL,
  difficulty_level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  duration_minutes INT DEFAULT 60,
  max_participants INT DEFAULT 20,
  price_per_session DECIMAL(10, 2),
  price_per_month DECIMAL(10, 2),
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  features TEXT[], -- Array of features
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_programs_category ON programs(category);
CREATE INDEX idx_programs_is_active ON programs(is_active);
CREATE INDEX idx_programs_slug ON programs(slug);
```

---

### 4. TRAINERS Table

**Purpose:** Store trainer/coach information  
**Primary Key:** id (UUID)

```sql
CREATE TABLE trainers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  specializations TEXT[],
  certifications TEXT[],
  years_experience INT,
  hourly_rate DECIMAL(10, 2),
  availability_status ENUM('available', 'on_leave', 'inactive') DEFAULT 'available',
  max_clients INT DEFAULT 20,
  current_clients_count INT DEFAULT 0,
  rating DECIMAL(3, 2),
  total_reviews INT DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_trainers_user_id ON trainers(user_id);
CREATE INDEX idx_trainers_specializations ON trainers USING GIN(specializations);
```

---

### 5. SESSIONS Table

**Purpose:** Store fitness class/session instances  
**Primary Key:** id (UUID)

```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  trainer_id UUID REFERENCES trainers(id),
  location_id UUID REFERENCES locations(id),
  session_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  capacity INT NOT NULL,
  current_participants INT DEFAULT 0,
  waitlist_count INT DEFAULT 0,
  status ENUM('scheduled', 'in_progress', 'completed', 'cancelled') DEFAULT 'scheduled',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sessions_program_id ON sessions(program_id);
CREATE INDEX idx_sessions_trainer_id ON sessions(trainer_id);
CREATE INDEX idx_sessions_session_date ON sessions(session_date);
CREATE INDEX idx_sessions_status ON sessions(status);
```

---

### 6. BOOKINGS Table

**Purpose:** Store user session bookings  
**Primary Key:** id (UUID)

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('confirmed', 'attended', 'cancelled', 'no_show', 'waitlisted') DEFAULT 'confirmed',
  cancellation_reason TEXT,
  cancelled_at TIMESTAMP,
  attended_at TIMESTAMP,
  feedback_rating INT, -- 1-5 rating
  feedback_comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_session_id ON bookings(session_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE UNIQUE INDEX idx_bookings_unique ON bookings(user_id, session_id) WHERE status IN ('confirmed', 'attended');
```

---

### 7. MEMBERSHIPS Table

**Purpose:** Store membership/subscription information  
**Primary Key:** id (UUID)

```sql
CREATE TABLE memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  membership_type ENUM('basic', 'premium', 'elite') NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  auto_renew BOOLEAN DEFAULT true,
  monthly_price DECIMAL(10, 2),
  classes_per_month INT,
  sessions_used INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  cancellation_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_memberships_user_id ON memberships(user_id);
CREATE INDEX idx_memberships_is_active ON memberships(is_active);
```

---

### 8. PAYMENTS Table

**Purpose:** Track all financial transactions  
**Primary Key:** id (UUID)

```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  membership_id UUID REFERENCES memberships(id) ON DELETE SET NULL,
  booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  payment_method ENUM('credit_card', 'debit_card', 'bank_transfer', 'stripe', 'paypal') NOT NULL,
  status ENUM('pending', 'completed', 'failed', 'refunded', 'partially_refunded') DEFAULT 'pending',
  stripe_payment_id VARCHAR(255) UNIQUE,
  description VARCHAR(255),
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_paid_at ON payments(paid_at);
```

---

### 9. INVOICES Table

**Purpose:** Store invoice records for accounting  
**Primary Key:** id (UUID)

```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  payment_id UUID REFERENCES payments(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  tax_amount DECIMAL(10, 2) DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  invoice_date DATE NOT NULL,
  due_date DATE,
  status ENUM('draft', 'sent', 'paid', 'overdue', 'cancelled') DEFAULT 'draft',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_user_id ON invoices(user_id);
CREATE INDEX idx_invoices_invoice_number ON invoices(invoice_number);
CREATE INDEX idx_invoices_status ON invoices(status);
```

---

### 10. TESTIMONIALS Table

**Purpose:** Store user reviews and testimonials  
**Primary Key:** id (UUID)

```sql
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT false,
  approved_at TIMESTAMP,
  approved_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_testimonials_user_id ON testimonials(user_id);
CREATE INDEX idx_testimonials_is_approved ON testimonials(is_approved);
CREATE INDEX idx_testimonials_is_featured ON testimonials(is_featured);
```

---

### 11. CONTENT Table

**Purpose:** Store blog posts, articles, and other content  
**Primary Key:** id (UUID)

```sql
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  content_type ENUM('blog', 'article', 'guide', 'workout', 'nutrition') NOT NULL,
  category VARCHAR(100),
  featured_image_url TEXT,
  author_id UUID REFERENCES users(id),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  view_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_content_slug ON content(slug);
CREATE INDEX idx_content_is_published ON content(is_published);
CREATE INDEX idx_content_content_type ON content(content_type);
```

---

### 12. LOCATIONS Table

**Purpose:** Store gym/training location information  
**Primary Key:** id (UUID)

```sql
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100) DEFAULT 'Egypt',
  phone VARCHAR(20),
  email VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  opening_hours_monday VARCHAR(50),
  opening_hours_tuesday VARCHAR(50),
  opening_hours_wednesday VARCHAR(50),
  opening_hours_thursday VARCHAR(50),
  opening_hours_friday VARCHAR(50),
  opening_hours_saturday VARCHAR(50),
  opening_hours_sunday VARCHAR(50),
  capacity INT,
  amenities TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_locations_city ON locations(city);
CREATE INDEX idx_locations_is_active ON locations(is_active);
```

---

## 🔗 Relationships

### One-to-Many Relationships
- `users` → `profiles` (1:1, special case)
- `users` → `bookings` (1:many)
- `users` → `payments` (1:many)
- `users` → `memberships` (1:many)
- `programs` → `sessions` (1:many)
- `sessions` → `bookings` (1:many)
- `trainers` → `sessions` (1:many)
- `locations` → `sessions` (1:many)

### Many-to-Many Relationships
- `users` ↔ `programs` (through `bookings`)
- `users` ↔ `trainers` (through `sessions`)

---

## 📈 Indexing Strategy

### Performance Optimization Indexes
```sql
-- Search and Filter Indexes
CREATE INDEX idx_sessions_datetime 
  ON sessions(session_date, start_time);

CREATE INDEX idx_bookings_user_session 
  ON bookings(user_id, session_id);

CREATE INDEX idx_payments_user_created 
  ON payments(user_id, created_at);

-- Composite Indexes
CREATE INDEX idx_users_email_active 
  ON users(email, is_active);

CREATE INDEX idx_sessions_program_date 
  ON sessions(program_id, session_date);

-- Partial Indexes
CREATE INDEX idx_active_bookings 
  ON bookings(user_id, session_id) 
  WHERE status = 'confirmed';

CREATE INDEX idx_active_memberships 
  ON memberships(user_id) 
  WHERE is_active = true;
```

---

## 🔐 Data Integrity & Constraints

### Foreign Key Constraints
```sql
ALTER TABLE profiles 
ADD CONSTRAINT fk_profiles_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE bookings 
ADD CONSTRAINT fk_bookings_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE bookings 
ADD CONSTRAINT fk_bookings_session 
FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE;

ALTER TABLE payments 
ADD CONSTRAINT fk_payments_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;
```

### Unique Constraints
```sql
ALTER TABLE users 
ADD CONSTRAINT uk_users_email UNIQUE(email);

ALTER TABLE programs 
ADD CONSTRAINT uk_programs_slug UNIQUE(slug);

ALTER TABLE invoices 
ADD CONSTRAINT uk_invoices_number UNIQUE(invoice_number);
```

### Check Constraints
```sql
ALTER TABLE bookings 
ADD CONSTRAINT ck_bookings_rating 
CHECK (feedback_rating IS NULL OR (feedback_rating >= 1 AND feedback_rating <= 5));

ALTER TABLE payments 
ADD CONSTRAINT ck_payments_amount 
CHECK (amount > 0);

ALTER TABLE testimonials 
ADD CONSTRAINT ck_testimonials_rating 
CHECK (rating >= 1 AND rating <= 5);
```

---

## 🚀 Optimization Tips

### Query Optimization
1. Use indexes on frequently filtered columns
2. Use EXPLAIN ANALYZE for query planning
3. Partition large tables by date
4. Archive old data periodically
5. Use materialized views for complex reports

### Performance Tuning
```sql
-- Enable query statistics
EXPLAIN ANALYZE SELECT * FROM bookings 
WHERE user_id = '123e4567-e89b-12d3-a456-426614174000';

-- Analyze query performance
ANALYZE bookings;
ANALYZE sessions;

-- Vacuum and optimize
VACUUM ANALYZE;
```

---

## 📊 Views for Reporting

### Common Reporting Views

```sql
-- Active Members Count
CREATE VIEW v_active_members AS
SELECT COUNT(DISTINCT user_id) as active_count
FROM memberships
WHERE is_active = true AND end_date >= CURRENT_DATE;

-- Monthly Revenue
CREATE VIEW v_monthly_revenue AS
SELECT 
  DATE_TRUNC('month', paid_at) as month,
  SUM(amount) as total_revenue,
  COUNT(*) as transaction_count
FROM payments
WHERE status = 'completed'
GROUP BY DATE_TRUNC('month', paid_at);

-- Attendance Rate
CREATE VIEW v_attendance_stats AS
SELECT 
  user_id,
  COUNT(CASE WHEN status = 'attended' THEN 1 END) as attended_count,
  COUNT(CASE WHEN status = 'no_show' THEN 1 END) as no_show_count,
  COUNT(*) as total_bookings,
  ROUND(100.0 * COUNT(CASE WHEN status = 'attended' THEN 1 END) / COUNT(*), 2) as attendance_rate
FROM bookings
GROUP BY user_id;
```

---

## 🔄 Data Migration & Backup

### Backup Strategy
```bash
# Daily backup
pg_dump fitness_coaching > backup_$(date +%Y%m%d).sql

# Automated backup with compression
pg_dump -Fc fitness_coaching > backup_$(date +%Y%m%d).dump

# Restore from backup
pg_restore -d fitness_coaching backup_20260720.dump
```

---

## 📝 Sample Queries

### User Management
```sql
-- Get all active users with membership info
SELECT u.id, u.email, u.first_name, m.membership_type, m.end_date
FROM users u
LEFT JOIN memberships m ON u.id = m.user_id
WHERE u.is_active = true;

-- Users with expiring memberships
SELECT u.email, m.end_date
FROM users u
JOIN memberships m ON u.id = m.user_id
WHERE m.is_active = true 
AND m.end_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days';
```

### Booking Analytics
```sql
-- Session attendance statistics
SELECT 
  s.program_id,
  p.name as program_name,
  COUNT(*) as total_bookings,
  COUNT(CASE WHEN b.status = 'attended' THEN 1 END) as attended,
  COUNT(CASE WHEN b.status = 'no_show' THEN 1 END) as no_show,
  ROUND(100.0 * COUNT(CASE WHEN b.status = 'attended' THEN 1 END) / COUNT(*), 2) as attendance_rate
FROM bookings b
JOIN sessions s ON b.session_id = s.id
JOIN programs p ON s.program_id = p.id
GROUP BY s.program_id, p.name;
```

### Revenue Analysis
```sql
-- Monthly revenue by membership type
SELECT 
  DATE_TRUNC('month', p.paid_at) as month,
  pr.membership_type,
  COUNT(*) as transaction_count,
  SUM(p.amount) as total_revenue
FROM payments p
JOIN memberships m ON p.membership_id = m.id
JOIN profiles pr ON m.user_id = pr.user_id
WHERE p.status = 'completed'
GROUP BY DATE_TRUNC('month', p.paid_at), pr.membership_type;
```

---

## ✅ Database Validation Checklist

- [ ] All tables created with proper constraints
- [ ] All indexes created for performance
- [ ] Foreign keys configured correctly
- [ ] Backup/recovery procedures documented
- [ ] User permissions configured
- [ ] Data retention policies set
- [ ] Logging enabled for audit trails
- [ ] Regular maintenance scheduled
- [ ] Disaster recovery plan prepared
- [ ] Performance baselines established

---

**Database Version:** 1.0  
**Compatible with:** Phase 2+ Implementation  
**Last Updated:** July 20, 2026  
**Status:** Ready for Development
