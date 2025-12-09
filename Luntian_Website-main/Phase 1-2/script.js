// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to the current page link
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Search Bar Functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // Redirect to products page with search query
        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Product Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length > 0 && productCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter products
            productCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add to Cart Functionality (Order buttons)
// const orderButtons = document.querySelectorAll('.product-card .btn');

// if (orderButtons.length > 0) {
//     orderButtons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             const productCard = e.target.closest('.product-card');
//             const productName = productCard.querySelector('h3').textContent;
//             const productPrice = productCard.querySelector('.product-price').textContent;
            
//             alert(`${productName} added to your inquiry! \n\
//                 Price: ${productPrice} \n\
//                 Please contact us to complete your order.`);
//         });
//     });
// }

// Shopping Cart Functionality - Initialize immediately
let cart = [];

// Load cart from localStorage as soon as script loads
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('luntianCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            console.log('Cart loaded from localStorage:', cart);
        } catch (e) {
            console.error('Error parsing cart from localStorage:', e);
            cart = [];
        }
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('luntianCart', JSON.stringify(cart));
    console.log('Cart saved to localStorage:', cart);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

function addToCart(productName, productPrice) {
    // Remove currency symbol and convert to number
    const price = parseFloat(productPrice.replace(/[₱,]/g, ''));
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    saveCartToLocalStorage();
    updateCartCount();
    console.log('Added to cart:', productName, '- Cart now:', cart);
}

// Load cart immediately when script loads
loadCartFromLocalStorage();

const modal = document.getElementById('inquiryModal');
const closeModal = document.getElementById('closeModal');
const modalProductName = document.getElementById('modalProductName');
const modalProductPrice = document.getElementById('modalProductPrice');

if (modal && closeModal && modalProductName && modalProductPrice) {
    document.querySelectorAll(".product-card .btn").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".product-card");
            const name = card.querySelector("h3").innerText;
            const price = card.querySelector(".product-price").innerText;

            // Add to cart
            addToCart(name, price);

            modalProductName.innerText = name;
            modalProductPrice.innerText = price;

            // Update modal message
            const modalMessage = modal.querySelector('.modal-message');
            modalMessage.innerHTML = `<strong>${name}</strong> has been added to your cart! <br>
                    <a href="cart.html" style="color: var(--olive); text-decoration: underline;">View Cart</a> or continue shopping.`;
            
            modal.style.display = "flex";
        });
    });

    document.getElementById("modalOkBtn").addEventListener("click", function () {
        document.getElementById("inquiryModal").style.display = "none";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}


// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll('.feature-card, .product-card, .season-card, .info-item');

animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(58, 61, 47, 0.98)';
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'var(--olivewood)';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }
    });
}

// Add hover effect for product cards
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize animations when page loads
window.addEventListener('load', () => {
    console.log('Luntian website loaded successfully!');
    updateCartCount();
    
    // If on cart page, render cart
    if (window.location.pathname.includes('cart.html')) {
        console.log('On cart page, rendering cart...');
        renderCart();
    }
});

// Also handle DOMContentLoaded for faster cart loading
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // If on cart page, render cart
    if (window.location.pathname.includes('cart.html')) {
        console.log('DOMContentLoaded - On cart page, rendering cart...');
        renderCart();
    }
});

// Shopping Cart Page Functionality
function renderCart() {
    const cartTableBody = document.getElementById('cartItemsTable');
    const emptyMessage = document.getElementById('emptyCartMessage');
    
    if (!cartTableBody) return; // Not on cart page
    
    console.log('Cart array:', cart); // Debug log
    
    cartTableBody.innerHTML = '';
    
    if (cart.length === 0) {
        emptyMessage.classList.add('show');
        const cartTable = document.querySelector('.cart-table');
        if (cartTable) cartTable.style.display = 'none';
        return;
    }
    
    emptyMessage.classList.remove('show');
    const cartTable = document.querySelector('.cart-table');
    if (cartTable) cartTable.style.display = 'table';
    
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        const itemTotal = item.price * item.quantity;
        
        row.innerHTML = `
            <td class="cart-item-name">${item.name}</td>
            <td>₱${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantityDirect(${index}, this.value)">
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>₱${itemTotal.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });
    
    updateCartSummary();
}

function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            saveCartToLocalStorage();
            updateCartCount();
            renderCart();
        }
    }
}

function updateQuantityDirect(index, value) {
    const quantity = parseInt(value);
    if (quantity > 0) {
        cart[index].quantity = quantity;
        saveCartToLocalStorage();
        updateCartCount();
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    updateCartCount();
    updateCartSummary();
    renderCart();
    console.log('Item removed from cart, cart now:', cart);
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 150;
    const total = subtotal + deliveryFee;
    
    const subtotalEl = document.getElementById('subtotal');
    const deliveryFeeEl = document.getElementById('deliveryFee');
    const totalEl = document.getElementById('totalPrice');
    
    if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
    if (deliveryFeeEl) deliveryFeeEl.textContent = `₱${deliveryFee.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₱${total.toFixed(2)}`;
    
    console.log('Cart summary updated - Subtotal: ₱' + subtotal.toFixed(2) + ', Total: ₱' + total.toFixed(2));
}

// Checkout button
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const message = `I would like to order the following items:\n\n` +
            cart.map((item, i) => `${i + 1}. ${item.name} - ₱${item.price.toFixed(2)} x ${item.quantity}`).join('\n') +
            `\n\nTotal: ₱${(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 150).toFixed(2)}\n\nPlease confirm this order.`;
        
        window.location.href = `contact.html?message=${encodeURIComponent(message)}`;
    });
}
