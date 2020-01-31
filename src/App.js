import React, {Component} from 'react';
import './App.css';

import Details from './Posts/Fizikciler/detailPost1.js';
import Detail2 from './Posts/Filozoflar/detailPost2.js';
import Detail6 from './Posts/Tarih/detailPost6.js';
import Detail7 from './Posts/Milyonerler/detailPost7.js';
import Detail8 from './Posts/Yazarlar/detailPost8.js';
import Freud from './Posts/Filozoflar/freud.js';
import Shakespeare from './Posts/Yazarlar/shakespeare.js';
import Maxwell from './Posts/Fizikciler/maxwell.js';
import Merkantilizm from './Posts/Tarih/merkantilizm.js';
import Marx from './Posts/Filozoflar/marx.js';
import Tolstoy from './Posts/Yazarlar/tolstoy.js';
import Tesla from './Posts/Fizikciler/tesla.js';
import Faraday from './Posts/Fizikciler/faraday.js';
import Kitty from './Posts/Psikoloji/Kitty.js';
import Capgras from './Posts/Psikoloji/capgars.js';
import Bill from './Posts/Milyonerler/bill.js';
import Alice from './Posts/Psikoloji/alice';
import Kierkegaard from './Posts/Filozoflar/kierkegaard.js';
import Dostoyevski from './Posts/Yazarlar/dostayevski.js';
import Newton from './Posts/Fizikciler/newton.js';
import Steve from './Posts/Milyonerler/steve.js';
import Nietzsche from './Posts/Filozoflar/niçe.js';
import Hawking from './Posts/Fizikciler/hawking.js';
import Einstein from './Posts/Fizikciler/einstein.js';
import Kant from './Posts/Filozoflar/Kant.js';

import Hakkımda from './Posts/Hakkımda/hakkımda.js';
import OlafHakkında from './Posts/Hakkımda/olafHakkında.js';

 

class Example extends Component {
  
