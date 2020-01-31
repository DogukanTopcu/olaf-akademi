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
            <button className="link1" onClick={this.bas}>En İyi Öğretmen : Richard Feynman</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Richard Feynman</h2></div>
                        <p className="a">
                            Bu adamı tanımıyor olabilirsin fakat Feynman tam bir dahidir, aynı zamanda harika bir profesör. Neden mi?
                            Çünkü bu adam henüz daha 16 yaşındayken türev ve integral hesabını tüm yönleriyle kavradı. 17 yaşında Rockway'den 
                            ayrılıp, lisans derecesini yapacağı MIT'e girdi. Lisans derecesinden sonra ünlü Princeton Üniversitesi'ne 
                            kabul edildi. Sadece bu da değil, aynı zamanda 1942'de ABD'nin savaşa katılmasıyla birlikte, Manhattan Projesi 
                            (atom bombası projesi) için çağrıldı. Peki kim bu Richard Feynman?
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Ben herhangi bir şey bilmiyorum ancak bildiğim şey şu ki yeterince derine inebilmişseniz her şey çok ilgi çekicidir."
                            </p>
                        </span>
                        <p className="a">
                            Richard Feynman Einstein ve Teller gibi konuşmayı geç öğrenenlerdendi. Babasından öğrenme tutkusunu annesinden de 
                            espri anlayışını kazanmıştı henüz küçük yaşlardayken. Yani babası onu bir bilim insanı annesi de bir öğretmen
                            yapmıştı da diyebiliriz. Lisenin hemen başında Feynman hızla daha üst matematik derslerine terfi ettirilmiştir. 
                            Okulda yapılmış belirtilmemiş bir IQ testinde Feynman'ın IQ'su 123 olarak ölçülmüştür bu IQ James Gleick 
                            isimli biyografıra göre "yüksek fakat zar zor takdir edilen" bir değerdi.15 yaşına geldiğinde, kendi kendine 
                            trigonometri, ileri algebra, sonsuz seriler, analitik geometri ve hem türev hem de integrali öğrenmişti. 
                            Üniversiteye girmeden önce, kendi yöntemiyle yarı-türev gibi konuları türetiyor ve deneyler yapıyordu. Bir 
                            dahi olacağı lise zamanından belliymiş aslında. Okuldaki son yılında Feynman, New York Üniversitesi Matematik 
                            Olimpiyatları'nı kazandı. En yakın rakibiyle arasında olan büyük fark jüri üyelerini çok şaşırttı.
                        </p>
                        <p className="a">
                        Kolombiya Üniversitesi'ne başvurdu ancak kabul edilmedi çünkü bu üniversite kabul edebileceği Yahudi kotasını 
                        zaten doldurmuştu. Bunun yerine Massachusetts Teknoloji Enstitüsü'ne gitti. Burada da 1939 yılında lisans 
                        derecesini kazandı. Princeton Üniversitesi'nin lisans üstü sınavında matematik ve fizik dalında harika bir 
                        sonuç elde ederken İngilizce ve tarih alanında çok zayıf bir sonuç almıştı. Feynman'ın ilk seminerine 
                        katılanlar arasında Albert Einstein, Wolfgang Pauli ve John von Neumann da vardı. 1942 yılında Princestone'dan 
                        PhD aldı ve tez danışmanı John Archibald Wheeler'dı. Feynman'ın tezi kuantum mekaniğinde statik hareket 
                        prensiplerine uygulandı, Wheeler-Feynman diyagramını kuantize etme arzusuna ilham oldu.
                        </p>
                        <img className="alice-1"src="feynman-1.jpeg"></img>
                        <span className="kant">
                            <p>
                                "Yaratamadığım şeyi anlayamam."
                            </p>
                        </span>
                        <p className="a">
                            Biraz da Manhattan Projesi'nden bahsedelim. Öncelikle atom bombasının yapılmasının zararlı ve doğa düşmanı
                            olduğunu biliyorum fakat kötü güçlerin eline geçmediği sürece barışı da sağlıyor diyebiliriz, ama en doğru karar
                            hiç savaşların olmaması tabi ki. Feynman da buna yakın görüşteydi. O Nazi Almanya'sı geliştirmeden biz geliştirmeliyiz
                            mantalitesiyle bu projeye katılmıştı. Feynman  ve Bethe, Feynman- Bethe formülünü geliştirdiler ve bu formül fizyon 
                            bombasının verimini hesaplamalarına yardımcı oldu. Kendini bu projesindeki işine adadı ve Trinity bombası testinde 
                            de yer aldı. Feynman'ın, patlamayı siyah gözlükleri olmadan veya Welder lensi ile korunmadan gözlemleyen tek 
                            insan olduğu söylenir. Sebep olaraksa kamyon ön camından gözlemlemenin, camın zararlı ultraviole ışınlarını 
                            engelleyecek olduğunu söyledi. Patlamaya şahit olduğunda, patlamanın devasa parlaklığı nedeni ile Feynman 
                            arabasının zeminine doğru eğildi, buna rağmen mor bir leke gördüğünü söyledi.
                        </p>
                        <p className="a">
                            Gerçekten ilginç bir hayatı var Feynman'ın. Ölümü de ilginç aslında. Feynman az görünen iki kanser çeşidine 
                            sahipti. Liposarcoma ve Waldenström’s macroglobulinemia. Sonuncudan kısa bir süre sonra gerçekleşen final 
                            ameliyatıdan sonra UCLA Sağlık Merkezi’nde 15 Şubat 1988 tarihinde 69 yaşındayken öldü. Son sözleri 
                            "İki kez ölmekten nefret ederdim. Çok sıkıcı." olmuştur.
                        </p>
                        <img className="alice-1" src="feynman-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "İki kez ölmekten nefret ederdim. Çok sıkıcı."
                            </p>
                        </span>
                        <p className="a">
                            Richard Feynman'ı daha bitirmedim sevgili okuyucu. Eğer istersen ikinci bölümün gelmesini geliştiricimin g-mail
                            hesabını aşağıya bıraktım. Ona mesaj atabilirsin. İkinci bölümde çalışmalarından, Feynman diyagramlarından bahsetmeyi düşünüyorum.
                            Daha detaylı olacak kısaca, ama bu kadarlık bilgi günlük hayat için yeterli. Sonuçta evde atom bombası tasarlayacak haliniz yoktur herhalde. 
                        </p>
                        <p className="gMail">
                            dogukantopcu35@gmail.com
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