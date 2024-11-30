const DB = {
    restaurants: [
        {
            id: "r1",
            name: "Italian Bistro",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Italian",
            contact: {
                phone: "555-0123",
                email: "bistro@example.com"
            },
            hours: {
                mon_fri: "11:00-22:00",
                sat_sun: "12:00-23:00"
            },
            priceRange: "$$$",
            rating: 4.5,
            menu: [
                {
                    id: "d1",
                    name: "Fettuccine Alfredo",
                    price: 16.99,
                    description: "Creamy pasta with parmesan cheese and fresh herbs"
                },
                {
                    id: "d1-2",
                    name: "Margherita Pizza",
                    price: 14.99,
                    description: "Fresh tomatoes, mozzarella, basil, and olive oil"
                },
                {
                    id: "d1-3",
                    name: "Risotto ai Funghi",
                    price: 18.99,
                    description: "Creamy mushroom risotto with parmesan"
                },
                {
                    id: "d1-4",
                    name: "Tiramisu",
                    price: 8.99,
                    description: "Classic Italian coffee-flavored dessert"
                },
                {
                    id: "d1-5",
                    name: "Osso Buco",
                    price: 24.99,
                    description: "Braised veal shanks with gremolata and saffron risotto"
                }
            ]
        },
        {
            id: "r2",
            name: "Golden Dragon",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Chinese",
            contact: {
                phone: "555-0124",
                email: "dragon@example.com"
            },
            hours: {
                mon_fri: "10:00-22:00",
                sat_sun: "11:00-23:00"
            },
            priceRange: "$$",
            rating: 2.8,
            menu: [
                {
                    id: "c1",
                    name: "Kung Pao Chicken",
                    price: 14.99,
                    description: "Spicy diced chicken with peanuts and vegetables"
                },
                {
                    id: "c2",
                    name: "Sweet and Sour Chicken",
                    price: 13.99,
                    description: "Crispy chicken with bell peppers in sweet and sour sauce"
                },
                {
                    id: "c3",
                    name: "Dim Sum Platter",
                    price: 16.99,
                    description: "Assorted steamed dumplings and buns"
                },
                {
                    id: "c4",
                    name: "Peking Duck",
                    price: 29.99,
                    description: "Crispy duck with pancakes, scallions and hoisin sauce"
                },
                {
                    id: "c5",
                    name: "Beef Chow Mein",
                    price: 12.99,
                    description: "Stir-fried noodles with tender beef and vegetables"
                }
            ]
        },
        {
            id: "r3",
            name: "Taj Mahal",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Indian",
            contact: {
                phone: "555-0125",
                email: "tajmahal@example.com"
            },
            hours: {
                mon_fri: "11:30-22:30",
                sat_sun: "12:00-23:00"
            },
            priceRange: "$",
            rating: 4.7,
            menu: [
                {
                    id: "i1",
                    name: "Murgh Makhani",
                    price: 14.99,
                    description: "Butter chicken in a creamy tomato curry"
                },
                {
                    id: "i2",
                    name: "Paneer Tikka Masala",
                    price: 12.99,
                    description: "Grilled paneer in a rich spiced sauce"
                },
                {
                    id: "i3",
                    name: "Hyderabadi Biryani",
                    price: 15.99,
                    description: "Aromatic rice dish with tender lamb and spices"
                },
                {
                    id: "i4",
                    name: "Tandoori Aloo Paratha",
                    price: 6.99,
                    description: "Stuffed flatbread with yogurt and pickle"
                },
                {
                    id: "i5",
                    name: "Shahi Gulab Jamun",
                    price: 4.99,
                    description: "Sweet dumplings soaked in rose-flavored syrup"
                }
            ]
        },
        {
            id: "r4",
            name: "Mexican Fiesta",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Mexican",
            contact: {
                phone: "555-0126",
                email: "fiesta@example.com"
            },
            hours: {
                mon_fri: "11:00-23:00",
                sat_sun: "12:00-23:00"
            },
            priceRange: "$$",
            rating: 4.4,
            menu: [
                {
                    id: "m1",
                    name: "Tacos de Pollo",
                    price: 13.99,
                    description: "Grilled chicken tacos with fresh salsa and lime"
                },
                {
                    id: "m2",
                    name: "Enchiladas Verdes",
                    price: 14.99,
                    description: "Chicken enchiladas with green salsa and cream"
                },
                {
                    id: "m3",
                    name: "Guacamole Fresco",
                    price: 8.99,
                    description: "Fresh avocado dip with tortilla chips"
                },
                {
                    id: "m4",
                    name: "Quesadillas de Pollo",
                    price: 12.99,
                    description: "Grilled chicken and cheese in flour tortillas"
                },
                {
                    id: "m5",
                    name: "Churros con Chocolate",
                    price: 6.99,
                    description: "Crispy cinnamon churros with chocolate sauce"
                }
            ]
        },
        {
            id: "r5",
            name: "Thai Spice",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Thai",
            contact: {
                phone: "555-0127",
                email: "thaispice@example.com"
            },
            hours: {
                mon_fri: "11:00-22:30",
                sat_sun: "12:00-22:30"
            },
            priceRange: "$$",
            rating: 4.6,
            menu: [
                {
                    id: "t1",
                    name: "Tom Yum Goong",
                    price: 9.99,
                    description: "Spicy shrimp soup with lemongrass and lime"
                },
                {
                    id: "t2",
                    name: "Pad Thai Chaba",
                    price: 11.99,
                    description: "Stir-fried noodles with shrimp, tofu, and tamarind sauce"
                },
                {
                    id: "t3",
                    name: "Gaeng Kiew Wan Gai",
                    price: 13.99,
                    description: "Chicken in green curry with coconut milk"
                },
                {
                    id: "t4",
                    name: "Som Tum Thai",
                    price: 8.99,
                    description: "Green papaya salad with chili-lime dressing"
                },
                {
                    id: "t5",
                    name: "Khao Niew Mamuang",
                    price: 6.99,
                    description: "Mango sticky rice with coconut milk drizzle"
                }
            ]
        },
        {
            id: "r6",
            name: "Arabian Nights",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Arabic",
            contact: {
                phone: "555-0128",
                email: "arabian@example.com"
            },
            hours: {
                mon_fri: "10:00-23:00",
                sat_sun: "10:00-23:00"
            },
            priceRange: "$$",
            rating: 4.8,
            menu: [
                {
                    id: "a1",
                    name: "Mandi Lahm",
                    price: 18.99,
                    description: "Fragrant rice with slow-cooked lamb"
                },
                {
                    id: "a2",
                    name: "Shawarma Mashawi",
                    price: 13.99,
                    description: "Marinated chicken or beef platter with pita and sides"
                },
                {
                    id: "a3",
                    name: "Hummus Bil Lahmeh",
                    price: 9.99,
                    description: "Creamy hummus topped with spiced minced meat"
                },
                {
                    id: "a4",
                    name: "Fattoush Sahra",
                    price: 7.99,
                    description: "Mixed vegetable salad with crispy pita and sumac"
                },
                {
                    id: "a5",
                    name: "Baklava Ala Turki",
                    price: 5.99,
                    description: "Filo pastry with nuts and honey syrup"
                }
            ]
        },
        {
            id: "r7",
            name: "Burger Joint",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "burger",
            contact: {
                phone: "555-0129",
                email: "burger@example.com"
            },
            hours: {
                mon_fri: "11:00-23:00",
                sat_sun: "11:00-23:00"
            },
            priceRange: "$",
            rating: 4.5,
            menu: [
                {
                    id: "b1",
                    name: "Classic Stack Burger",
                    price: 11.99,
                    description: "Beef patty, cheddar, lettuce, tomato, and house sauce"
                },
                {
                    id: "b2",
                    name: "Firehouse Jalapeño Burger",
                    price: 12.99,
                    description: "Beef patty, jalapeños, pepper jack, spicy mayo"
                },
                {
                    id: "b3",
                    name: "Earthy Veggie Delight",
                    price: 10.99,
                    description: "Grilled veggie patty with avocado and aioli"
                },
                {
                    id: "b4",
                    name: "Smokey BBQ Bacon Burger",
                    price: 13.99,
                    description: "Beef patty, BBQ sauce, bacon, and crispy onions"
                },
                {
                    id: "b5",
                    name: "Crispy Chicken Supreme",
                    price: 11.49,
                    description: "Crispy chicken sandwich with coleslaw and pickles"
                }
            ]
        },
        {
            id: "r8",
            name: "Warung Nusantara",
            address: "Jeddah International College كلية جدة العالمية",
            cuisine: "Indonesian",
            contact: {
                phone: "555-0130",
                email: "warung@example.com"
            },
            hours: {
                mon_fri: "11:00-22:00",
                sat_sun: "12:00-22:00"
            },
            priceRange: "$$",
            rating: 4.6,
            menu: [
                {
                    id: "in1",
                    name: "Nasi Goreng Kampung",
                    price: 12.99,
                    description: "Traditional fried rice with a spicy sambal kick"
                },
                {
                    id: "in2",
                    name: "Sate Ayam Nusantara",
                    price: 10.99,
                    description: "Chicken satay with a signature peanut sauce"
                },
                {
                    id: "in3",
                    name: "Rendang Minang",
                    price: 16.99,
                    description: "Rich, slow-cooked beef in coconut gravy"
                },
                {
                    id: "in4",
                    name: "Es Campur Tropis",
                    price: 7.99,
                    description: "Shaved ice dessert with tropical fruits and syrups"
                },
                {
                    id: "in5",
                    name: "Tempeh Goreng Crispy",
                    price: 8.99,
                    description: "Crispy fried fermented soybean cakes"
                }
            ]
        }
    ]
};

