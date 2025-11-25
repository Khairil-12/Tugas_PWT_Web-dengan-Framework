// CineMax Website - Interactive Features
document.addEventListener("DOMContentLoaded", function () {
  // Data Movies
  const moviesData = {
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
      },
    ],
  };

  // Data Bioskop
  const cinemasData = [
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
  ];

  // Data Promo
  const promosData = [
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
  ];

  // Initialize App
  initApp();

  function initApp() {
    loadMovies();
    loadCinemas();
    loadPromos();
    setupEventListeners();
    setupScrollEffects();
    console.log("CineMax Website initialized successfully!");
  }

  // Load Movies
  function loadMovies() {
    // Now Playing Movies
    const nowPlayingContainer = document.getElementById("now-playing-movies");
    moviesData["now-playing"].forEach((movie) => {
      const movieCard = createMovieCard(movie, true);
      nowPlayingContainer.appendChild(movieCard);
    });

    // Coming Soon Movies
    const comingSoonContainer = document.getElementById("coming-soon-movies");
    moviesData["coming-soon"].forEach((movie) => {
      const movieCard = createMovieCard(movie, false);
      comingSoonContainer.appendChild(movieCard);
    });
  }

  // Create Movie Card
  function createMovieCard(movie, isNowPlaying) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

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
          selectShowtime(movie, showtime)
        );
        showtimes.appendChild(showtimeBtn);
      });

      const buyButton = document.createElement("button");
      buyButton.className = "btn btn-primary w-100";
      buyButton.textContent = "Beli Tiket";
      buyButton.addEventListener("click", () => openBookingModal(movie));

      info.appendChild(showtimes);
      info.appendChild(buyButton);
    } else {
      const releaseInfo = document.createElement("div");
      releaseInfo.className = "text-muted mb-3";
      releaseInfo.innerHTML = `<i class="fas fa-calendar me-2"></i>Tayang: ${movie.releaseDate}`;

      const remindButton = document.createElement("button");
      remindButton.className = "btn btn-outline-primary w-100";
      remindButton.textContent = "Ingatkan Saya";
      remindButton.addEventListener("click", () => setReminder(movie));

      info.appendChild(releaseInfo);
      info.appendChild(remindButton);
    }

    card.appendChild(poster);
    card.appendChild(info);
    col.appendChild(card);

    return col;
  }

  // Load Cinemas
  function loadCinemas() {
    const cinemasContainer = document.getElementById("cinemas-list");
    cinemasData.forEach((cinema) => {
      const col = document.createElement("div");
      col.className = "col-md-6";

      const card = document.createElement("div");
      card.className = "cinema-card";

      const name = document.createElement("h4");
      name.className = "cinema-name";
      name.textContent = cinema.name;

      const location = document.createElement("p");
      location.className = "cinema-location";
      location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${cinema.location}`;

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
        viewCinemaSchedule(cinema)
      );

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(facilities);
      card.appendChild(scheduleButton);

      col.appendChild(card);
      cinemasContainer.appendChild(col);
    });
  }

  // Load Promos
  function loadPromos() {
    const promosContainer = document.getElementById("promo-cards");
    promosData.forEach((promo) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

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

  // Setup Event Listeners
  function setupEventListeners() {
    // Login/Register buttons
    document
      .querySelector(".btn-login")
      .addEventListener("click", openLoginModal);
    document
      .querySelector(".btn-register")
      .addEventListener("click", openRegisterModal);

    // Buy ticket buttons
    document.querySelectorAll(".btn-buy-ticket").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // Scroll to now playing section
        document
          .getElementById("now-playing")
          .scrollIntoView({ behavior: "smooth" });
      });
    });

    // Newsletter form
    document
      .querySelector(".newsletter-form")
      .addEventListener("submit", handleNewsletterSubmit);

    // Login form
    document
      .getElementById("loginForm")
      .addEventListener("submit", handleLogin);

    // Register form
    document
      .getElementById("registerForm")
      .addEventListener("submit", handleRegister);
  }

  // Setup Scroll Effects
  function setupScrollEffects() {
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
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
        if (scrollY >= sectionTop - 100) {
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

  // Modal Functions
  function openLoginModal() {
    const modal = new bootstrap.Modal(document.getElementById("loginModal"));
    modal.show();
  }

  function openRegisterModal() {
    const modal = new bootstrap.Modal(document.getElementById("registerModal"));
    modal.show();
  }

  function openBookingModal(movie) {
    const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
    document.getElementById(
      "bookingMovieTitle"
    ).textContent = `Pemesanan Tiket - ${movie.title}`;

    // Setup booking steps
    const bookingSteps = document.getElementById("bookingSteps");
    bookingSteps.innerHTML = createBookingSteps(movie);

    modal.show();
  }

  function createBookingSteps(movie) {
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
                              `<button class="showtime-btn" onclick="selectShowtime('${movie.id}', '${time}')">${time}</button>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="cinema-selection">
                    <h6>Pilih Bioskop:</h6>
                    <select class="form-select mb-3">
                        <option>Pilih bioskop...</option>
                        ${cinemasData
                          .map(
                            (cinema) =>
                              `<option value="${cinema.id}">${cinema.name}</option>`
                          )
                          .join("")}
                    </select>
                </div>
                <button class="btn btn-primary w-100" onclick="proceedToSeatSelection()">Lanjut ke Pemilihan Kursi</button>
            </div>
        `;
  }

  // Event Handlers
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    showNotification(
      "Terima kasih! Anda telah berlangganan newsletter kami.",
      "success"
    );
    e.target.reset();
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Simulate login process
    showNotification("Login berhasil! Selamat datang kembali.", "success");
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    e.target.reset();
  }

  function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phone = document.getElementById("registerPhone").value;

    // Simulate registration process
    showNotification(
      `Pendaftaran berhasil! Selamat bergabung, ${name}.`,
      "success"
    );
    bootstrap.Modal.getInstance(
      document.getElementById("registerModal")
    ).hide();
    e.target.reset();
  }

  // Utility Functions
  function selectShowtime(movie, showtime) {
    showNotification(
      `Anda memilih ${movie.title} pada jam ${showtime}`,
      "info"
    );
  }

  function setReminder(movie) {
    showNotification(
      `Kami akan mengingatkan Anda ketika ${movie.title} tayang!`,
      "info"
    );
  }

  function viewCinemaSchedule(cinema) {
    showNotification(`Menampilkan jadwal untuk ${cinema.name}`, "info");
  }

  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
        `;
    notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  // Global functions for inline event handlers
  window.selectShowtime = selectShowtime;
  window.proceedToSeatSelection = function () {
    showNotification("Silakan pilih kursi yang tersedia", "info");
  };

  // Add some interactive animations
  document.addEventListener("DOMContentLoaded", function () {
    // Animate elements on scroll
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

    // Observe all movie cards and cinema cards
    document
      .querySelectorAll(".movie-card, .cinema-card, .promo-card")
      .forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      });
  });
});
