const pages = {

    home: `
    <section class="hero">
    <h1>Welcome to My Portfolio</h1>
    
    <p>
    This is myportfolio website where I show the projects I am learning tobuild I am still learning web development, but I am getting better step by step. I use HTML, CSS, and JavaScript to create pages and make them interactive. Every project helps me understand how websites work in a real environment.
    </p>
    </section>
    
    <section class="intro">
    <p>
    This site is a collection of what I am learning so far I build small sections and projects to practice different skills. I try to keep my work simple and easy to understand so I can improve over time. When I run into problems, I take time to fix them and learn from them.
    </p>
    </section>
    
    <section class="cards">
    
    <div class="card">
    <img src="images/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg" alt="code">
    <h2>Clean Code</h2>
    <p>
    I focus on writing clean and simple code so it is easy to read and fix laterI review my code often and try improve it each time I work on a project!
    </p>
    </div>
    
    <div class="card">
    <img src="images/original-0baa435d739a15b1ecc612fd4eb332f4.webp" alt="design">
    <h2>Design</h2>
    <p>
    I try to make websites that look clean and easy to use.I use spacing, colors and layout to make everything clear and organized.
    </p>
    </div>
    
    <div class="card">
    <img src="images/banner-template-painting-portfolio-website_23-2148772329.avif" alt="responsive">
    <h2>Responsive</h2>
    <p>
    My websites are built to work on phones, tablets, and desktops. I test different screen sizes to make sure everything looks correct.
    </p>
    </div>
    
    </section>
    `,
    
    about: `
    <section class="page">
    <h1>About Me</h1>
    
    <img src="images/istockphoto-1201169785-612x612.jpg" alt="about">
    
    <p>
    I am a student learning how to build websites. I started with HTML, then learned CSS, and now I am learning JavaScript. Each step has helped me understand how websites are built from the ground up.
    </p>
    
    <p>
    I enjoy learning by building real projects. I make mistakes often, but I use them as a way to improve. My goal is to keep practicing and become more confident in web development over time.
    </p>
    </section>
    `,
    
    projects: `
    <section class="page">
    <h1>Projects</h1>
    
    <img src="images/banner-template-painting-portfolio-website_23-2148772329.avif" alt="projects">
    
    <p>
    These are some of the projects I have built while learning web development. Each project helps me practice different skills and understand how code works together.
    </p>
    
    <div class="project">
    <img src="images/original-0baa435d739a15b1ecc612fd4eb332f4.webp" alt="project">
    
    <div>
    <h2>Portfolio Website</h2>
    <p>
    This project my personal portfolio site It help me learn how to structure pagesstyle layouts, and add interactivity using JavaScript.
    </p>
    </div>
    </div>
    
    <div class="project">
    <img src="images/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg" alt="project">
    
    <div>
    <h2>Single Page App</h2>
    <p>
    This project uses JavaScriptto switch pages without reloading. It helped me understand routing and how URLs can control content.
    </p>
    </div>
    </div>
    
    </section>
    `,
    
    contact: `
    <section class="page">
    <h1>Contact</h1>
    
    <img src="images/istockphoto-1201169785-612x612.jpg" alt="contact">
    
    <p>
    You can contact me through this page if you have questions or feedback. I like hearing from others because it helps me improve my work.
    </p>
    
    <p>
    Fill out the form below with your name, email, and message. I will try to respond when I can.
    </p>
    
    <form class="form">
    <input type="text" placeholder="Name" required>
    <input type="email" placeholder="Email" required>
    <textarea placeholder="Message"></textarea>
    <button type="submit">Send</button>
    </form>
    
    </section>
    `
    
    };
    
    export function changePage(pageName) {
      const app = document.querySelector("#app");
      app.innerHTML = pages[pageName] || pages.home;
    }
