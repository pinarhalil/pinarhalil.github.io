// script.js
// 🎵 Ses ve animasyon başlatıcı (mobil uyumlu)
document.getElementById("startsBtn").addEventListener("click", () => {
  const audio = document.getElementById("birthdaySound");
  if (audio) {
    audio.volume = 0.1;
    audio.play().catch(e => console.warn("Ses çalamadı:", e));
  }
  document.getElementById("startScreens").style.display = "none";
  typeWriter();
});



const message = `Bitanecik knkeytomun bugün  doğum günü...
Belki her gün seni ne kadar çok sevdiğimi söylüyorum ama bugün sana sadece "seni seviyorum" değil, "iyi ki doğdun" da demek istiyorum.
Çünkü sen 06/06/2002 tarihinde doğmamış olsaydın, ben bu kadar mükemmel birisiyle tanışamamış olurdum.

Seninle her şey daha anlamlı, her an daha renkli, eğlenceli, romantik, duygu dolu, heyecanlı ve ponçik.
Bu küçük siteyi sana olan sevgimi kelimelere dökmek ve birlikte yaşadığımız  özel anları bir hatıra olarak saklamak için hazırladım. Umarım beğenirsin (başka şansın olmayacak sanırım 😄)

İyi ki doğdun.
İyi ki varsın.
İyi ki yollarımız kesişti.
İyi ki seninle tanıştım.
İyi ki Pınar’sın.
İyi ki... 🎂💖

Seni çok çok seven,
Halil`;

const target = document.getElementById("birthdayMessage");
let index = 0;

function typeWriter() {
  if (index < message.length) {
    target.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 0);
  }
}



function showSection(sectionId) {
  const sections = [
    "startScreens",
    "section1",
    "menuSection",
    "mainMenu",
    "gamesMenuSection",
    "flappyGameSection",
    "cornholeGameSection",
    "memoriesSection",
      "sixthSenseGameSection",
      "surpriseSection"  // 🎁 yeni eklenen bölüm
      
  ];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === sectionId) ? "block" : "none";
    }
  });


  if (sectionId === 'sixthSenseGameSection') {
    if (typeof startSixthSenseGame === "function") {
     startSixthSenseGame();
    }
  }

if (sectionId === "surpriseSection") {
  const box = document.getElementById("giftBox");
  const message = document.getElementById("surpriseMessage");
  box.classList.remove("opened");
  message.style.display = "none";
  message.innerHTML = "";
}
 // Tema sıfırlama sadece ana menüye dönülürken yapılacak
  if (sectionId === "menuSection") {
    document.body.style.background = "linear-gradient(to bottom right, #fff, #5316c4)";
  }

  // Anılar bölümü açıldığında anıları ve puanlamayı başlat
  if (sectionId === 'memoriesSection') {
    memoryIndex = 0;
    renderMemory();
    document.getElementById("memoryRating").style.display = "block";
  } else {
    document.getElementById("memoryRating").style.display = "none";
  }

  // Flappy Pınar başlatılırsa
  if (sectionId === 'flappyGameSection') {
    if (typeof initFlappyPinar === "function") {
      initFlappyPinar();
    }
  }

  if (sectionId === 'cornholeGameSection') {
  initCornholeGame();

  const container = document.getElementById("container");
  if (container) container.style.display = "block";

  const scoreBoard = document.getElementById("scoreBoard");
  if (scoreBoard) scoreBoard.style.display = "block";

  const message = document.getElementById("message");
  if (message) message.style.display = "block";

  const startScreenCornhole = document.getElementById("startScreenCornhole");
  if (startScreenCornhole) startScreenCornhole.style.display = "flex";

  const videoContainerCornhole = document.getElementById("videoContainerCornhole");
  if (videoContainerCornhole) videoContainerCornhole.style.display = "none";

}


else {
  // Cornhole dışındaki bölümlerde gizle
  const container = document.getElementById("container");
  if (container) container.style.display = "none";

  const scoreBoard = document.getElementById("scoreBoard");
  if (scoreBoard) scoreBoard.style.display = "none";

  const message = document.getElementById("message");
  if (message) message.style.display = "none";

  const startScreenCornhole = document.getElementById("startScreenCornhole");
  if (startScreenCornhole) startScreenCornhole.style.display = "none";

  const videoContainerCornhole = document.getElementById("videoContainerCornhole");
  if (videoContainerCornhole) videoContainerCornhole.style.display = "none";

  // Video durdurulsun
  const video = document.getElementById("winVideo");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

 }


function goToNext() {
  showSection("menuSection");
}



 



