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



const message = `
Hoş geldinnn.
Bizim ponçik sitemiz, doğum günün için hazırlanan ama sadece doğum gününde değil her açtığında seni mutlu edebilecek bir sayfa
Güzel anılar yaşadıkça güncellenecek biir sayfa inşallah yeni halini beğeinrsin diyelim hadi bakalım keyifli dakikalarr🤍💜...

Seni çok çok seven,
Halil`;

const target = document.getElementById("birthdayMessage");
let index = 0;

function typeWriter() {
  if (index < message.length) {
    target.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
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
    document.body.style.background = "linear-gradient(to bottom right, #fefefe, #571dcc)";
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
    title: "İlk Fotoğrafımız",
    text: `Bu fotoğraf bizim ilk kez yan yana durduğumuz anmış .İkimizde ilerde ne kadar mükemmel iki arkadaş olacağımzdan haberisiz.Sen yine her zamanki gibi knk ama şuan çok bilmem ne bişeyler diyodun ama bilmiyordun ki senin içinde olduğun her bir an her bir fotoğraf her bir detay mükemmel(sonradan farkettin diye umuyorumm)🤍💜
  Tarih:21 Şubat 2024`,
    media: [
      { type: "image", src: "images/ilk.JPEG" }
    ]
  },


 {
    title: "Birlikte Kapanış",
    text: ` Bugün seninle kapanışta olduğumuz bi gündü youtubedan toz duman şarkısını açmıştık birlikte eşlik edip muhabbet ediyoduk  birlikte kapanış olduğumuz için 
    çok mutluydum benim açımdan eğlenceli bir gündü(Sıla kankamız da var videoda seversin knk:)).Tarih:11 Mart 2024`,
    media: [
        { type: "image", src: "images/kpns.JPEG" },
        { type: "image", src: "images/kpns2.JPEG" },
        { type: "video", src: "videos/kapanis.mp4" }
    ]
  },


 {
    title: "Osmanlı'da iftar",
    text: `Bugün ilk defa seninle birlikte dışarda iftar yapmıştık başka arkadaşlarımız da vardı Osmanlı'ya gidişimiz ayrı bir olaydı aşşırı trafik vardı benim istanbulkartım az kalsın kayboluyoduu neyseki bulduk neyse gittik
    yemeklerimizi söyledik herkes farklı bişeyler söyledi ama bitiremediler ben hepinizinkini yemek zorunda kaldım:)baya bi yedim sonrasında tatlı yemeye gittik tabu oynamıştık senle takım olduk ve son saniyeye kadar çok çekişmeli geçmişti kazandık tatlıyı çok iyi bi ikili olmuştuk sonra seni kuleliye bıraktık ilk iftarımız bence başarılydı.Tarih:18 Mart )🤍💜
  Tarih:21 Şubat 2024`,
    media: [
      { type: "image", src: "images/18marts.jpg" },
      { type: "image", src: "images/18mart.jpg" },
      { type: "image", src: "images/18martss.jpg" },
      { type: "image", src: "images/18martsss.jpg" }

    ]
  },

{
    title: "Paşa'da İftar Sonrası ",
    text: `Bugün seninle iftar sonrası paşa'da oturmuştuk erkan bey falanda gelmişti hatırlarsın güzeldi hep beraberdik(sen pek istemesende)snapchatten fotoğraflar videolar çekmiştik içinde ilk kez birlikte araba kullandığımız videomuz da vardı o açıdan anlamlı bir gündü,güzeldi.Tarih:4 Nisan 2024  `,
    media: [
      { type: "image", src: "images/snp1.JPEG" },
        { type: "video", src: "videos/snp2.MP4" },
       { type: "video", src: "videos/snp3.MP4" }
      ]  
  },


 {
    title: "Sana Aldığım İlk Hediye",
    text: `Bugün seninle çalkantılı olduğumuz dönemlerde gelişen olaylar sonucu sana hediye almaya karar vermiştim almak için gerçekten baya bir uğraşmıştım neyse aldım ettim sana verme kısmını da biraz sürpriz olsun istemiştim her şeyin başladığı günlerden biri de bu olabilirdi hediyeme beklediğimden daha büyük tepki vermiştin mutlu olduğunu çok hissettim çok tatlıydın o günden sonra Pınar mutlu olmayı çok hakeden biri diyerek her fırsatta olmasa da elimden geldiğince mutlu etmeye çalıştımmm umarım bunu okurken de muıtlu olmuşssundur benn öyleyim.Tarih:8 Nisan 2024`,
    media: [
      { type: "video", src: "videos/lelas.MP4" }
    ]
  },


 
 {
    title: "Zeka Sorusu ve Senin Ponçikliğin",
    text: `Bugün sana zeka sorusu sormuştum cevabı bilmediğin halde ve yanlış cevap verdiğin halde hala açıklamaya çalışman senin kaybettiğini kabullenmediğini kanıtladığın anlardan biri oldu diye düşünüyorum ponçik akşamında da alilerle oturuyoduk 1 saatliğine bize katılmıştın .eğlenceli bir andı Tarih:13 Nisan 2024 `,
    media: [

        { type: "image", src: "images/pso1.JPEG" },
      { type: "video", src: "videos/pso2.MP4" }
    ]
  },

 {
    title: "Boks Maçımız ve Küsme videomuz",
    text: `Bugün  seninle paşafırnında otururken seninle küsersem nasıl barışırım diye konuşma yapmışız barışmam falan demişim ama küsersek seninle küs kalamayacağım için direkt barışırım akşamına da boks maçı yapmıştık sağlam yumruk atmıştın knk heralde içinde beslediğin kinden midir nedir bende ardından dönüyorum eve şarkısıyla edit yapmıştım gülmüştük :) Tarih:17 Nisan 2024 `,
    media: [

        { type: "image", src: "images/boks.JPEG" },
            { type: "image", src: "images/boks3.JPEG" },
      { type: "video", src: "videos/boks1.MP4" },
       { type: "video", src: "videos/boks4.MP4" }
    ]
  },



 {
    title: "Paşada Çay içme işi",
    text: `Bugün paşada   esralarla birlikte oturmuş çay içmiştik  baya bi  fotoğraflar çekildik ben fotoğraf çekilirken sana sarılmadan duramamıştım sonra siz hikaye atmıştınız beni kırpıp :):) şaka şaka  umrumda bile olmadı şakasını geçtik sadece bu da böyle bir anıydı Tarih:24 Nisan 2024`,
    media: [

      { type: "image", src: "images/frn1.JPEG" },
      { type: "image", src: "images/frn2.JPEG" },
  

    ]
  },

    {
    title: "İlk Buluşmamız",
    text: `Bugün seninle ilk defa iş dışında yalnız buluşmuştuk. Mağazadan aşağıya baktığımızda deliğe kum torbası atan insanları görmüştük, sen tabi heyecan yaptın hemen iddiaya girdin, "sana koyarım" falan gibisinden :)) 
Neyse gittik, ben adamlardan rica ettim biz de oynayalım diye. Sonra oynadık, sen adamın sana göstermesine fırsat vermeden ilk atışında deliksiz atmıştın. Gerçekten şaşırdım ve sana olan saygım arttı. 
Yetenekli bir insan olduğunu orada anlamıştım. Birlikte güzel videolar çektik, çekişmeli geçmişti. Ben gerçekten çok eğlenmiştim. Bir daha nasip olmadı ama ilk defa seninle bir aktivite yapmıştık. 
Her zaman aklımda güzel bir anı olarak kalacak.Tarih 28 Nisan 2024`,
    media: [
      { type: "video", src: "videos/ilka.MP4" }
    ]
  },



    {
    title: "İtopyada Tır Kullanma İşi",
    text: `Bugün sana küçük bir sürprizim var demiştim kadın reyonu vitrine yakın olan masada molaya çıkmamızı beklemiştik ve molada itopya'ya gittik sen ilk defa direksiyona dokunmuştun araba kullanmaya çok istediğini o zaman hissetmiştim ve sana söz vermiştim ben araba alacağım ve sana kullandıracağım diye o zamanlar pek inanarak söylememiştim belki ama bazen belki de iyi şeyleri çağırmak gerekir Allah nasip etti şükürler olsun senin orda ısrarla hiç frene basmayışın beni tedirgin etmişti ama herşeyin bir ilki vardır o da ilkti ve her geçen gün daha iyi olmaya devam ettin ponçikk güzel bir anıydı bana kalırsa.Tarih:12 Mayıs 2024`,
    media: [
      { type: "video", src: "videos/itop.mp4" }
    ]
  },


    {
    title: "Simge Konserii",
    text: `Bugün seninle ilk defa dışarda buluşmuştuk Simge konseri şans eseri senin önüne düşmüştü ve bir anda karar verip gittik hayret yolu kaçırmadan nasıl gidebildik hala hayret ediyorum Simge konseri başından sonuna kadar mükemmeldi ortamı olsun o puf koltuk olsun simge olsun şarkıları olsun mü kem melldi bağıra bağıra şarkı söyleyip stres atmıştık gerçektende güzel bir gündü sen çok ponçiktin seninle dışarda çok eğleneceğimizi orda anlamış olabilirim :).Tarih:17 Mayıs 2024`,
    media: [

       { type: "image", src: "images/simge1.JPEG" },
       { type: "image", src: "images/simge4.JPEG" },
       { type: "image", src: "images/simge2.JPEG" },
       { type: "video", src: "videos/simge3.mp4" }
    ]
  },

 {
    title: "Ali'nin Zorunluu Dg",
    text: `Bugün paşada Alinin zorunluu Dg'sinin kutlamıştık  kenan falan da gelmişti senin dışındaki tüm doğum günlerinin boş olduğunu farkettim şu anda anıyla alakalı aman aman bişey hatırlayamadım neyse aliye de dgko diyelim ama asıl olay seninkindee.Tarih:20 Mayıs 2024`,
    media: [

       { type: "image", src: "images/adg1.JPEG" },
       { type: "image", src: "images/adg2.JPEG" },
      
       { type: "video", src: "videos/adg3.mp4" }
    ]
  },



{
    title: "Vee Dünyanın En Önemli Tarihi",
    text: `Bugün  senin doğumm günündüü off bi türlü gelmek bilmemişti çok fazla üzerine düşünmüştüm kurgulamıştım acaba nasıl olacak  diye içim içimi yiyodu saatler 23.50 civarlarında çok heyecanlanmıştım acaba editime nasıl tepki verecek diye başından sonuna kadar inanılmaz bir gündü her şey yolunda gitmişti sen hediyelerini çok beğenmiştin özellikle dövme muhabbetine çiçekler de sana çok yakışmıştı bana göre geçirdiğimiz en güzel günlerden biri iyi ki doğmuştunn seni çok seviyorum.Tarih:🤍💜6 HAZİRANNN🤍💜2024`,
    media: [

       { type: "image", src: "images/pdg1.JPEG" },
       { type: "image", src: "images/pdg2.JPEG" },
        { type: "video", src: "videos/pdg3.mp4" },
       { type: "video", src: "videos/pdg4.mp4" }
    ]
  },


   {
    title: "Yenibosna Macfit",
    text: `Bugün seninle ilk spora gittiğimiz gün beraber spor yapmıştık sağlam basmıştık senin bacakların çok ağırmıştı yorulmuştuk eğlenceli bir gündü diye düşünüyorum sence?.Tarih:10 Haziran 2024`,
    media: [

       { type: "image", src: "images/mac1.JPEG" },
       { type: "image", src: "images/mac2.JPEG" },
      
      
    ]
  },


 {
    title: "Trileçe ",
    text: `Bugün  bana tatlı almıştın trileçe yediğim en güzel tatlılardandı güzel bir süpriz olmuştu depoda yemiştik çektiğimiz video çok eğlenceliydi sonunda çayı devirmiştinn unutum sanma :).Tarih:13 Haziran 2024`,
    media: [

      
       { type: "video", src: "videos/tri.mp4" },
      
      
    ]
  },


 {
    title: "Arife günü",
    text: `Bugün  aklımda nedense çok güzel kalmış arife günümüz dolu dolu geçmişti sanırım cemonun da dgydi maske yapmıştık ve videolar çekmiştik molada vaktimiz kısıtlı olsa da bi şekilde eğlenmesini biliyorduk seninle geçen tatlı bir anımız daha .Tarih:15 Haziran 2024`,
    media: [

       { type: "image", src: "images/mask.JPEG" },
       { type: "video", src: "videos/mask2.MP4" },
      
      
    ]
  },




 {
    title: "Bayramm günü",
    text: `Bayramları pek sevmem bilirsin ama bu bayram shiftimiz seninle denk gelmişti veli dayının scooterını sürmüştük benim metroporttaki izin günlerimi araştırmıştık yiğit best de vardı triplere giriyodu seninle çok uzun süre vakit geçirmiştik knkm aklımda çok güzel kalan bir gün dahaa:) .Tarih:18 Haziran 2024`,
    media: [

       { type: "image", src: "images/bayram1.JPEG" },
       { type: "image", src: "images/bayram2.JPEG" },
      
      
    ]
  },





 {
    title: "Gerginn günüm ve top ",
    text: `Bugün öğle molasında miranlarla top oynamııştık hatta maç yaparkenn güvenlikler kameradan bizi görüp uyarmışlardı halbuki ne güzel dalmıştık maça :) ve akşamında da seenin üstünde bir gerginlik vardı gibi sankii:)))  Tarih:26 Haziran 2024`,
    media: [

   
       { type: "video", src: "videos/gergin1.MP4" },
       { type: "video", src: "videos/gergin2.mp4" }
      
      
    ]
  },



 {
    title: "Marmara Park ve Olaylı Dönüş",
    text: `Bugün senle yine macfit kovaladığımız bir gündü benim yıllık iznimde buluşmuştukk seni çokk özlemiştimm güzelce sporumuz yaptık takıldık dönüşte karnımız acıktı ve burger yiyelime gittik sonra martıya binip sorunsuz bi şekilde ht20 ye ulaştık(paralel evrende)böyle miydi ya o güne ait bazı bilgileri net hatırlayamıyorum muhtemelen böyleydi neyseki sonraki günümüz de güzeldi ya oysho dan tayt alma işi senin çıkışta beni görüp şoka girmen falan komik bir gündü ponçikk  Tarih:10 Temmuz 2024`,
    media: [

        { type: "image", src: "images/mp1.JPEG" },
   { type: "image", src: "images/mp2.JPEG" },
      
    ]
  },



 {
    title: "İlk Durağı kaçırmamızz",
    text: `Bugün seninle bana kıyafet bakmaya gitmiştik otobüs bekliyoduk sen hemen atladın bu bakırköye gidiyo yiaa diye sonra bakırköyün öbür ucuna giderken farkettin tekrar inip marmara foruma gittik yolda ben sana geri dönelim mi dediğimde sen de tamam gidelim dediğinde gerçekten çok şaşırmıştım bu kadar iyi bi insan olamaz diye geçirmiiştim içimden bana karşı çok hoşgörülü biri olduğunu ve bana ne yaparasam yapayım aynı şekilde davranıcanı hissetmiştim ve o günden sonra senin yanında daha rahat olmaya başladım çünkü sen beni hiçbir türlü yargılamıyodun hep pozitif kalıyodunn ponçiksin yaa o gün köfteci yusufa gitmiştik seversinn yarım ekmekleri yoktu sana normal ekmeklerinden kesmişlerdii geçirdiğimiz en kötü gün diyip duruyodum masummuşum daha ne kötü günler gördük :)))  Tarih:7 Ağustos 2024`,
    media: [

        { type: "image", src: "images/mf1.JPEG" },
 
      
    ]
  },





   {
    title: "Trump Avm Olayı",
    text: `Bugün senle yine macfit kovaladığımız bir gündü seni 5 dk beklettim diye triplere girmiştin yolu kaçırıp karşıya geçmiştik ve iki kere boğaz manzarasına maruz kalmıştık saat geçtiği için ve barış knkmız kod atmadığı için girememiştik neyse ki knkn olaya el atıp kendi salonuna götürdü orda da güzel bir idman atmıştık çıkışta da pilav yedik o gün bana top1 listesinde sen varsın demiştin unuttum sanma :) Tarih:21 Ağustos 2024`,
    media: [

        { type: "image", src: "images/fs1.JPEG" },
   { type: "image", src: "images/fs2.JPEG" }
      
    ]
  },


  {
    title: "Temizlikk",
    text: `Bugün senle temizliğe sardırdığımız bir gündü babamlar mağazaya gelmişti araba bakma muhabbetleri vardı senle her yeri bir güzel temizlemiştik terapi gibiydi keşke o ana tekrar dönsek bence ikimizde çok mutluyduk Tarih:6 Kasım 2024`,
    media: [
 
   { type: "video", src: "videos/temizlik.mp4" },
      
    ]
  },



  {
    title: "Araba ve Karaokee",
    text: `Bugün senle aqua florya'ya gitmiştik sana araba aldığımız söylememiştim sürpriz yapmak istedim zar zor ailemden arabayı kaçırıp avmye geldik çokk acemiydim seni bekliyodum sende çıkmış gidiyodun döndürdüm falan çok saçmaydı sonra arabayı gördün kiraladım sanmıştım benim olduğunu söyleyince çok sevinmiştikk birlikte aqua florya ya gittik sana verdiğim bir söz vardı karaokeye kendi arabamızla gideceğiz diye ve o dönem hep gitmek istiyooduk ama ben verdiğim sözden dolayı erteleyip duruyordumm Allah'a şükür arabamızı aldık birlikte gittik şarkılar söyledik eğlendik şarkı videolarmız müzik sayfamızda var oraya da geçersin anılar bölümümüz bitince acele etmee :) senin için kocaman bir site yaptım hepsine bakmak için vaktin olacak seni çokk seviyorum iyi ki birlikte böyle bir gün yaşadıkk ve ertesi gün bana çok güzel bir sürpriz hazırlamıştın çok mutlu olmuştum teşekkür ederim tekrardan çok güzeldii Tarih:21 Kasım 2024`,
    media: [
 
   { type: "image", src: "images/florya.JPEG" },
    { type: "image", src: "images/florya1.JPEG" },
     { type: "image", src: "images/florya2.JPEG" },
      { type: "image", src: "images/florya3.JPEG" },
      
    ]
  },

{
    title: "Lunapark ",
    text: `Bugün seninle  ben garajda çalışıyoken zar zor buluşmuştuk mağazadan uzak kaldığım için seni çokkk özlemiştim buluşunca çok mutlu olmuştum hava aşşırı soğuktu belturda kahve içmiştik garson çok garipti ılık suyla kahve getirdi ben söylenince sen triplere girdin :):) çarpışan arabalara bindik zevkliydi 10da 10 bir gündü benim için teşekkür ederimm :)Tarih:1 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/avcılar.JPEG" },
    { type: "image", src: "images/avcılar2.JPEG" },

      
    ]
  },


{
    title: "Pandacıkk ",
    text: `Bugün sana tüm beceriksizliğimle yapmaya karar verdiğim pandacık kartını takdim etmiştim görünce çokkk mutlu oldunn o kadar sevineceğini bilsem daha önce yapardım uğraştırmıştı beenim gibi biri için zordu ama sonunda senin mutluluğun her şeyden öneemlii çok ponçiktiniz :)  )Tarih: 6 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/card.JPEG" },
    { type: "video", src: "videos/card1.MP4" },

      
    ]
  },



