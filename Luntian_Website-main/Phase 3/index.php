<?php 
$pageTitle = "Home"; // Sets the browser tab title
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
                    <div class="feature-icon">減</div>
                    <h3>Fresh Daily</h3>
                    <p>Sourced daily from trusted local suppliers</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">囹</div>
                    <h3>Same-Day Delivery</h3>
                    <p>Quick delivery across Metro Manila</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">桃</div>
                    <h3>Pickup Available</h3>
                    <p>Convenient pickup location</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">腸</div>
                    <h3>Affordable Prices</h3>
                    <p>Quality flowers at great value</p>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>