const memories = [
  {
    title: "İlk fotoğrafımız",
    text: `Bu fotoğraf bizim ilk kez yan yana durduğumuz andı.Sen yine her zamanki gibi knk ama şuan çok bilmem ne bişeyler diyodun ama bilmiyordun ki senin içinde olduğun her bir an her bir fotoğraf her bir detay mükemmel(sonradan farkettin diye umuyorumm)🤍💜
  Tarih:21 Şubat 2024`,
    media: [
      { type: "image", src: "images/ilk.jpeg" }
    ]
  },
  {
    title: "İlk Buluşmamız",
    text: `Bugün seninle ilk defa iş dışında yalnız buluşmuştuk. Mağazadan aşağıya baktığımızda deliğe kum torbası atan insanları görmüştük, sen tabi heyecan yaptın hemen iddiaya girdin, "sana koyarım" falan gibisinden :)) 
Neyse gittik, ben adamlardan rica ettim biz de oynayalım diye. Sonra oynadık, sen adamın sana göstermesine fırsat vermeden ilk atışında deliksiz atmıştın. Gerçekten şaşırdım ve sana olan saygım arttı. 
Yetenekli bir insan olduğunu orada anlamıştım. Birlikte güzel videolar çektik, çekişmeli geçmişti. Ben gerçekten çok eğlenmiştim. Bir daha nasip olmadı ama ilk defa seninle bir aktivite yapmıştık. 
Her zaman aklımda güzel bir anı olarak kalacak.`,
    media: [
      { type: "video", src: "videos/ilka.mp4" }
    ]
  },

 {
    title: "Birlikte Kapanış",
    text: ` Bugün seninle kapanışta olduğumuz bi gündü youtubedan toz duman şarkısını açmıştık birlikte eşlik edip muhabbet ediyoduk  birlikte kapanış olduğumuz için 
    çok mutluydum(Sıla kankamız da var videoda seversin knk:)).Tarih:11 Mart 2024`,
    media: [
      { type: "video", src: "videos/kapanis.mp4" }
    ]
  },


 {
    title: "Osmanlı'da iftar",
    text: `Bugün ilk defa seninle birlikte dışarda iftar yapmıştık başka arkadaşlarımız da vardı Osmanlı'ya gidişimiz ayrı bir olaydı aşşırı trafik vardı benim istanbulkartım az kalsın kayboluyoduu neyseki bulduk neyse gittik
    yemeklerimizi söyledik herkes farklı bişeyler söyledi ama bitiremediler ben hepinizinkini yemek zorunda kaldım:)baya bi yedim sonrasında tatlı yemeye gittik tabu oynamıştık senle takım olduk ve son saniyeye kadar çok çekişmeli geçmişti kazandık tatlıyı çok iyi bi ikili olmuştuk sonra seni kuleliye bıraktık ilk iftarımız bence başarılyd. )🤍💜
  Tarih:21 Şubat 2024`,
    media: [
      { type: "image", src: "images/18marts.jpg" },
      { type: "image", src: "images/18mart.jpg" },
      { type: "image", src: "images/18martss.jpg" },
      { type: "image", src: "images/18martsss.jpg" }




    ]
  },


];

const myRatings = [];
const pinarRatings = [];
const lowScoreWarnings = [
  "Ne yani anımız 10/10 değil miydi 🥹🥹",
  "Knk bence 10/10'du ama sen bilirsin 🤍💜",
  "Paşaya bak hele anımızı beğenmiyor 😊",
  "Tekrar puan ver istersenn 🥰",
  "İçinden deme şimdi 10 vermek zorunda mıyımm😊😊"
];

let pinarHasRatedCurrent = false;

function createPinarStars() {
  const container = document.getElementById("pinarStars");
  const infoText = document.getElementById("ratingInfo");
  container.innerHTML = "";
  infoText.innerText = "";
  pinarHasRatedCurrent = false;

  const successMessages = [
    "10/10 verdin, tam da beklediğim gibi 🤍💜",
    "Mükemmellik tanımını sen yaptın 🥰",
    "İşte bu! Bu anı 10'du, sen de biliyorsun knkm ✨",
    "Doğru karar 💯 Hadi sıradakine geçelim!",
    "10 verdin çünkü harika bir andı, dimi,evet? 😍",
    "Evet knk bence de 🤍💜"
  ];

  for (let i = 1; i <= 10; i++) {
    const star = document.createElement("span");
    star.innerHTML = "☆";
    star.style.margin = "0 3px";
    star.style.color = "gold";
    star.style.fontSize = "30px";
    star.style.cursor = "pointer";
    star.dataset.value = i;

    star.onmouseover = () => highlightStars(i);
    star.onmouseout = () => {
      if (!pinarHasRatedCurrent) clearStars();
      else highlightStars(10);
    };

    star.onclick = () => {
      if (i === 10) {
        rateByPinar(10);
        pinarHasRatedCurrent = true;
        highlightStars(10);
        const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        infoText.innerText = randomMessage;
      } else {
        const randomWarning = lowScoreWarnings[Math.floor(Math.random() * lowScoreWarnings.length)];
        alert(randomWarning);
        clearStars();
        infoText.innerText = "";
      }
    };

    container.appendChild(star);
  }
}

function highlightStars(count) {
  const stars = document.querySelectorAll("#pinarStars span");
  stars.forEach((star, idx) => {
    star.innerHTML = (idx < count) ? "★" : "☆";
  });
}

function clearStars() {
  const stars = document.querySelectorAll("#pinarStars span");
  stars.forEach(star => star.innerHTML = "☆");
}

function rateByPinar(score) {
  pinarRatings.push({ memoryIndex: memoryIndex - 1, score: score });
}

let memoryIndex = 0;



function showNextMemory() {
  if (memoryIndex < memories.length - 1) {
    memoryIndex++;
    renderMemory();
  }
}

function showPreviousMemory() {
  if (memoryIndex > 0) {
    memoryIndex--;
    renderMemory();
  }
}

