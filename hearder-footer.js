// script.js

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "h-f.css";
  document.head.appendChild(link);

// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 插入 Header
    insertHeader();
    
    // 插入 Footer
    insertFooter();
    
    // 初始化移动端菜单
    initMobileMenu();
    
    // 自动高亮当前页面
    highlightCurrentPage();
    
    // 初始化动画效果
    initAnimations();
    
    // 初始化响应式处理
    initResponsiveHandling();

    //Hidden and display navigate bar when scroll
     initScrollNavBehavior(); 

});

// 插入页头
function insertHeader() {
    const headerHTML = `
        <header class="site-header">
            <div class="container">
                <h1 class="site-title">Street Food MY</h1>
                <div class="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="nav-box" id="navBox">
                    <nav class="site-nav" id="mainNav">
                        <a href="Food Guides.html" title="Food Guides">🍜 <span>Food Guides</span></a>
                        <a href="My favourite.html" title="My Favourite">💞 <span>My favourite</span></a>
                        <a href="Home.html" title="Home">🏠 <span>Home</span></a>
                        <a href="FoodReview.html" title="Popular Food">🍔 <span>Popular Food</span></a>
                        <a href="recipes.html" title="Recipes">🍳 <span>Recipes</span></a>
                        <a href="map.html" title="Map">🗺️ <span>Map</span></a>
                        <a href="About us.html" title="About Us">🏅 <span>About us</span></a>
                        <a href="Feedback.html" title="Feedback">❓ <span>Feedback</span></a>
                    </nav>
                </div>
            </div>
        </header>
    `;
    
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    
    // 初始化导航栏文字优化
    optimizeNavText();
}

// 插入页脚
function insertFooter() {
    const currentYear = new Date().getFullYear();
    const footerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-content">
                    Click the IG Twitter Facebook if you want to know more !
                    <div class="social-media">
                       <a href="https://www.instagram.com/malaysia_street_food?igsh=azdneWN3ZGZzb2Vz target="_blank" aria-label="Instagram">
                          <img src="image/com-instagram-android-icon-360x360.png.webp" alt="Instagram" class="social-icon">
                        </a>
                        <a href="https://twitter.com/streetfoodmy" target="_blank" aria-label="Twitter">
                          <img src="image/new-2023-twitter-logo-x-icon-design_1017-45418.avif" alt="Twitter" class="social-icon">
                        </a>
                        <a href="https://www.facebook.com/p/The-Street-Food-Malaysia-100063670836214/?utm_source=chatgpt.com" target="_blank" aria-label="Facebook">
                          <img src="image/download.png" alt="Facebook" class="social-icon">
                        </a>
                    </div>
                    <div class="copyright">
                        <p class="f-p">&copy; ${currentYear} Street Food MY. All rights reserved.</p>
                        <p>Follow us on social media for the latest updates! 🍴✨</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// 修改 initMobileMenu 函数
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navBox = document.getElementById('navBox');
    
    if (!menuToggle || !navBox) return;
    
    // 移除初始状态设置，让CSS处理初始状态
    // 菜单切换功能
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // 点击导航链接后关闭菜单（仅移动端）
    navBox.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });

    // 点击外部区域关闭菜单（仅移动端）
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !menuToggle.contains(e.target) && 
            !navBox.contains(e.target) &&
            navBox.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // ESC键关闭菜单（仅移动端）
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && window.innerWidth <= 768 && navBox.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// 修改 toggleMobileMenu 函数
function toggleMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navBox = document.getElementById('navBox');
    
    menuToggle.classList.toggle('active');
    navBox.classList.toggle('active');
    
    // 添加直接控制显示/隐藏的逻辑
    if (navBox.classList.contains('active')) {
        navBox.style.display = 'block';
    } else {
        // 添加短暂延迟让CSS动画完成
        setTimeout(() => {
            if (!navBox.classList.contains('active')) {
                navBox.style.display = 'none';
            }
        }, 300);
    }
}

// 修改 closeMobileMenu 函数
function closeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navBox = document.getElementById('navBox');
    
    menuToggle.classList.remove('active');
    navBox.classList.remove('active');
    
    // 添加短暂延迟让CSS动画完成
    setTimeout(() => {
        navBox.style.display = 'none';
    }, 300);
}

// 自动高亮当前页面
function highlightCurrentPage() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll(".site-nav a");
    
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        
        const linkPageName = href.toLowerCase();
        
        // 检查是否匹配当前页面
        if (linkPageName === currentPage) {
            link.classList.add("active");
        }
        
        // 如果是首页，高亮Home链接
        if (isHomePage(currentPage) && href === "Home.html") {
            link.classList.add("active");
        }
    });
}

// 获取当前页面名称
function getCurrentPageName() {
    return window.location.pathname.split("/").pop().toLowerCase();
}