{
    title: "Tatlı alma işi ",
    text: `Bugünler benim biraz zor atlattığım günlerdi hasta olmuştum tabi iyileşmiş halim burda ama yine de belli ediyodu burak zorunlu tatlı aldırmıştı ben senle yemeyi tercih etmiştim çok güzeldi eğlenceliyidi zatenn seninle olan her şey çok güzel ve eğlencelii ponçikkk<3  )Tarih: 13-14 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/tatlı.JPEG" },
    { type: "image", src: "images/tatlı1.JPEG" },

      
    ]
  },



  

{
    title: "Fenerbahçe maçııı",
    text: `Bugün senile ilk maçımıza gittik (son değil) daha önce yaşamadığım duyguları yaşadığım bir gündü  atmosfer gerçekten değişik hissettirdi sen gidiyosun diye gitmiştim iyi ki de gitmişiz çok eğlendik diğer knkalarımız ve burak olmasaydı da olurdu ama neyse diyoruz ve en kısa zamanda başka bir maça gidiyoruz :)Tarih: 16 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/fb.JPEG" },
    { type: "image", src: "images/fb1.JPEG" },
 { type: "image", src: "images/fb2.JPEG" },
      
    ]
  },




{
    title: "Kar",
    text: `Bugünlerde kar yağıyodu ben de sana kar ile ilgili bir resim yapmayı düşünüyodum karlar'ın son dönemlerine gelinmişti sana resim yapamicam diye çok korkmuştum cuma'dan gelmiştim karlar erimişti hep arabaların üstünde tek tük vardı neyse bi tane buldum ve sana knkk bizim burda kar tutmuşş dedim sen tabi anlamadın ama sonra görünce çok mutlu olduğunu hissettim ve devamında hep karlar ile ilgili bişeyler yaptık çok eğlenceliydi ve bana kağıttan messi forması yapmıştın ilk gördüğümde şok oldum çok şaşırmıştım gerçekten beğendiğim bir çalışmaydı teşekkür ederimm 10 da 10 Tarih: 21 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/kar1.JPEG" },
    { type: "video", src: "videos/kar2.mp4" },
 
      
    ]
  },

{
    title: "Özsütt",
    text: `Bugün de sen ben ali takılmaya gitmiştik giderken park yeri sorunu mu dersin dönüşte yol kaçırmalar silsilesi mi dersinn her şey vardı lanet olsun :)  bir de benim yolda aşırı sıkışıp hamama  girme muhabbetim vardı güzel bi gündü  Tarih: 27 Şubat 2025`,
    media: [
 
   { type: "image", src: "images/bk1.JPEG" },
    
 
      
    ]
  },


  

{
    title: "Ve Ramazan Ayııı",
    text: `Off son yıllarda geçirdiğim enn güzel ay , sürekli mağaza dışı desteğe gitmem gerekiyordu ama biz yine bir yolunu bulup buluşmayı başarıyordukk ramazan ayı başlı başına çok güzeldi ilk iftarımızda ben depositeden gelmiştim kuleli durağında sana sarılınca seni gerçekten özlediğimi hissetmiştim benim bakırköy dürümcüsüne gitmiştikk  yer bulamadık ama bi şekilde hallettik o gün çok keyif aldığımız için tekrar tekrar buluşmak istedik neredeyse her fırsatta buluşuyoduk sen evde iftar yapamaaz olmuştun bu ayda çok fazla şey yaşadık  olaylı iftarlarr benim mdr ydrlik yavru pandacıkcıkımız p ledi ile şov yapma mor kalpli kartımız bakırköydeki iftarlarımız ve en güzeli mavi sofradaki iftarımız o güne ayrı parantez açıcam ve bu ayı da seninle bir sonraki buluşmamızda uzun uzun sohbetini edelim çünkü benim yazamayacağım kadar ve sitenin alamayacağı kadar çok ve harika anılarımız var inşallah bundan sonraki her ayımız böyle mutlu geçer ponçikkk 🤍💜<3 Tarih: 1-30 Mart 2025`,
    media: [
 
   { type: "image", src: "images/vb1.JPEG" },
     { type: "image", src: "images/vb2.JPEG" },
      { type: "image", src: "images/vb3.JPEG" },
       { type: "image", src: "images/vb4.JPEG" },
        { type: "image", src: "images/vb5.JPEG" },
         { type: "image", src: "images/vb6.JPEG" },
          { type: "image", src: "images/vb7.JPEG" },
           { type: "image", src: "images/vb8.JPEG" },
            { type: "image", src: "images/vb9.JPEG" },
             { type: "image", src: "images/vb10.JPEG" }
 

 
      
    ]
  },

{
    title: "Mavi Sofraa",
    text: `Bugün seninle izin günümüz aynıyı ve sizin orda geçirmeye karar vermiştikk sizin kapının önüne geldim zorlu yokuşları aşarak :) caminin orda beklerken aynadan seni görünce çok mutlu olmuştum Tarih: 19 Mart 2025`,
    media: [
 
   { type: "image", src: "images/mavi1.JPEG" },
   { type: "image", src: "images/mavi2.JPEG" },
    { type: "video", src: "videos/mavi3.MP4" },
 
      
    ]
  },





{
    title: "Son Gün",
    text: `Bugün işyerindeki son günümdüü benim için buruk bir anı geçirdiğimiz en duygusal gün olabilir önceki günün akşamı sana edit yaparken de duygulanmıştım yaşadığımız her şey gözlerimin önünden geçmişti off şu an düşününce bizim yaşadığımız şeylerin bi eşi benzeri yok çünkü senin de bildiğin gibi aynı yerde çalışan insanlar genelde iyi geçinemez kuyu kazmaya çalışırlar ama bizim ilişkimiz o kadar farklıydı ki en başında sonuna kadar birbirimize en ufak saygısızlık yapmadık neredeyse her zaman mutlu ,keyifliydik seninle birlikte çalışmak benim en büyük şanslarımdan biri o gün seninle pizza siparişi vermeye çalışmıştık son günümüzde de tartışmadan trip atmadan geçirememiştik ama arkada siparişi iptal etmeye çalışırken o kadar tatlıydın ki seni yiyecektim son günümüzün benim için özel bir anlamı da vardı binbir zorlukla saklamaya çalıştığım H harfinin sana teslim edilme günüydü onun olayı yaparken bunu sana işten çıktığım gün vericem dememdi ama o gün geldiğinde vermenin bu kadar zor olacağını tahmin edemedim senden ayrılırken çokk zorlandım daha önce hissetmediğim duygular hissettim ama bizim ilişkimizin mağazayla sınırlı olmadığını biliyodum o günümüz de böyle güzel ve duygusal geçmişti <3 Tarih: 30 Mart 2025`,
    media: [
 
   { type: "image", src: "images/son1.JPEG" },
   
   { type: "image", src: "images/son2.JPEG" },
    { type: "video", src: "videos/son.MP4" },
     { type: "video", src: "videos/sonn.MP4" },
 
      
    ]
  },



{
    title: "Defterr",
    text: `Bugün  askere gitmeden önceki sonn buluşmamızdı senden bir ay uzak kalacağım için içimin buruk olduğu bir gündü son kez bakırköye gitmiştik hediyeni vermen için sakin bir yer aradık ve bankımzı bulduk o bank artık bizim oldu ve özenle hazırladığın her bir detayı mükemmel düşündüğün ince ince işlediğin anı defterimizi benimle  buluşturdun inanılmazz mutlu olmuştum aldığım en güzel hediye olabilir ama diğer hediyelerine haksızlık etmek istemiyorum senin elinden çıkan her şey benim için çok değerli her şey için çokk teşekkür ederimm 🤍💜 Tarih: 3 Nisan 2025`,
    media: [
 
   { type: "image", src: "images/asker1.JPEG" },
      { type: "image", src: "images/asker2.JPEG" },
   { type: "image", src: "images/asker3.JPEG" },
 
 
      
    ]
  },





  {
    title: "Askerliğim ",
    text: `Ve sonunda askere gitme vaktim gelmişti sen beğenmesende bedelli olarak askerliğimi tamamladım askerlik dönemi çok garipti ya gitmeyen bilemez gerçekten askerlikte bazen çok eğlendim bazen çok zorlandım öyle böyle geçti askerliğin en güzel yanı akşamları seninle telefonlaşmak olmuştu birkaç günde bi arasan daa:) askerde sana sürprizler hazırlamaya çalışmıştım künyeni son gün son saate kadar alamamıştım çok korktum bir aksilik çıkacak diye neyseki yine her şey olması gerektiği gibi oldu askerde sni çokk özlemiştim buluşunca sarılmak için sabırsızlanıyordum of neyseki kavuşabildik şükürler olsunn🤍💜 Tarih: 5-30 Nisan 2025`,
    media: [
 
   { type: "image", src: "images/as.JPEG" },
   
   { type: "image", src: "images/ask2.JPEG" },
    { type: "video", src: "videos/as3.MP4" },
         
    ]
  },

   
  {
    title: "Doğum Günüm(Terhiss Şeklii) ",
    text: `Bugün benim için çok özel bir tarih çünkü hem terhis olduğum hem de doğduğum gündü o günü kendi kafamda biraz farklı tasarlamıştım sen bi anda bizim oraya gelmiştin şaşırmıştımm ilk kavuşma anımız istediğimiz gibi olmadı ama sonra telafisini ettik bana çok güzel hediyeler hazırlamıştın saatimi çok beğendim elime olmadı ama sonradan hallettik şimdi takmaya kıyamıyorum senin emametinn pandacığı annem özellikle çok sevdi benim de sana hediyelerim vardı bagaja gitme yapıp duruyodum hediye silsilesi yaşanmıştı çokk güzeldii gerçekten o güne geri dönmek isterim yine çok ponçik bir gündü teşekkür ederim emeklerin için🤍💜 Tarih: 1 Mayıs 2025`,
    media: [
  
    { type: "video", src: "videos/dgm.MP4" },
         
    ]
  },

    {
    title: "Beşiktaş'ta kaybolma işii",
    text: `Bugün seninle buluşma ayarlamıştık ama hava durumundan haberimiz yoktu çok yağmur bastırmıştı lanet olsunn zar zor gezebildikk magnolya ve trileçe yemiştik dönüşte yolumuzu kaybettirdiNN beşiktaşın öbür ucuna gittik yağmurda senle yürümek çok güzeldi romantikti seninle yapılan herhanngi bir şey bile çok güzel biliyosunn biraz yorulduk ama unutulmaz bir gün olduğu kessin🤍💜 Tarih: 10 Mayıs 2025`,
    media: [
  
      { type: "image", src: "images/bt.JPEG" },
         
    ]
  },





    {
    title: "Ve Adalarrr ",
    text: `Bugünn seninle dolu dolu geçireceğimiz ilk günümüzdü erken saatte buluşup adalar gitmeye çalışmıştık yine yolu kaçırdığımız bir gündü sen yolda başladın yok eser abi beni aramış yok maça gitmişim falan senin yüzünden yanlış durakta indik eser best ile de karşılaştık sen hemen dedin oo abim napıyon falan nası bi insansın yaa :)) neyse bi türlü gittik vardığımızda biraz geç olmuş olsa da seninle vapur yolculuğu çok güzeldii adalar çok renkliydi o günkü beyaz kombinin sana aşşırı yakışmıştı çok ponçiktin her yerinde fotoğraf çekmek istedik tepeye gitmeye  karar verdik tepeye giden yollarda gezdik tozduk yukarıya tırmanmaya çalışmak çok zordu dinlene dinlene çıktık yolda durup seninle şarkılar söyledik ve nihayetinde tepeye ulaştık manzarası inanılmazdı birlikte yemek yedik manzarasını izledik akşam olmaya başladı ve günbatımı için harika bir yer bulduk ilk kez günbatımını izlemiştik çok güzel anlardı ve dönüş vakti geldi dönüş yolunda bi türlü otobüs gelmemişti çok geç kalıcamızı düşünmüştük neyse vapur seferi başladı seninle olduğu için çok güzeldi ama bitmek bilmemişti indiğimizde de çok geç olmuştu eve baya geç gitmiştin ama benim için her şeyiyle 10da 10 bir gündü iyiki gittik diyorum ve bidahaki için sabırsızlanıyorum adalar'da beraber yaşama hayalleri kurduk inşallah ilerde gerçekleştirebiliriz seninle hep beraber olmak hayal gibi bişey olurdu seni çokk sevdiğimi biliyosun dimi🤍💜 Tarih: 15 Mayıs  2025`,
    media: [
 
   { type: "image", src: "images/ada.JPEG" },
    { type: "image", src: "images/ada1.JPEG" },
   { type: "image", src: "images/ada2.JPEG" },
    { type: "image", src: "images/ada3.JPEG" },
     { type: "image", src: "images/ada4.JPEG" },
      { type: "image", src: "images/ada6.JPEG" },
    { type: "video", src: "videos/ada5.MP4" },
         
    ]
  },


      {
    title: "Florya'da kaju ",
    text: `Bugün seninle florya'ya gitmiştik çok sakin ve güzel bir gündü saçlarım için ponçik ellerinle karışım hazırlamıştın eline sağlıkk çokk teşekkür ederim bi'tanesinn  ben de sana kas şov yapmıştım şov denmez aslında form check ti  birkaç ay sonraki ile karşılaştırmak için arkamızdaki çift bi türlü kalkmamıştı kavga çıkacaktı :) dönüşte marmaray'da karşına oturmuştum dışardan çok tatlı görünüyodunn iyi ki bu ponçikle beraberim of ne kadar şanslı bir insanım demiştim buguüne kadar yapmış olduğun her şey için ayrı ayrı çok teşekkür ederim bu kadar inanılmaz biri olduğun ve iyi insanların hala var olduğunu kanıtladığın için ayrıca teşekkür ediyorumm🤍💜 Tarih: 22 Mayıs 2025`,
    media: [
  
      { type: "image", src: "images/florys.JPEG" },
         
    ]
  },

      {
    title: "Kadıköy Moda(Aslında Beşiktaş:))",
    text: `Bugün seninle  yineee yol kaçırdığımız ve istemeden moda ya gittiğimiz bir gündü yolu bilerek kaçırdığımızı idda etseN de oraya gitmek değildi amacımız ama gittiğimiz sahil çokk güzeldii yolda sana küçük bir işyeri açma ve küçük bir köpekcik alma hayalleri kurduk bankta otururken sen bo ve sonunda farklı bir harf olan bi kelime söylemiştin neyse es geçiyoruz yemek yicez ayağına zurnacıya götürttün bizi yine yok kaana soriyim falann neyse yine geri dönüşümüz geç oldu ve sen gerçekten yorulmuştun seninle geçirdiğimiz mükemmel günlerden biri daha yaşanmıştı 🤍💜 Tarih: 29 Mayıs 2025`,
    media: [
  
      { type: "image", src: "images/moda1.JPEG" },
            { type: "video", src: "videos/moda.MP4" },
    ]
  },




      {
    title: "ve Bizim Arkadaşlığımız",
    text: `Off daha nice nice anılarımız var ama ben bu kadarını sığdırabildim eminim çok fazla atladığım anımız vardır çünkü anılarımız buraya kaydedemeyeğim kadar çok ve anlamlı.Şimdi bakıyorum da ne kadar şey yaşamışız be knkm her biri birbirinden güzel sevgi dolu eğlenceli komik sürpriz yani gerçekten şu anda anlatamiyacağım duygular yaşıyorum bugun senin doğum günün bu siteyi hazırlarken tüm tanışma hayatımız gözlerimin önünden geçiyor seninle tanıştığım için bu kadar özel şeyler yaşadığımız için kendimi çok şanslı hissediyorum benim için yaptığın en ufak bişey bile çok özel zaten senden bişey yapmanı beklemediğimi biliyosun sevgi bu tarz şeylerle ölçülemez bizim sevgi tanımımız herkesinkinden farklı bi'tanecik ponçiğimm seni çokk seviyorumm   🤍💜 Tarih: 26 Ocak-∞ `,
    media: [
  
      { type: "image", src: "images/bff.JPEG" },
            
    ]
  },


     {
    title: "Netflix'teki En Güzel Dizi",
    text: `Knkm  netflix kullandığına göre artık   yeni bi dizi başlamış ismi My Ponçik(Ponçiğim) hikayesi çok sürükleyici aynı iş yerinde çalışmaya başlayan iki arkadaş arasında geçiyor ama her bir bölümü her bir saniyesi çok anlamlı eğlenceli komik kısaca mükemmel izlemeni öneririm 🤍💜Seni herkesten ve her şeyden çokk seviyorum biliyosunn Tarih: 26 Ocak-∞ `,
    media: [
  
      { type: "video", src: "videos/netff.mp4" },
            
    ]
  },


     {
    title: "Ve sonn",
    text: `Knkm  Bugün dünyanın en önemli tarihi en azından benim için bugun için çok fazla emek verdiğm gecemi gündüzüme katıp bu siteyi hazırlamaya çalıştım sabahlara kadar çalıştığım projem buydu bu yüzden telefonumu biraz saklıyodum çünkü süprizinin kaçmasnı istemiyordum her bir noktasını kendi elimle yazdım oluşturdum yazılım alanında pek bilgim olmadığı için biraz zorlandım ama yaparken aşşırı keyiff aldım zamanın  nasıl geçtiğini anlamadım bir bakıyodum akşam olmuş gece olmuş farkında değildim çünkü seninle birlikteyken zaman çok hızlı geçerdi hep anılarımla da birlikte olduğunda öyle sitemiz çok kapsamlı her bir yerinde özel şeyler var incelerken acele etme buraya kadar geldiysen bana mesaj at ve birlikte gezintimize devam edelim olur mu ponçikk.İnşallah bugun geçireceğin en güzel gün olur ben bunun için elimden geleni yapacağım seni çokk seviyorum Tarih: 24 mayıs-6 Haziran `,
    media: [
  
      { type: "image", src: "images/sp.png" },
            
    ]
  },







];

