const message = `Bitanecik knkeytomun bugün  doğum günü...
Belki her gün seni ne kadar çok sevdiğimi söylüyorum ama bugün sana sadece "seni seviyorum" değil, "iyi ki doğdun" da demek istiyorum.
Çünkü sen 06/06/2002 tarihinde doğmamış olsaydın, ben bu kadar mükemmel birisiyle tanışamamış olurdum.

Seninle her şey daha anlamlı, her an daha renkli, eğlenceli, romantik, duygu dolu, heyecanlı ve ponçik.
Bu küçük siteyi sana olan sevgimi kelimelere dökmek ve birlikte yaşadığımız o özel anları bir hatıra olarak saklamak için hazırladım. Umarım beğenirsin (başka şansın olmayacak sanırım 😄)

İyi ki doğdun.
İyi ki varsın.
İyi ki yollarımız kesişti.
İyi ki seninle tanıştım.
İyi ki Pınar’sın.
İyi ki... 🎂💖

Seni çok çok  seven,
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

window.onload = typeWriter;
function goToNext() {
  alert("Sonraki sayfa yakında :)");
}
function goToNext() {
  const section1 = document.getElementById("section1");
  const memoriesSection = document.getElementById("memoriesSection");

  section1.style.display = "none";
  memoriesSection.style.display = "block";

  showNextMemory(); // Anıları başlat
  memoriesSection.scrollIntoView({ behavior: "smooth" });
}


const memories = [
  {
    title: "İlk buluşmamız",
    text: `Bugün seninle ilk defa iş dışında yalnız buluşmuştuk. Mağazadan aşağıya baktığımızda deliğe kum torbası atan insanları görmüştük, sen tabi heyecan yaptın hemen iddiaya girdin, "sana koyarım" falan gibisinden :)) 
Neyse gittik, ben adamlardan rica ettim biz de oynayalım diye. Sonra oynadık, sen adamın sana göstermesine fırsat vermeden ilk atışında deliksiz atmıştın. Gerçekten şaşırdım ve sana olan saygım arttı. 
Yetenekli bir insan olduğunu orada anlamıştım. Birlikte güzel videolar çektik, çekişmeli geçmişti. Ben gerçekten çok eğlenmiştim. Bir daha nasip olmadı ama ilk defa seninle bir aktivite yapmıştık. 
Her zaman aklımda güzel bir anı olarak kalacak.`,  
    image: "images/ilk-bulusma.png"
  }
];

let memoryIndex = 0;

function showNextMemory() {
  if (memoryIndex < memories.length) {
    const memory = memories[memoryIndex];
    document.getElementById("memoryTitle").innerText = memory.title;
    document.getElementById("memoryText").innerText = memory.text;
    document.getElementById("memoryImage").src = memory.image;
    memoryIndex++;
  } else {
    document.getElementById("memoryTitle").innerText = "Hepsi bu kadardı 💜";
    document.getElementById("memoryText").innerText = "Ama eminim birlikte daha nice anılar biriktireceğiz...";
    document.getElementById("memoryImage").src = "images/son.png";
  }
}
function showMemories() {
  document.getElementById("menu").style.display = "none"; // varsa
  document.getElementById("memoriesSection").style.display = "block";
  showNextMemory();
}


 
