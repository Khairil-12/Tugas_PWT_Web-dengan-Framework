// Function untuk generate bintang rating
function generateStars(rating) {
  const starCount = Math.floor(rating / 2);
  let stars = "";

  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars += '<i class="fas fa-star"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }

  return stars;
}

// Initialize movie data dengan gambar lokal
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
          poster: "img/avatar-portrait.png",
          description:
            "Jake Sully hidup bersama keluarga baru di planet Pandora dan menjelajahi wilayah laut yang kaya.",
          landscape: "img/avatar-landscape.png",
        },
        {
          id: 2,
          title: "BLACK PANTHER: WAKANDA FOREVER",
          genre: "Action, Adventure, Drama",
          rating: 7.9,
          duration: "2h 41m",
          poster: "img/wakanda.png",
          description:
            "Bangsa Wakanda berjuang melindungi kerajaan mereka setelah kematian Raja T'Challa.",
          landscape: "img/wakanda.png",
        },
        {
          id: 3,
          title: "THE BATMAN",
          genre: "Action, Crime, Drama",
          rating: 8.3,
          duration: "2h 56m",
          poster: "img/batman.png",
          description:
            "Batman mengungkap korupsi di Gotham City saat memburu Riddler yang kejam.",
          landscape: "img/batman.png",
        },
        {
          id: 4,
          title: "TOP GUN: MAVERICK",
          genre: "Action, Drama",
          rating: 8.7,
          duration: "2h 10m",
          poster: "img/topgunmaverick.png",
          description:
            "Setelah 30 tahun, Maverick masih menjadi salah satu pilot top Angkatan Laut.",
          landscape: "img/topgunmaverick.png",
        },
        {
          id: 9,
          title: "DUNE: PART TWO",
          genre: "Adventure, Sci-Fi, Epic",
          rating: 8.8,
          duration: "2h 46m",
          poster: "img/dune-portrait.png",
          description:
            "Lanjutan petualangan epik Paul Atreides di planet Arrakis.",
          landscape: "img/dune-landscape.png",
        },
      ],
      comingSoon: [
        {
          id: 5,
          title: "JOHN WICK: CHAPTER 4",
          genre: "Action, Crime, Thriller",
          rating: 8.5,
          duration: "2h 49m",
          poster: "img/johnwick.png",
          releaseDate: "May 5, 2024",
          description: "John Wick mengungkap cara mengalahkan The High Table.",
        },
        {
          id: 6,
          title: "SPIDER-MAN: NO WAY HOME",
          genre: "Action, Adventure, Fantasy",
          rating: 8.7,
          duration: "2h 28m",
          poster: "img/spidermanNWH.png",
          releaseDate: "May 19, 2024",
          description:
            "Peter Parker meminta bantuan Doctor Strange untuk membuat identitasnya rahasia.",
        },
        {
          id: 7,
          title: "AVENGERS: ENDGAME",
          genre: "Action, Adventure, Drama",
          rating: 8.4,
          duration: "3h 1m",
          poster: "img/avengersend.png",
          releaseDate: "May 26, 2024",
          description:
            "Avengers yang tersisa berusaha membalikkan kerusakan yang disebabkan oleh Thanos.",
        },
        {
          id: 8,
          title: "THE SUPER MARIO BROS. MOVIE",
          genre: "Animation, Adventure, Comedy",
          rating: 7.5,
          duration: "1h 32m",
          poster: "img/supermario.png",
          releaseDate: "June 9, 2024",
          description:
            "Petualangan Mario dan Luigi di dunia mushroom yang ajaib.",
        },
      ],
    };
    localStorage.setItem("cinestars_movies", JSON.stringify(movies));
    console.log("Movie data initialized with local images");
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
    console.log("Initializing home page...");
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
    console.log("Loading movies...");
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const nowPlayingGrid = safeSelect("#nowPlayingGrid");
    const comingSoonGrid = safeSelect("#comingSoonGrid");

    console.log("Movies data:", moviesData);
    console.log("Now playing grid:", nowPlayingGrid);
    console.log("Coming soon grid:", comingSoonGrid);

    if (nowPlayingGrid && moviesData && moviesData.nowPlaying) {
      nowPlayingGrid.innerHTML = "";
      moviesData.nowPlaying.forEach((movie) => {
        const movieCard = createMovieCard(movie, true);
        if (movieCard) nowPlayingGrid.appendChild(movieCard);
      });
      console.log("Now playing movies loaded:", moviesData.nowPlaying.length);
    }

    if (comingSoonGrid && moviesData && moviesData.comingSoon) {
      comingSoonGrid.innerHTML = "";
      moviesData.comingSoon.forEach((movie) => {
        const movieCard = createMovieCard(movie, false);
        if (movieCard) comingSoonGrid.appendChild(movieCard);
      });
      console.log("Coming soon movies loaded:", moviesData.comingSoon.length);
    }

    // Handle image loading setelah movies dimuat
    setTimeout(handleImageLoad, 100);
  } catch (error) {
    console.error("Error loading movies:", error);
    showNotification("Error memuat data film", "error");
  }
}