const myRatings = [];
const pinarRatings = [];
const lowScoreWarnings = [
  "Ne yani anımız 10/10 değil miydi 🥹🥹",
   "Hadi ordann tekrar ver puanını ",
  "Knk bence 10/10'du ama sen bilirsin 🤍💜",
  "Paşaya bak hele anımızı beğenmiyor 😊",
   "Bensiz anılarına bin basar be knk :) ",
  "Tekrar puan ver istersenn 🥰",
  "Nee sana inanamıyorum beğenmedin demek hele hele",
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
    "Doğru karar 💯 Hadi sıradakine geçelim ponçik!",
    "10 verdin çünkü harika bir andı, dimi,evet? 😍",
    "Evet knk bence de 🤍💜",
    "1o vermekten başka şansın yok gibbi :)🤍💜",
    "Bayıldımm dediğini duyar gibiyimm"
  ];

  for (let i = 1; i <= 10; i++) {
    const star = document.createElement("span");
    star.innerHTML = "☆";
    star.style.margin = "0 3px";
    star.style.color = "gold";
    star.style.fontSize = "20px";
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
  "Doğum gününü beklediğim kadar hiçbişeyi beklemedim sanırım (bir de buluşurken seni:))",
  "Sürpriz diyince aklıma gelen tek şey sensin 💜🤍",
  "Bu kutu da fena değil ama senin hazırladığın kutu 🥹 10/10, gördüğüm en güzel kutuydu 💜🤍",
  "Ponçikliğin tanımı: sensin 💜🤍",
  "Bu kutudan çıkan her kalp, sana olan sevgimden bir parça 💫",
  "Yavru pandacığımı çoook seviyorum 💫",
  "Sıkıldın mıı 😏 (Böyle diyince gelen bayılma perileri 😵‍💫)",
  "Gözlerini kapat ve dilek tut... Tuttun mu? Söyle şimdi (içinden deme şimdi ama söylersem kabul olmaz🤫) 🎈",
  "Benim için en büyük sürpriz sensin 🥹💝"
];

