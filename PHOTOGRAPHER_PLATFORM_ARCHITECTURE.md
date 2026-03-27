# Sylvester Garza Platform Architecture Blueprint

## 1. Executive Summary

This system should be built as a revenue platform first and a media portfolio second.

The immediate goal is to turn existing domain authority in Houston headshots, corporate, industrial, and product photography into a predictable lead engine with faster conversion, better qualification, and higher average order value.

The long-term goal is to evolve the same system into a multi-user platform where photographers, trainees, and subscribers operate inside a shared business engine instead of a brochure site.

### Primary Business Outcomes

1. Increase qualified inbound leads from SEO and direct traffic
2. Reduce friction from inquiry to booked consultation or shoot
3. Capture first-party data on every visitor and lead source
4. Create a reusable platform core for training, subscriptions, and photographer onboarding
5. Establish recurring revenue in addition to project-based bookings

### Core Product Positioning

This is not a portfolio rebuild.

This is a two-layer business system:

1. A conversion engine for photography services
2. A platform foundation for subscriptions, training, and network expansion

---

## 2. System Vision

### Phase 1: Revenue Engine

Build a fast, SEO-optimized, conversion-first public experience that sells services with:

- Service landing pages instead of gallery-first pages
- Structured packages and pricing anchors
- Smart inquiry forms
- Instant follow-up workflows
- Call and WhatsApp conversion paths
- CRM-ready lead capture

### Phase 2: Platform Foundation

Extend the same system into a multi-user SaaS platform with:

- Photographer accounts
- Admin controls
- Training content and gated modules
- Recurring subscriptions
- Team and location expansion
- Standardized sales and fulfillment workflows

---

## 3. Recommended Technical Architecture

## 3.1 High-Level Stack

### Frontend

- Next.js App Router
- Server-side rendering for SEO pages
- Incremental static regeneration for stable content pages
- React Server Components for fast content delivery
- Tailwind CSS or modular CSS system for lean UI
- `next/image` with remote optimization or pre-generated responsive assets

### Backend

- Node.js + Express API service
- Modular service layer for lead intake, booking, pricing, subscriptions, training, and notifications
- Queue worker for async jobs such as follow-up messages, emails, webhook syncs, and image processing

### Database

- MongoDB Atlas
- Multi-tenant-ready schema from day one using `tenantId`

### Supporting Services

- Object storage: AWS S3 for originals and optimized derivatives
- CDN: CloudFront or Vercel Edge for global delivery
- Email: Resend or Postmark
- WhatsApp: Meta WhatsApp Cloud API or Twilio
- Payments: Stripe
- Analytics: PostHog + GA4
- Scheduling: Calendly embed initially, native scheduler later
- Automation hooks: webhooks to Zapier, Make, or n8n

### Optional Auth Acceleration

- Supabase Auth can be used for dashboard authentication if speed-to-market matters more than auth customization
- If data ownership and backend consistency are the priority, keep auth inside the Node/Express layer with JWT + refresh tokens

Recommendation:
Use MongoDB + Express as the source of truth and treat Supabase as optional infrastructure, not as the application core.

---

## 3.2 Logical Architecture

```text
Visitor
  -> Next.js frontend
      -> SEO pages / service pages / landing pages
      -> conversion forms / call / WhatsApp / booking CTA
      -> server-side event tracking
  -> Express API
      -> lead intake service
      -> pricing/package service
      -> booking/availability service
      -> CRM sync service
      -> training/content access service
      -> subscription service
      -> notification service
  -> MongoDB
      -> leads / contacts / bookings / services / courses / subscriptions / users
  -> Queue/Workers
      -> emails / WhatsApp / reminders / webhook retries / analytics enrichment
```

---

## 3.3 Architecture Principles

- Performance-first: minimal JS on public pages, few images, aggressive caching
- Conversion-first: every page exists to move users toward inquiry, booking, or paid entry point
- Modular backend: service domains separated so SaaS features do not contaminate the Phase 1 build
- Multi-tenant ready: design once for Sylvester, expand later to additional photographers
- Data ownership: all core customer, lead, and transaction data stays in MongoDB
- SEO-native: each service page is structured as a search landing page, not an image gallery

---

## 4. Frontend Architecture

## 4.1 Application Zones

### Public Revenue Zone

