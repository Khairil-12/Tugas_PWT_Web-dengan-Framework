// Movie Data - Simpan di localStorage untuk konsistensi antar halaman
const initializeMovieData = () => {
  if (!localStorage.getItem("cinestars_movies")) {
    const movies = {
      nowPlaying: [
        {
          id: 1,
          title: "AVATAR: THE WAY OF WATER",
          genre: "Action, Adventure, Sci-Fi",
          rating: 8.1,
          duration: "3h 12m",
          poster: "🎬",
          description:
            "Jake Sully hidup bersama keluarga baru di planet Pandora dan menjelajahi wilayah laut yang kaya.",
        },
        {
          id: 2,
          title: "BLACK PANTHER: WAKANDA FOREVER",
          genre: "Action, Adventure, Drama",
          rating: 7.9,
          duration: "2h 41m",
          poster: "🎬",
          description:
            "Bangsa Wakanda berjuang melindungi kerajaan mereka setelah kematian Raja T'Challa.",
        },
        {
          id: 3,
          title: "THE BATMAN",
          genre: "Action, Crime, Drama",
          rating: 8.3,
          duration: "2h 56m",
          poster: "🎬",
          description:
            "Batman mengungkap korupsi di Gotham City saat memburu Riddler yang kejam.",
        },
        {
          id: 4,
          title: "TOP GUN: MAVERICK",
          genre: "Action, Drama",
          rating: 8.7,
          duration: "2h 10m",
          poster: "🎬",
          description:
            "Setelah 30 tahun, Maverick masih menjadi salah satu pilot top Angkatan Laut.",
        },
      ],
      comingSoon: [
        {
          id: 5,
          title: "GUARDIANS OF THE GALAXY VOL. 3",
          genre: "Action, Adventure, Comedy",
          rating: 0,
          duration: "2h 30m",
          poster: "🎬",
          releaseDate: "May 5, 2024",
        },
        {
          id: 6,
          title: "FAST X",
          genre: "Action, Crime, Thriller",
          rating: 0,
          duration: "2h 21m",
          poster: "🎬",
          releaseDate: "May 19, 2024",
        },
      ],
    };
    localStorage.setItem("cinestars_movies", JSON.stringify(movies));
  }
};

// Safe element selector dengan error handling
const safeSelect = (selector) => {
  try {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
    }
    return element;
  } catch (error) {
    console.error(`Error selecting ${selector}:`, error);
    return null;
  }
};

// Safe element selector multiple
const safeSelectAll = (selector) => {
  try {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      console.warn(`No elements found: ${selector}`);
    }
    return elements;
  } catch (error) {
    console.error(`Error selecting all ${selector}:`, error);
    return [];
  }
};

// Initialize App dengan error handling
document.addEventListener("DOMContentLoaded", function () {
  console.log("Cinestars Premium loaded");

  try {
    initializeMovieData();
    initializePage();
  } catch (error) {
    console.error("Error during initialization:", error);
    showNotification("Terjadi error saat memuat halaman", "error");
  }
});

// Initialize page berdasarkan halaman saat ini
function initializePage() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  console.log("Current page:", page);

  switch (page) {
    case "index.html":
    case "":
      initializeHomePage();
      break;
    case "bioskop.html":
      initializeBioskopPage();
      break;
    case "film.html":
      initializeFilmPage();
      break;
    case "food.html":
      initializeFoodPage();
      break;
    case "sewa.html":
      initializeSewaPage();
      break;
    case "login.html":
      initializeLoginPage();
      break;
    default:
      initializeHomePage();
  }
}

// Initialize Home Page
function initializeHomePage() {
  try {
    loadMovies();
    initializeSearch();
    initializeAnimations();
    console.log("Home page initialized successfully");
  } catch (error) {
    console.error("Error initializing home page:", error);
  }
}

// Load Movies to DOM dengan error handling
function loadMovies() {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const nowPlayingGrid = safeSelect("#nowPlayingGrid");
    const comingSoonGrid = safeSelect("#comingSoonGrid");

    if (nowPlayingGrid && moviesData.nowPlaying) {
      nowPlayingGrid.innerHTML = "";
      moviesData.nowPlaying.forEach((movie) => {
        const movieCard = createMovieCard(movie, true);
        if (movieCard) nowPlayingGrid.appendChild(movieCard);
      });
    }

    if (comingSoonGrid && moviesData.comingSoon) {
      comingSoonGrid.innerHTML = "";
      moviesData.comingSoon.forEach((movie) => {
        const movieCard = createMovieCard(movie, false);
        if (movieCard) comingSoonGrid.appendChild(movieCard);
      });
    }
  } catch (error) {
    console.error("Error loading movies:", error);
    showNotification("Error memuat data film", "error");
  }
}