function getStarRating(rating) {
    return "⭐".repeat(Math.round(rating));
}

function createRestaurantCard(restaurant) {
    return `
        <div class="restaurant-card">
            <div class="restaurant-image">
                <img 
                    src="img/${restaurant.cuisine.toLowerCase()}.jpg" 
                    alt="${restaurant.name}"
                    onerror="this.onerror=null; this.src='img/default.jpg'"
                >
            </div>
            <div class="restaurant-info">
                <h2>${restaurant.name}</h2>
                <p class="cuisine">${restaurant.cuisine}</p>
                <p class="rating">${getStarRating(restaurant.rating)} (${restaurant.rating})</p>
                <p class="price-range">${restaurant.priceRange}</p>
                <p class="address">${restaurant.address}</p>
                <p class="hours">Hours: ${restaurant.hours.mon_fri}</p>
                <div class="action-buttons">
                    <button onclick="viewMenu('${restaurant.id}')">View Menu</button>
                    <button onclick="window.location.href='form.html?restaurant=${restaurant.id}'">Reserve</button>
                    <button onclick="getDirections('${restaurant.address}')">Get Directions</button>
                </div>
            </div>
        </div>
    `;
}

function renderRestaurants(restaurantsToRender = DB.restaurants) {
    const grid = document.getElementById('restaurantGrid');
    if (!grid) return;
    
    grid.innerHTML = restaurantsToRender
        .map(restaurant => createRestaurantCard(restaurant))
        .join('');
}