  constructor(props) {
    super(props);





    this.state1 = {
      content : 
      `Romanları ve denemeleriyle tanınmış olmasına karşın kısa hikâyeler,
       şiir, gezi yazıları, film hikâyeleri ve senaryolar ile de uğraşmıştır. 
       En önemli eseri Cesur Yeni Dünya adındaki distopyasıdır. 
       `
      
      
      
    };
    this.state2 = {
      content : 
      `
        SpaceX' in kurucusu, PayPal ile Tesla Motors'un kurucu ortaklarındandır.
        SpaceX’te CEO ve baş tasarımcı; Tesla Motors’da başkan, CEO ve ürün tasarımcısı 
        olarak görev yapmaktadır. Musk aynı zamanda SolarCity’nin de başkanıdır.
      `
      
    };
    this.state3 = {
      content : 
      `
        Rönesans (Yeniden Doğuş), Orta Çağ ve Reformasyon arasındaki tarihi dönem olarak bilinir. 
        15 - 16. yüzyıl İtalya’sında batı ile klasik antikite (Eski Roma ve Yunan Eserlerinin incelenmesi) 
        arasında sanat, bilim, felsefe ve mimarlıkta bağın tekrar kurulmasını sağlayan, Antik Yunan filozof ve 
        bilim insanlarının çalışmalarının çeviri yoluyla alındığı, deneysel düşüncenin canlandığı, insan yaşamı 
        (hümanizm) üzerine yoğunlaşıldığı, matbaanın bulunmasıyla bilginin geniş kitlelerle paylaşımının arttığı 
        ve radikal değişimlerin yaşandığı dönemdir.
      `
    };
    this.state5 = {
      content : 
      `
        Analitik geometri, kartezyen koordinat sistemi, cebir gibi matematik alanlarında çalışmaları olan 
        Descartes şüpheci düşünme yöntemini temel almıştır. Descartes belki de en çok, Metot Üzerine Konuşma'nın 
        4. ve Felsefenin İlkeleri'nin 1. bölümlerinde geçen “cogito ergo sum (düşünüyorum öyleyse varım)” şeklindeki 
        felsefi cümlesiyle tanınır ki bu çıkarımı da şüphecilik yöntemi ile bulmuştur.
      `
    };
    this.state6 = {
      content : 
      `
        Richard Phillips Feynman 20. yüzyılın en önemli fizikçilerindendir. 
        Kuantum elektrodinamiği üzerindeki çalışmaları nedeniyle 1965'te Julian Schwinger ve 
        Sin-Itiro Tomonaga ile beraber Nobel Fizik Ödülüne layık görülmüştür.
        Henüz 16 yaşındayken türev ve integral hesabını tüm yönleriyle kavradı. 
        17 yaşında Rockway'den ayrılıp, lisans derecesini yapacağı MIT'e girdi. 
        Lisans derecesinden sonra ünlü Princeton Üniversitesi'ne kabul edildi.
      `
    };
    this.state7 = {
      content : 
      `
        Freud psikanalizin kurucusu olan Avusturyalı nörologtur. Bir psikoterapi tekniği olarak psikanaliz, 
        hastaların zihinsel süreçlerinin bilinçdışı unsurları arasındaki bağlantıları ortaya çıkarmaya çalışır.
        Bulduğu psikanaliz sayesinde geliştirilen edebi akım olan Sürrealizmin kurucusu sayılmaktadır.
      `
    };
    this.state8 = {
      content : 
      `
        İngiliz şair, oyun yazarı ve oyuncudur. Bir döneme ait değil tüm dönmelere ait olan eserler vermiştir. 
        Hamlet, Macbeth, Kral Lear, Otello, Romeo ve Juliet gibi eserleriyle tanınır. Belki de çoğu kişi Shakespeare'i 
        Hamlet oyununda geçen "Olmak ya da olmamak işte bütün mesele bu ..." ile başlayan tiradı ile tanımaktadır.
      `
    };
    this.state9 = {
      content : 
      `
        İskoç teorik fizikçi ve matematikçidir. 
        En önemli başarısı klasik elektromanyetik teorisinde daha önceden birbirleriyle ilişkisiz olarak gözüken 
        elektrik ve manyetizmanın aynı şey olduğunu kendisine ait olan Maxwell Denklemleri'yle ispatlamıştır.
        Maxwell'in elektromanyetik alandaki çalışmaları, birincisi Isaac Newton tarafından gerçekleştirilmiş, 
        "fizikteki ikinci büyük birleşme" olarak isimlendirilir.
        Adı az anılmasına rağmen en önemli bilim insanlarından biridir.
      `
    };
    this.state10 = {
      content : 
      `
        Coğrafi Keşifler ile değişen zenginlik kavramı bu sınıfın oluşmasına neden olmuştur. Önceden toprak 
        zenginliğin kaynağı sayılırken Coğrafi Keşiflerden sonra gümüş ve altının zenginlik kaynağı sayılmasıyla 
        burjuva sınıfı gelişmiş, burjuva sınıfı içinde gelişen Mesen sınıfı Rönesans'ın yayılmasına yardım etmiş, 
        sanayi devrimi ve tekelleşme çabaları Kapitalizmin doğmasına neden olmuştur. Sanayi Devrimi ile oluşan 
        işçi sınıfını savunmak amacıyla sosyalizm fikrinin doğmasında da etkilidir denebilir.

      `
    };
    this.state11 = {
      content : 
      `
        
      Marx'ın ekonomi alanındaki çalışmaları, günümüzde emeği, emek-sermaye ilişkisini ve bunları takip eden 
      ekonomi düşüncesini kavramanın büyük bir kısmı için temel oluşturdu. Sosyoloji ve sosyal bilimleri 
      başlatan isimlerdendir. En bilinenleri Komünist Manifesto ve Kapital olmak üzere hayatı boyunca 
      sayısız kitap yayımladı. Karl Marks hakkında en fazla eser yazılan kişiler listesinde ilk sırada 
      yer almaktadır.

      `
    };
    this.state12 = {
      content : 
      `
        Zengin bir ailenin çocuğu olarak Rusya'nın Tula şehrindeki Yasnaya Polyana adlı konakta doğdu. 
        Çok küçük yaşlarında önce annesini, sonra babasını kaybetti, yakınlarının elinde büyüdü. 
        Çocukluğundan beri gerçekleri incelemeye karşı büyük bir ilgisi vardı. Orduya katıldığında Kafkasya'ya gitti 
        Kafkas halkının yoksulluk dolu yaşayışlarını ele aldığı izlenimlerle ilk gerçekçi hikâyelerini yazdı.
        urduna dönüşünde yine Yasnaya-Polyana'ya yerleşti. Asalet unvanlarından, lüksten sıkılıyordu. 
        Köyünde bir okul kurdu. Bu okul, öğrenim ve eğitim bakımından yepyeni bir kurumdu.

      `
    };
    this.state13 = {
      content : 
      `
        Sırp kökenli Amerikalı mucit, elektrik mühendisi, makine mühendisi ve fütürist. 
        Patentini alabileceği ve pazarlayabileceği icatlar geliştirmeye çalışan Tesla, 
        mekanik osilatörler/jeneratörler, elektriksel deşarj tüpleri ve erken X-ışını görüntüleme ile ilgili 
        çeşitli deneyler yaptı. Ayrıca ilk sergilenenlerden biri olan kablosuz kumandalı bir tekne icat etti.

      `
    };
    this.state14 = {
      content : 
      `
        Elektromanyetik indüklemeyi, manyetik alanın ışığın kutuplanma düzlemini döndürdüğünü buldu. 
        Elektrolizin temel ilkelerini belirledi. Klor gazını sıvılaştırmayı başaran ilk kişidir ve 
        elektrik motorunu icat etmiştir. Okumaması sebebiyle kuramsal çalışma yapamadı fakat yaptığı deneyler 
        sayesinde kendinden sonra gelen fizikçilere konu olmayı başardı. Yaptığı deneyerdeki bulgularıyla 
        fizğin gelişmesinde çok büyük katkıları vardır.

      `
    };
    this.state15 = {
      content : 
      `
      1964 yılında Newyok şehrinde akşam üstü Kitty Genovese isimli bir kadın çok da ıssız olmayan bir caddede cinayete kurban gider.
      Bu olayda ilginç olan şudur: Kadına saldıran şahıs dakikalarca kadına tecavüz etmeye çalışır, başaramayınca darp eder öldürmeye çalışır. 
      Kadını yaralı halde bırakır. Bir süre sonra tekrar gelir ve kadını öldürür. Bir saat boyunca zavallı kadın çığlıklar atarak yardım istemiştir.

      `
    };
    this.state16 = {
      content : 
      `
        Capgras sendromu en kısa tanımıyla tanıdık kişilerin yerine, onlara çok benzeyen sahtekarların 
        geçmiş olduğuna dair sanrılarla karakterize bir sendromdur. Bu sendrom nadir olarak görülür 
        ve daha çok şizofreni kavramı içinde yer alır. Sanrısal Yanlış Tanıma olarak da geçer.

      `
    };
    this.state17 = {
      content : 
      `
        avukat bir babayla öğretmen bir annenin oğlu olarak dünyaya gelen Gates, henüz on iki yaşındayken 
        özel bir okulda ilk informatik (bilişim) kurslarına gitti. Okul arkadaşı Paul Allen ile birlikte 
        boş zamanlarını çoğunlukla bilgisayar yazılımları üzerinde çalışarak geçiriyordu.
        Yakınlarındaki bir şirketin büyük bilgisayarını para ödemeden kullanabilmek için, 
        iki arkadaş kullanıcılar için yazılım hatalarını arayıp buluyorlardı. Bu şekilde bilgisayar konusunda 
        uzmanlaşan öğrenciler, 1972'de ilk şirketlerini (Traf-O-Data) kurdular. 
        Bu şirket bir trafik sayım ve kontrol sistemi için yazılımlar üreterek hemen 20.000 dolarlık satış yaptı.

      `
    };
    this.state18 = {
      content : 
      `
        Alice Harikalar Diyarında Sendromu, vücut ve cisim algısında meydana gelen bozulmaların gözlemlendiği bir 
        sendromdur. Bu sendroma sahip kişiler, nesneleri olduğundan daha büyük veya daha küçük, 
        olduklarından daha uzak ya da daha yakın algılayabilir ve işitsel bozukluklar yaşayabilirler.

      `
    };
    this.state21 = {
      content : 
      `
        Kierkegaard dindar babasının etkisiyle din eğitimi alarak ve katı bir dini atmosfer içinde yetişti.
        Kendisi de dinsel düşünceleri olan birisi olmakla birlikte sürekli din adamlarıyla, kurumlarıyla ve 
        düşünceleriyle çatışma halinde oldu. Mevcut Hıristiyanlığın yozlaşmış olduğunu ileri sürdü ve Hıristiyan 
        inancının tamamen yenilenmesine yönelik eleştiriler geliştirdi. Kierkegaard, din ve Tanrı'yı tamamen 
        bireysel bir konu olarak değerlendirdi. Bu yönde giderek sistematik felsefenin bireyi göz ardı eden 
        bütüncüllüğünü de reddetti. Felsefesinde bireyi merkeze aldı.

      `
    };
    this.state22 = {
      content : 
      `
        Çocukluğu sarhoş bir baba ve hasta bir anne arasında geçiren Dostoyevski, annesinin ölümünden sonra 
        Petersburg'daki Mühendis Okulu'na girdi. Babasının ölüm haberini burada aldı. Okulu başarıyla bitirdikten 
        onra İstihkâm Müdürlüğü'ne girdi. Bir yıl sonra istifa ederek buradan ayrıldı. Ordudan ayrıldıktan sonra 
        edebiyata yönelen Dostoyevski'nin ilk kitabı İnsancıklar, 1846 yılında yayımlandı.

      `
    };
    this.state23 = {
      content : 
      `
        1687’de yayınlanan kitabı Philosophiæ Naturalis Principia Mathematica, klasik mekaniğin temelini atmıştır 
        ve tarihin en önemli bilimsel kitaplarından biri olmuştur. Bu çalışmasında Newton evrensel kütle çekimini 
        ve hareketin üç kanununu ortaya koymuş ve sonraki üç yüzyıl boyunca bu bakış açısı bilim dünyasına 
        egemen olmuştur. Newton dünyadaki nesnelerin hareketleri ile gökyüzündeki nesnelerin aynı doğal yasalar 
        ile yönetildiklerini kendi kütle çekim kanunu ile Kepler’in gezegen hareketleri kanunu arasındaki 
        tutarlılıklar ile göstermiştir. Newton ilk yansıtmalı teleskobu geliştirmiş, beyaz ışığın bir prizmaya 
        tutulduğunda farklı renklerden bir tayf yapması gözlemi sonucu bir renk kuramı oluşturmuştur.

      `
    };
    this.state24 = {
      content : 
      `
        Apple Computer Inc.'ın kurucu ortaklarından biridir. Ölümünden 5 hafta öncesine kadar Apple Inc.de 
        CEO olarak görev yapmıştır. Bilgisayar endüstrisinin önderlerinden olarak kabul edilir. 
        Next Computer ve Pixar Animasyon Stüdyoları'nı da kurmuş ve yönetim kurulu başkanlığını yapmıştır.

      `
    };
    this.state25 = {
      content : 
      `
        Nietzsche; Alman filolog, filozof, kültür eleştirmeni, şair ve besteci. 
        Din, ahlak, modern kültür, felsefe ve bilim üzerine metafor, ironi ve aforizma dolu bir üslupla 
        eleştirel yazılar yazmıştır.

      `
    };
    this.state26 = {
      content : 
      `
        Hawking insanların 100 yıl içerisinde dünyayı terk etmesi ve farklı dünyalarda koloniler kurması 
        gerektiğini söylemiştir. Hawking'e göre insanlar koloni kuramazlarsa hayatta kalamayacaktır. Aynı zamanda 
        zaman yolculuklarına ve uzaylıların varlığına da inanmıştır. Daha çok karadelikler konusundaki görüşleri
        ile tanınmaktadır.

      `
    };
    this.state27 = {
      content : 
      `
        Özel Görelilik Kuramı, Genel Görrelilik Kuramı, Kütle-Enerji Eşitliği, Fotoelektrik Etki, Brown Hareketi ve 
        İstatistiksel Fizik, Bose-Einstein İstatistiği, Kuantum Fiziği ve belirsizlik İlkesi, Kozmoloji ve Birleşik 
        Alan Kuramı hakkında Çalışmalar yapmıştır. Belirsizlik İlkesi'ne karşı bir tutum izlemiş ve geleneksel 
        fiziği savunmuştur. Einstein sonradan belirsizlik ilkesini çürütmeye çalışmaktan vazgeçmiş ve kuantum mekaniğinin 
        fiziksel gerçekliği anlatmakta yetersizliği fikrini savunmaya başlamıştır."

      `
    };
    this.state28 = {
      content : 
      `
        Kant, eleştirel felsefenin babası olarak kabul edilir. Alman felsefesinin kurucu isimlerinden biri 
        olmuş ve felsefe tarihinin kendisinden sonraki dönemini belirleyici olarak etkilemiştir.
        O, felsefedeki ilk ve temel misyonunun bilimi temellendirmek, daha sonra da ahlakın 
        ve dinin rasyonelliğini savunmak olduğuna inanmıştır.                        
        "iki şey, düşünce sık sık ve derin bir biçimde onlarla meşgul olunca, ruhu hep yeni kalan ve 
        gittikçe artan bir hayranlıkla dolduruyor: üzerimdeki yıldızlı gök ve içimdeki ahlak yasası." mezar
        taşında yazmaktadır.

      `
    };








    
    this.state = {
      tumu : "Tümü",


        all : true,
        filozof : false,
        fizikci : false,
        lider : false,
        yazar : false,
        tarih : false,
        milyoner : false,
        psikoloji : false,
      };


    this.secButtonAll = this.secButtonAll.bind(this);
    this.secButtonFil = this.secButtonFil.bind(this);
    this.secButtonFiz = this.secButtonFiz.bind(this);
    this.secButtonTar = this.secButtonTar.bind(this);
    this.secButtonMil = this.secButtonMil.bind(this);
    this.secButtonYaz = this.secButtonYaz.bind(this);
    this.secButtonPsi = this.secButtonPsi.bind(this);
    
  }

