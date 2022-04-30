# *worldschoolingpopups.com* REST API - frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)&nbsp;![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)  


Date completed: March 3, 2022  

**Optimized for 📱 mobile and 🖥 desktop!**  

**See it live at (https://worldschoolingpopups.com)**  

**Backend repo (https://github.com/rusty-reebs/worldschoolingpopups)**

***Update**: April 30, 2022. Removed authentication from public-facing front-end. Built an authenticated admin front-end instead.*

Objectives: Build an Express REST API with JSON web token (`jwt`) authentication. The `jwt` is passed as a header cookie. All users have permission to browse the events, while only registered users may post new events. The frontend is written in React and uses conditional rendering, the Google Maps API, and the Cloudinary API for image handling.  

### TIL Things I Learned
----

- how to develop an Express REST API with `jwt` authentication.
- how to pass a token in the http header.
- gained a stronger understanding of Node `req`, `res`, and `next`.
- how to use the React `useContext` hook.
- some of the most challenging parts about this project were figuring out how to use the CORS middleware and http headers!

### Screenshots
----

<a href="https://worldschoolingpopups.com"><img src="./screenshots/worldschooling-1.jpg" alt="screenshot" style="max-width: 350px;"></a>  

<a href="https://worldschoolingpopups.com"><img src="./screenshots/worldschooling-2.jpg" alt="screenshot" style="max-width: 350px;"></a>  

<a href="https://worldschoolingpopups.com"><img src="./screenshots/worldschooling-3.jpg" alt="screenshot" style="max-width: 350px;"></a>  

<a href="https://worldschoolingpopups.com"><img src="./screenshots/worldschooling-4.jpg" alt="screenshot" style="max-width: 350px;"></a>  