- Homepage
- Service category pages
- Location pages
- Quote/inquiry flow
- Booking flow
- Workshop/training sales pages

### Authenticated User Zone

- Admin dashboard for Sylvester and staff
- Photographer dashboard for future network members
- Subscriber dashboard for training customers

### Content Zone

- Articles
- Case studies
- FAQs
- Training modules
- Landing pages for workshops and campaigns

---

## 4.2 Frontend Rendering Strategy

### SSR

Use SSR for:

- Homepage
- Category pages
- Houston local SEO pages
- Industry-specific landing pages
- Case studies

Reason:
These pages need search visibility, metadata control, and fast first contentful paint.

### ISR

Use ISR for:

- Workshop pages
- FAQ hubs
- Static training marketing pages
- About and authority pages

### Client Interactivity Only Where It Adds Revenue

Use client components only for:

- Dynamic lead forms
- Quote builders
- Booking widgets
- Dashboard modules
- Analytics events

Avoid heavy carousels, auto-playing media, and portfolio galleries on landing pages.

---

## 4.3 UI / UX Structure

### Design Direction

- Minimal
- Corporate
- High trust
- Sparse but premium
- Strong typography
- Clear proof blocks
- One action per section

### Conversion Layout Formula

Every service page should follow:

1. Service promise
2. Ideal client / use case
3. Outcome and deliverables
4. Package structure
5. Social proof / authority
6. FAQs / objection handling
7. CTA

### Mobile UX Rules

- Sticky bottom CTA bar with `Call`, `WhatsApp`, and `Request Quote`
- Forms split into short steps
- Tap targets large and thumb-friendly
- Avoid long visual galleries

---

## 5. Page-by-Page Revenue Architecture

## 5.1 Homepage

### Objective

Turn general traffic into segmented, high-intent traffic.

### Homepage Structure

1. Hero
   - Headline tied to business outcome, not art
   - Example: "Houston Photography That Helps Companies Sell, Hire, and Present Better"
   - Primary CTA: `Request a Quote`
   - Secondary CTA: `Book a Call`
   - Tertiary CTA: `WhatsApp`

2. Service segmentation block
   - Headshots
   - Corporate
   - Industrial
   - Product
   - Each card routes to a tailored conversion page

3. Credibility block
   - 30+ years experience
   - Houston-based
   - Client logos
   - Short proof metrics

4. Outcome-driven case proof
   - 1 to 2 images maximum per service
   - Copy focuses on business results, speed, professionalism, consistency

5. Package preview
   - Starting package anchors by category
   - "From" pricing if pricing transparency is strategically acceptable
   - Enterprise/custom option always available

6. Process block
   - Inquiry
   - Fast qualification
   - Shoot planning
   - Delivery

7. CTA band
   - Quote request
   - WhatsApp
   - Call now

8. FAQ and objections
   - Turnaround time
   - Retouching
   - On-location availability
   - Corporate teams
   - Licensing

### Homepage KPI Goals

- Quote-start rate
- CTA click-through rate
- Scroll depth by traffic source
- Service category selection rate

---

## 5.2 Category Pages

Create four primary category pages:

- `/headshots`
- `/corporate-photography`
- `/industrial-photography`
- `/product-photography`

Each is effectively a sales page with SEO structure.

### Shared Category Page Template

1. Category-specific headline with Houston relevance
2. Target customer segment
3. Core service outcomes
4. Package matrix
5. Example deliverables
6. Trust markers
7. Short case example
8. FAQ
9. Persistent CTA

### Category Conversion Modules

#### Headshots

- Solo professional packages
- Team headshots
- Executive branding sessions
- Quick booking option
- Upsells: additional looks, rush edits, retouching, team consistency package

#### Corporate

- Office culture shoots
- executive portraits
- event coverage
- brand content retainers
- Upsells: quarterly content subscription, multi-office days

#### Industrial

- On-site plant/facility work
- safety-compliant capture
- operations documentation
- recruiting and investor communications
- Upsells: ongoing documentation contracts, monthly site coverage

#### Product Photography

- Ecommerce packages
- catalog image bundles
- styled product campaigns
- Amazon/shop listing kits
- Upsells: recurring monthly content production

### Category Page SEO Model

Each category page should support:

- Primary service keyword
- Houston geo modifier
- Commercial intent copy
- FAQ schema
- LocalBusiness + Service schema
- Internal links to case studies and location pages