  secButtonAll() {
    this.setState({
      all: true,
      filozof : false,
      fizikci : false,
      yazar : false,
      tarih : false,
      milyoner : false,
      psikoloji : false,
      tumu: "Tümü",
    })
  }
  secButtonFiz() {
    this.setState({
      all: false,
      filozof : false,
      fizikci : true,
      yazar : false,
      tarih : false,
      milyoner : false,
      psikoloji : false,
      tumu: "Fizikçiler",
    })
  }
  secButtonFil() {
    this.setState({
      all: false,
      filozof : true,
      fizikci : false,
      yazar : false,
      tarih : false,
      milyoner : false,
      psikoloji : false,
      tumu: "Filozoflar",
    })
  }
  secButtonPsi() {
    this.setState({
      all: false,
      filozof : false,
      fizikci : false,
      yazar : false,
      tarih : false,
      milyoner : false,
      psikoloji : true,
      tumu: "Psikoloji",
    })
  }
  secButtonTar() {
    this.setState({
      all: false,
      filozof : false,
      fizikci : false,
      yazar : false,
      tarih : true,
      milyoner : false,
      psikoloji : false,
      tumu: "Tarih",
    })
  }
  secButtonMil() {
    this.setState({
      all: false,
      filozof : false,
      fizikci : false,
      yazar : false,
      tarih : false,
      milyoner : true,
      psikoloji : false,
      tumu: "Milyonerler",
    })
  }
  secButtonYaz() {
    this.setState({
      all: false,
      filozof : false,
      fizikci : false,
      yazar : true,
      tarih : false,
      milyoner : false,
      psikoloji : false,
      tumu: "Yazarlar",
    })
  }
  