// Create Movie Card Element dengan gambar lokal
function createMovieCard(movie, isNowPlaying) {
  try {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.poster}" alt="${movie.title}" class="movie-image" 
             onerror="this.src='https://via.placeholder.com/300x450/667eea/ffffff?text=POSTER'">
        ${
          isNowPlaying
            ? `
          <div class="movie-status">SEDANG TAYANG</div>
        `
            : `
          <div class="movie-status coming-soon">SEGERA TAYANG</div>
        `
        }
        <div class="movie-duration">${movie.duration}</div>
        
        <!-- Overlay dengan info lengkap -->
        <div class="movie-overlay">
          <div class="overlay-content">
            <h4 class="overlay-title">${movie.title}</h4>
            <p class="overlay-genre">${movie.genre}</p>
            <div class="overlay-rating">
              <span class="rating-stars">
                ${generateStars(movie.rating)}
              </span>
              <span>${movie.rating}/10</span>
            </div>
            <p class="overlay-description">${movie.description}</p>
            <div class="overlay-actions">
              <button class="btn-small" onclick="showMovieDetails(${
                movie.id
              })" title="Detail Film">
                <i class="fas fa-info-circle"></i>
              </button>
              ${
                isNowPlaying
                  ? `
                <button class="btn-small btn-primary" onclick="buyTicket(${movie.id})" title="Beli Tiket">
                  <i class="fas fa-ticket-alt"></i> BELI
                </button>
              `
                  : `
                <button class="btn-small btn-secondary" onclick="addToWaitlist(${movie.id})" title="Notifikasi">
                  <i class="fas fa-bell"></i> NOTIFIKASI
                </button>
              `
              }
              <button class="btn-small" onclick="showTrailer(${
                movie.id
              })" title="Trailer">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
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

// Function untuk handle image loading dengan better error handling
function handleImageLoad() {
  const images = document.querySelectorAll(".movie-image");

  images.forEach((img) => {
    // Add loading class
    img.classList.add("loading");

    // Check if image loads successfully
    img.onload = function () {
      this.classList.remove("loading");
      console.log("Local image loaded successfully:", this.src);
    };

    // Handle image errors
    img.onerror = function () {
      this.classList.remove("loading");
      this.src =
        "https://via.placeholder.com/300x450/667eea/ffffff?text=POSTER+TIDAK+TERSEDIA";
      console.warn(`Failed to load local image: ${this.src}`);
    };

    // Force load image
    if (img.src && img.complete) {
      img.classList.remove("loading");
    }
  });
}

// Initialize Search Functionality
function initializeSearch() {
  const searchInput = safeSelect("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      if (searchTerm.length > 2) {
        searchMovies(searchTerm);
      } else if (searchTerm.length === 0) {
        // Reset tampilan jika search kosong
        const movieCards = document.querySelectorAll(".movie-card");
        movieCards.forEach((card) => {
          card.style.display = "block";
        });
      }
    });
  }
}

// Search Movies dengan filter langsung di DOM
function searchMovies(searchTerm) {
  try {
    const movieCards = document.querySelectorAll(".movie-card");
    let found = false;

    movieCards.forEach((card) => {
      const title = card
        .querySelector(".movie-title")
        .textContent.toLowerCase();
      const genre = card
        .querySelector(".movie-genre")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || genre.includes(searchTerm)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      showNotification(
        `Tidak ditemukan film dengan kata kunci: "${searchTerm}"`,
        "info"
      );
    }
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
function showTrailer(movieId) {
  try {
    const moviesData = JSON.parse(localStorage.getItem("cinestars_movies"));
    const allMovies = [...moviesData.nowPlaying, ...moviesData.comingSoon];
    const movie = allMovies.find((m) => m.id === movieId);

    if (movie) {
      showNotification(`Membuka trailer: ${movie.title}`, "info");
      // Implement trailer modal
      setTimeout(() => {
        alert(`Trailer untuk "${movie.title}" akan ditampilkan di sini`);
      }, 1000);
    }
  } catch (error) {
    console.error("Error showing trailer:", error);
    showNotification("Error membuka trailer", "error");
  }
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
window.generateStars = generateStars;

// Debug function untuk memeriksa data
window.debugMovies = function () {
  const movies = JSON.parse(localStorage.getItem("cinestars_movies"));
  console.log("Debug Movies:", movies);
  alert(
    `Now Playing: ${movies.nowPlaying.length} films\nComing Soon: ${movies.comingSoon.length} films`
  );
};

// Force reload movies (untuk debugging)
window.reloadMovies = function () {
  localStorage.removeItem("cinestars_movies");
  initializeMovieData();
  loadMovies();
  showNotification("Data film diperbarui!", "success");
};
