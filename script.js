let myImgs = [
  "./img/architecture.jpg",
  "./img/athens.jpg",
  "./img/akropolis.jpg",
  "./img/beach.jpg",
  "./img/cat.jpg",
  "./img/door.jpg",
  "./img/flower.jpg",
  "./img/house.jpg",
  "./img/orthodox.jpg",
  "./img/santorini.jpg",
  "./img/sunset.jpg",
  "./img/stairs.jpg",
];

let currentIndex = 0;

function init() {
  const gallery = document.getElementById("gallery");
  let html = "";

  //einfacher als myImgs.forEach(..,..)
  for (let i = 0; i < myImgs.length; i++) {
    html += `
      <div class="gallery-item">
          <img src="${myImgs[i]}" alt="Image ${i + 1}
          "onclick="openModal(${i})">
      </div>`;
  }

  gallery.innerHTML = html;
}

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = myImgs[currentIndex];
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % myImgs.length;
  document.getElementById("modalImage").src = myImgs[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
  document.getElementById("modalImage").src = myImgs[currentIndex];
}

// closeModal Funktion
function handleModalClick(event) {
  const modal = document.getElementById("imageModal");

  // Prüft, ob der Klick außerhalb des Bildes erfolgte
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document
  .getElementById("imageModal")
  .addEventListener("click", handleModalClick);
