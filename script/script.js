// CineMax Website - Interactive Features
document.addEventListener("DOMContentLoaded", function () {
  // Data untuk seluruh website
  const appData = {
    movies: {
      "now-playing": [
        {
          id: 1,
          title: "Avatar: The Way of Water",
          poster:
            "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: 8.1,
          duration: "3j 12m",
          genres: ["Action", "Adventure", "Sci-Fi"],
          description:
            "Jake Sully hidup bersama keluarga barunya di planet Pandora dan menjelajahi wilayah perairannya yang menakjubkan.",
          showtimes: ["10:00", "13:30", "16:45", "20:00"],
          price: 45000,
        },
        {
          id: 2,
          title: "Spider-Man: No Way Home",
          poster:
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: 8.3,
          duration: "2j 28m",
          genres: ["Action", "Adventure", "Fantasy"],
          description:
            "Peter Parker meminta bantuan Doctor Strange untuk membuat identitasnya sebagai Spider-Man terlupakan.",
          showtimes: ["11:15", "14:30", "17:45", "21:00"],
          price: 45000,
        },
        {
          id: 3,
          title: "The Batman",
          poster:
            "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: 7.9,
          duration: "2j 56m",
          genres: ["Action", "Crime", "Drama"],
          description:
            "Batman berusaha mengungkap korupsi tersembunyi di Gotham City dan menangkap pembunuh berantai.",
          showtimes: ["12:00", "15:15", "18:30", "21:45"],
          price: 45000,
        },
        {
          id: 4,
          title: "Black Panther: Wakanda Forever",
          poster:
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: 7.2,
          duration: "2j 41m",
          genres: ["Action", "Adventure", "Drama"],
          description:
            "Rakyat Wakanda berjuang untuk melindungi negara mereka dari campur tangan kekuatan dunia.",
          showtimes: ["10:45", "14:00", "17:15", "20:30"],
          price: 45000,
        },
      ],
      "coming-soon": [
        {
          id: 5,
          title: "Fast X",
          poster:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: null,
          duration: "2j 30m",
          genres: ["Action", "Thriller"],
          description:
            "Dom Toretto dan keluarganya menghadapi musuh paling mematikan yang pernah mereka temui.",
          releaseDate: "15 Juni 2023",
          price: 50000,
        },
        {
          id: 6,
          title: "The Little Mermaid",
          poster:
            "https://images.unsplash.com/photo-1489599804159-c05e4b9c4e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: null,
          duration: "2j 15m",
          genres: ["Fantasy", "Musical"],
          description:
            "Ariel, putri duyung muda, ingin mengetahui dunia di atas laut dan jatuh cinta pada pangeran manusia.",
          releaseDate: "22 Juni 2023",
          price: 50000,
        },
        {
          id: 7,
          title: "Indiana Jones 5",
          poster:
            "https://images.unsplash.com/photo-1489599804159-c05e4b9c4e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          rating: null,
          duration: "2j 25m",
          genres: ["Adventure", "Action"],
          description:
            "Petualangan arkeolog legendaris Indiana Jones yang belum pernah terjadi sebelumnya.",
          releaseDate: "29 Juni 2023",
          price: 50000,
        },
      ],
    },

    cinemas: [
      {
        id: 1,
        name: "CineMax Plaza Indonesia",
        location: "Plaza Indonesia, Jl. M.H. Thamrin No.28-30, Jakarta",
        facilities: ["Dolby Atmos", "IMAX", "4DX", "Gold Class"],
        phone: "(021) 1234-5678",
      },
      {
        id: 2,
        name: "CineMax Grand Indonesia",
        location: "Grand Indonesia, Jl. M.H. Thamrin No.1, Jakarta",
        facilities: ["Dolby Atmos", "ScreenX", "Velvet Seats", "Starium"],
        phone: "(021) 1234-5679",
      },
      {
        id: 3,
        name: "CineMax Pondok Indah",
        location: "Pondok Indah Mall, Jl. Metro Pondok Indah, Jakarta",
        facilities: ["Dolby Atmos", "IMAX", "Gold Class", "VIP Lounge"],
        phone: "(021) 1234-5680",
      },
      {
        id: 4,
        name: "CineMax Tunjungan Plaza",
        location: "Tunjungan Plaza, Jl. Embong Malang, Surabaya",
        facilities: ["Dolby Atmos", "4DX", "Starium", "Family Room"],
        phone: "(031) 1234-5678",
      },
    ],

    foodItems: [
      {
        id: 1,
        name: "Popcorn Regular",
        price: 25000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "snack",
        description: "Popcorn fresh dengan rasa original",
      },
      {
        id: 2,
        name: "Popcorn Large",
        price: 35000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "snack",
        description: "Popcorn ukuran besar dengan rasa original",
      },
      {
        id: 3,
        name: "Nachos Cheese",
        price: 30000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "snack",
        description: "Nachos renyah dengan saus keju lezat",
      },
      {
        id: 4,
        name: "Coca-Cola Regular",
        price: 15000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "beverage",
        description: "Minuman bersoda Coca-Cola ukuran regular",
      },
      {
        id: 5,
        name: "Hot Dog",
        price: 28000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "snack",
        description: "Hot dog dengan sosis premium dan saus spesial",
      },
      {
        id: 6,
        name: "Ice Tea",
        price: 12000,
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "beverage",
        description: "Es teh manis segar",
      },
    ],

    venues: [
      {
        id: 1,
        name: "Private Theater",
        capacity: "50 orang",
        price: 5000000,
        image:
          "https://images.unsplash.com/photo-1489599804159-c05e4b9c4e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
          "Layar IMAX",
          "Sound System Premium",
          "Kursi VIP",
          "Private Lounge",
        ],
        description:
          "Teater privat untuk acara khusus dengan kapasitas 50 orang",
      },
      {
        id: 2,
        name: "Meeting Room",
        capacity: "30 orang",
        price: 2500000,
        image:
          "https://images.unsplash.com/photo-1489599804159-c05e4b9c4e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Projector HD", "Sound System", "Whiteboard", "AC"],
        description: "Ruang meeting modern untuk presentasi dan rapat",
      },
      {
        id: 3,
        name: "Event Hall",
        capacity: "200 orang",
        price: 15000000,
        image:
          "https://images.unsplash.com/photo-1489599804159-c05e4b9c4e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
          "Panggung Besar",
          "Lighting System",
          "Sound Professional",
          "Catering Area",
        ],
        description: "Hall besar untuk acara perusahaan atau gathering",
      },
    ],

    promos: [
      {
        id: 1,
        title: "Hari Spesial",
        description: "Diskon 30% setiap hari Selasa untuk semua tiket",
        code: "SELASA30",
        expiry: "Berlaku hingga 31 Desember 2023",
      },
      {
        id: 2,
        title: "Student Discount",
        description: "Potongan 25% untuk pelajar dan mahasiswa",
        code: "STUDENT25",
        expiry: "Syarat dan ketentuan berlaku",
      },
      {
        id: 3,
        title: "Member Loyalty",
        description: "Dapatkan 1 tiket gratis setelah 10x menonton",
        code: "LOYALTY10",
        expiry: "Hanya untuk member CineMax",
      },
    ],
  };

  // Shopping Cart
  let shoppingCart = {
    items: [],
    total: 0,
    addItem: function (item, quantity = 1) {
      const existingItem = this.items.find(
        (cartItem) => cartItem.id === item.id && cartItem.type === item.type
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...item, quantity });
      }
      this.calculateTotal();
      this.updateCartDisplay();
    },
    removeItem: function (itemId, itemType) {
      this.items = this.items.filter(
        (item) => !(item.id === itemId && item.type === itemType)
      );
      this.calculateTotal();
      this.updateCartDisplay();
    },
    updateQuantity: function (itemId, itemType, quantity) {
      const item = this.items.find(
        (item) => item.id === itemId && item.type === itemType
      );
      if (item) {
        if (quantity <= 0) {
          this.removeItem(itemId, itemType);
        } else {
          item.quantity = quantity;
        }
        this.calculateTotal();
        this.updateCartDisplay();
      }
    },
    calculateTotal: function () {
      this.total = this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    clear: function () {
      this.items = [];
      this.total = 0;
      this.updateCartDisplay();
    },
    updateCartDisplay: function () {
      const cartCount = document.querySelector(".cart-count");
      const cartItems = document.querySelector(".cart-items");
      const cartTotal = document.querySelector(".cart-total");

      if (cartCount) {
        cartCount.textContent = this.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      }

      if (cartItems && cartTotal) {
        cartItems.innerHTML = this.items
          .map(
            (item) => `
          <div class="cart-item">
            <img src="${item.image || item.poster}" alt="${
              item.name || item.title
            }" class="cart-item-image">
            <div class="cart-item-details">
              <div class="cart-item-name">${item.name || item.title}</div>
              <div class="cart-item-price">Rp ${item.price.toLocaleString()} x ${
              item.quantity
            }</div>
            </div>
            <div class="cart-item-actions">
              <button class="quantity-btn" onclick="app.shoppingCart.updateQuantity(${
                item.id
              }, '${item.type}', ${item.quantity - 1})">-</button>
              <span class="quantity-display">${item.quantity}</span>
              <button class="quantity-btn" onclick="app.shoppingCart.updateQuantity(${
                item.id
              }, '${item.type}', ${item.quantity + 1})">+</button>
              <button class="btn btn-sm btn-danger ms-2" onclick="app.shoppingCart.removeItem(${
                item.id
              }, '${item.type}')">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `
          )
          .join("");

        cartTotal.innerHTML = `
          <h4>Total: Rp ${this.total.toLocaleString()}</h4>
          <button class="btn btn-primary w-100 mt-3" onclick="app.checkout()">Checkout</button>
          <button class="btn btn-outline-secondary w-100 mt-2" onclick="app.shoppingCart.clear()">Kosongkan Keranjang</button>
        `;
      }
    },
  };

  // Global app object
  const app = {
    shoppingCart: shoppingCart,
    currentUser: null,
    currentBooking: null,

    // Initialize App
    init: function () {
      this.loadMovies();
      this.loadCinemas();
      this.loadFoodItems();
      this.loadVenues();
      this.loadPromos();
      this.setupEventListeners();
      this.setupScrollEffects();
      console.log("CineMax Website initialized successfully!");
    },

    // Load Movies
    loadMovies: function () {
      // Now Playing Movies
      const nowPlayingContainer = document.getElementById("now-playing-movies");
      if (nowPlayingContainer) {
        nowPlayingContainer.innerHTML = "";
        appData.movies["now-playing"].forEach((movie) => {
          const movieCard = this.createMovieCard(movie, true);
          nowPlayingContainer.appendChild(movieCard);
        });
      }

      // Coming Soon Movies
      const comingSoonContainer = document.getElementById("coming-soon-movies");
      if (comingSoonContainer) {
        comingSoonContainer.innerHTML = "";
        appData.movies["coming-soon"].forEach((movie) => {
          const movieCard = this.createMovieCard(movie, false);
          comingSoonContainer.appendChild(movieCard);
        });
      }
    },

    // Create Movie Card
    createMovieCard: function (movie, isNowPlaying) {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-3 mb-4";

      const card = document.createElement("div");
      card.className = "movie-card";
      card.setAttribute("data-movie-id", movie.id);

      const poster = document.createElement("img");
      poster.className = "movie-poster";
      poster.src = movie.poster;
      poster.alt = movie.title;

      const info = document.createElement("div");
      info.className = "movie-info";

      const title = document.createElement("h5");
      title.className = "movie-title";
      title.textContent = movie.title;

      const meta = document.createElement("div");
      meta.className = "movie-meta";

      const rating = document.createElement("span");
      rating.className = "rating";
      if (movie.rating) {
        rating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}/10`;
      } else {
        rating.innerHTML = `<i class="fas fa-clock"></i> Coming Soon`;
      }

      const duration = document.createElement("span");
      duration.className = "duration";
      duration.textContent = movie.duration;

      meta.appendChild(rating);
      meta.appendChild(duration);

      const genres = document.createElement("div");
      genres.className = "movie-genres";
      movie.genres.forEach((genre) => {
        const genreTag = document.createElement("span");
        genreTag.className = "genre-tag";
        genreTag.textContent = genre;
        genres.appendChild(genreTag);
      });

      const description = document.createElement("p");
      description.className = "movie-description";
      description.textContent = movie.description;

      info.appendChild(title);
      info.appendChild(meta);
      info.appendChild(genres);
      info.appendChild(description);

      if (isNowPlaying) {
        const showtimes = document.createElement("div");
        showtimes.className = "showtimes";
        movie.showtimes.forEach((showtime) => {
          const showtimeBtn = document.createElement("button");
          showtimeBtn.className = "showtime-btn";
          showtimeBtn.textContent = showtime;
          showtimeBtn.addEventListener("click", () =>
            this.selectShowtime(movie, showtime)
          );
          showtimes.appendChild(showtimeBtn);
        });

        const buyButton = document.createElement("button");
        buyButton.className = "btn btn-primary w-100";
        buyButton.textContent = "Beli Tiket";
        buyButton.addEventListener("click", () => this.openBookingModal(movie));

        info.appendChild(showtimes);
        info.appendChild(buyButton);
      } else {
        const releaseInfo = document.createElement("div");
        releaseInfo.className = "text-muted mb-3";
        releaseInfo.innerHTML = `<i class="fas fa-calendar me-2"></i>Tayang: ${movie.releaseDate}`;

        const remindButton = document.createElement("button");
        remindButton.className = "btn btn-outline-primary w-100";
        remindButton.textContent = "Ingatkan Saya";
        remindButton.addEventListener("click", () => this.setReminder(movie));

        info.appendChild(releaseInfo);
        info.appendChild(remindButton);
      }

      card.appendChild(poster);
      card.appendChild(info);
      col.appendChild(card);

      return col;
    },

    // Load Cinemas
    loadCinemas: function () {
      const cinemasContainer = document.getElementById("cinemas-list");
      if (cinemasContainer) {
        cinemasContainer.innerHTML = "";
        appData.cinemas.forEach((cinema) => {
          const col = document.createElement("div");
          col.className = "col-md-6 mb-4";

          const card = document.createElement("div");
          card.className = "cinema-card";

          const name = document.createElement("h4");
          name.className = "cinema-name";
          name.textContent = cinema.name;

          const location = document.createElement("p");
          location.className = "cinema-location";
          location.innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${cinema.location}`;

          const facilities = document.createElement("div");
          facilities.className = "cinema-facilities";
          cinema.facilities.forEach((facility) => {
            const facilityTag = document.createElement("span");
            facilityTag.className = "facility-tag";
            facilityTag.textContent = facility;
            facilities.appendChild(facilityTag);
          });

          const scheduleButton = document.createElement("button");
          scheduleButton.className = "btn btn-primary";
          scheduleButton.textContent = "Lihat Jadwal";
          scheduleButton.addEventListener("click", () =>
            this.viewCinemaSchedule(cinema)
          );

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(facilities);
          card.appendChild(scheduleButton);

          col.appendChild(card);
          cinemasContainer.appendChild(col);
        });
      }
    },

    // Load Food Items
    loadFoodItems: function () {
      const foodContainer = document.getElementById("food-items");
      if (foodContainer) {
        // Group by category
        const categories = {
          snack: appData.foodItems.filter((item) => item.category === "snack"),
          beverage: appData.foodItems.filter(
            (item) => item.category === "beverage"
          ),
        };

        let html = "";

        // Snacks
        html += `
          <div class="food-category">
            <h3 class="food-category-title"><i class="fas fa-popcorn me-2"></i>Snacks</h3>
            <div class="row">
              ${categories.snack
                .map(
                  (item) => `
                <div class="col-md-6 col-lg-4 mb-4">
                  <div class="food-card">
                    <img src="${item.image}" alt="${
                    item.name
                  }" class="food-image">
                    <div class="food-info">
                      <h5 class="food-name">${item.name}</h5>
                      <p class="food-description">${item.description}</p>
                      <div class="food-price">Rp ${item.price.toLocaleString()}</div>
                      <div class="food-actions">
                        <div class="quantity-controls">
                          <button class="quantity-btn" onclick="app.updateFoodQuantity(${
                            item.id
                          }, -1)">-</button>
                          <span class="quantity-display" id="quantity-${
                            item.id
                          }">0</span>
                          <button class="quantity-btn" onclick="app.updateFoodQuantity(${
                            item.id
                          }, 1)">+</button>
                        </div>
                        <button class="btn btn-primary" onclick="app.addFoodToCart(${
                          item.id
                        })">
                          <i class="fas fa-cart-plus me-1"></i>Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;

        // Beverages
        html += `
          <div class="food-category">
            <h3 class="food-category-title"><i class="fas fa-cocktail me-2"></i>Beverages</h3>
            <div class="row">
              ${categories.beverage
                .map(
                  (item) => `
                <div class="col-md-6 col-lg-4 mb-4">
                  <div class="food-card">
                    <img src="${item.image}" alt="${
                    item.name
                  }" class="food-image">
                    <div class="food-info">
                      <h5 class="food-name">${item.name}</h5>
                      <p class="food-description">${item.description}</p>
                      <div class="food-price">Rp ${item.price.toLocaleString()}</div>
                      <div class="food-actions">
                        <div class="quantity-controls">
                          <button class="quantity-btn" onclick="app.updateFoodQuantity(${
                            item.id
                          }, -1)">-</button>
                          <span class="quantity-display" id="quantity-${
                            item.id
                          }">0</span>
                          <button class="quantity-btn" onclick="app.updateFoodQuantity(${
                            item.id
                          }, 1)">+</button>
                        </div>
                        <button class="btn btn-primary" onclick="app.addFoodToCart(${
                          item.id
                        })">
                          <i class="fas fa-cart-plus me-1"></i>Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;

        foodContainer.innerHTML = html;
      }
    },

    // Load Venues
    loadVenues: function () {
      const venuesContainer = document.getElementById("venues-list");
      if (venuesContainer) {
        venuesContainer.innerHTML = "";
        appData.venues.forEach((venue) => {
          const col = document.createElement("div");
          col.className = "col-lg-6 mb-4";

          const card = document.createElement("div");
          card.className = "venue-card";

          const image = document.createElement("img");
          image.className = "venue-image";
          image.src = venue.image;
          image.alt = venue.name;

          const info = document.createElement("div");
          info.className = "venue-info";

          const name = document.createElement("h4");
          name.className = "venue-name";
          name.textContent = venue.name;

          const capacity = document.createElement("p");
          capacity.className = "venue-capacity";
          capacity.innerHTML = `<i class="fas fa-users me-2"></i>Kapasitas: ${venue.capacity}`;

          const features = document.createElement("div");
          features.className = "venue-features";
          venue.features.forEach((feature) => {
            const featureTag = document.createElement("span");
            featureTag.className = "venue-feature";
            featureTag.textContent = feature;
            features.appendChild(featureTag);
          });

          const price = document.createElement("div");
          price.className = "venue-price";
          price.textContent = `Rp ${venue.price.toLocaleString()}/hari`;

          const description = document.createElement("p");
          description.className = "venue-description";
          description.textContent = venue.description;

          const rentButton = document.createElement("button");
          rentButton.className = "btn btn-primary w-100";
          rentButton.textContent = "Sewa Sekarang";
          rentButton.addEventListener("click", () =>
            this.openVenueRentalModal(venue)
          );

          info.appendChild(name);
          info.appendChild(capacity);
          info.appendChild(features);
          info.appendChild(price);
          info.appendChild(description);
          info.appendChild(rentButton);

          card.appendChild(image);
          card.appendChild(info);
          col.appendChild(card);
          venuesContainer.appendChild(col);
        });
      }
    },

    // Load Promos
    loadPromos: function () {
      const promosContainer = document.getElementById("promo-cards");
      if (promosContainer) {
        promosContainer.innerHTML = "";
        appData.promos.forEach((promo) => {
          const col = document.createElement("div");
          col.className = "col-md-4 mb-4";

          const card = document.createElement("div");
          card.className = "promo-card";

          const content = document.createElement("div");
          content.className = "promo-content";

          const title = document.createElement("h4");
          title.className = "promo-title";
          title.textContent = promo.title;

          const description = document.createElement("p");
          description.className = "promo-description";
          description.textContent = promo.description;

          const code = document.createElement("div");
          code.className = "promo-code";
          code.textContent = `Kode: ${promo.code}`;

          const expiry = document.createElement("div");
          expiry.className = "promo-expiry";
          expiry.textContent = promo.expiry;

          content.appendChild(title);
          content.appendChild(description);
          content.appendChild(code);
          content.appendChild(expiry);

          card.appendChild(content);
          col.appendChild(card);
          promosContainer.appendChild(col);
        });
      }
    },

    // Setup Event Listeners
    setupEventListeners: function () {
      // Login/Register buttons
      const loginBtn = document.querySelector(".btn-login");
      const registerBtn = document.querySelector(".btn-register");
      const cartBtn = document.querySelector(".btn-cart");

      if (loginBtn) loginBtn.addEventListener("click", this.openLoginModal);
      if (registerBtn)
        registerBtn.addEventListener("click", this.openRegisterModal);
      if (cartBtn) cartBtn.addEventListener("click", this.toggleCart);

      // Buy ticket buttons
      document.querySelectorAll(".btn-buy-ticket").forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          document
            .getElementById("now-playing")
            .scrollIntoView({ behavior: "smooth" });
        });
      });

      // Newsletter form
      const newsletterForm = document.querySelector(".newsletter-form");
      if (newsletterForm) {
        newsletterForm.addEventListener("submit", this.handleNewsletterSubmit);
      }

      // Login form
      const loginForm = document.getElementById("loginForm");
      if (loginForm) {
        loginForm.addEventListener("submit", this.handleLogin);
      }

      // Register form
      const registerForm = document.getElementById("registerForm");
      if (registerForm) {
        registerForm.addEventListener("submit", this.handleRegister);
      }

      // Close cart when clicking overlay
      const cartOverlay = document.querySelector(".cart-overlay");
      if (cartOverlay) {
        cartOverlay.addEventListener("click", this.toggleCart);
      }
    },

    // Setup Scroll Effects
    setupScrollEffects: function () {
      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      if (navbar) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }

          // Active nav link highlighting
          const sections = document.querySelectorAll("section");
          const navLinks = document.querySelectorAll(".nav-link");

          let current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
              current = section.getAttribute("id");
            }
          });

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
              link.classList.add("active");
            }
          });
        });
      }

      // Add some interactive animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observe all interactive elements
      document
        .querySelectorAll(
          ".movie-card, .cinema-card, .promo-card, .food-card, .venue-card"
        )
        .forEach((card) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          observer.observe(card);
        });
    },

    // Modal Functions
    openLoginModal: function () {
      const modal = new bootstrap.Modal(document.getElementById("loginModal"));
      modal.show();
    },

    openRegisterModal: function () {
      const modal = new bootstrap.Modal(
        document.getElementById("registerModal")
      );
      modal.show();
    },

    openBookingModal: function (movie) {
      const modal = new bootstrap.Modal(
        document.getElementById("bookingModal")
      );
      document.getElementById(
        "bookingMovieTitle"
      ).textContent = `Pemesanan Tiket - ${movie.title}`;

      const bookingSteps = document.getElementById("bookingSteps");
      if (bookingSteps) {
        bookingSteps.innerHTML = this.createBookingSteps(movie);
      }

      modal.show();
    },

    openVenueRentalModal: function (venue) {
      const modal = new bootstrap.Modal(
        document.getElementById("venueRentalModal")
      );
      document.getElementById(
        "venueRentalTitle"
      ).textContent = `Sewa ${venue.name}`;

      // Setup venue rental form
      const rentalForm = document.getElementById("venueRentalForm");
      if (rentalForm) {
        rentalForm.innerHTML = this.createVenueRentalForm(venue);
      }

      modal.show();
    },

    createBookingSteps: function (movie) {
      return `
        <div class="booking-steps">
          <div class="step active">
            <div class="step-number">1</div>
            <div class="step-label">Pilih Kursi</div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-label">Pembayaran</div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-label">Konfirmasi</div>
          </div>
        </div>
        <div class="booking-content">
          <h5>${movie.title}</h5>
          <p>Silakan pilih waktu tayang dan kursi yang tersedia.</p>
          <div class="showtimes-selection mb-4">
            <h6>Pilih Waktu Tayang:</h6>
            <div class="showtimes">
              ${movie.showtimes
                .map(
                  (time) =>
                    `<button class="showtime-btn" onclick="app.selectShowtime(${movie.id}, '${time}')">${time}</button>`
                )
                .join("")}
            </div>
          </div>
          <div class="cinema-selection mb-4">
            <h6>Pilih Bioskop:</h6>
            <select class="form-select" id="cinemaSelect">
              <option>Pilih bioskop...</option>
              ${appData.cinemas
                .map(
                  (cinema) =>
                    `<option value="${cinema.id}">${cinema.name}</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="seat-selection mb-4">
            <h6>Pilih Kursi:</h6>
            <div class="seat-map">
              <div class="screen">L A Y A R</div>
              ${this.generateSeatMap()}
            </div>
          </div>
          <button class="btn btn-primary w-100" onclick="app.proceedToPayment()">Lanjut ke Pembayaran</button>
        </div>
      `;
    },

    createVenueRentalForm: function (venue) {
      return `
        <div class="venue-rental-info mb-4">
          <h5>${venue.name}</h5>
          <p class="text-muted">${venue.description}</p>
          <div class="venue-details">
            <p><strong>Kapasitas:</strong> ${venue.capacity}</p>
            <p><strong>Harga:</strong> Rp ${venue.price.toLocaleString()}/hari</p>
            <p><strong>Fasilitas:</strong> ${venue.features.join(", ")}</p>
          </div>
        </div>
        <form id="rentalForm">
          <div class="mb-3">
            <label for="rentalDate" class="form-label">Tanggal Sewa</label>
            <input type="date" class="form-control" id="rentalDate" required>
          </div>
          <div class="mb-3">
            <label for="rentalDuration" class="form-label">Durasi (hari)</label>
            <input type="number" class="form-control" id="rentalDuration" min="1" max="7" value="1" required>
          </div>
          <div class="mb-3">
            <label for="eventPurpose" class="form-label">Tujuan Acara</label>
            <textarea class="form-control" id="eventPurpose" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label for="attendees" class="form-label">Perkiraan Jumlah Peserta</label>
            <input type="number" class="form-control" id="attendees" min="1" max="200" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Ajukan Sewa</button>
        </form>
      `;
    },

    generateSeatMap: function () {
      const rows = ["A", "B", "C", "D", "E", "F"];
      let seatMap = "";

      rows.forEach((row) => {
        seatMap += `<div class="seat-row">`;
        for (let i = 1; i <= 8; i++) {
          const seatId = `${row}${i}`;
          const isOccupied = Math.random() < 0.2; // 20% chance seat is occupied
          const isVip = row === "A" || row === "B";
          const seatClass = `seat ${isOccupied ? "occupied" : "available"} ${
            isVip ? "vip" : ""
          }`;

          seatMap += `<div class="${seatClass}" data-seat="${seatId}" onclick="app.selectSeat('${seatId}')">${seatId}</div>`;
        }
        seatMap += `</div>`;
      });

      return seatMap;
    },

    // Food & Beverage Functions
    updateFoodQuantity: function (itemId, change) {
      const quantityDisplay = document.getElementById(`quantity-${itemId}`);
      if (quantityDisplay) {
        let quantity = parseInt(quantityDisplay.textContent) || 0;
        quantity = Math.max(0, quantity + change);
        quantityDisplay.textContent = quantity;
      }
    },

    addFoodToCart: function (itemId) {
      const quantityDisplay = document.getElementById(`quantity-${itemId}`);
      const quantity = parseInt(quantityDisplay.textContent) || 0;

      if (quantity > 0) {
        const foodItem = appData.foodItems.find((item) => item.id === itemId);
        if (foodItem) {
          this.shoppingCart.addItem(
            {
              ...foodItem,
              type: "food",
            },
            quantity
          );
          this.showNotification(
            `${foodItem.name} ditambahkan ke keranjang`,
            "success"
          );
          quantityDisplay.textContent = "0";
        }
      } else {
        this.showNotification("Pilih jumlah terlebih dahulu", "warning");
      }
    },

    // Cart Functions
    toggleCart: function () {
      const cartSidebar = document.querySelector(".cart-sidebar");
      const cartOverlay = document.querySelector(".cart-overlay");

      if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle("open");
        cartOverlay.classList.toggle("show");
      }
    },

    checkout: function () {
      if (this.shoppingCart.items.length === 0) {
        this.showNotification("Keranjang belanja kosong", "warning");
        return;
      }

      this.showNotification("Proses checkout berhasil!", "success");
      this.shoppingCart.clear();
      this.toggleCart();
    },

    // Utility Functions
    selectShowtime: function (movieId, showtime) {
      const movie =
        appData.movies["now-playing"].find((m) => m.id === movieId) ||
        appData.movies["coming-soon"].find((m) => m.id === movieId);
      if (movie) {
        this.showNotification(
          `Anda memilih ${movie.title} pada jam ${showtime}`,
          "info"
        );
      }
    },

    selectSeat: function (seatId) {
      const seat = document.querySelector(`[data-seat="${seatId}"]`);
      if (seat && seat.classList.contains("available")) {
        seat.classList.toggle("selected");
        this.showNotification(
          `Kursi ${seatId} ${
            seat.classList.contains("selected") ? "dipilih" : "dibatalkan"
          }`,
          "info"
        );
      }
    },

    setReminder: function (movie) {
      this.showNotification(
        `Kami akan mengingatkan Anda ketika ${movie.title} tayang!`,
        "info"
      );
    },

    viewCinemaSchedule: function (cinema) {
      this.showNotification(`Menampilkan jadwal untuk ${cinema.name}`, "info");
    },

    proceedToPayment: function () {
      const selectedSeats = document.querySelectorAll(".seat.selected");
      if (selectedSeats.length === 0) {
        this.showNotification("Pilih kursi terlebih dahulu", "warning");
        return;
      }

      const cinemaSelect = document.getElementById("cinemaSelect");
      if (!cinemaSelect || cinemaSelect.value === "Pilih bioskop...") {
        this.showNotification("Pilih bioskop terlebih dahulu", "warning");
        return;
      }

      this.showNotification("Lanjut ke proses pembayaran...", "success");
    },

    // Event Handlers
    handleNewsletterSubmit: function (e) {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      app.showNotification(
        "Terima kasih! Anda telah berlangganan newsletter kami.",
        "success"
      );
      e.target.reset();
    },

    handleLogin: function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // Simulate login process
      app.showNotification(
        "Login berhasil! Selamat datang kembali.",
        "success"
      );
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
      app.currentUser = { email: email, name: email.split("@")[0] };
      e.target.reset();
    },

    handleRegister: function (e) {
      e.preventDefault();
      const name = document.getElementById("registerName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const phone = document.getElementById("registerPhone").value;

      // Simulate registration process
      app.showNotification(
        `Pendaftaran berhasil! Selamat bergabung, ${name}.`,
        "success"
      );
      bootstrap.Modal.getInstance(
        document.getElementById("registerModal")
      ).hide();
      app.currentUser = { email: email, name: name, phone: phone };
      e.target.reset();
    },

    // Notification System
    showNotification: function (message, type = "info") {
      // Create toast container if it doesn't exist
      let toastContainer = document.querySelector(".toast-container");
      if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.className = "toast-container";
        document.body.appendChild(toastContainer);
      }

      // Create toast element
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span>${message}</span>
          <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
      `;

      toastContainer.appendChild(toast);

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 5000);
    },
  };

  // Initialize the app
  app.init();

  // Make app globally available
  window.app = app;
});
