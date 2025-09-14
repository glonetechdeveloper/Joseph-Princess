const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});




// Open modal
function openModal(imgElement) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Close modal with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});








// Open modal
function openModal(imgElement) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// ESC to close modal
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
