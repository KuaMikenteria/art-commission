const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      const modalClose = document.getElementById("modalClose");
      const galleryImages = document.querySelectorAll(
        ".gallery-tab-content img"
      );

      galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImg.src = img.src;
          modalImg.alt = img.alt;
        });
      });

      modalClose.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });