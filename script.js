// script.js

window.onload = function () {
  // Yazı animasyonu başlat
  typeWriter();
};

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

// Bölüm gösterme fonksiyonu, sadece isteneni gösterip diğerlerini gizler
function showSection(section) {
  // Tüm bölümler burada
  const sections = ['memoriesSection', 'gamesSection', 'section1', 'menuSection'];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = (id === section) ? 'block' : 'none';
  });

  // Eğer memoriesSection gösterildiyse anıyı başlat
  if (section === 'memoriesSection') {
    memoryIndex = 0; // anılarda başa dön
    showNextMemory();
    document.getElementById('memoryRating').style.display = 'block';
  } else {
    document.getElementById('memoryRating').style.display = 'none';
  }
}

// İlk bölümden sonra menüyü göster
function goToNext() {
  document.getElementById('section1').style.display = 'none';
  document.getElementById('menuSection').style.display = 'block';
}


const memories = [
  {
    title: "İlk fotoğrafımız",
    text: `Bu fotoğraf bizim ilk kez yan yana durduğumuz andı.Sen yine her zamanki gibi knk ama şuan çok bilmem ne bişeyler diyodun ama bilmiyordun ki senin içinde olduğun her bir an her bir fotoğraf her bir detay mükemmel(sonradan farkettin diye umuyorumm)🤍💜
  Tarih:21 Şubat 2024`,
    media: [
      { type: "image", src: "images/ilk-fotografimiz.JPEG" }
    ]
  },
  {
    title: "İlk Buluşmamız",
    text: `Bugün seninle ilk defa iş dışında yalnız buluşmuştuk. Mağazadan aşağıya baktığımızda deliğe kum torbası atan insanları görmüştük, sen tabi heyecan yaptın hemen iddiaya girdin, "sana koyarım" falan gibisinden :)) 
Neyse gittik, ben adamlardan rica ettim biz de oynayalım diye. Sonra oynadık, sen adamın sana göstermesine fırsat vermeden ilk atışında deliksiz atmıştın. Gerçekten şaşırdım ve sana olan saygım arttı. 
Yetenekli bir insan olduğunu orada anlamıştım. Birlikte güzel videolar çektik, çekişmeli geçmişti. Ben gerçekten çok eğlenmiştim. Bir daha nasip olmadı ama ilk defa seninle bir aktivite yapmıştık. 
Her zaman aklımda güzel bir anı olarak kalacak.`,
    media: [
      { type: "video", src: "videos/ilk-bulusma.mp4" }
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
  "Knk bence 10/10'du ama sen bilirsin 💜",
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
  const nextBtn = document.getElementById("nextMemoryBtn");

  if (memoryIndex >= memories.length) {
    document.getElementById("memoryTitle").innerText = "";
    document.getElementById("memoryText").innerText = "";
    document.getElementById("mediaContainer").innerHTML = "";
    nextBtn.innerText = "Tüm Anılar Bitti 💜";
    nextBtn.disabled = true;
    document.getElementById("memoryRating").style.display = "none";
    return;
  }

  const memory = memories[memoryIndex];
  document.getElementById("memoryTitle").innerText = memory.title;
  document.getElementById("memoryText").innerText = memory.text;

  const mediaContainer = document.getElementById("mediaContainer");
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

  document.getElementById("memoryRating").style.display = "block";
  createPinarStars();
  memoryIndex++;
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

  function animate() {
    posY += speed;
    swayAngle += swaySpeed;
    const swayX = Math.sin(swayAngle) * swayAmplitude;
    heart.style.bottom = posY + 'px';
    heart.style.left = posX + swayX + 'px';
    heart.style.opacity -= 0.002;

    if (posY > window.innerHeight + 30 || heart.style.opacity <= 0) {
      heart.remove();
    } else {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

setInterval(createHeart, 350);



window.addEventListener("load", () => {
  const audio = document.getElementById("birthdaySound");

  if (!audio) {
    console.error("Ses elementi bulunamadı!");
    return;
  }

  audio.volume = 0.1;

  audio.play().then(() => {
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 15000);
  }).catch(() => {
    const startAudioOnInteraction = () => {
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 15000);
      window.removeEventListener("click", startAudioOnInteraction);
    };
    window.addEventListener("click", startAudioOnInteraction);
  });
});