// 判断是否为首页
function isHomePage(pageName) {
    return pageName === "" || pageName === "index.html" || pageName === "home.html";
}

// 初始化动画效果
function initAnimations() {
    // 创建交叉观察器用于滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(el => {
        prepareElementForAnimation(el);
        observer.observe(el);
    });
}

// 准备元素动画
function prepareElementForAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
}

// 执行元素动画
function animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

// 初始化响应式处理
function initResponsiveHandling() {
    // 窗口大小改变时的响应（使用防抖优化性能）
    const debouncedResize = debounce(handleWindowResize, 250);
    window.addEventListener('resize', debouncedResize);
    
    // 初始检查
    handleWindowResize();
    
    // 延迟检查，确保CSS完全加载
    setTimeout(() => {
        checkNavOverflow();
        optimizeNavText();
    }, 300);
}

// 处理窗口大小改变
function handleWindowResize() {
    const windowWidth = window.innerWidth;
    const menuToggle = document.getElementById('menuToggle');
    const navBox = document.getElementById('navBox');
    
    // 768px以上显示桌面版导航，隐藏汉堡菜单
    if (windowWidth > 768) {
        if (menuToggle && navBox) {
            menuToggle.classList.remove('active');
            navBox.classList.remove('active');
            navBox.style.display = '';
        }
    }
    // 768px及以下准备移动端导航
    else {
        if (navBox && !navBox.classList.contains('active')) {
            navBox.style.display = 'none';
        }
    }
    
    // 重新优化导航文字显示
    optimizeNavText();
}

// 优化导航栏文字显示
function optimizeNavText() {
    const navLinks = document.querySelectorAll('.site-nav a');
    const windowWidth = window.innerWidth;
    
    navLinks.forEach(link => {
        const span = link.querySelector('span');
        if (!span) return;
        
        // 根据屏幕宽度调整文字显示
        if (windowWidth < 900) {
            // 小屏幕时简化文字
            const originalText = span.textContent;
            let shortText = originalText;
            
            // 简化较长的文字
            if (originalText.includes('Food Guides')) {
                shortText = 'Guides';
            } else if (originalText.includes('My favourite')) {
                shortText = 'Favourite';
            } else if (originalText.includes('Popular Food')) {
                shortText = 'Popular';
            } else if (originalText.includes('About us')) {
                shortText = 'About';
            }
            
            span.textContent = shortText;
            link.title = originalText; // 保持完整提示文字
        } else {
            // 大屏幕时恢复完整文字
            const title = link.title;
            if (title && span.textContent !== title) {
                span.textContent = title;
            }
        }
    });
}

// 检查导航文字是否溢出
function checkNavOverflow() {
    const navContainer = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.site-nav a');
    
    if (!navContainer) return;
    
    let totalWidth = 0;
    navLinks.forEach(link => {
        totalWidth += link.getBoundingClientRect().width;
    });
    
    const containerWidth = navContainer.getBoundingClientRect().width;
    
    // 如果总宽度超过容器宽度，进一步缩短文字
    if (totalWidth > containerWidth * 0.95) {
        navLinks.forEach(link => {
            const span = link.querySelector('span');
            if (span && span.textContent.length > 6) {
                span.textContent = span.textContent.substring(0, 5) + '...';
            }
        });
    }
}

// 平滑滚动到指定元素
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 添加社交媒体分享功能
function shareOnSocialMedia(platform, url = window.location.href, text = "Check out Street Food MY!") {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    let shareUrl;
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
            break;
        case 'instagram':
            // Instagram doesn't support direct URL sharing, so we'll copy to clipboard
            copyToClipboard(url);
            alert('Link copied to clipboard! You can now share it on Instagram.');
            return;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 复制到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            textArea.remove();
            return Promise.resolve();
        } catch (error) {
            textArea.remove();
            return Promise.reject(error);
        }
    }
}

// 添加页面加载性能监控
function initPerformanceMonitoring() {
    window.addEventListener('load', () => {
        // 页面完全加载后的处理
        setTimeout(() => {
            // 移除加载状态
            document.body.classList.remove('loading');
            
            // 记录加载时间（可用于分析）
            if (window.performance && window.performance.timing) {
                const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            }
        }, 100);
    });
}

// 初始化性能监控
initPerformanceMonitoring();

// 滚动时隐藏/显示导航栏
function initScrollNavBehavior() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            // 向下滚动并超过 80px → 隐藏导航栏
            header.classList.add("nav-hidden");
        } else {
            // 向上滚动 → 显示导航栏
            header.classList.remove("nav-hidden");
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    });
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 导出函数供其他脚本使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScrollTo,
        shareOnSocialMedia,
        copyToClipboard,
        debounce,
        throttle
    };
}