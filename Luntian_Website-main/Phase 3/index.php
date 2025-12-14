<?php 
    $pageTitle = "Home";
    $activePage = "home";
    include 'includes/header.php'; 
?>

    <section id="home" class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">Fresh Blooms, Delivered with Love</h1>
            <p class="hero-subtitle">Premium fresh flowers for Metro Manila and nearby areas</p>
            <div class="hero-buttons">
                <a href="products.php" class="btn btn-primary">Shop Now</a>
                <a href="contact.php" class="btn btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="feature-grid">
                <div class="feature-card">
                    <i class="fa-solid fa-seedling fa-4x" style="color: var(--sage);"></i>            
                    <div class="flower">
                        <h3>Fresh Daily</h3>
                        <p>Sourced daily from trusted local suppliers</p>
                    </div>
                </div>
                <div class="feature-card">
                    <i class="fa fa-truck fa-4x" style="color: var(--sage);"></i>  
                    <div class="truck">                  
                        <h3>Same-Day Delivery</h3>
                        <p>Quick delivery across Metro Manila</p>
                    </div>
                </div>
                <div class="feature-card">
                    <i class="fa fa-map-pin fa-4x" style="color: var(--sage);"></i>    
                    <div class="pin">               
                        <h3>Pickup Available</h3>
                        <p>Convenient pickup location</p>
                    </div>  
                </div>
                <div class="feature-card">
                    <i class="fa-solid fa-coins fa-4x" style="color: var(--sage);"></i>  
                    <div class="money">
                        <h3>Affordable Prices</h3>
                        <p>Quality flowers at great value</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>