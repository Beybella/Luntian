<?php
// Get the current page name (e.g., "index", "about")
$current_page = basename($_SERVER['PHP_SELF'], ".php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Luntian'; ?> - Fresh Blooms</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="index.php" style="text-decoration: none;"><div class="logo">Luntian</div></a>
            <button class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.php" class="<?php echo ($current_page == 'index') ? 'active' : ''; ?>">Home</a></li>
                <li><a href="about.php" class="<?php echo ($current_page == 'about') ? 'active' : ''; ?>">About Us</a></li>
                <li><a href="products.php" class="<?php echo ($current_page == 'products') ? 'active' : ''; ?>">Products</a></li>
                <li><a href="season.php" class="<?php echo ($current_page == 'season') ? 'active' : ''; ?>">Flowers Season</a></li>
                <li><a href="contact.php" class="<?php echo ($current_page == 'contact') ? 'active' : ''; ?>">Contact Us</a></li>
            </ul>
        </div>
    </nav>