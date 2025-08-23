document.addEventListener("DOMContentLoaded", () => {
  // 动态加载 CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "h-f.css";
  document.head.appendChild(link);

  // 插入 Header
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site-header">
      <div class="container">
        <h1 class="site-title">Street Food MY</h1>
        <div class="nav-box">
          <nav class="site-nav" id="mainNav">
            <a href="Food Guides.html">🍜 Food Guides</a>
            <a href="My favourite.html">💞 My favourite</a>
            <a href="Home.html">🏠 Home</a>
            <a href="FoodReview.html">🍔 Popular Food</a>
            <a href="recipes.html">🍳 Recipes</a>
            <a href="map.html">🗺️ Map</a>
            <a href="About us.html">🏅 About us</a>
            <a href="Feedback.html">❓ Feedback</a>
          </nav>
        </div>
      </div>
    </header>
  `);

  // 插入 Footer
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Street Food MY. All rights reserved.</p>
      </div>
    </footer>
  `);

  // 自动高亮当前页面
  const currentPage = window.location.pathname.split("/").pop().toLowerCase();
  document.querySelectorAll(".site-nav a").forEach(link => {
    if (link.getAttribute("href").toLowerCase() === currentPage) {
      link.classList.add("active");
    }
  });
});