function renderMemory() {
  const memory = memories[memoryIndex];
  const mediaContainer = document.getElementById("mediaContainer");
  document.getElementById("memoryTitle").innerText = memory.title;
  document.getElementById("memoryText").innerText = memory.text;

  mediaContainer.innerHTML = "";

  memory.media.forEach(item => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "300px";
      img.style.margin = "10px";
      img.style.borderRadius = "12px";
      mediaContainer.appendChild(img);
    } else if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.style.maxWidth = "100%";
      video.style.maxHeight = "300px";
      video.style.margin = "10px";
      video.style.borderRadius = "12px";
      mediaContainer.appendChild(video);
    }
  });

  // ⭐️ Buton kontrolü
  document.getElementById("prevMemoryBtn").style.display = (memoryIndex === 0) ? "none" : "inline-block";
  document.getElementById("nextMemoryBtn").style.display = (memoryIndex === memories.length - 1) ? "none" : "inline-block";
  document.getElementById("endOfMemoriesMessage").style.display = (memoryIndex === memories.length - 1) ? "block" : "none";

  createPinarStars();
}
// 🎉 Konfeti animasyonu
(function () {
  const colors = ['#9b59b6', '#8e44ad', '#d2b4de', '#ffffff', '#f8c8dc', '#a3c4f3'];
  const numConfetti = 80;
  const confettiElements = [];

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createConfetti() {
    const confetti = document.createElement('div');
    const size = randomRange(6, 12);
    confetti.style.position = 'fixed';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${randomRange(0, window.innerWidth)}px`;
    confetti.style.top = `${randomRange(-20, -100)}px`;
    confetti.style.opacity = randomRange(0.6, 0.9);
    confetti.style.borderRadius = '3px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = 9999;
    confetti.style.filter = 'drop-shadow(0 0 1px rgba(0,0,0,0.15))';
    confetti.style.willChange = 'transform, opacity';
    document.body.appendChild(confetti);

    return {
      el: confetti,
      x: parseFloat(confetti.style.left),
      y: parseFloat(confetti.style.top),
      size: size,
      velocityX: randomRange(-0.5, 0.5),
      velocityY: randomRange(1, 2.5),
      rotation: randomRange(0, 360),
      rotationSpeed: randomRange(-5, 5),
      opacity: parseFloat(confetti.style.opacity)
    };
  }

  function updateConfetti(confetti) {
    confetti.x += confetti.velocityX;
    confetti.y += confetti.velocityY;
    confetti.rotation += confetti.rotationSpeed;
    confetti.opacity -= 0.004;

    if (confetti.y > window.innerHeight || confetti.opacity <= 0) {
      confetti.x = randomRange(0, window.innerWidth);
      confetti.y = randomRange(-20, -100);
      confetti.opacity = randomRange(0.6, 0.9);
      confetti.velocityX = randomRange(-0.5, 0.5);
      confetti.velocityY = randomRange(1, 2.5);
      confetti.rotation = randomRange(0, 360);
      confetti.rotationSpeed = randomRange(-5, 5);
      confetti.el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.el.style.width = `${randomRange(6, 12)}px`;
      confetti.el.style.height = `${randomRange(6, 12)}px`;
    }

    confetti.el.style.transform = `translate(${confetti.x}px, ${confetti.y}px) rotate(${confetti.rotation}deg)`;
    confetti.el.style.opacity = confetti.opacity;
  }

  function animate() {
    confettiElements.forEach(updateConfetti);
    animationId = requestAnimationFrame(animate);
  }

  let animationId = null;
  window.addEventListener('load', () => {
    for (let i = 0; i < numConfetti; i++) {
      confettiElements.push(createConfetti());
    }
    animate();

    setTimeout(() => {
      cancelAnimationFrame(animationId);
      confettiElements.forEach(c => c.el.remove());
    }, 15000);
  });
})();

// 💖 Zarif 3D Kalpler
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const colors = ['heart-purple', 'heart-white'];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];
  heart.classList.add(colorClass);

  const size = Math.random() * 15 + 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-30px';
  heart.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
  document.body.appendChild(heart);

  let posY = -30;
  let posX = parseFloat(heart.style.left);
  const speed = Math.random() * 0.5 + 0.3;
  const swayAmplitude = Math.random() * 10 + 5;
  let swayAngle = Math.random() * Math.PI * 2;
  const swaySpeed = 0.02 + Math.random() * 0.02;

  let animationId;

  function animate() {
    posY += speed;
    swayAngle += swaySpeed;
    const swayX = Math.sin(swayAngle) * swayAmplitude;
    heart.style.bottom = posY + 'px';
    heart.style.left = posX + swayX + 'px';
    heart.style.opacity -= 0.002;

    if (posY > window.innerHeight + 30 || parseFloat(heart.style.opacity) <= 0) {
      heart.remove();
    } else {
      animationId = requestAnimationFrame(animate);
    }
  }

  animate();

  // Kalp 15 saniye sonra otomatik olarak silinsin
  setTimeout(() => {
    heart.remove();
    cancelAnimationFrame(animationId);
  }, 15000);
}

// 💖 Zarif 3D Kalpler
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const colors = ['heart-purple', 'heart-white'];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];
  heart.classList.add(colorClass);

  const size = Math.random() * 15 + 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-30px';
  heart.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
  document.body.appendChild(heart);

  let posY = -30;
  let posX = parseFloat(heart.style.left);
  const speed = Math.random() * 0.5 + 0.3;
  const swayAmplitude = Math.random() * 10 + 5;
  let swayAngle = Math.random() * Math.PI * 2;
  const swaySpeed = 0.02 + Math.random() * 0.02;

  let animationId;

  function animate() {
    posY += speed;
    swayAngle += swaySpeed;
    const swayX = Math.sin(swayAngle) * swayAmplitude;
    heart.style.bottom = posY + 'px';
    heart.style.left = posX + swayX + 'px';
    heart.style.opacity = parseFloat(heart.style.opacity) - 0.002;

    if (posY > window.innerHeight + 30 || parseFloat(heart.style.opacity) <= 0) {
      heart.remove();
    } else {
      animationId = requestAnimationFrame(animate);
    }
  }

  // İlk animasyon başlatılıyor ve animationId yakalanıyor
  animationId = requestAnimationFrame(animate);

  // Kalbi 15 saniye sonra kaldır ve animasyonu durdur

}
const heartInterval = setInterval(createHeart, 500);

// 15 saniye sonra hem kalp üretimini hem animasyonları durdur
setTimeout(() => {
  clearInterval(heartInterval); // yeni kalpler durur
}, 15000);




  let useAlternateSound = false;
function initFlappyPinar() {
 

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  const VIRTUAL_WIDTH = 400;
  const VIRTUAL_HEIGHT = 600;



  const backgroundImage = new Image();
backgroundImage.src = "images/sky.jpg";


  // Oyuncu resmi ve sesler
  const birdImage = new Image();
  birdImage.src = "images/pinar.png";  // Dosya yolunu uygun şekilde değiştir

  const flapSound = new Audio("audio/ponçik.mp3");
  const fallSound = new Audio("audio/yaa.mp3");
  const score15Sound = new Audio("audio/cog.mp3");

  const bird = {
    x: 50,
    y: 150,
    radius: 25,
    gravity: 0.10,
    lift: -3,
    velocity: 0,
    maxVelocity: 3
  };

  const pipes = [];
  const pipeWidth = 50;
  const pipeGap = 220;
  let frameCount = 0;
  let score = 0;
  let gameOver = false;
  let startScreen = true;

  function resetGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes.length = 0;
    frameCount = 0;
    score = 0;
    gameOver = false;
    useAlternateSound = false;

  }

  function update() {
    bird.velocity += bird.gravity;
    if (bird.velocity > bird.maxVelocity) bird.velocity = bird.maxVelocity;
    bird.y += bird.velocity;

    if (bird.y + bird.radius > VIRTUAL_HEIGHT) {
      bird.y = VIRTUAL_HEIGHT - bird.radius;
      if(!gameOver) {
        fallSound.currentTime = 0;
        fallSound.play();
      }
      gameOver = true;
    }
    if (bird.y - bird.radius < 0) {
      bird.y = bird.radius;
      bird.velocity = 0;
    }

    if (frameCount % 140 === 0) {
      const topHeight = Math.random() * (VIRTUAL_HEIGHT - pipeGap - 120) + 60;
      pipes.push({
        x: VIRTUAL_WIDTH,
        top: topHeight,
        bottom: topHeight + pipeGap,
        width: pipeWidth,
      });
    }

    pipes.forEach((pipe, i) => {
      pipe.x -= 1.2;
      if (
        bird.x + bird.radius > pipe.x &&
        bird.x - bird.radius < pipe.x + pipe.width &&
        (bird.y - bird.radius < pipe.top || bird.y + bird.radius > pipe.bottom)
      ) {
        if(!gameOver) {
          fallSound.currentTime = 0;
          fallSound.play();
        }
        gameOver = true;
      }
      if (pipe.x + pipe.width < 0) {
        pipes.splice(i, 1);
        score++;
      }


     

    });


        if (score > 10 && !useAlternateSound) {
  useAlternateSound = true;  // Artık farklı sesi kullan
}

    frameCount++;
  }
  function drawClassicPipe(x, top, bottom, width) {
  const lipHeight = 20;
  const pipeColor = "#6c00ac";   // Açık yeşil
  const lipColor = "#fcfffd";    // Daha koyu yeşil (şapka efekti)

  // ÜST BORU (gövde)
  ctx.fillStyle = pipeColor;
  ctx.fillRect(x, 0, width, top);

  // ÜST BORU (şapka)
  ctx.fillStyle = lipColor;
  ctx.fillRect(x - 4, top - lipHeight, width + 8, lipHeight);

  // ALT BORU (gövde)
  ctx.fillStyle = pipeColor;
  ctx.fillRect(x, bottom, width, VIRTUAL_HEIGHT - bottom);

  // ALT BORU (şapka)
  ctx.fillStyle = lipColor;
  ctx.fillRect(x - 4, bottom, width + 8, lipHeight);
}


  function drawBird() {
    const {x, y} = bird;
    const size = 50;
    if (birdImage.complete && birdImage.naturalWidth !== 0) {
      ctx.drawImage(birdImage, x - size / 2, y - size / 2, size, size);
    }
  }

  function draw() {
    if (backgroundImage.complete) {
  ctx.drawImage(backgroundImage, 0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
} else {
  ctx.fillStyle = '#70c5ce';
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
}


    pipes.forEach(pipe => {
      drawClassicPipe(pipe.x, pipe.top, pipe.bottom, pipe.width);

    });

    drawBird();
    document.getElementById('score').innerText = 'Skor: ' + score;
  }
function drawStartScreen() {
  ctx.fillStyle = '#70c5ce';
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  // Başlık
  ctx.fillStyle = 'purple';
  ctx.font = 'bold 60px "Great Vibes", cursive';
  ctx.textAlign = 'center';  // Ortala
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 6;
  ctx.fillText('Flappy Pınar', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 80);

  // Alt yazılar
  ctx.font = '20px sans-serif';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 3;
  ctx.fillText('Hazır mısın? 10 skoru geçmeye çalış 🕊️', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 20);
  ctx.fillText('Tıkla veya boşluk tuşuna bas', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 + 30);
  
  // Shadow temizleme (isteğe bağlı)
  ctx.shadowBlur = 0;
}


function drawGameOver() {


    ctx.fillStyle = '#70c5ce';
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  // Başlık
  ctx.fillStyle = 'purple';
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'center';  // Ortala
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 6;
  ctx.fillText('Beceremiyosun gibi  knkm sanki he', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 80);
   ctx.fillText('Hadi Tekrar Dene Ponçik', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 30);
   ctx.fillText('Bu sefer yapıcaksın', VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 1);


  
  // Shadow temizleme (isteğe bağlı)
  ctx.shadowBlur = 0;
}



  // Oyun döngüsü
  function loop() {
    if (startScreen) {
      drawStartScreen();
    } else if (gameOver) {
      draw();
      drawGameOver();
    } else {
      update();
      draw();
    
    }
    animationFrameId = requestAnimationFrame(loop);
  }

  function stopLoop() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

  // Olay dinleyicileri
  function flap() {
    if (startScreen) {
    startScreen = false;
    resetGame();
  }

  if (!gameOver) {
    bird.velocity = bird.lift;
    if (useAlternateSound) {
      score15Sound.currentTime = 0;
      score15Sound.play();
    } else {
      flapSound.currentTime = 0;
      flapSound.play();
    }
  } else {
    resetGame();
    startScreen = false;
  }

  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      flap();
    }
  });

  canvas.addEventListener('click', flap);

  // Resim yüklenince oyunu başlat
  birdImage.onload = () => {
    loop();
  }
}
function initCornholeGame() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const powerBarLeft = document.getElementById('powerBarLeft');
  const messageDiv = document.getElementById('message');
  const totalShotsSpan = document.getElementById('totalShots');
  const scoredShotsSpan = document.getElementById('scoredShots');
  const startScreen = document.getElementById('startScreen');
  const startBtn = document.getElementById('startBtnCornhole');
  const videoContainer = document.getElementById('videoContainerCornhole');
  const winVideo = document.getElementById('winVideo');
  const celebrationVideoContainer = document.getElementById('celebrationVideoContainer');
  const celebrationVideo = document.getElementById('celebrationVideo');
  const scoreBoard = document.getElementById('scoreBoard');

  let cw, ch;
  let gameStarted = false;
  let animationFrameId;

  let bagRadius = 80;
  let boardX, boardY, boardW, boardH;
  let bagStartX, bagStartY;

  let totalShots = 0;
  let scoredShots = 0;

  let hole = { x: 0, y: 0, radius: 17 };
  let currentBag = null;
  let bags = [];

  let dragging = false;
  let dragOrigin = { x: 0, y: 0 };
  let dragPos = { x: 0, y: 0 };

  const bgImg = new Image();
  bgImg.src = "images/basket.jpg";
  const boardImg = new Image();
  boardImg.src = "images/corn.png";
  const bagImg = new Image();
  bagImg.src = "images/bag.png";

  function resize() {
    cw = Math.min(window.innerWidth * 0.95, 600);
    ch = cw * 1.3;
    canvas.width = cw;
    canvas.height = ch;

    bagRadius = cw * 0.055;
    boardW = cw * 0.3;
    boardH = boardW * 1.3;
    boardX = (cw - boardW) / 2;
    boardY = ch * 0.07;

    hole.x = boardX + boardW / 2;
    hole.y = boardY + boardH * 0.22;

    bagStartX = cw / 2;
    bagStartY = boardY + boardH + 195;

    if (!currentBag || !currentBag.inMotion) currentBag = createBag();
  }

  function createBag() {
    return {
      x: bagStartX,
      y: bagStartY,
      radius: bagRadius,
      vx: 0,
      vy: 0,
      inMotion: false,
      scored: false
    };
  }

  function drawBackground() {
    if (bgImg.complete) {
      ctx.drawImage(bgImg, 0, 0, cw, ch);
    } else {
      ctx.fillStyle = '#060';
      ctx.fillRect(0, 0, cw, ch);
    }
  }

  function drawBoard() {
    if (boardImg.complete) {
      ctx.drawImage(boardImg, boardX, boardY, boardW, boardH);
    } else {
      ctx.fillStyle = '#8b5e3c';
      ctx.fillRect(boardX, boardY, boardW, boardH);
    }
  }

  function drawHole(highlight = false) {
    ctx.fillStyle = highlight ? '#2ecc71' : '#000';
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBag(bag) {
    if (bagImg.complete) {
      ctx.drawImage(bagImg, bag.x - bag.radius, bag.y - bag.radius, bag.radius * 2, bag.radius * 2);
    } else {
      ctx.fillStyle = bag.scored ? '#2ecc71' : '#c0392b';
      ctx.beginPath();
      ctx.arc(bag.x, bag.y, bag.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPowerLine() {
    if (!dragging) return;

    const dx = dragOrigin.x - dragPos.x;
    const dy = dragOrigin.y - dragPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);

    const length = Math.min(distance * 0.8, 100);

    const endX = currentBag.x + Math.cos(angle) * length;
    const endY = currentBag.y + Math.sin(angle) * length;

    ctx.strokeStyle = '#0f0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(currentBag.x, currentBag.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    const headLength = 10;
    const arrowAngle1 = angle + Math.PI / 8;
    const arrowAngle2 = angle - Math.PI / 8;

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - headLength * Math.cos(arrowAngle1), endY - headLength * Math.sin(arrowAngle1));
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - headLength * Math.cos(arrowAngle2), endY - headLength * Math.sin(arrowAngle2));
    ctx.stroke();
  }

  function update() {
    if (!gameStarted) return;

    if (currentBag.inMotion) {
      currentBag.x += currentBag.vx;
      currentBag.y += currentBag.vy;
      currentBag.vx *= 0.96;
      currentBag.vy *= 0.96;

      if (Math.abs(currentBag.vx) < 0.1 && Math.abs(currentBag.vy) < 0.1) {
        currentBag.inMotion = false;

        const dx = currentBag.x - hole.x;
        const dy = currentBag.y - hole.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < hole.radius - 2) {
          currentBag.scored = true;
          scoredShots++;
          messageDiv.textContent = '🏀 Koydunnn! Afferim knkma';
          showVideo();
        } else {
          messageDiv.textContent = '❌ Kaçtı be knkm, tekrar dene.';
        }

        totalShots++;
        totalShotsSpan.textContent = totalShots;
        scoredShotsSpan.textContent = scoredShots;

        bags.push(currentBag);
        if (totalShots % 3 === 0) bags = [];


        currentBag = createBag();
        setTimeout(() => {
          messageDiv.textContent = '';
        }, 2000);
      }
    }
  }

  function draw() {
    drawBackground();
    drawBoard();
    drawHole(currentBag && currentBag.scored);
    bags.forEach(drawBag);
    if (currentBag) drawBag(currentBag);
    drawPowerLine();
  }

  function loop() {
    if (!gameStarted) {
      stopLoop();
      return;
    }
    update();
    draw();
    animationFrameId = requestAnimationFrame(loop);
  }

  function stopLoop() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function setPowerBar(ratio) {
    const clampedRatio = Math.min(Math.max(ratio, 0), 1);
    const height = clampedRatio * 150;
    powerBarLeft.style.height = `${height}px`;

    const r = Math.floor(255 * (1 - clampedRatio) + 46 * clampedRatio);
    const g = Math.floor(0 * (1 - clampedRatio) + 204 * clampedRatio);
    const b = Math.floor(0 * (1 - clampedRatio) + 113 * clampedRatio);

    powerBarLeft.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  function handleStart(x, y) {
    if (!gameStarted) return;

    const dx = x - currentBag.x;
    const dy = y - currentBag.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bagRadius + 30 && !currentBag.inMotion) {
      dragging = true;

      dragOrigin = {
        x: currentBag.x + bagRadius * 0.2,
        y: currentBag.y + bagRadius * 0.2
      };

      dragPos = { x, y };
    }
  }

  function handleMove(x, y) {
    if (!dragging) return;
    dragPos = { x, y };
    const dy = dragPos.y - dragOrigin.y;
    setPowerBar(dy / 100);
  }

  function handleEnd() {
    if (!dragging) return;
    dragging = false;

    const dx = dragOrigin.x - dragPos.x;
    const dy = dragOrigin.y - dragPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 30) {
      messageDiv.textContent = 'Fırlatmak için daha güçlü çek!';
      setTimeout(() => {
        messageDiv.textContent = '';
      }, 1500);
      setPowerBar(0);
      return;
    }

    const angle = Math.atan2(dy, dx);
    const power = Math.min(dist * 0.14, 20);

    currentBag.vx = power * Math.cos(angle);
    currentBag.vy = power * Math.sin(angle);
    currentBag.inMotion = true;

    setPowerBar(0);
  }

  // Video oynatma fonksiyonları
  function showVideo() {
    videoContainer.style.display = 'block';

    winVideo.pause();
    winVideo.currentTime = 0;
    winVideo.muted = false;
    winVideo.volume = 1;
    winVideo.play();

    stopLoop();

    winVideo.onended = () => {
      videoContainer.style.display = 'none';
      winVideo.pause();
      winVideo.currentTime = 0;

      if (scoredShots >= 5) {
        gameStarted = false;
        showCelebrationVideo();
        gameStarted = true;
    
      } else {
        gameStarted = true;
        loop();
      }
    };
  }

  function showCelebrationVideo() {
    celebrationVideoContainer.style.display = 'block';

    celebrationVideo.pause();
    celebrationVideo.currentTime = 0;
    celebrationVideo.muted = false;
    celebrationVideo.volume = 1;
    celebrationVideo.play();

    stopLoop();

    celebrationVideo.onended = () => {
      celebrationVideo.pause();
      celebrationVideo.currentTime = 0;
      celebrationVideoContainer.style.display = 'none';

      resetGame();
      startScreen.style.display = 'block';
      powerBarLeft.style.height = '0';
      messageDiv.textContent = '';
      scoreBoard.textContent = `🎯 Atış: 0 - ✅Koyduğun: 0`;
    };
  }

  function resetGame() {
    totalShots = 0;
    scoredShots = 0;
    bags = [];
    totalShotsSpan.textContent = '0';
    scoredShotsSpan.textContent = '0';
    messageDiv.textContent = '';
    currentBag = createBag();

    winVideo.pause();
    winVideo.currentTime = 0;
    celebrationVideo.pause();
    celebrationVideo.currentTime = 0;
  }

  // Başlatma
  startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    resetGame();
    gameStarted = true;
    loop();
  });

  // Mouse ve touch eventleri
  canvas.addEventListener('mousedown', e => {
    if (!gameStarted) return;
    const rect = canvas.getBoundingClientRect();
    handleStart(e.clientX - rect.left, e.clientY - rect.top);
  });
  canvas.addEventListener('mousemove', e => {
    if (!gameStarted) return;
    const rect = canvas.getBoundingClientRect();
    handleMove(e.clientX - rect.left, e.clientY - rect.top);
  });
  canvas.addEventListener('mouseup', e => {
    if (!gameStarted) return;
    handleEnd();
  });

  canvas.addEventListener('touchstart', e => {
    if (!gameStarted) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    handleStart(touch.clientX - rect.left, touch.clientY - rect.top);
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    if (!gameStarted) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
  }, { passive: false });
  canvas.addEventListener('touchend', e => {
    if (!gameStarted) return;
    e.preventDefault();
    handleEnd();
  });

  window.addEventListener('resize', () => {
    resize();
    draw();
  });

  // İlk ayar
  resize();
  draw();
}








const surpriseMessages = [
  "Sürprizzzz! 🎁💜 Senin için hazırladığım bu özel kutudan sadece kalpler değil, sana olan sevgim de taşıyor...",
  "Seninle tanıştığım için çok şanslıyım 💌 İyi ki varsın ponçikk 💜🤍",
  "Ruh eşim, bitanem, canım, tatlım... Kısaca her şeyim 💜🤍",
  "Bu kadar mükemmel biri olmak zorunda mıydın knkm? 😍",
  "Ben seni daha çok seviyorum... Bunu biliyorsun dimi? 💜🤍",
  "Eğer dünyada bir ponçik varsa, o sensin. İki varsa biri sensin, diğeri senin yansıman (diğeri de benim belki 🤭)",
    "Dünyanın enn mükemmel günü bugün çünkü bugün biricik Pınar'ımın doğum günü ",
     "Doğum gününü beklediğim kadar hiçbişeyi beklemedim sanırım(bir de buluşurken seni:)) ",
        "Sürpriz diyince aklıma gelen tek şey sensin 💜🤍",
  "Bu kutu da fena değil ama senin hazırladığın kutu 🥹 10/10, gördüğüm en güzel kutuydu 💜🤍",
  "Ponçikliğin tanımı: sensin 💜🤍",
  "Bu kutudan çıkan her kalp, sana olan sevgimden bir parça 💫",
  "Yavru pandacığımı çoook seviyorum 💫",
  "Sıkıldın mıı 😏 (Böyle diyince gelen bayılma perileri 😵‍💫)",
  "Gözlerini kapat ve dilek tut... Tuttun mu? Söyle şimdi (içinden ama  söylersem kabul olmaz🤫) 🎈",
  "Benim için en büyük sürpriz sensin 🥹💝"
];


let currentMessageIndex = -1;
let typingInterval; // Globalde tanımla
function openSurpriseBox() {
  const message = document.getElementById("surpriseMessage");
  let newIndex;
  launchGiftHearts(document.getElementById("giftHeartZone"));
  // Aynı mesaj üst üste gelmesin
  do {
    newIndex = Math.floor(Math.random() * surpriseMessages.length);
  } while (newIndex === currentMessageIndex);
  currentMessageIndex = newIndex;

  // Yazıyı animasyonla yaz
  const text = surpriseMessages[newIndex];
  message.innerHTML = "";
  message.style.display = "block";

  // Önceki yazı efektini durdur
  clearInterval(typingInterval);

  let index = 0;
  typingInterval = setInterval(() => {
    message.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) {
      clearInterval(typingInterval);
    }
  }, 50);

const nextBtn = document.getElementById("nextSurpriseBtn");
nextBtn.style.display = "inline-block";

document.getElementById("nextSurpriseBtn").addEventListener("click", () => {
  openSurpriseBox();
 
});

}


function typeWriterEffect(container, text, speed = 40, callback = null) {
  container.innerHTML = "";
  container.style.display = "block";

  const segments = text.split(/(<br>)/g); // <br> ile ayır
  let index = 0;

  function write() {
    if (index < segments.length) {
      if (segments[index] === "<br>") {
        container.innerHTML += "<br>";
      } else {
        let subIndex = 0;
        const segment = segments[index];
        const typeChar = () => {
          if (subIndex < segment.length) {
            container.innerHTML += segment.charAt(subIndex);
            subIndex++;
            setTimeout(typeChar, speed);
          } else {
            index++;
            write(); // sonraki segmente geç
          }
        };
        typeChar();
        return;
      }
      index++;
      write();
    } else if (callback) {
      callback(); // yazı bittiğinde callback çalışsın (opsiyonel)
    }
  }

  write();
}






function launchGiftHearts(container) {
  let heartInterval = setInterval(() => {
    const giftHeart = document.createElement("div");
    giftHeart.classList.add("gift-heart");
    giftHeart.classList.add(Math.random() > 0.5 ? "purple" : "white");
    giftHeart.style.left = `${Math.random() * 100}vw`;
    giftHeart.style.bottom = "0";
    container.appendChild(giftHeart);
    setTimeout(() => giftHeart.remove(), 3000);
  }, 150);

  setTimeout(() => clearInterval(heartInterval), 5000);
}

function startSixthSenseGame() {
  const pandaGrid = document.getElementById('pandaGrid');
  const result = document.getElementById('result');
  const specialMessage = document.getElementById('specialMessage');
  const restartButton = document.getElementById('restartButton');
  const scoreCorrectElem = document.getElementById('scoreCorrect');
  const scoreWrongElem = document.getElementById('scoreWrong');
  const timerElem = document.getElementById('timer');
  const body = document.body;

  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');
  const timeoutSound = document.getElementById('timeoutSound');

  const pandaImages = [
    "panda1.png", "panda2.webp", "panda3.png", "panda4.png",
    "panda5.png", "panda6.png", "panda7.png", "panda8.png"
  ];
  const halilImage = "halil.jpg";
  const letters = ["P","I","N","A","R","B","E","S","T"];

  let allImages = [];
  let selected = false;
  let countdown;
  let timeLeft = 15;

  let scoreCorrect = 0;
  let scoreWrong = 0;

  function createGame() {
    pandaGrid.innerHTML = "";
    result.textContent = "";
    specialMessage.textContent = "";
    restartButton.style.display = "none";
    selected = false;
    timeLeft = 15;
    timerElem.textContent = "Süre: " + timeLeft;
    timerElem.style.color = '#6f42c1';
    body.style.background = "linear-gradient(to bottom right, #f5e1ff, #d0f0ff)";

    // Sesleri sıfırla
    correctSound.pause();
    correctSound.currentTime = 0;
    wrongSound.pause();
    wrongSound.currentTime = 0;
    timeoutSound.pause();
    timeoutSound.currentTime = 0;
    timeoutSound.loop = false;

    clearInterval(countdown);

    // Halil’i rastgele yerleştir
    const randomIndex = Math.floor(Math.random() * 9);
    allImages = [...pandaImages];
    allImages.splice(randomIndex, 0, halilImage);

    allImages.forEach((src, index) => {
      const card = document.createElement("div");
      card.className = "card";
      const cardInner = document.createElement("div");
      cardInner.className = "card-inner";

      const front = document.createElement("div");
      front.className = "card-front";
      front.textContent = letters[index];

      const back = document.createElement("div");
      back.className = "card-back";
      const img = document.createElement("img");
      img.src = `img/${src}`;
      img.alt = "Panda";
      back.appendChild(img);

      cardInner.appendChild(front);
      cardInner.appendChild(back);
      card.appendChild(cardInner);

      card.addEventListener("click", () => {
        if (selected) return;
        selected = true;
        clearInterval(countdown);
        timeoutSound.pause();
        timeoutSound.currentTime = 0;

        document.querySelectorAll('.card').forEach(c => c.classList.add("flipped"));

        if (src === halilImage) {
          scoreCorrect++;
          scoreCorrectElem.textContent = scoreCorrect;
          result.textContent = "🎉 Afferim sana be Altıncı hissin seni yanıltmadı Halil’e götürdü!";
          result.style.color = "#28a745";
          specialMessage.textContent = "6. hislerin kuvvetli olduğunu biliyordum knkmm 🎊🎊🎊";
          correctSound.play();
          launchConfetti();
          body.style.background = "linear-gradient(to bottom right, #d4edda, #a3c293)";
        } else {
          scoreWrong++;
          scoreWrongElem.textContent = scoreWrong;
          result.textContent = "🙈 Hadi ordannn!!! Tamam ben de pandayım ama :D Tekrar dene!";
          result.style.color = "#dc3545";
          specialMessage.textContent = "";
          wrongSound.play();
          body.style.background = "linear-gradient(to bottom right, #f8d7da, #f0a8a8)";
        }

        restartButton.style.display = "inline-block";
      });

      pandaGrid.appendChild(card);
    });

    startTimer();
  }

  function startTimer() {
    timeLeft = 15;
    timerElem.textContent = "Süre: " + timeLeft;
    timerElem.style.color = '#6f42c1';

    countdown = setInterval(() => {
      timeLeft--;
      if (timeLeft < 0) timeLeft = 0;
      timerElem.textContent = "Süre: " + timeLeft;

      if(timeLeft <= 5) {
        timerElem.style.color = '#dc3545';
      }

      if(timeLeft <= 0) {
        clearInterval(countdown);
        timeoutSound.pause();
        timeoutSound.currentTime = 0;

        if (!selected) {
          selected = true;
          result.textContent = "⏰ Süren doldu! Tekrar dene ama acele et.";
          result.style.color = '#dc3545';
          specialMessage.textContent = "";
          restartButton.style.display = "inline-block";

          wrongSound.play();

          document.querySelectorAll('.card').forEach(c => c.classList.add("flipped"));
          body.style.background = "linear-gradient(to bottom right, #f8d7da, #f0a8a8)";
        }
      }
    }, 1000);
  }

  function launchConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      confetti.style.animationDuration = 3000 + Math.random() * 2000 + 'ms';
      confetti.style.animationDelay = Math.random() * 1000 + 'ms';
      document.body.appendChild(confetti);

      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  }

  restartButton.addEventListener("click", createGame);

  createGame();
}
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("menu") === "true") {
    showSection("menuSection");
    document.getElementById("startScreens").style.display = "none";
    document.getElementById("section1").style.display = "none";
  }
});