const videoList = [
  "videos/esevgilim.MP4",
  "videos/yakiyor.mp4",
  "videos/netff.mp4",
  "videos/us.MOV",
  "videos/end.MOV",
  "videos/bruno.MOV",
  "videos/sensin.MOV",
  "videos/next.MOV",
  "videos/soru.MOV"
];

let currentMessageIndex = -1;
let typingInterval;
let shuffledVideos = [];
let currentVideoIndex = 0;
let heartsLaunched = false;

// Başta videoları karıştır
shuffleVideos();

function shuffleVideos() {
  shuffledVideos = [...videoList].sort(() => Math.random() - 0.5);
  currentVideoIndex = 0;
}

function openSurpriseBox() {
  const openSound = document.getElementById("boxOpenSound");
  const message = document.getElementById("surpriseMessage");
  const videoContainer = document.getElementById("surpriseVideoContainer");
  const surpriseVideo = document.getElementById("surpriseVideo");
  const giftHeartZone = document.getElementById("giftHeartZone");
  const nextBtn = document.getElementById("nextSurpriseBtn");

  // 🔊 Ses çal
  openSound.currentTime = 0;
  openSound.play();

  // 🎈 Kalpler sadece ilk seferde
  if (!heartsLaunched) {
    launchGiftHearts(giftHeartZone);
    heartsLaunched = true;
  }

  // 🔁 Aynı mesaj tekrar etmesin
  let newMessageIndex;
  do {
    newMessageIndex = Math.floor(Math.random() * surpriseMessages.length);
  } while (newMessageIndex === currentMessageIndex);
  currentMessageIndex = newMessageIndex;

  const text = surpriseMessages[newMessageIndex];

  // ✍️ Yazıyı efektle yaz
  clearInterval(typingInterval);
  typeWriterEffect(message, text, 40);

  // 🎥 Video sırayla oynat
  if (currentVideoIndex >= shuffledVideos.length) {
    shuffleVideos(); // tüm videolar gösterildiyse yeniden karıştır
  }
  const videoToPlay = shuffledVideos[currentVideoIndex];
  currentVideoIndex++;

  surpriseVideo.src = videoToPlay;
  videoContainer.style.display = "block";
  surpriseVideo.load();

  // 🎁 "Sonraki Sürpriz" butonunu göster
  nextBtn.style.display = "inline-block";

  // Düğmeye sadece **bir kere** event ekle
  nextBtn.onclick = () => openSurpriseBox();
}