  shoot() {
    alert(`Bu Özellik Geliştiricim Tarafından Yakında Getirilecektir
               Sabrınız İçin Teşekkürler
      Ümit Verip De Yapmadığı İçin Kendisi Adına Özür Dilerim
                                          -Olaf    [ ''__'' ]`)
    
  }
  touchMe() {
    alert(`
    hıhıhıhıhıhıhıhıh Gıdıklandım!
    Beni Sevdiğiniz İçin Teşekkürler Sayın Kullanıcı. Geliştiricim Beni Hiç 
    Sevmez Bana Çok Kötü Davranır.  
    Beni Bir Daha Sever Misiniz?
                                          -Olaf    [ ^__^ ]`)
    
  }
  content() {
    alert(`
      Üzgünüm Sürekli Hata Verdiğim İçin Geliştiricim Bu Özelliği
      Yapamadı Fakat Context Api Ve ES6 Öğrendikten Sonra Hem Takip
      Hem Yorum Butonu Getirecek. Umarım Bana Bir Daha Sinirlenmez 
                                           -Olaf      [ ''__'' ]
    `)
  }
  


  render(){

    
    window.onscroll = function() {
    
      if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("top-bar").style.top = "-75px";
        document.getElementById("second-top-bar").style.top = "0px";
      } else {
        document.getElementById("top-bar").style.top = "0px";
        document.getElementById("second-top-bar").style.top = "-75px";
      }
      
    }