---

## 5.3 Conversion Flow Pages

### Request Quote Flow

Use a multi-step form:

1. Select service type
2. Select client type
3. Project size and urgency
4. Preferred shoot date or timeline
5. Contact details
6. Optional budget range
7. Preferred contact method: email, phone, WhatsApp

### Smart Routing Behavior

- Small, high-intent headshot inquiry -> direct booking offer
- Large corporate or industrial inquiry -> consultation scheduling
- Product photography inquiry -> package recommendation + quote request
- Urgent inquiry -> immediate call prompt

### Post-Submission Experience

Do not dump users onto a generic thank-you page.

Instead:

1. Confirm request received
2. Show what happens next
3. Offer instant actions:
   - schedule call
   - send WhatsApp
   - upload project brief
4. Trigger automatic confirmation email and/or WhatsApp

---

## 5.4 Supporting Pages

- About / Authority page
- Case study hub
- Industry-specific pages
- Location pages around Houston metro
- Workshops page
- Training landing page
- Photographer network waitlist page

These pages support SEO, trust, and future monetization.

---

## 6. Visitor to Customer Journey

## 6.1 Phase 1 Journey

```text
Traffic Source
  -> Homepage or service landing page
  -> user selects service or engages CTA
  -> smart lead form captures intent
  -> Express API saves lead + enriches metadata
  -> instant confirmation and CTA routing
  -> admin dashboard surfaces lead priority
  -> automated follow-up sequence begins
  -> call/consultation or instant booking
  -> quote or package confirmation
  -> deposit/payment
  -> scheduled shoot
  -> delivery
  -> review request / repeat engagement / upsell
```

## 6.2 Lead Scoring Logic

Assign lead score from:

- Service type
- Company vs individual
- Timeline urgency
- Budget range
- Team size
- Repeat vs first-time lead
- Traffic source
- Phone/WhatsApp preference

### Lead Status Model

- `new`
- `qualified`
- `awaiting-contact`
- `consult-scheduled`
- `quoted`
- `won`
- `lost`
- `nurture`

---

## 7. Backend Domain Design

Split the backend into domain modules.

## 7.1 Core Modules

### Lead Service

- Creates leads from forms, calls, WhatsApp entries, and campaign pages
- Stores attribution data
- Scores and tags leads
- Pushes notifications

### Contact / CRM Service

- Stores person and company records
- Merges duplicate contacts
- Tracks communication history

### Service Catalog Service

- Manages service categories
- Packages
- deliverables
- pricing anchors
- turnaround rules

### Quote Service

- Generates quote drafts from package logic
- Applies add-ons
- Tracks status

### Booking Service

- Manages consultation slots or session slots
- Books sessions
- Tracks deposit/payment state

### Notification Service

- Email confirmation
- WhatsApp confirmation
- reminder workflows
- abandoned quote reminders

### Content Service

- Training modules
- case studies
- workshop pages
- FAQs

### Subscription Service

- Stripe products
- recurring billing
- access control
- trial and renewal logic

### User / Auth Service

- Admins
- staff
- photographers
- subscribers

---

## 7.2 Phase 2 Multi-Tenant Foundation

Every major record should support:

- `tenantId`
- `ownerUserId`
- `createdBy`
- `visibility`
- `status`

This makes it possible to onboard future photographers without redesigning the database.

### Tenancy Model

Use a shared database with tenant-scoped collections in early stages.

Reason:

- Lower operational overhead
- Faster reporting
- simpler deployment
- adequate for the first stages of SaaS scale

Move to isolated databases only if enterprise customers or compliance requirements force it later.

---

## 8. Suggested Database Schema

MongoDB collections below are intentionally designed for both Phase 1 and Phase 2.

## 8.1 `tenants`