// 🎞️ Yazı yazma efekti
function typeWriterEffect(container, text, speed = 40, callback = null) {
  container.innerHTML = "";
  container.style.display = "block";
  let index = 0;

  typingInterval = setInterval(() => {
    container.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, speed);
}

// 💜 Kalpler fırlatma animasyonu
function launchGiftHearts(container) {
  let heartInterval = setInterval(() => {
    const giftHeart = document.createElement("div");
    giftHeart.classList.add("gift-heart");
    giftHeart.classList.add(Math.random() > 0.5 ? "purple" : "white");
    giftHeart.style.left = `${Math.random() * 100}vw`;
    giftHeart.style.bottom = "0";
    container.appendChild(giftHeart);
    setTimeout(() => giftHeart.remove(), 2000);
  }, 150);

  setTimeout(() => clearInterval(heartInterval), 5000);
}


const uselessSites = [
  "https://heeeeeeeey.com/",
  "https://thatsthefinger.com/",
  "https://cant-not-tweet-this.com/",
  "https://eelslap.com/",
  "https://www.staggeringbeauty.com/",
  "https://smashthewalls.com/",
  "https://corndog.io/",
  "https://koalastothemax.com/",
  "https://www.patience-is-a-virtue.org/",
  "https://burymewithmymoney.com/",
  "https://www.fallingfalling.com/",
  "https://ducksarethebest.com/",
  "https://iamawesome.com/",
  "https://chrismckenzie.com/",
  "https://beesbeesbees.com/",
  "https://zoomquilt.org/",
  "https://endless.horse/",
  "https://www.trypap.com/",
  "https://checkboxrace.com/",
  "https://cat-bounce.com/",
  "https://weirdorconfusing.com/",
  "https://mondrianandme.com/",
  "https://www.rrrgggbbb.com/",
  "https://www.ismycomputeron.com/",
  "https://www.nouptime.com/",
  "https://pleasewaitfor.com/",
  "https://www.fishjs.dev/",
  "https://leekspin.com/",
  "https://corgiorgy.com/",
  "https://longdogechallenge.com/",
  "https://binarypiano.com/",
  "https://everydayim.com/",
  "https://www.hackertyper.net/",
  "https://pointerpointer.com/",
  "https://muchbetterthanthis.com/",
  "https://www.republiquedesmangues.fr/",
  "https://thezen.zone/",
  "https://onesquareminesweeper.com/",
  "https://buzzybuzz.biz/",
  "https://tencents.info/",
  "https://zombo.com/",
  "https://window-swap.com/",
  "https://radiooooo.com/",
  "https://ffffidget.com/",
  "https://findtheinvisiblecow.com/",
  "https://nyan.cat/",
  "https://screamintothevoid.com/",
  "https://paper-toilet.com/",
  "https://isitchristmas.com/",
  "https://electric-boogie-woogie.com/",
  "https://procatinator.com/",
  "https://boredbutton.com/",
  "https://everdreamthisman.com/",
  "https://passweird.com/",
  "https://youthatemannowdog.com/",
  "https://one-million-checkboxes.com/",
  "https://netdisaster.com/",
  "https://superbad.com/",
  "https://facesinplaces.blogspot.com/",
  "https://mackerelmediafish.com/"
];

let shownSites = [];

function goToRandomUselessSite() {
  if (shownSites.length === uselessSites.length) {
    // Tüm siteler gösterildi, listeyi sıfırla
    shownSites = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * uselessSites.length);
  } while (shownSites.includes(randomIndex));

  shownSites.push(randomIndex);
  window.open(uselessSites[randomIndex], "_blank");
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
