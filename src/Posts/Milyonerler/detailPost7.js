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
            <button className="link1" onClick={this.bas}>Marsta Koloni Kurmak : Elon Musk</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Elon Musk</h2></div>
                        <p className="a">
                            Şimdi sana vizyon sahibi bir milyonerden bahsedeceğim sevgili okuyucu. Mars'ta koloni kurmak isteyen, dünyayı
                            elektrikli arabalarla ve temiz enerji kaynakları ile donatmak isteyen bir dahiden bahsedeceğim. Hazırsan başlıyorum.
                            
                        </p>
                        <p className="a">
                            Elon Musk, hem doğum yeri Güney Afrika Cumhuriyeti, hem Kanada, hem de Amerika Birleşik Devletleri vatandaşıdır.
                            SpaceX’in kurucusu ve Tesla Motors ile PayPal’ın kurucu ortaklarındandır. SpaceX’te CEO ve 
                            baş tasarımcı; Tesla Motors’da başkan, CEO ve ürün tasarımcısı olarak görev yapmaktadır.
                            Musk aynı zamanda SolarCity’nin de başkanıdır. Küçükken Elon, kendi kendine yazılım programlayıp kodlamayı öğrendi. 
                            12 yaşındayken kendi yazdığı Blastar adındaki uzay oyununu yaklaşık $500’a satarak ilk yazılım satışını yaptı.
                            Bryanston High School’da sekizinci ve dokuzuncu sınıfları geçtikten sonra Musk, Pretoria Boys High School’a 
                            geçip oradan mezun oldu. 1988 yılında henüz 17 yaşındayken Güney Afrika ordusunda askerlik yapmamak için evinden ayrıldı.
                            ABD'ye taşınmak istiyordu. 
                        </p>
                        <span className="kant">
                            <p>
                                "Askerlik yapmakla ilgili bir sorunum yok, ancak Güney Afrika ordusunda askerlik yapıp siyahi insanları bastırmaya çalışmak bana vakit geçirmek için iyi bir yol gibi görünmedi."
                            </p>
                        </span>
                        <p className="a">
                            1992 yılında, Kingston, Ontario’daki Queen's Üniversitesi’nde iki yıl geçirdikten sonra, Pennsylvania 
                            Üniversitesi’nde işletme ve fizik okumak için Kanada’dan ayrlıdı. The Wharton School of the University 
                            of Pennsylvania’da anadalını seçip, Ekonomi alanında lisans diploması aldı. Ayrıca University of 
                            Pennsylvania, School of Arts and Sciences’dan da, Fizik alanında yan dal diploması aldı. Daha sonra 
                            Uygulamalı Fizik ve Malzeme Bilimi alanında doktora yapmak için Kaliforniya’nın Silikon Vadisi 
                            bölgesine taşındı. Ancak doktorayı tamamlamadı. Lisans eğitimleri ve Thomas Edison, Nikola Tesla, 
                            Bill Gates, Steve Jobs, Walt Disney gibi yenilikçilerden aldığı ilhamla, Musk girmek istediği, 
                            "insanlığın geleceğini en çok etkileyecek sorunlardan oluşan" üç alan tespit etti. Bu alanlar 
                            internet, temiz enerji ve uzaydı.
                        </p>
                        <p className="a">
                            Anlaşılacağı üzere vizyonu burada oluşmaya başladı. İstersen kariyerinden de bahsedelim biraz.
                        </p>
                        <p className="a">
                            <i>1. PayPal</i>
                        </p>
                        <p className="a">
                            Musk 1999 yılının Mart ayında bir çevrimiçi finans ve ödeme servisi olan X.com’un kurucu ortaklığını üstlendi.
                            Ertesi yıl bir açık arttırma sistemi olan Confinity’yi bünyesine katarak PayPal’ı oluşturdu. 
                            Musk çevrimiçi aktarım, ya da "P2P" teknolojisine olan inancından dolayı alımın organize edilmesinde kilit rol oynadı.
                            PayPal’ın çabuk büyümesi büyük ölçüde Musk’ın internette yayılarak büyüme kampanyasının sonucudur. Ekim 2002’de, PayPal eBay 
                            tarafından $1.5 milyarlık hisse senedi karşılığında satın alındı. Satıştan önce şirketin en büyük hissedarı 
                            olan Musk PayPal’ın 11.7%’lik hissesine sahipti.
                        </p>
                        <p className="a">
                            <i>2. SpaceX</i>
                        </p>
                        <p className="a">
                            Elon Musk PayPal’ı satttıktan sonra zengin olmuştu. Sonra ne mi yaptı? Haziran 2002'de SpaceX'i kurdu.
                            E tabi araba, arsa, ev alacak hali yok ya, gidip uzay şirketi kuruyor. SpaceX roket teknolojisinin 
                            durumunu ilerletmeye odaklanmış fırlatma araçları geliştirip üreten bir şirkettir. Musk’a göre uzayın 
                            keşfi insanlığın bilincini, korumak için değilse de, genişletmek için önemli bir adımdır. Onun deyişiyle çok 
                            gezegenli hayat insan ırkının hayatta kalmasını tehdit eden şeylere karşı bir önlem olabilir.
                        </p>
                        <span className="kant">
                            <p>
                                "Bir asteroid veya büyük bir volkan bizi yok edebilir, ayrıca dinozorların hiç görmediği risklerle karşı karşıyayız: 
                                mühendislik ürünü bir virüs, yanlışlıkla oluşturulmuş bir mikro karadelik, küresel ısınma ya da sonumuzu 
                                getirecek henüz bulunmamış bir teknoloji. İnsan ırkı milyonlarca yıldır evrimleşmekte, fakat son 60 yılda 
                                atomik silahlar kendimizi tüketmek için bir potansiyel oluşturdu. Er ya da geç hayatı mavi-yeşil topun 
                                ötesine genişletmek zorunda kalacağız – ya da soyumuz tükenecek."
                            </p>
                        </span>
                        <img className="alice-1" src="musk-1.jpg"></img>
                        <p className="a">
                            <i> 3. Tesla Motors</i>
                        </p>
                        <p className="a">
                            Musk Tesla Motors’un ortak kurucularından biri ve ürün tasarımı başkanıdır. Öncelikle işe Martin Eberhard’ı CEO olarak işe almakla 
                            başladı ve anaparanın neredeyse tamamını Tesla’nın ilk iki yatırım turuna yatırdı. 2008’deki ekonomik krizde Tesla’daki zorunlu 
                            işten çıkarmalardan sonra, Musk mecburen CEO’luk görevini de üstlendi. Musk özellikle kitlesel pazar müşterilerine uygun 
                            fiyatlı elektrikli araçlar sağlama stratejisinin sorumlusudur. Onun vizyonu öncelikle daha varlıklı 
                            müşterileri hedefleyen Tesla Roadster ile para kazanıp, daha sonra bu parayı daha düşük fiyatlı elektrikli 
                            araçların Ar-Ge’sine yatırmaktı. Tesla’nın başlangıcından beri Musk, temel fiyatı Roadster’ınkinin yarısı 
                            kadar olan dört kapılı aile arabası Model S’in destekçisi olmuştur. Elektrikli araç piyasasındaki uzun 
                            menzil kısıtlamasını aşmak için Musk Mayıs 2013’te All Things D ile yaptığı bir röportajda Tesla’nın 
                            şarj istasyonu ağının genişlemesini önemli ölçüde hızlandırdığını, Haziran ayında Doğu ve Batı yakalarındaki 
                            istasyon sayısını üç katına çıkarttığını ve yıl içerisinde Kuzey Amerika ve Kanada’da daha fazla genişleme 
                            planladığını söyledi.
                        </p>
                        <p className="a">
                            <i> 4. Solar City</i>
                        </p>
                        <p className="a">
                            SolarCity Birleşik Devletler’in en büyük güneş enerjisi sistemi sağlayıcısıdır. Musk'ın Hem Tesla’ya hem de 
                            SolarCity’ye yatırım yapmanın altındaki motivasyon küresel ısınma ile savaşmaktır. 2012’de Musk, SolarCity 
                            e Tesla Motors’sun çatı üzerindeki güneş panellerinin elektrik şebekesi üzerindeki etkisini yumuşatmak 
                            için elektrikli araç bataryalarını kullanmak üzere iş birliği yaptığını duyurdu.
                        </p>
                        <img className="alice-1" src="musk-2.jpg"></img>
                        <p className="a">
                            Elon Musk aslında bize vizyon sahibi olmanın önemini gösteriyor aslında. Ondan alacağımız en büyük ders budur
                            bence sevgili okuyucu. Dikkat et bu web sitesinin altında da bir vizyon yatıyor. Hakkımda ve Olaf hakkında 
                            kısımlarını da okumanı tavsiye ederim.
                        </p>
                        <span className="kant">
                            <p>
                                "Belki de bir simülasyonda yaşıyoruz diye umutlanmalıyız."
                            </p>
                        </span>

                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
        </header>
    );
    }
}
export default Detail;