function updatePriceFilterOptions() {
    const priceFilter = document.getElementById('priceFilter');
    if (!priceFilter) return;

    const currentValue = priceFilter.value;

    const priceCounts = {
        '$': 0,
        '$$': 0,
        '$$$': 0
    };

    DB.restaurants.forEach(restaurant => {
        if (priceCounts.hasOwnProperty(restaurant.priceRange)) {
            priceCounts[restaurant.priceRange]++;
        }
    });

    priceFilter.innerHTML = `
        <option value="">All Prices (${DB.restaurants.length} Restaurants)</option>
        <option value="$">$ (${priceCounts['$']} Restaurants)</option>
        <option value="$$">$$ (${priceCounts['$$']} Restaurants)</option>
        <option value="$$$">$$$ (${priceCounts['$$$']} Restaurants)</option>
    `;

    priceFilter.value = currentValue;
}

function initializeSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const cuisineFilter = document.getElementById('cuisineFilter');
    const priceFilter = document.getElementById('priceFilter');
    const ratingFilter = document.getElementById('ratingFilter');

    updatePriceFilterOptions();

    function applyFilters() {
        let filtered = DB.restaurants;

        if (searchInput.value) {
            const searchTerm = searchInput.value.toLowerCase();
            filtered = filtered.filter(restaurant => 
                restaurant.name.toLowerCase().includes(searchTerm) ||
                restaurant.cuisine.toLowerCase().includes(searchTerm)
            );
        }

        if (cuisineFilter.value) {
            filtered = filtered.filter(r => r.cuisine === cuisineFilter.value);
        }

        if (priceFilter.value) {
            filtered = filtered.filter(r => r.priceRange === priceFilter.value);
        }

        if (ratingFilter.value) {
            filtered = filtered.filter(r => r.rating >= parseInt(ratingFilter.value));
        }

        renderRestaurants(filtered);
        
        const tempPriceValue = priceFilter.value;
        updatePriceFilterOptions();
        priceFilter.value = tempPriceValue;
    }

    searchInput?.addEventListener('input', applyFilters);
    cuisineFilter?.addEventListener('change', applyFilters);
    priceFilter?.addEventListener('change', applyFilters);
    ratingFilter?.addEventListener('change', applyFilters);
}

