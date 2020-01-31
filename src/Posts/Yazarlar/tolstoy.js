import React, {Component} from 'react';
import '../Hakkımda/hakkımda.css';
import '../detailPosts.css';

class Detail extends Component {
        constructor(props){
                super(props);
                this.state ={
                    button: false
                }
                this.bas = this.bas.bind(this);
                this.close = this.close.bind(this);
        }
        bas(){
                //alert("Basıldı");
                this.setState({
                button: true
                });
        }
        close(){
                this.setState({
                    button: false
                });
        }
    render(){
        
    return (
        <header>
            <button className="link1" onClick={this.bas}>İnsan Neyle Yaşar? : Lev Tolstoy</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Lev Tolstoy</h2></div>
                        <p className="a">
                            İşte sana güzel bir soru sevgi okuyucu. İnasan neyle yaşar? Sadece bu da değil. Bir insanın 
                            ne kadar toprağa ihtiyacı vardır? Eğer kitaplarını okumamışsan bu soruları biraz düşün sevgili
                            okuyucu. Ben de sana hayatından bahsedeyim.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Bir insan acı duyarsa canlıdır. Başkasının acısını duyarsa insandır."
                            </p>
                        </span>
                        <p className="a">
                            Tolstoy çoğu kalemi güçlü yazardan farklı olarak zengin bir ailenin çocuğuydu, ama daha küçük yaşta annesini 
                            ve babasını kaybetti. Çocukluğundan beri incelemeye karşı büyük ilgisi olan Tolstoy Fransızca öğrendi ve Voltaire ile
                            Rousseau'dan etkilendi. Birsüre sonra orduya girdi ve Kafkasya'ya gönderildi. İncelemeyi seven ünlü yazarımız 
                            Kafkaslardaki yoksul halkın yaşayışını inceleyerek çeşitli hikayeler yazdı. Kırım Savaşı'na subay olarak gönderildikten 
                            sonra ordudan ayrılıp Petersburg'a gitti. Bazı eserlerini burada yazdı. -Bu arada ilk eseri olan Çocukluğum'u
                            orduya katılmadan önce yazmıştı.- Avrupa ülkelerine gezintiye çıktı ve ülkesine döndüğünde doğduğu yer olan 
                            Yasnaya-Polyana'ya yerleşti. Asalet unvanlarından, lüksten sıkılıyordu. Köyünde bir okul kurdu. Bu okul, öğrenim ve 
                            eğitim bakımından yepyeni bir kurumdu. Huzura kavuştuğuna kanaat getirdikten sonra, 1862'de evlendi. 
                            Tolstoy evlendiğinde karısı Sophie Behrs 16 yaşında idi. Bu evlilik onun düzenli bir hayat özlemini giderecekti. 
                            Bu evlilikten 12 çocukları oldu; bu çocuklardan 5'i öldü. Eserlerinden en kuvvetli olan iki romanı 
                            "Savaş ve Barış" ile "Anna Karenina'yı" bu dönemde yazdı. Karısı, eserlerini yazmasında en büyük 
                            yardımcısıydı. Hatta "Savaş ve Barış"ın düzeltmelerini 12 kez yapıp yazmıştır. Aradan bir süre geçince 
                            yeniden, bu sefer eskilerden daha şiddetli bir moral çöküntüsüne uğradı. Geniş halk yığınlarının, özellikle 
                            Rus köylüsünün yoksul, perişan durumu onu çok üzüyordu. Bütün servetini köylülere dağıttı, her haliyle onlar 
                            gibi yaşamaya başladı. Kaba saba giyiniyor, giydiği her elbiseyi kendisi dikiyordu. Değişmeyen tek tarafı 
                            bıkıp usanmadan yazmasıydı. "Kroyçer Sonat", "Efendi ile Uşak", "Karanlıkların Gücü", "İman nedir", 
                            "İnciler", "Kilise ve Devlet", "İtiraflarım" hep bu yılların ürünleridir.
                        </p>
                        <p className="a">
                            Tolstoy, yaşam felsefesi olan biriydi. Halkın içinden biriydi en başta. Eserlerinde insanlığın çeşitli 
                            meselelerine değinen Tolstoy'un dünya ölçüsünde bir sanat ve fikir değeri vardır. Kendi ülkesinin toplumsal 
                            siyasal çalkantılarını, halkının yaradılışını, yaşayışını büyük bir ustalıkla yansıtmıştır. Gerçekçi edebiyatın 
                            en büyük temsilcilerinden olduğu kadar, bir filozof ve bir eğitimci olarak da ün kazanmıştı.
                        </p>
                        <img className="alice-1" src="tolstoy-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Bir insanın değeri bayağı kesire benzer: Pay gerçek değerini gösterir, payda kendisini ne zannettiğini. 
                                Paydanın değeri arttıkça kesrin değeri azalır."
                            </p>
                        </span>
                        <p className="a">
                            İnsan neyle yaşar düşündün mü sevgili okuyucu? Ya da İnsana ne kadar toprak gerekir? Bu sorular Tolstoy'un da 
                            aklına takılmış olacak ki bu iki soru hakkında eser vermiştir. Sevgili okuyucumuz isterseler İnsan Neyle Yaşar?
                            sorusu ve hikayesi ile başlamak istiyorum.
                        </p>
                        <span className="kant">
                            <p>
                                "Tüm muhteşem hikayeler iki şekilde başlar: Ya bir insan bir yolculuğa çıkar; ya da şehre bir yabancı gelir."
                            </p>
                        </span>
                        <p className="a">
                            Bu hikayesinde Tolstoy bir kunduracıyı konu edinir. Baş karakterin adı Simon. Parasız biri ama alacaklı da.
                            Zaten hikaye de Simon'un birkaç yıldır mont almak için para biriktirdiğini, eşinden aldığı üç ruble ve alacaklı olarak da
                            borç vermiş olduğu 5 rubleyi birleştirerek bir mont almaya çalışması ile başlıyor. Neyse konuya dönelim. Her muhteşem
                            hikayede olduğu gibi bu hikayede de şehre bir yabancı geliyor. Bu yabancıyı Simon yolda giderken kenarıda yere
                            yatmış halde buluyor ve ona yardım ederek hikaye başlıyor. Simon yabancıya(adı Michael) yemek verip, ona kundura
                            yapmayı öğretiyor. Michael kundura yapmakta çok başarılı olduğunu görn Simon'un işleri genişlemeye başlıyor.
                            Spoiler vermek istemem veya okumuşsan canını sıkmak istemiyor ve sadade geliyorum. Yabancı Simon'a Tanrı tarafından
                            dünyaya gönderildiğini ve gönderilme sebebinin ise 3 hakikati öğrenip cennete gitmek olduğunu söylüyor. Bu üç hakikat
                            şunlar: İnsanın içinde ne vardır? İnsana ne verilmemeiştir? ve İnsan Neyle Yaşar?
                            Sonuç olarak soruların cevabı şunlardı: 
                        </p>
                        <ul>
                            <li>
                                İnsanın İçinde Ne vardır : Sevgi!
                            </li>
                            <li>
                                İnsana Ne Verilmemeiştir : Kendi İhtiyaçlarının Ne Olduğu.
                            </li>
                            <li>
                                İnsan Neyle Yaşar : Sevgi!
                            </li>
                        </ul>
                        <img className="alice-1" src="tolstoy-2.jpg"></img>
                        <p className="a">
                            İnsna Neyle Yaşar'ı anladığını düşünerek İnsan Ne Kadar Toprağa İhtiyaç Duyar'a geçiyorum.
                            Önce hikayeyi anlatayım: Baş karakterimiz Pahom. Bir gün her muhteşem hikayede olduğu gibi bir yabancı Pahom'un
                            arazisine geliyor ve Başkırları anlatmaya başlıyor. Başkırların geniş ve verimli toprakları olduğunu ve hiç para
                            ödemeden bu toprakara sahip olabileceğinden bahsediyor. Buna gözü dönen Pahom yola koyuluyor ve toprak almak için
                            Başkırlara danışıyor. Başkırlar onun ne kadar toprak alacağını Pahom'a bırakıyor ve bir oyun oynayacaklarını 
                            söylüyorlar. Gün doğumundan batımına kadar etrafını çizdiğin arazi senindir diyorlar. Pahom gün doğumu ile başlıyor
                            yürümeye, gidiyor da gidiyor. Daha günün yarısına geldiğinde başladığı noktayı göremeyecek kadar uzaklaşıyor.
                            Sonrasında acıkıyor ve yemek yiyip dinlenme kararı alıyor. Dinlenirken uyumaktan çok korkuyordu ve hemen ilerlemeye tekrar başlıyor.
                            İlerlemeyi yeterli bulduğunda ise sola dönüp, oradan ilerlemeye başlıyor, gidiyor da gidiyor. En son güneşe bakıyor ve
                            gördüğü şey konusunda dehşete kapılıyor. Gün batmak üzere ve merkeze 15 kilometre uzakta. Bir anda koşmaya başlıyor Pahom. 
                            Ölümüne koşuyor Pahom, kan ter içinde kalıyor. Neyse ki güneş batmadan yetişiyor merkeze. Ama bir sorun var. Başkırların yanına geldiği gibi 
                            yere atıyor kendini. Nefessiz kalmış Pahom'u kaldırdıklarında ağızından kan akıyordu. Pahom ölmüştü.
                            Pahom'u Başkırların yanına getiren adam Pahom'un küreğini aldı ve Pahom'un sığabileceği kadar mezar kazdı.
                            Pahom'un ihtiyacı olan toprak parçası sadece 1 metre 80 santimetreydi. 
                        </p>
                        <p className="a">
                            Gerçekten etkileyici bir hikaye. Umarım anlatabilmişimdir sevgili okuyucu.
                        </p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
        </header>
    );
    }
}
export default Detail;