```json
{
  "_id": "ObjectId",
  "name": "Sylvester Garza Photography",
  "slug": "sylvester-garza",
  "type": "studio",
  "plan": "owner",
  "settings": {
    "brand": {},
    "locales": ["en-US"],
    "timezone": "America/Chicago"
  },
  "status": "active",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.2 `users`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "role": "super_admin | admin | photographer | subscriber | staff",
  "name": "String",
  "email": "String",
  "phone": "String",
  "passwordHash": "String",
  "profile": {
    "title": "String",
    "bio": "String",
    "skills": ["String"]
  },
  "status": "active",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.3 `contacts`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "type": "individual | company_contact",
  "name": "String",
  "email": "String",
  "phone": "String",
  "companyId": "ObjectId",
  "source": {
    "channel": "organic | paid | referral | direct | whatsapp",
    "campaign": "String",
    "landingPage": "String"
  },
  "tags": ["String"],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.4 `companies`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "name": "String",
  "industry": "String",
  "size": "String",
  "website": "String",
  "location": {
    "city": "Houston",
    "state": "TX"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.5 `services`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "slug": "headshots",
  "name": "Headshots",
  "category": "portrait | corporate | industrial | product",
  "headline": "String",
  "description": "String",
  "outcomes": ["String"],
  "seo": {
    "title": "String",
    "description": "String",
    "faqSchema": []
  },
  "status": "active",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.6 `packages`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "serviceId": "ObjectId",
  "name": "Executive Team Day",
  "audience": "enterprise",
  "basePrice": 1500,
  "currency": "USD",
  "deliverables": ["String"],
  "turnaroundDays": 5,
  "addOns": [
    {
      "name": "Rush delivery",
      "price": 250
    }
  ],
  "status": "active",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.7 `leads`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "contactId": "ObjectId",
  "serviceId": "ObjectId",
  "packageId": "ObjectId",
  "status": "new",
  "score": 82,
  "intent": {
    "clientType": "individual | company",
    "teamSize": 12,
    "timeline": "next_2_weeks",
    "budgetRange": "1500_3000",
    "preferredContactMethod": "whatsapp"
  },
  "source": {
    "channel": "organic",
    "utm": {},
    "referrer": "String",
    "landingPage": "/headshots"
  },
  "notes": [],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.8 `quotes`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "leadId": "ObjectId",
  "items": [
    {
      "label": "Team headshots session",
      "qty": 1,
      "unitPrice": 1800
    }
  ],
  "subtotal": 1800,
  "discount": 0,
  "tax": 0,
  "total": 1800,
  "status": "draft | sent | accepted | expired",
  "expiresAt": "Date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.9 `bookings`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "leadId": "ObjectId",
  "contactId": "ObjectId",
  "serviceId": "ObjectId",
  "bookingType": "consultation | shoot",
  "scheduledStart": "Date",
  "scheduledEnd": "Date",
  "location": {
    "type": "studio | client_site | remote",
    "address": "String"
  },
  "status": "scheduled | completed | cancelled",
  "paymentStatus": "pending | deposit_paid | paid",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.10 `courses`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "title": "Corporate Photography Systems",
  "slug": "corporate-photography-systems",
  "description": "String",
  "price": 299,
  "accessType": "one_time | subscription",
  "status": "draft | published",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.11 `lessons`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "courseId": "ObjectId",
  "moduleTitle": "Client acquisition",
  "title": "Packaging headshot offers",
  "contentType": "video | pdf | checklist",
  "contentUrl": "String",
  "order": 1,
  "status": "published",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.12 `subscriptions`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "userId": "ObjectId",
  "stripeCustomerId": "String",
  "stripeSubscriptionId": "String",
  "plan": "training_pro | network_member",
  "status": "active | past_due | cancelled | trialing",
  "billingInterval": "month",
  "currentPeriodEnd": "Date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.13 `media_assets`

```json
{
  "_id": "ObjectId",
  "tenantId": "ObjectId",
  "type": "image | video | pdf",
  "purpose": "hero | case_study | lesson | gallery",
  "storageKey": "String",
  "altText": "String",
  "width": 1600,
  "height": 900,
  "mimeType": "image/jpeg",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## 8.14 Indexing Recommendations

- `leads`: `tenantId + status + createdAt`
- `leads`: `tenantId + source.channel + createdAt`
- `contacts`: `tenantId + email`
- `services`: `tenantId + slug`
- `packages`: `tenantId + serviceId`
- `bookings`: `tenantId + scheduledStart`
- `subscriptions`: `tenantId + userId + status`

---

## 9. API Structure

Use versioned Express routes under `/api/v1`.

## 9.1 Public API

### `GET /api/v1/services`

- list active service categories

### `GET /api/v1/services/:slug`

- get page-ready service data

### `POST /api/v1/leads`

- create a lead from form submission
- store attribution and service intent

### `POST /api/v1/lead-actions/call-request`

- create a callback request

### `POST /api/v1/lead-actions/whatsapp`

- log or initiate WhatsApp flow

### `POST /api/v1/quotes/estimate`

- generate estimated package range from user selections

### `POST /api/v1/bookings/consultation`

- reserve consultation slot

---

## 9.2 Admin API

### `GET /api/v1/admin/leads`

- filter by status, score, source, service

### `PATCH /api/v1/admin/leads/:id`

- update lead status, score, notes

### `POST /api/v1/admin/quotes`

- create quote

### `PATCH /api/v1/admin/quotes/:id`

- send, revise, or mark accepted

### `GET /api/v1/admin/bookings`

- calendar and fulfillment view

### `POST /api/v1/admin/services`

- create service definitions

### `POST /api/v1/admin/packages`

- create or update packages

### `GET /api/v1/admin/analytics/overview`

- revenue, lead source, conversion performance

---

## 9.3 Training / SaaS API

### `GET /api/v1/courses`

- list purchasable or included courses

### `GET /api/v1/courses/:slug`

- course detail

### `POST /api/v1/subscriptions/checkout`

- create Stripe checkout session

### `GET /api/v1/me/subscription`

- access status

### `GET /api/v1/me/lessons/:id`

- gated lesson access

### `POST /api/v1/network/applications`

- photographer onboarding interest

---

## 9.4 Webhooks

### `POST /api/v1/webhooks/stripe`

- subscription events
- payment events

### `POST /api/v1/webhooks/whatsapp`

- delivery and reply events

### `POST /api/v1/webhooks/automation`

- Zapier / Make / n8n callbacks

---

## 10. Admin Dashboard Design

## 10.1 Super Admin Dashboard for Sylvester

Modules:

- Lead inbox
- Deal pipeline
- Quote builder
- Booking calendar
- Package manager
- Content manager
- Course sales
- Subscription dashboard
- Photographer applications

### Priority Widgets

- New leads by service
- Hot leads requiring same-day contact
- Quote acceptance rate
- Revenue by category
- Lead source ROI
- Training sales

## 10.2 Future Photographer Dashboard

Modules:

- Profile and service settings
- Leads assigned
- Calendar
- training progress
- payout or subscription status
- standard operating procedures

## 10.3 Subscriber Dashboard

Modules:

- Purchased courses
- Lesson progress
- workshop registration
- account billing
- community or member resources later

---

## 11. Monetization Design

## 11.1 Immediate Revenue

### Core Service Revenue

- Headshots
- Corporate photography
- Industrial photography
- Product photography

### Revenue Optimization Tactics

- Package-based pricing instead of purely custom quoting
- Add-ons at quote stage
- Fast-response workflow for high-intent leads
- Retainers for recurring corporate and product clients

---

## 11.2 Mid-Term Revenue

### Paid Training

- How photographers sell headshots
- Product photography systems
- corporate client acquisition
- pricing and packaging

### Workshops

- In-person Houston workshops
- Live online masterclasses
- recorded replay upsells

### Retainers

- Quarterly corporate content plans
- Monthly product photography subscriptions
- Annual industrial documentation agreements

---

## 11.3 Long-Term SaaS Revenue

### Photographer Subscription Plans

- Training access plan
- Business systems plan
- Lead access plan
- Full network membership

### Platform Fees

- Monthly subscription
- Transaction fee on booked jobs
- Premium placement fees
- Add-on tools such as CRM, quote templates, or website kits

### Expansion Plays

- Multi-city service pages
- photographer network in additional metros
- white-labeled sub-sites for members

---

## 12. Platform Expansion Roadmap

## Phase 1: Conversion Engine

Timeline goal: 6 to 10 weeks

Deliver:

- New homepage
- Four category pages
- Lead forms
- booking flow
- admin lead inbox
- package management
- analytics tracking
- WhatsApp integration

Success metrics:

- Faster load time than current Divi site
- Higher inquiry conversion rate
- reduced manual back-and-forth
- improved lead source visibility

## Phase 2: Operations Layer

Timeline goal: 4 to 6 weeks after Phase 1

Deliver:

- Quote builder
- booking calendar
- deposit/payment integration
- CRM workflows
- automation sequences
- case study CMS

Success metrics:

- shorter sales cycle
- higher quote acceptance rate
- improved repeat business

## Phase 3: Training Platform

Timeline goal: 6 to 8 weeks

Deliver:

- Course catalog
- lesson delivery
- gated subscriber dashboard
- Stripe subscriptions
- workshop registration flow

Success metrics:

- non-service revenue share begins
- email list monetization increases

## Phase 4: Photographer Network SaaS

Timeline goal: after offer-market fit

Deliver:

- photographer onboarding
- tenant setup
- profile system
- shared lead routing
- access tiers
- admin controls for moderation and payouts

Success metrics:

- monthly recurring revenue
- low churn among photographer members
- expansion beyond Houston

---

## 13. Deployment Strategy

## 13.1 Recommended Deployment Topology

### Frontend

- Deploy Next.js on Vercel
- Use edge caching for public pages
- image optimization through Next.js + CDN-backed assets

### Backend

- Deploy Express API on Railway, Render, Fly.io, or AWS ECS
- Keep it stateless
- Scale horizontally by container count

### Database

- MongoDB Atlas with automated backups
- Separate production and staging clusters

### Storage

- S3 bucket for media and downloadable lesson assets
- CloudFront in front of storage

### Jobs

- Background workers on the same platform as the API or a dedicated worker service

---

## 13.2 Environment Separation

- `development`
- `staging`
- `production`

Use separate:

- Mongo databases
- Stripe keys
- WhatsApp credentials
- email domains

---

## 13.3 Performance Targets

Public pages should target:

- Largest Contentful Paint under 2.0s on 4G
- JavaScript shipped under 150 KB on service pages where possible
- Lighthouse performance over 90
- minimal above-the-fold imagery

### Performance Tactics

- Pre-render service pages
- Avoid homepage sliders
- Use AVIF/WebP
- Lazy-load non-critical media
- inline critical content sections
- server-side analytics event dispatch where possible

---

## 13.4 Observability

- Sentry for application errors
- PostHog for funnel analytics
- uptime monitoring for API and booking flow
- dashboard alerts for lead form failures

---

## 14. Security and Data Ownership

- Store all lead and customer records in MongoDB
- Encrypt secrets and use managed secret storage
- Role-based access control for admin, photographer, subscriber
- Rate-limit public forms and APIs
- Add CAPTCHA only if spam becomes material
- Audit admin actions for quotes, lead changes, and content publication
- Store consent flags for marketing communications

---

## 15. Recommended Build Sequencing

## Sprint 1

- IA and conversion copy architecture
- service taxonomy
- Mongo schema setup
- Express API skeleton
- analytics event model

## Sprint 2

- Homepage
- category page template
- package blocks
- smart inquiry form
- thank-you flow

## Sprint 3

- lead inbox dashboard
- quote builder MVP
- WhatsApp integration
- email workflows

## Sprint 4

- booking and consultation flow
- case studies
- performance optimization
- SEO schema and metadata completion

## Sprint 5

- training content model
- Stripe subscriptions
- gated learning area

---

## 16. What Makes This a $10M-Capable System

This architecture creates leverage in three ways:

1. Traffic converts into owned lead data instead of disappearing into a portfolio experience
2. Services become standardized offers that are easier to sell, quote, and scale
3. The same core infrastructure can later monetize both customers and photographers

In practical terms, the business moves from:

- selling shoots manually

to:

- capturing demand
- qualifying demand
- converting demand
- retaining clients
- selling education
- onboarding other photographers
- collecting recurring subscription revenue

That is the difference between a freelance website and a platform business.

---

## 17. Recommended Non-Negotiables

1. Build around service pages, not gallery pages
2. Put `tenantId` in core collections now, not later
3. Keep MongoDB as the source of truth for leads, users, and subscriptions
4. Track attribution on every lead from day one
5. Use structured packages even if custom quoting still exists
6. Make WhatsApp and direct call flows first-class conversion paths
7. Treat training and subscriptions as product lines, not side projects

---

## 18. Recommended MVP Scope

If prioritization is tight, the MVP should include only:

- Homepage conversion funnel
- Four category sales pages
- Smart multi-step lead form
- Admin lead inbox
- package manager
- quote/consult routing
- basic analytics
- WhatsApp + email follow-up

This is enough to produce revenue lift while preserving the architecture for SaaS expansion.
