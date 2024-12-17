document.addEventListener("DOMContentLoaded", function () {
  const { differenceInMonths, differenceInDays, addMonths } = dateFns;

  const startDate = new Date("2024-08-15T23:59:59");
  const now = new Date();

  // Cálculo dos meses
  const months = differenceInMonths(now, startDate);

  // Adicionar os meses ao startDate para calcular os dias restantes
  const dateAfterMonths = addMonths(startDate, months);
  const days = differenceInDays(now, dateAfterMonths);

  // Atualizar o texto na página
  document.getElementById("time-together").innerText =
    `Estamos juntos há ${months} meses e ${days} dias!`;


    // Lista de imagens com seus textos
  const imageDetails = [
    { src: "img/img1.jpeg", date:"16/01/2024", text: "Nossa primeira foto juntos" },
    { src: "img/img2.jpeg", text: "Lembra dessa viagem incrível?" },
    { src: "img/img3.jpeg", text: "Essa foi uma noite especial para nós dois." },
    { src: "img/img4.jpeg", text: "Um dia cheio de risadas e diversão." },
    { src: "img/img5.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img6.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img7.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img8.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img9.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img10.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img11.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img12.jpeg", text: "Nosso primeiro aniversário juntos!" },
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
    { src: "img/img33.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img34.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img35.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img36.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img37.jpeg", text: "Nosso primeiro aniversário juntos!" },
    { src: "img/img38.jpeg", text: "Nosso primeiro aniversário juntos!" },
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
  const imageSize = 50; // Tamanho fixo das imagens
  const placedPositions = [];
  const directions = [];

  // Elementos do card
  const card = document.getElementById("image-card");
  const cardImage = document.getElementById("card-image");
  const cardText = document.getElementById("card-text");
  const cardDate = document.getElementById("card-date");
  const closeButton = document.getElementById("close-button");
  card.style.display = "none"; // Esconde o card inicialmente

  closeButton.addEventListener("click", () => {
    card.style.display = "none"; // Esconde o card ao clicar no botão "Fechar"
  });

  // Obtém as dimensões da área da galeria
  const galleryRect = gallerySpace.getBoundingClientRect();
  const galleryWidth = galleryRect.width;
  const galleryHeight = galleryRect.height;

  // Função para verificar colisões entre duas áreas
  function isColliding(x1, y1, x2, y2, size) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance < size; // Considera colisão se a distância for menor que o tamanho da imagem
  }

  imageDetails.forEach(({ src, date, text }, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto do casal";

    // Gera uma posição inicial aleatória
    const x = Math.random() * (galleryWidth - imageSize);
    const y = Math.random() * (galleryHeight - imageSize);

    // Gera uma direção inicial aleatória
    const dx = (Math.random() * 2 - 1) * 2; // Movimento horizontal aleatório (-2 a 2)
    const dy = (Math.random() * 2 - 1) * 2; // Movimento vertical aleatório (-2 a 2)

    placedPositions.push({ x, y, img, paused: false, dragging: false }); // Adiciona uma flag `paused` e `dragging`
    directions.push({ dx: dx * 0.01, dy: dy * 0.01 }); // Reduz a velocidade do movimento

    // Define a posição inicial
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.position = "absolute";
    img.style.cursor = "grab";

    // Adiciona evento de clique para exibir o card
    img.addEventListener("click", () => {
      cardImage.src = src;
      cardText.innerText = text; // Define o texto específico para cada imagem
      cardDate.innerText = date;
      card.style.display = "block"; // Mostra o card ao clicar na imagem
    });


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

    // Adiciona funcionalidade de arrastar
    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const pos = placedPositions.find((pos) => pos.img === img);
      pos.dragging = true;
      pos.paused = true;
      img.style.cursor = "grabbing";

      // Coordenadas iniciais do mouse
      const startX = e.clientX;
      const startY = e.clientY;

      // Coordenadas iniciais da imagem
      const startLeft = pos.x;
      const startTop = pos.y;

      function onMouseMove(event) {
        // Atualiza a posição da imagem
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        pos.x = startLeft + deltaX;
        pos.y = startTop + deltaY;

        // Mantém a imagem dentro dos limites
        pos.x = Math.max(0, Math.min(galleryWidth - imageSize, pos.x));
        pos.y = Math.max(0, Math.min(galleryHeight - imageSize, pos.y));

        img.style.left = `${pos.x}px`;
        img.style.top = `${pos.y}px`;
      }

      function onMouseUp() {
        pos.dragging = false;
        img.style.cursor = "grab";
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    gallerySpace.appendChild(img);
  });


  // Atualiza a posição das imagens em um intervalo
  function moveImages() {
    placedPositions.forEach((pos, i) => {
      const dir = directions[i];

      // Ignora imagens pausadas ou arrastadas
      if (pos.paused || pos.dragging) return;

      // Atualiza a posição
      pos.x += dir.dx;
      pos.y += dir.dy;

      // Detecta colisões com as bordas
      if (pos.x <= 0 || pos.x >= galleryWidth - imageSize) dir.dx *= -1;
      if (pos.y <= 0 || pos.y >= galleryHeight - imageSize) dir.dy *= -1;

      // Detecta colisões entre imagens
      placedPositions.forEach((otherPos, j) => {
        if (i !== j && isColliding(pos.x, pos.y, otherPos.x, otherPos.y, imageSize)) {
          // Inverte as direções das imagens que colidiram
          dir.dx *= -1;
          dir.dy *= -1;
          directions[j].dx *= -1;
          directions[j].dy *= -1;
        }
      });

      // Atualiza as posições no DOM
      pos.img.style.left = `${pos.x}px`;
      pos.img.style.top = `${pos.y}px`;
    });
  }

  // Inicia o intervalo para movimentar as imagens
  setInterval(moveImages, 1);
});
