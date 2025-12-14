<?php 
    $pageTitle = "Products";
    $activePage = "products";
    include 'includes/header.php'; 

    // Product Data Array
    $products = [
        [
            "name" => "Sunshine Delight",
            "price" => "850",
            "image" => "assets/products/Sunshine Delight.png",
            "category" => "birthday",
            "desc" => "Bright sunflowers and mixed blooms"
        ],
        [
            "name" => "Classic Romance",
            "price" => "1,200",
            "image" => "assets/products/Classic Love.png",
            "category" => "anniversary",
            "desc" => "Premium red roses bouquet"
        ],
        [
            "name" => "Spring Garden",
            "price" => "950",
            "image" => "assets/products/Spring Graden.png",
            "category" => "birthday",
            "desc" => "Colorful tulips arrangement"
        ],
        [
            "name" => "Peaceful Tribute",
            "price" => "1,100",
            "image" => "assets/products/Peaceful Tribute.png",
            "category" => "sympathy",
            "desc" => "White lilies and roses"
        ],
        [
            "name" => "Love Blooms",
            "price" => "1,050",
            "image" => "assets/products/Love Blooms.png",
            "category" => "anniversary",
            "desc" => "Mixed romantic arrangement"
        ],
        [
            "name" => "Tropical Paradise",
            "price" => "900",
            "image" => "assets/products/Tropical Paradise.png",
            "category" => "birthday",
            "desc" => "Vibrant tropical flowers"
        ]
    ];
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
                <?php foreach($products as $product): ?>
                <div class="product-card" data-category="<?php echo $product['category']; ?>">
                    <div class="product-image">
                        <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                    </div>
                    <div class="product-info">
                        <h3><?php echo $product['name']; ?></h3>
                        <p><?php echo $product['desc']; ?></p>
                        <div class="product-price">₱<?php echo $product['price']; ?></div>
                        <button class="btn btn-small">Add to Cart</button>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <div id="inquiryModal" class="modal-overlay">
        <div class="modal-card">
            <span class="close-btn" id="closeModal">×</span>
            <h3 id="modalProductName">Product</h3>
            <p class="modal-price" id="modalProductPrice">₱0</p>
            <p class="modal-message">
                Product added to your inquiry! <br>
                Please contact us to complete your order.
            </p>
            <div class="modal-actions">
                <button id="modalOkBtn" class="ok-btn">OK</button>
                <a href="contact.php" class="contact-btn">Contact Us</a> 
            </div>
        </div>
    </div>

<?php include 'includes/footer.php'; ?>