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
    { src: "img/img1.jpeg", date: "15 de Maio 2024", text: "Nossa primeira foto juntos, no Laguinho" },
    { src: "img/img34.jpeg", date: "31 de Maio 2024", text: "Nosso primeiro Barchefe! (infelizmente os preços pipocaram pouco depois)" },
    { src: "img/img36.jpeg", date: "31 de Maio 2024", text: "Dois tabacudos testando óculos da Gucci" },
    { src: "img/img33.jpeg", date: "1 de Junho 2024", text: "Provando Lingua de pato Bleeeergh" },
    { src: "img/img35.jpeg", date: "8 de Junho 2024", text: "Uma maloqueira pulando o muro da federal. Despedida do Peludo" },
    { src: "img/img37.jpeg", date: "27 de Junho 2024", text: "Indo ali assistir divertidamente (nem namorava e já tirava ft de casal)" },
    { src: "img/img38.jpeg", date: "27 de Junho 2024", text: "Segunda vez no Barchefe, esse a gnt aproveitou bastante o Clericot" },
    { src: "img/img9.jpeg", date: "28 de Junho 2024", text: "Reabrindo o pagode do Didi" },
    { src: "img/img10.jpeg", date: "28 de Junho 2024", text: "Reabrindo o pagode do didi pt2" },
    { src: "img/img12.jpeg", date: "29 de Junho 2024", text: "Primeira viagem para longe, Porto de Galinhas (eu, a Gatinha, Laís e Nicolly)" },
    { src: "img/img11.jpeg", date: "29 de Junho 2024", text: "Ela achando que iamos ficar milinários, mal sabia ela que eu já tinha ganho na loteria" },
    { src: "img/img13.jpeg", date: "16 de Julho 2024", text: "Primeira foto como namoradinhos" },
    { src: "img/img39.jpeg", date: "16 de Julho 2024", text: "Rolezando no 1° dia de namoro no antigo" },
    { src: "img/img42.jpeg", date: "20 de Julho 2024", text: "Posando pra a atividade da facul dela" },
    { src: "img/img14.jpeg", date: "21 de Julho 2024", text: "A gnt pela UFPE agora podia beijar na frente do cac" },
    { src: "img/img40.jpeg", date: "26 de Julho 2024", text: "Ft aleatória de casal" },
    { src: "img/img45.jpeg", date: "27 de Julho 2024", text: "Acordando c meu amor" },
    { src: "img/img41.jpeg", date: "27 de Julho 2024", text: "Indo na casa de Dodontes" },
    { src: "img/img7.jpeg", date: "28 de Julho 2024", text: "Riomar dnv (dessa vez testando sofás kkkkkk)" },
    { src: "img/img15.jpeg", date: "2 de Agosto 2024", text: "Um dia para o aniversário dela" },
    { src: "img/img16.jpeg", date: "10 de Agosto 2024", text: "Esperando meu pai pro churras no Alphaville se vai ter comida? SDS" },
    { src: "img/img43.jpeg", date: "10 de Agosto 2024", text: "Lá no Alphaville que lugar foda do carai" },
    { src: "img/img20.jpeg", date: "16 de Agosto 2024", text: "Comemorando 1 mês no Lima, Cocina Peruana" },
    { src: "img/img44.jpeg", date: "26 de Agosto 2024", text: "Ft brega no aniversário de Dodontes" },
    { src: "img/img47.jpeg", date: "30 de Agosto 2024", text: "Pinto y mais pinto" },
    { src: "img/img17.jpeg", date: "7 de Setembro 2024", text: "Estavamos arrumados pra ir pra algum canto" },
    { src: "img/img18.jpeg", date: "7 de Setembro 2024", text: "Q mulher bonita da porra" },
    { src: "img/img19.jpeg", date: "9 de Setembro 2024", text: "Rolê na Bodega chinesa (tem umas coisas escritas em chinês)" },
    { src: "img/img21.jpeg", date: "9 de Setembro 2024", text: "Fomos bem atendidos e a comida tava top (9/10)" },
    { src: "img/img22.jpeg", date: "14 de Setembro 2024", text: "Tem q ter foto queima ne kkkkk" },
    { src: "img/img23.jpeg", date: "29 de Setembro 2024", text: "Primeira vez no Pedrosa/Indo pra exposição de animais" },
    { src: "img/img24.jpeg", date: "5 de Outubro 2024", text: "Comemorando a vida no Ruizito Cocina Peruana" },
    { src: "img/img25.jpeg", date: "12 de Outubro 2024", text: "Indo assistir 'A substáncia' (ela odiou)" },
    { src: "img/img26.jpeg", date: "17 de Outubro 2024", text: "Comemorando 3 meses de namoro no Leite" },
    { src: "img/img46.jpeg", date: "17 de Outubro 2024", text: "Comemorando 3 meses de namoro no Leite pt2" },
    { src: "img/img28.jpeg", date: "26 de Outubro 2024", text: "Ela achando q eu fico legal com corte samurai" },
    { src: "img/img27.jpeg", date: "26 de Outubro 2024", text: "Umas velhinhas estavam reclamando de mal cheiro no lugar... hmmm pq será?" },
    { src: "img/img48.jpeg", date: "26 de Outubro 2024", text: "Sociopata no show da Priscila Senna" },
    { src: "img/img29.jpeg", date: "1 de Novembro 2024", text: "Conhecendo o restante do 7k e indo pro BotecoCDU" },
    { src: "img/img31.jpeg", date: "7 de Novembro 2024", text: "Tirei o dia para estressar ela" },
    { src: "img/img5.jpeg", date: "9 de Novembro 2024", text: "Liambados" },
    { src: "img/img8.jpeg", date: "9 de Novembro 2024", text: "Liambados/2" },
    { src: "img/img6.jpeg", date: "13 de Novembro 2024", text: "Tirando ft com as roupas novas" },
    { src: "img/img2.jpeg", date: "15 de Novembro 2024", text: "Foto estilo anos 70" },
    { src: "img/img3.jpeg", date: "15 de Novembro 2024", text: "Aproveitando a Praia de Calhetas" },
    { src: "img/img4.jpeg", date: "15 de Novembro 2024", text: "Aproveitando a Praia de Calhetas pt2" },
    { src: "img/img30.jpeg", date: "17 de Novembro 2024", text: "De boa na Lagoa, tranquilos q nem dois esquilos" },
    { src: "img/img32.jpeg", date: "27 de Novembro 2024", text: "Minutos atrás treinando o 'olha gente oq a gnt sabe fazer'" },
  ];

  const gallerySpace = document.querySelector(".gallery-space");
  const imageSize = 50;
  const placedPositions = [];
  const directions = [];
  const heartButton = document.getElementById("heart-button");

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

  let isDynamicLayout = true; // Variável para alternar entre os layouts

  function initializeDynamicGallery() {
    gallerySpace.innerHTML = ""; // Limpa a galeria
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
        img.style.transform = "scale(8)"; // Amplia a imagem
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
  }

  function initializeStaticGallery() {
      gallerySpace.innerHTML = ""; // Limpa a galeria
  
      // Ordena as imagens pela data
      imageDetails.sort((a, b) => new Date(a.date) - new Date(b.date));
      // Remove todas as imagens da galeria
      while (gallerySpace.firstChild) {
        gallerySpace.removeChild(gallerySpace.firstChild);
      }
      gallerySpace.innerHTML = "";

      // Reposiciona as imagens em uma grade
      let columns = 12;
      let margin = 10;
      let isMobile = window.innerWidth <= 768; // Verifica se é um dispositivo móvel

      if (isMobile) {
        columns = 3;
        margin = 10;
        // Calculando a largura da galeria levando em conta a margem
        gallerySpace.style.width = `${window.innerWidth - (2 * margin)}px`; // Subtrai a margem de ambos os lados
      }
      
      const imageWidth = (galleryWidth - (columns + 1) * margin) / columns;
      const imageHeight = imageWidth; // Mantém a proporção 4:3 para melhor responsividade

      imageDetails.forEach(({ src, date, text }, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Foto do casal";
        img.style.width = `${imageWidth}px`;
        img.style.height = `${imageHeight}px`;
        img.style.position = "absolute";
        img.style.cursor = "pointer";

        const row = Math.floor(index / columns);
        const col = index % columns;

        img.style.left = `${(col * (imageWidth + margin) + margin)-5}px`;
        img.style.top = `${(row * (imageHeight + margin) + margin)-5}px`;


        img.addEventListener("mouseover", () => {
          if (heartButton.classList.contains("clicked")) {
            img.style.transform = "scale(1)"; // Mantém a escala original
          } else {
            img.style.transform = "scale(1.2)"; // Ampliar no hover
            img.style.zIndex = "100"; // Garante que a imagem fique acima das outras
          }
        });

        img.addEventListener("mouseout", () => {
          if (!heartButton.classList.contains("clicked")) {
            img.style.transform = "scale(1)"; // Restaura a escala original
            img.style.zIndex = "1"; // Restaura o z-index original
          }
        });

        img.addEventListener("touchstart", (e) => {
            img.style.transform = "scale(1)";
        });

        heartButton.addEventListener('touchstart', () => {
          heartButton.style.transform = 'scale(1)'; // Aumenta o botão ao tocar
        });
      
        heartButton.addEventListener('touchend', () => {
            heartButton.style.transform = 'scale(1)'; // Diminui o botão ao soltar o toque
        });
        
        heartButton.addEventListener('touchcancel', () => {
            heartButton.style.transform = 'scale(1)'; // Garante que o botão diminua se o toque for cancelado
        });

        img.addEventListener("click", () => {
          cardImage.src = src;
          cardText.innerText = text;
          cardDate.innerText = date || "";
          card.style.display = "block";
        });

          gallerySpace.appendChild(img);
        });

    }
  
    // Alternar entre os layouts ao clicar no botão
    heartButton.addEventListener("click", () => {
      isDynamicLayout = !isDynamicLayout;
  
      if (isDynamicLayout) {
        initializeDynamicGallery();
      } else {
        initializeStaticGallery();
      }
    });
  
    // Inicializa com o layout dinâmico
    initializeDynamicGallery();
  });
