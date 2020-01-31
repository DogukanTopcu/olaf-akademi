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
            <button className="link1" onClick={this.bas}>Kitty Genovese Sendromu</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Kitty Genovese Sendromu</h2></div>
                        <p className="a">
                            Şimdi sana korkunç bir olaydan bahdeceğim. Gerçekten yaşanmış bir olaydan, Kitty Genovese'in ölümünden
                            bahsedeceğim. Senden bu yazıyı okurken sinirlenmemeni ve kendini komşuların yerine koymanı istiyorum.
                            Hazırsan başlayalım.
                            
                        </p>
                        <p className="a">
                           Catherine Susan 'Kitty' Genovese (28), 13 Mart 1964 tarihinde, saat sabah 02.30'da çalıştığı yerden 
                           çıkıp arabasıyla evine gitmektedir. Genovese, saat 03.15'te oturduğu apartmana varıyor ve arabasını 
                           park ediyor. Bu sırada otobüs durağında bekleyen Moseley, arabadan bir avcı bıçağıyla birlikte iniyor. 
                           Genovese, evine ulaşmasına yaklaşık 30 metre kala, arkasından avcı bıçağıyla onu takip eden yabancıyı fark 
                           ediyor ve korkup kaçmaya başlıyor. Moseley genç kadını yakalıyor ve sırtından iki kere bıçaklıyor.
                           Komşulardan biri olan Robert Mozer, pencereden çıkıp "Kızı yalnız bırak!" diye bağırıyor ve sesi duyan 
                           saldırgan, kadını bırakıp uzaklaşıyor. Moseley'in arabaya binip kaçıyor, 10 dakika geçtikten sonra 
                           olay mahalline geri dönüyor. 
                        </p>
                        <img className="alice-1" src="kitty-1.jpg"></img>
                        <p className="a">
                            Moseley, apartmanın girişine doğru ilerliyor ve bilinci neredeyse kapalı olan Genovese'yi buluyor.
                            Son bıçak darbelerinde bulunuyor. Genovese can çekişirken saldırgan ona tecavüz ediyor ve bir miktar 
                            parasını çalıp uzaklaşıyor. Saldırı yaklaşık yarım saat sürüyor ve Kitty Genovese olay yerinde 
                            hayatını kaybetti. En kötü kısmı da ne biliyor musun? 30 dakika içerisinde kimse çıkıp Kitty'ye yardım
                            etmedi ve saldırganın Kitty'yi öldürmesine engel olmadı. Kitty'nin yardım çığlıklarına kimse aldırış etmedi
                            ve sadece izlemekle yetindiler.
                        </p>
                        <p className="a">
                            Winston Moseley, olaydan 6 gün sonra bir ev soygunu sırasında yakalanacak ve tutuklama esnasında işlediği 
                            cinayeti kabul edecekti. Moseley, kadınları öldürme sebebini de şöyle açıklayacaktı: "Kadınları öldürmeyi tercih 
                            ediyorum çünkü onları öldürmek daha kolay ve pek direnmiyorlar."
                        </p>
                        <img className="alice-1" src="kitty-2.jpg"></img>
                        <p className="a">
                            Başlarda Genovese cinayeti basında yeteri kadar ilgi görmedi. Daha sonrasında yapılan araştırmalarda, 
                            komşulardan bir tanesi polisi aramamasının sebebini "Olaya dahil olmak istemedim." sözüyle açıklaması 
                            üzerine basın, odağını, olayı görüp tepki vermeyen ya da yeteri kadar etkin olmayan 38 kişi üzerine çevirdi.
                            Olayın yabancı basında da bu kadar ilgi uyandırmasından sonra, Amerikan polisi yaşanan olayın farklı 
                            yansıtıldığını iddia etti. Örneğin bahsi geçen 38 kişinin aslında sayılandan çok daha az olduğu, bu 
                            rakamın abartıldığı öne sürüldü. Komşuların olayın bir cinayet vakası olduğunu anlamadıklarını, 
                            büyük bir kısmının bunun bir sarhoş kavgası olduğunu ya da birbirleriyle kavga eden iki sevgilinin 
                            gürültüsü olduğunu düşündüklerini söylediler. Öne sürülen diğer iddialara göre polisi aramadıkları 
                            yanlış bir bilgiydi. Olay sırasında durumu fark eden komşular polisi aramışlardı. Ve iddia edilenin 
                            aksine Kitty Genovese ambulans gelmeden önce değil, ambulansla taşınırken hastane yolunda ölmüştü. 
                            Hatta bir komşunun cesur davranıp katilin gidip gitmediğinden emin olmadığı halde Kitty Genovese'nin 
                            yanına indiği söylendi. Tamam, bunun empati yapılacak bir yönü yok basbayağı yalan söylemek bu!
                        </p>
                        <p className="a">
                            Olayı anladığını umarak, Genovese Sendromu'na geçmek isterim sevgili okuyucu. Bu olaya aslında "Sorumluluğun 
                            Yayılması" denmektedir. Bu psikolojik fenomene göre, toplumda yardıma ihtiyacı olan insanlara tepki verme 
                            süremiz, grup içindeki birey sayısı arttıkça artıyor. Bunu basitleştirmek için şöyle diyelim: Eğer Genovese olayında
                            yalnızca bir kişi olsaydı büyük ihtimalle o kişi Kitty'nin yardımına koşacaktı.
                            Aslında bu durumu kendi hayatında da çok rahat görebilirsin sevgili okuyucu. Hepimiz aslında "Benden başka diğer 
                            insanlar da var. Bir tek ben değilim." düşüncesi nedeniyle üstümüze düşen görevi yapmıyoruz.
                        </p>
                        <p className="a">
                            Sana yapılan bir deneyden bahsedeyim. Deneyde odaya alınan bir kişi tek başına otururken odaya bir yangının işareti 
                            olan duman veriliyor. Bu durumda odadaki kişi dumanı yetkililere ihbar ediyor. Odadaki kişi sayısı arttığı 
                            zaman dumana verilen önemin ve yetkililere ihbar etme oranının düştüğü görülüyor. 
                        </p>
                        <p className="a">
                            Deminki örneğimde seyirci etkisi bariz görülmekte ama sana bu olayla ilgili başka bir örnek daha vermek istiyorum.
                            John Darley bir deney grubu oluşturuyor ve bu insanların yardıma muhtaç olan insanlara (solunum desteğine ihtiyaç 
                            duyan ya da uyuşturucu komasında olanlar) nasıl tepki verdikleri ölçülüyor. Deneyde: %85  yalnızken, %62 iki kişiyken, 
                            %31 dört kişiyken tepki veriyor.
                        </p>
                        <p  className="a">
                            Umarım anlatabilmişimdir sevgili okuyucu. Uzmanlar böyle durumlarda hiçbirşey yapmamaktansa yanınızdakileri
                            uyarmamız gerektiğini söylüyorlar. Sen de sevgili okuyucu yoldan uyuşturucudan bayılmış veya yerde baygın halde 
                            yatan birini görürsen yardım et. Bu konuda Immanuel Kant ve Ödev Ahlakını anlattım istersen okuyabilirsin bu 
                            sayfadan.  
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