function viewMenu(restaurantId) {
    const restaurant = DB.restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    const menuHTML = `
        <div class="menu-modal">
            <h2>${restaurant.name} - Menu</h2>
            <div class="menu-items">
                ${restaurant.menu.map(item => `
                    <div class="menu-item">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <span class="price">$${item.price.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">&times;</span>
            ${menuHTML}
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.body.appendChild(modal);
}

function getDirections(address) {
    const fixedAddress = "Jeddah International College كلية جدة العالمية";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fixedAddress)}`);
}

function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">&times;</span>
            ${content}
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function updateAuthDisplay() {
    const authButtons = document.querySelector('.auth-buttons');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        authButtons.innerHTML = `
            <div class="user-menu">
                <button class="auth-btn profile-btn" onclick="toggleDropdown(event)">${currentUser.username} ▼</button>
                <div class="user-menu-content">
                    <a href="my-reservations.html">Reservation History</a>
                    <a href="#" onclick="showChangePasswordModal()">Change Password</a>
                    <a href="#" onclick="logout()">Log Out</a>
                </div>
            </div>
        `;
    } else {
        authButtons.innerHTML = `
            <a href="login.html" class="auth-btn">Sign In</a>
            <a href="register.html" class="auth-btn signup-btn">Sign Up</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    updateAuthDisplay();
    window.location.href = 'index.html';
}

function showChangePasswordModal() {
    showModal(`
        <div class="change-password-modal">
            <h2>Change Password</h2>
            <form id="changePasswordForm" class="auth-form">
                <input type="password" id="currentPassword" placeholder="Current Password" required>
                <input type="password" id="newPassword" placeholder="New Password" required>
                <input type="password" id="confirmPassword" placeholder="Confirm New Password" required>
                <button type="submit">Change Password</button>
            </form>
        </div>
    `);

    document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users'));
        
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        
        if (currentPassword !== currentUser.password) {
            alert('Current password is incorrect');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match');
            return;
        }
        
        users[userIndex].password = newPassword;
        currentUser.password = newPassword;
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        alert('Password changed successfully');
        closeModal();
    });
}

function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = event.target.nextElementSibling;
    const button = event.target;
    
    document.querySelectorAll('.user-menu-content.show').forEach(menu => {
        if (menu !== dropdown) {
            menu.classList.remove('show');
        }
    });
    
    dropdown.classList.toggle('show');
    button.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('.profile-btn')) {
        document.querySelectorAll('.user-menu-content.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
        document.querySelectorAll('.profile-btn.active').forEach(button => {
            button.classList.remove('active');
        });
    }
});

document.addEventListener('click', function(event) {
    if (event.target.closest('.user-menu-content')) {
        event.stopPropagation();
    }
});

function initializeReservationForm() {
    const restaurantSelect = document.getElementById('restaurant');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    
    if (!restaurantSelect || !dateInput || !timeInput) return;

    // Get restaurant ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRestaurantId = urlParams.get('restaurant');
    console.log('Selected restaurant ID from URL:', selectedRestaurantId);

    // Create options and pre-select the chosen restaurant
    restaurantSelect.innerHTML = DB.restaurants.map(restaurant => {
        const isSelected = selectedRestaurantId === restaurant.id;
        return `
            <option 
                value="${restaurant.id}" 
                ${isSelected ? 'selected="selected"' : ''}
            >${restaurant.name}</option>
        `;
    }).join('');

    // Double-check the selection
    if (selectedRestaurantId) {
        restaurantSelect.value = selectedRestaurantId;
        console.log('Set selection to:', restaurantSelect.value);
    }

    // Set date and time defaults
    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];
    dateInput.min = dateInput.value;

    const minutes = today.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 30) * 30;
    today.setMinutes(roundedMinutes);
    timeInput.value = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;
}

// Make sure all pages initialize correctly
document.addEventListener('DOMContentLoaded', () => {
    // Always update auth display for all pages
    updateAuthDisplay();

    // Initialize specific page functionality
    if (window.location.pathname.includes('form.html')) {
        console.log('Initializing reservation form...');
        initializeReservationForm();
    } else if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        // Initialize home page
        renderRestaurants();
        initializeSearchAndFilters();
    }
});
