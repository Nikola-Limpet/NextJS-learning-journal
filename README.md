# 🚀 Next.js Learning Roadmap

> A comprehensive guide to mastering Next.js, building upon your React knowledge

---
 ![[Pasted image 20250228202749.png|]] 

## 📋 Overall Progress Tracker
| Section           | Status        | Completion Date |
| ----------------- | ------------- | --------------- |
| Fundamentals      | ✅ Completed   | 2025-2-28       |
| Core Concepts     | 🟡In Progress |                 |
| Advanced Features | ⬜ Not Started |                 |
| Projects          | ⬜ Not Started |                 |

---


## 🔍 Introduction to Next.js

### Progress Tracker
| Topic                          | Status      | Notes |
| ------------------------------ | ----------- | ----- |
| Understanding Next.js benefits | ✅ Completed |       |
| SSR vs CSR                     | ✅ Completed |       |
| Next.js ecosystem              | ⬜           |       |
- ***Server Side Rendering***: In Next JS, SSR involves generating the HTML for a page on the server for every request. So, the data will be up to date since the server pre-rendered everything in the server side. Also, it's SEO friendly that help search engine to index the page faster. But it will be increase the load on the server since it request to server every time.

```jsx
export async function getServerProps(context) {
	const res = await fetch('https://api.example.com/data);
	const data = await res.json();

	return {
		props: { data },
	}
	
}

export default function Page({ data }) {
	return <div>{data.title}</div>;
}
```

- ***Component Side Rendering***: is in JavaScript tradition, since it fetch the data in the browser after initial load page. 
	-   **Fetch data using React’s useEffect hook or a data-fetching library like SWR**:

```jsx

import { useEffect, useState } from 'react';
export default function Page() {
	const [data, setData] = useState(null);

	useEffect(() =>  {
		fetch('https://api.example.com/data')
		.then((res) => res.json())
		.then((data) => setData(data));
	}, [])

	if (!data) return <div>Loading...</div>

		return <div>{data.title} </div>
}
```


---


### Why Next.js?
- [x] Understanding the benefits over plain React ✅ 2025-02-28
- [x] Server-side rendering vs. client-side rendering ✅ 2025-02-28
- [x] The Next.js ecosystem ✅ 2025-02-28

**Resources:**
- [Next.js Official Introduction](https://nextjs.org/learn/foundations/about-nextjs)
- [Why Next.js? (YouTube)](https://www.youtube.com/watch?v=2tJedF8I-8Q)

**Mini-Project: Next.js vs React Comparison**
1. Create a simple counter component in React
2. Implement the same counter in Next.js
3. Compare dev experience, performance, and bundle size
4. Document key differences in an Obsidian note

## 🛠️ Getting Started

### Progress Tracker
| Topic             | Status    | Notes                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| Project setup     | ✅Complete |                                                                                                       |
| Project structure | ✅Complete |                                                                                                       |
| CRA vs Next.js    | ✅Complete | CRA no longer use. In Next.js the every in side app dir. By default, it has layout.tsx, and page.tsx. |
| Built-in tools    | ✅Complete | Tailwind CSS install, React, React Dom, TypeScript, type for (node, react, react-dom)                 |

### Setup & Basics
- [x] Setting up a Next.js project ✅ 2025-02-28
- [x] Project structure ✅ 2025-02-28
- [x] Next.js vs. Create React App differences ✅ 2025-02-28
- [x] Understanding the built-in tools ✅ 2025-02-28

**Resources:**
- [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)

**Mini-Project: Hello Next.js**
1. Set up a new Next.js project
2. Create a homepage with your name and brief intro
3. Add a second page with your interests
4. Create a navigation component
5. Run in development and production modes to see differences
----

## 🧩 Core Concepts

### Progress Tracker: Routing
| Topic                      | Status    | Notes |
| -------------------------- | --------- | ----- |
| File-system routing        | ✅Complete |       |
| Dynamic routes             | ✅Complete |       |
| Nested routes              | ✅Complete |       |
| Navigation                 | ✅Complete |       |
| App Router vs Pages Router | ✅Complete |       |

### Pages & Routing
- [x] File-system based routing ✅ 2025-02-28
- [x] Dynamic routes ✅ 2025-03-01
- [x] Nested routes ✅ 2025-03-01
- [x] Navigation between pages ✅ 2025-03-01
- [x] App Router vs Pages Router ✅ 2025-03-01

**Resources:**
- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [App Router Tutorial](https://nextjs.org/learn/dashboard-app/navigating-between-pages)

**Mini-Project: Personal Bookshelf**
1. Create a home page listing book categories
2. Implement category pages with dynamic routes `/category/[id]`
3. Add individual book pages with dynamic routes `/book/[id]`
4. Create a nested layout for the book section
5. Implement navigation between all pages
6. Add a 404 page for missing books/categories
---

### Progress Tracker: Data Fetching
| Topic | Status | Notes |
|-------|--------|-------|
| getServerSideProps | ⬜ | |
| getStaticProps | ⬜ | |
| getStaticPaths | ⬜ | |
| ISR | ⬜ | |
| Server & Client Components | ⬜ | |

### Data Fetching
- [ ] getServerSideProps
- [ ] getStaticProps
- [ ] getStaticPaths
- [ ] Incremental Static Regeneration
- [ ] Server Components
- [ ] Client Components
- [ ] React Server Components

**Resources:**
- [Data Fetching Overview](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

**Mini-Project: Weather Dashboard**
1. Create a weather dashboard using a free weather API
2. Implement server-side rendering for the homepage
3. Build city-specific weather pages using static generation with dynamic paths
4. Add a client-side search component
5. Implement incremental static regeneration for weather updates
6. Add server and client components for different dashboard sections
---

### Progress Tracker: Rendering
| Topic | Status | Notes |
|-------|--------|-------|
| SSR | ⬜ | |
| SSG | ⬜ | |
| CSR | ⬜ | |
| Streaming & Suspense | ⬜ | |

### Rendering Strategies
- [ ] Server-Side Rendering (SSR)
- [ ] Static Site Generation (SSG)
- [ ] Client-Side Rendering (CSR)
- [ ] Streaming and Suspense

**Resources:**
- [Rendering Fundamentals](https://nextjs.org/docs/app/building-your-application/rendering)
- [Static vs. Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)

**Mini-Project: News Aggregator**
1. Create a news homepage with SSG for categories
2. Build individual news pages with SSR for fresh content
3. Implement a client-rendered recommendation section
4. Add streaming for comments section with Suspense boundaries
5. Compare performance between rendering methods
6. Document findings on which method works best for different content types

## 🎨 Styling & UI

### Progress Tracker: Styling
| Topic | Status | Notes |
|-------|--------|-------|
| CSS Modules | ⬜ | |
| Styled-jsx | ⬜ | |
| Tailwind CSS | ⬜ | |
| CSS-in-JS | ⬜ | |
| Global styles | ⬜ | |

### Styling Options
- [ ] CSS Modules
- [ ] Styled-jsx
- [ ] Tailwind CSS
- [ ] CSS-in-JS solutions
- [ ] Global styles

**Resources:**
- [Styling in Next.js](https://nextjs.org/docs/app/building-your-application/styling)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

**Mini-Project: Component Library**
1. Set up a component showcase page
2. Create a button component using CSS Modules
3. Create a card component using styled-jsx
4. Build a form using Tailwind CSS
5. Implement a theme switcher with global styles
6. Create a navbar using a CSS-in-JS solution
7. Compare developer experience and performance of each method

## 🔄 Advanced Features

### Progress Tracker: API Routes
| Topic                  | Status | Notes |     |
| ---------------------- | ------ | ----- | --- |
| Creating API endpoints | ⬜      |       |     |
| API middleware         | ⬜      |       |     |
| API handlers           | ⬜      |       |     |
| Route handlers         | ⬜      |       |     |

### API Routes
- [ ] Creating API endpoints
- [ ] API middleware
- [ ] API handlers
- [ ] Route handlers

**Resources:**
- [API Routes Overview](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [API Routes Tutorial](https://nextjs.org/learn/dashboard-app/fetching-data)

**Mini-Project: Todo API**
1. Create a RESTful API for todos (GET, POST, PUT, DELETE)
2. Implement middleware for authentication
3. Add rate limiting middleware
4. Create frontend components to interact with your API
5. Implement error handling and status codes
6. Add data validation

### Progress Tracker: Authentication
| Topic | Status | Notes |
|-------|--------|-------|
| Auth strategies | ⬜ | |
| NextAuth.js | ⬜ | |
| Protected routes | ⬜ | |
| Session management | ⬜ | |

### Authentication
- [ ] Authentication strategies
- [ ] Using NextAuth.js
- [ ] Protecting routes
- [ ] Managing sessions

**Resources:**
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Authentication Patterns](https://nextjs.org/docs/authentication)

**Mini-Project: Member Dashboard**
1. Set up NextAuth.js with GitHub or Google provider
2. Create login and logout functionality
3. Implement protected API routes
4. Add protected dashboard pages
5. Display user information
6. Implement role-based access control
7. Add session persistence

### Progress Tracker: Performance
| Topic | Status | Notes |
|-------|--------|-------|
| Image optimization | ⬜ | |
| Font optimization | ⬜ | |
| Script optimization | ⬜ | |
| Lazy loading | ⬜ | |
| Analytics & Core Web Vitals | ⬜ | |

### Performance Optimization
- [ ] Image optimization with next/image
- [ ] Font optimization with next/font
- [ ] Script optimization
- [ ] Lazy loading
- [ ] Analytics and Core Web Vitals

**Resources:**
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

**Mini-Project: Performance Gallery**
1. Create an image gallery using next/image
2. Implement custom fonts with next/font
3. Add third-party scripts with proper loading strategies
4. Implement lazy loading for below-the-fold content
5. Set up Lighthouse CI or Vercel Analytics
6. Optimize and document performance improvements

## 🌐 Deployment & Production

### Progress Tracker: Deployment
| Topic                 | Status | Notes |
| --------------------- | ------ | ----- |
| Vercel deployment     | ⬜      |       |
| Self-hosting          | ⬜      |       |
| Environment variables | ⬜      |       |
| CI/CD pipelines       | ⬜      |       |

### Deployment Options
- [ ] Vercel deployment
- [ ] Self-hosting options
- [ ] Environment variables
- [ ] CI/CD pipelines

**Resources:**
- [Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Deployment Guide](https://vercel.com/docs/frameworks/nextjs)

**Mini-Project: Portfolio Deployment**
1. Prepare your portfolio project for production
2. Set up environment variables
3. Deploy to Vercel
4. Configure custom domain
5. Set up CI/CD pipeline with GitHub Actions
6. Implement preview deployments for branches
7. Monitor performance and uptime

## 🏗️ Integrated Learning Projects

### Beginner: Personal Blog
**Concepts Covered:** Basic routing, SSG, Markdown, styling
| Phase | Status | Completion Date |
|-------|--------|----------------|
| Setup & Structure | ⬜ | |
| Markdown Integration | ⬜ | |
| Styling & Layout | ⬜ | |
| Deployment | ⬜ | |

**Steps:**
1. Create Next.js project with app router
2. Set up blog post directory with Markdown files
3. Implement dynamic routing for blog posts
4. Add static generation for post content
5. Implement styling with your preferred method
6. Add syntax highlighting for code blocks
7. Deploy to Vercel

### Intermediate: E-commerce Store
**Concepts Covered:** API routes, data fetching, cart state, authentication
| Phase | Status | Completion Date |
|-------|--------|----------------|
| Product Listing | ⬜ | |
| Product Details | ⬜ | |
| Cart Functionality | ⬜ | |
| Checkout Process | ⬜ | |
| User Authentication | ⬜ | |
| Deployment | ⬜ | |

**Steps:**
1. Set up product data (mock or real API)
2. Create product listing with SSG
3. Implement product detail pages
4. Add cart functionality with React Context
5. Create checkout flow with form validation
6. Implement user authentication
7. Add order history for logged-in users
8. Deploy and test full user flow

### Advanced: SaaS Dashboard
**Concepts Covered:** Authentication, real-time data, performance optimization, middleware
| Phase | Status | Completion Date |
|-------|--------|----------------|
| Auth System | ⬜ | |
| Dashboard UI | ⬜ | |
| Data Integration | ⬜ | |
| Real-time Features | ⬜ | |
| Performance Optimization | ⬜ | |
| Deployment & Monitoring | ⬜ | |

**Steps:**
1. Set up NextAuth with database adapter
2. Create protected dashboard routes
3. Implement role-based access control
4. Build dashboard UI with Tailwind or other styling solution
5. Add data visualization with charts
6. Implement real-time updates with SWR or React Query
7. Add user management features
8. Optimize images and loading performance
9. Deploy with environment configuration
10. Set up monitoring and analytics

## 📚 Learning Resources

### Official Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Courses](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Courses & Tutorials
- [Mastering Next.js](https://masteringnextjs.com/)
- [Next.js Conf Videos](https://www.youtube.com/playlist?list=PLBnKlKpPeaglXJPKACvuDZIH4T1dpqjGn)
- [Free Next.js Course by Lee Robinson](https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1)

### Community
- [Next.js Discord](https://discord.com/invite/bUG2bvbtHy)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [r/nextjs Subreddit](https://www.reddit.com/r/nextjs/)

## 📝 Weekly Learning Plan

### Week 1: Fundamentals
- [x] Day 1-2: Introduction and setup ✅ 2025-02-28
- [x] Day 3-4: Pages and routing ✅ 2025-02-28
- [x] Day 5-7: Basic data fetching ✅ 2025-02-28

### Week 2: Core Concepts
- [x] Day 1-2: Rendering strategies ✅ 2025-02-28
- [x] Day 3-4: Styling approaches ✅ 2025-02-28
- [x] Day 5-7: Start beginner project ✅ 2025-02-28

### Week 3: Advanced Features
- [x] Day 1-2: API routes ✅ 2025-02-28
- [x] Day 3-4: Authentication ✅ 2025-02-28
- [ ] Day 5-7: Continue project development

### Week 4: Mastery
- [ ] Day 1-2: Performance optimization
- [ ] Day 3-4: Deployment
- [ ] Day 5-7: Complete and polish project

## 🔄 Keeping Up with Next.js
- [ ] Follow the Next.js blog
- [ ] Join the Discord community
- [ ] Watch for version updates
- [ ] Experiment with new features

---

*Use the tables to track your progress through each topic. Check off items and update status (⬜ Not Started, 🟡 In Progress, ✅ Completed) as you advance. Complete the mini-projects to solidify your understanding before moving to the next section.*
