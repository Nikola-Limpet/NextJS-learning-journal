**Mini-Project: Weather Dashboard**

1. Create a weather dashboard using a free weather API
2. Implement server-side rendering for the homepage
3. Build city-specific weather pages using static generation with dynamic paths
4. Add a client-side search component
5. Implement incremental static regeneration for weather updates
6. Add server and client components for different dashboard sections

<!-- 5d774c9e8130a8bdb3017cb86cc72b37 -->


Create a new Next.js project with TypeScript and Tailwind CSS
Set up environment variables for the weather API key
Create the basic folder structure

2. API Integration
Register for a free API key at OpenWeatherMap or similar service
Create utility functions to fetch weather data
Define TypeScript interfaces for the API responses

3. Homepage Implementation (SSR)
Build a server-rendered homepage showing weather for a default location

This two server component should be fetch pararelly 
 - Implement a server component to display current weather
 - Add a forecast section as another server component

4. City-Specific Weather Pages (SSG)
Create a dynamic route with [cityId]
Implement getStaticPaths to pre-render pages for popular cities
Use getStaticProps to fetch weather data at build time
Add a detailed weather view for the specific city
5. Client-Side Featues
Build a search component to find cities
Implement client-side navigation between city pages
Add interactive elements like temperature unit toggle (°C/°F)
6. Incremental Static Regeneration
Update the city pages to use ISR with a reasonable revalidation time
Add a "last updated" indicator on city pages


Key Implementation Points
For each major feature, consider:

Data Fetching Strategy:

Which parts need server-side rendering?
Which components can be client-side?
What can be statically generated?
Component Architecture:

Separate server and client components
Create reusable UI elements
Optimization Techniques:

Implement caching strategies
Use suspense boundaries for loading states
Optimize image loading