// Create Movie Card Element
function createMovieCard(movie, isNowPlaying) {
  try {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
            <div class="movie-poster">
                ${movie.poster}
                <div class="movie-overlay">
                    <button class="btn-small" onclick="showMovieDetails(${
                      movie.id
                    })" title="Detail Film">
                        <i class="fas fa-info-circle"></i>
                    </button>
                    ${
                      isNowPlaying
                        ? `
                        <button class="btn-small" onclick="buyTicket(${movie.id})" title="Beli Tiket">
                            <i class="fas fa-ticket-alt"></i>
                        </button>
                    `
                        : `
                        <button class="btn-small" onclick="addToWaitlist(${movie.id})" title="Tambah Waitlist">
                            <i class="fas fa-bell"></i>
                        </button>
                    `
                    }
                </div>
            </div>
            <div class="movie-info">
                <h4 class="movie-title">${movie.title}</h4>
                <p class="movie-genre">${movie.genre}</p>
                <div class="movie-rating">
                    ${
                      isNowPlaying
                        ? `
                        <span class="rating">
                            <i class="fas fa-star"></i> ${movie.rating}/10
                        </span>
                        <span class="duration">${movie.duration}</span>
                    `
                        : `
                        <span class="release-date">${movie.releaseDate}</span>
                    `
                    }
                </div>
            </div>
        `;
    return card;
  } catch (error) {
    console.error("Error creating movie card:", error);
    return null;
  }
}

// Initialize Search Functionality
function initializeSearch() {
  const searchInput = safeSelect("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      if (searchTerm.length > 2) {
        searchMovies(searchTerm);
      }
    });
  }
}

// Search Movies
function searchMovies(searchTerm) {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const allMovies = [...moviesData.nowPlaying, ...moviesData.comingSoon];
    const results = allMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm)
    );

    console.log("Search results:", results);
    // Bisa diimplementasikan tampilan hasil pencarian
  } catch (error) {
    console.error("Error searching movies:", error);
  }
}

// Show Movie Details
function showMovieDetails(movieId) {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const allMovies = [...moviesData.nowPlaying, ...moviesData.comingSoon];
    const movie = allMovies.find((m) => m.id === movieId);

    if (movie) {
      showNotification(`Detail: ${movie.title} - ${movie.genre}`, "info");
      // Bisa diganti dengan modal yang lebih baik
      setTimeout(() => {
        alert(
          `Detail Film:\n\n${movie.title}\nGenre: ${movie.genre}\nRating: ${
            movie.rating || "Coming Soon"
          }\nDurasi: ${movie.duration}\n\n${
            movie.description || "Segera tayang di Cinestars!"
          }`
        );
      }, 1000);
    }
  } catch (error) {
    console.error("Error showing movie details:", error);
    showNotification("Error menampilkan detail film", "error");
  }
}

// Buy Ticket
function buyTicket(movieId) {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const movie = moviesData.nowPlaying.find((m) => m.id === movieId);
    if (movie) {
      showNotification(`Membeli tiket: ${movie.title}`, "success");
      // Redirect to booking page
      setTimeout(() => {
        window.location.href = "bioskop.html";
      }, 1500);
    }
  } catch (error) {
    console.error("Error buying ticket:", error);
    showNotification("Error memproses pembelian tiket", "error");
  }
}

// Add to Waitlist
function addToWaitlist(movieId) {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const movie = moviesData.comingSoon.find((m) => m.id === movieId);
    if (movie) {
      showNotification(`Ditambahkan ke waitlist: ${movie.title}`, "success");
    }
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    showNotification("Error menambah ke waitlist", "error");
  }
}

// Show Trailer
function showTrailer() {
  showNotification("Membuka trailer film...", "info");
  // Implement trailer modal
  setTimeout(() => {
    alert("Trailer akan ditampilkan di sini");
  }, 1000);
}

// Initialize Animations
function initializeAnimations() {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 0.6s ease-out forwards";
        }
      });
    }, observerOptions);

    // Observe elements safely
    const elementsToObserve = safeSelectAll(".movie-card, .promo-card");
    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });
  } catch (error) {
    console.error("Error initializing animations:", error);
  }
}

// Notification System
function showNotification(message, type = "info") {
  try {
    // Remove existing notifications
    safeSelectAll(".notification").forEach((notif) => notif.remove());

    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <i class="fas fa-${
              type === "error"
                ? "exclamation-triangle"
                : type === "success"
                ? "check-circle"
                : "info-circle"
            }"></i>
            ${message}
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideOutRight 0.3s ease-in forwards";
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
    }, 3000);
  } catch (error) {
    console.error("Error showing notification:", error);
  }
}

// Initialize other pages (placeholder functions)
function initializeBioskopPage() {
  console.log("Bioskop page initialized");
  showNotification("Halaman Bioskop Dimuat", "info");
}

function initializeFilmPage() {
  console.log("Film page initialized");
  showNotification("Halaman Film Dimuat", "info");
}

function initializeFoodPage() {
  console.log("Food page initialized");
  showNotification("Halaman Food Dimuat", "info");
}

function initializeSewaPage() {
  console.log("Sewa page initialized");
  showNotification("Halaman Sewa Dimuat", "info");
}

function initializeLoginPage() {
  console.log("Login page initialized");
  showNotification("Halaman Login Dimuat", "info");
}

// Global error handler
window.addEventListener("error", function (e) {
  console.error("Global error:", e.error);
  showNotification("Terjadi error tidak terduga", "error");
});

// Export functions untuk global access
window.showMovieDetails = showMovieDetails;
window.buyTicket = buyTicket;
window.addToWaitlist = addToWaitlist;
window.showTrailer = showTrailer;
window.showNotification = showNotification;
