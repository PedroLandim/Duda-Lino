document.addEventListener("DOMContentLoaded", function () {
  const { differenceInMonths, differenceInDays, addMonths } = dateFns;

  const startDate = new Date("2024-07-15T23:59:59");
  const now = new Date();

  // Cálculo dos meses
  const months = differenceInMonths(now, startDate);
  const dateAfterMonths = addMonths(startDate, months);
  const days = differenceInDays(now, dateAfterMonths);

  document.getElementById("time-together").innerText =
    `Juntinhos há ${months} meses e ${days} dias!`;

  // Lista de imagens
  const imageDetails = [
    { src: "img/img1.jpeg", date:"15 de Maio 2024", text: "Nossa primeira foto juntos, no Laguinho" },
    { src: "img/img2.jpeg", text: "Lembra dessa viagem incrível?" },
    { src: "img/img3.jpeg", text: "Essa foi uma noite especial para nós dois." },
    { src: "img/img4.jpeg", text: "Um dia cheio de risadas e diversão." },
    { src: "img/img5.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img6.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img7.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img8.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img9.jpeg", date: "28 de Junho 2024", text: "Reabrindo o pagode do Didi" },
    { src: "img/img11.jpeg", date: "29 de Junho 2024", text: "Ela achando que iamos ficar milinários, mal sabia ela que eu já tinha ganhado na loteria" },
    { src: "img/img12.jpeg", date: "29 de Junho 2024", text: "Primeira viagem para longe, Porto de Galinhas (eu, a Gatinha, Laís e Nicolly)" },
    { src: "img/img13.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img14.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img15.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img16.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img17.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img18.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img19.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img20.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img21.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img22.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img23.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img24.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img25.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img26.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img27.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img28.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img29.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img30.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img31.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img32.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img33.jpeg", date: "1 de Junho 2024", text: "Provando Lingua de pato Bleeeergh" },
    { src: "img/img34.jpeg", date: "31 de Maio 2024", text: "Nosso primeiro Barchefe! (infelizmente os preços pipocaram pouco depois)" },
    { src: "img/img35.jpeg", date: "8 de Junho 2024", text: "Uma maloqueira pulando o muro da federal. Despedida do Peludo" },
    { src: "img/img36.jpeg", date: "31 de Maio 2024", text: "Dois tabacudos testando óculos da Gucci" },
    { src: "img/img37.jpeg", date: "27 de Junho 2024", text: "Indo ali assistir divertidamente (nem namorava e já tirava ft de casal)" },
    { src: "img/img38.jpeg", date: "27 de Maio 2024", text: "Segunda vez no Barchefe, esse a gnt aproveitou bastante o Clericot" },
    { src: "img/img39.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img40.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img41.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img42.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img43.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img44.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img45.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img46.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img47.jpeg", text: "Nosso primeiro aniversário juntos!" },
  ];


  const gallerySpace = document.querySelector(".gallery-space");
  const imageSize = 50;
  const placedPositions = [];
  const directions = [];

  const card = document.getElementById("image-card");
  const cardImage = document.getElementById("card-image");
  const cardText = document.getElementById("card-text");
  const cardDate = document.getElementById("card-date");
  const closeButton = document.getElementById("close-button");
  card.style.display = "none";

  closeButton.addEventListener("click", () => card.style.display = "none");

  const galleryRect = gallerySpace.getBoundingClientRect();
  const galleryWidth = galleryRect.width;
  const galleryHeight = galleryRect.height;

  function isColliding(x1, y1, x2, y2, size) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance < size;
  }

  imageDetails.forEach(({ src, date, text }, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto do casal";

    const x = Math.random() * (galleryWidth - imageSize);
    const y = Math.random() * (galleryHeight - imageSize);
    const dx = (Math.random() * 2 - 1) * 2;
    const dy = (Math.random() * 2 - 1) * 2;

    placedPositions.push({ x, y, img, paused: false, dragging: false });
    directions.push({ dx: dx * 0.01, dy: dy * 0.01 });

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.position = "absolute";
    img.style.cursor = "grab";

    let isDragging = false;

    img.addEventListener("touchstart", (e) => {
      e.preventDefault();
      img.style.transform = "scale(7)"; // Amplia a imagem
      img.style.zIndex = "1000"; // Eleva a imagem acima das outras
      
      const pos = placedPositions.find((pos) => pos.img === img);
      pos.dragging = true;
      pos.paused = true;
    
      const startX = e.touches[0].clientX;
      const startY = e.touches[0].clientY;
    
      const startLeft = pos.x;
      const startTop = pos.y;
    
      let moved = false;
    
      function onTouchMove(event) {
        const deltaX = event.touches[0].clientX - startX;
        const deltaY = event.touches[0].clientY - startY;
    
        if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
          moved = true;
        }
    
        pos.x = startLeft + deltaX;
        pos.y = startTop + deltaY;
    
        pos.x = Math.max(0, Math.min(galleryWidth - imageSize, pos.x));
        pos.y = Math.max(0, Math.min(galleryHeight - imageSize, pos.y));
    
        img.style.left = `${pos.x}px`;
        img.style.top = `${pos.y}px`;
      }
    
      function onTouchEnd() {
        pos.dragging = false;
        img.style.transform = "scale(1)"; // Restaura o tamanho original
        img.style.zIndex = "1"; // Restaura o z-index original
    
        if (!moved) {
          img.click();
        }
    
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      }
    
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    });

    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const pos = placedPositions.find((p) => p.img === img);
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = pos.x;
      const startTop = pos.y;
      isDragging = false;

      function onMouseMove(event) {
        isDragging = true;
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        pos.x = Math.max(0, Math.min(galleryWidth - imageSize, startLeft + deltaX));
        pos.y = Math.max(0, Math.min(galleryHeight - imageSize, startTop + deltaY));
        img.style.left = `${pos.x}px`;
        img.style.top = `${pos.y}px`;
      }

      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    img.addEventListener("click", () => {
      if (!isDragging) {
        cardImage.src = src;
        cardText.innerText = text;
        cardDate.innerText = date || "";
        card.style.display = "block";
      }
    });

    gallerySpace.appendChild(img);
  });

  function moveImages() {
    placedPositions.forEach((pos, i) => {
      const dir = directions[i];
      if (pos.paused || pos.dragging) return;

      pos.x += dir.dx;
      pos.y += dir.dy;

      if (pos.x <= 0 || pos.x >= galleryWidth - imageSize) dir.dx *= -1;
      if (pos.y <= 0 || pos.y >= galleryHeight - imageSize) dir.dy *= -1;

      placedPositions.forEach((other, j) => {
        if (i !== j && isColliding(pos.x, pos.y, other.x, other.y, imageSize)) {
          dir.dx *= -1;
          dir.dy *= -1;
          directions[j].dx *= -1;
          directions[j].dy *= -1;
        }
      });

      pos.img.style.left = `${pos.x}px`;
      pos.img.style.top = `${pos.y}px`;
    });
  }

  setInterval(moveImages, 10);
});
