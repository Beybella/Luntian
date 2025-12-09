<?php 
$pageTitle = "Products";
include 'includes/header.php'; 
?>

    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <h2>Our Products</h2>
                <p>Beautiful arrangements for every occasion</p>
            </div>
            
            <div class="product-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="birthday">Birthday</button>
                <button class="filter-btn" data-filter="anniversary">Anniversary</button>
                <button class="filter-btn" data-filter="sympathy">Sympathy</button>
            </div>

            <div class="product-grid">
                <div class="product-card" data-category="birthday">
                    <div class="product-image">🌻</div>
                    <div class="product-info">
                        <h3>Sunshine Delight</h3>
                        <p>Bright sunflowers and mixed blooms</p>
                        <div class="product-price">₱850</div>
                        <button class="btn btn-small">Order Now</button>
                    </div>
                </div>
                <div class="product-card" data-category="anniversary">
                    <div class="product-image">🌹</div>
                    <div class="product-info">
                        <h3>Classic Romance</h3>
                        <p>Premium red roses bouquet</p>
                        <div class="product-price">₱1,200</div>
                        <button class="btn btn-small">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>