    return (
    
    
      <header className = "blog">

        <div className="media-top-bar-2">
        <a className="media-top-bar-title-2">🔰O<span className="style-media">LAF</span> A<span className="style">kademi</span>🔰</a>
          <div className="dropdown-media">
            <button className="dropbtn-media">🔽</button>
            <div className="dropdown-content">
              <button className="secButton" onClick={this.secButtonAll}>Tümü</button>
              <button className="secButton" onClick={this.secButtonFiz}>Fizikçiler</button>
              <button className="secButton" onClick={this.secButtonFil}>Filozoflar</button>
              <button className="secButton" onClick={this.secButtonPsi}>Psikoloji</button>
              <button className="secButton" onClick={this.secButtonTar}>Tarih</button>
              <button className="secButton" onClick={this.secButtonMil}>Milyonerler</button>
              <button className="secButton" onClick={this.secButtonYaz}>Yazarlar</button>
              <Hakkımda/>
              <OlafHakkında/>
            </div>
          </div>
        </div>

        <div className="media-top-bar-1">
          <a className="media-top-bar-title">🔰O<span className="style">LAF</span> A<span className="style">kademi</span>🔰</a>
          <div className="dropdown">
            <button className="dropbtn">🔽</button>
            <div className="dropdown-content">
              <button className="secButton" onClick={this.secButtonAll}>Tümü</button>
              <button className="secButton" onClick={this.secButtonFiz}>Fizikçiler</button>
              <button className="secButton" onClick={this.secButtonFil}>Filozoflar</button>
              <button className="secButton" onClick={this.secButtonPsi}>Psikoloji</button>
              <button className="secButton" onClick={this.secButtonTar}>Tarih</button>
              <button className="secButton" onClick={this.secButtonMil}>Milyonerler</button>
              <button className="secButton" onClick={this.secButtonYaz}>Yazarlar</button>
              <Hakkımda/>
              <OlafHakkında/>
            </div>
          </div>
        </div>

        <div className="second-top-bar" id="second-top-bar">
          <div className="round"></div>
          <span className="title">OLAF AKADEMİ</span>
          <button onClick={this.shoot} className="follow">Takip Et</button>
        </div>
        
        <div className="top-bar" id="top-bar">
          <div className="rounds">
            <div className="round-i"></div>
            <div className="round-ii"></div>
            <div className="round-iii"></div>
          </div>
        </div>

        
        <div className="tasiyici-icerik">
          <div className="left-cract" id="icerik">
            <h1>OLAF AKADEMİ</h1>
            <button className="followers" onClick={this.shoot}>Takip Et</button><br/>
            <button className="support" onClick={this.touchMe}>Olaf'ı Sev</button><br/>
            <button className="comment" onClick={this.content}>Yorum Yap</button>
            <div className="nav">
              <div className="nav1"><button className="secButton" onClick={this.secButtonAll}>Tümü</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonFiz}>Fizikçiler</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonFil}>Filozoflar</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonPsi}>Psikoloji</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonTar}>Tarih</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonMil}>Milyonerler</button></div>
              <div className="nav1"><button className="secButton" onClick={this.secButtonYaz}>Yazarlar</button></div>
              <div className="nav1"><Hakkımda/></div>            
              <div className="nav1"><OlafHakkında/></div>            
            </div>
          </div>
          <div className="right-cract" id="icerik">

            <h2 className="right-cract-title">{this.state.tumu}</h2>
            <hr/>

            
            





            {this.state.all || this.state.filozof ? 
            <div className="icerik1">
              <img src="kant.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Kant/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state28.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="einstein.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Einstein/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state27.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="hawking.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Hawking/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state26.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.filozof ? 
            <div className="icerik1">
              <img src="nietzsche.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Nietzsche/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state25.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.milyoner ? 
            <div className="icerik1">
              <img src="steve.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Steve/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state24.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="newton.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Newton/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state23.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.yazar ? 
            <div className="icerik1">
              <img src="dostoyevski.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Dostoyevski/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state22.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.filozof ? 
            <div className="icerik1">
              <img src="kierkegaard.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Kierkegaard/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state21.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.psikoloji ? 
            <div className="icerik1">
              <img src="alice.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Alice/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state18.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.milyoner ? 
            <div className="icerik1">
              <img src="bill.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Bill/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state17.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.psikoloji ? 
            <div className="icerik1">
              <img src="capgras.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Capgras/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state16.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.psikoloji ? 
            <div className="icerik1">
              <img src="kitty.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Kitty/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state15.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="faraday.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Faraday/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state14.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="tesla.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Tesla/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state13.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.yazar ? 
            <div className="icerik1">
              <img src="tolstoy.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Tolstoy/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state12.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.filozof ? 
            <div className="icerik1">
              <img src="marx.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Marx/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state11.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.tarih ? 
            <div className="icerik1">
              <img src="merkantilizm.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Merkantilizm/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state10.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ? 
            <div className="icerik1">
              <img src="maxwell.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Maxwell/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state9.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.yazar ? 
            <div className="icerik1">
              <img src="shakespeare.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Shakespeare/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state8.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.filozof || this.state.psikoloji ? 
            <div className="icerik1">
              <img src="freud.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Freud/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state7.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }
            {this.state.all || this.state.fizikci ?
          <div className="icerik1">
              <img src="feynman.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Details/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state6.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null 
           }
          {this.state.all || this.state.filozof ?
            <div className="icerik1">
              <img src="DESCARTES.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Detail2/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state5.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
          }
          
         

          

            {this.state.all || this.state.tarih ? 
            <div className="icerik1">
              <img src="ronesans.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Detail6/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state3.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
          }
          {this.state.all || this.state.milyoner ?
            <div className="icerik1">
              <img src="musk.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Detail7/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state2.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }

            {this.state.all || this.state.yazar ? 
            <div className="icerik1">
              <img src="huxley.jpg" className="resimIcerik1"></img>
              <div className="bilgi1">
                <div className="header1">
                  <Detail8/>
                </div>
                <div className="haber-icerik">
                  <p>{this.state1.content}</p>
                  <p className="e">---Daha fazlası için başlığa basınız.</p>
                </div>
              </div>
            </div> : null
            }




















          




  
          </div>
        </div>
  
        
  
      </header>
      
    );
    
  }
  
  

  
  
  
  
}

export default Example;
