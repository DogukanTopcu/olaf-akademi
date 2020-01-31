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
            <button className="link1" onClick={this.bas}>Milyoner Hippi : Steve Jobs</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Steve Jobs</h2></div>
                        <p className="a">
                            Benim en sevdiğim iş adamıdır kendisi. Birçok insan Apple'dan ötürü
                            onu sevmese de ben onu Apple yüzünden değil Pixar Studios'u kurduğu için seviyorum.
                            Bu adam elini attığı her konuda başarılı olmayı başarıyor. Benim de aklıma bu takıldı.
                            Bu adam ne yapıyor da her işi tutuyor? Ne tür bir ticari zekaya sahip bu insan?
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Mezarlıktaki en zengin insan olmanın benim için bir anlamı yok. Gece harika bir iş 
                                çıkardığımı düşünerek uyumak, işte bunun bir anlamı var."
                            </p>
                        </span>
                        <p className="a">
                           Steve Jobs yalnızca zeki bir insan değil aynı zamanda iyi iletişim kurabilme ve ürününü
                           satabilme gibi yetenekleri olan bir insandı. Öyle ki Apple bilgisayarlarını yapan Steve Wozniak olmasına 
                           karşın Steve Jobs pazarlama yetenekleri sayesinde kendini tüm dünyaya tanıtmış ve 
                           Apple'ın tek kurucusu olarak görünmüştür, aynı zamanda Apple'ın büyümesinde de çok büyük etkisi vardır.
                           O insanların neye ihtiyaç duyacağını çok iyi biliyor ve bu ihityaçlarına göre ürünleri
                           piyasaya sürüyordu. Bu sebepten ötürü bilgasayar endüstrisinin öncülerinden biri olarak
                           kabul edilecekti. 
                        </p>
                        <img className="alice-1" src="jobs-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Tasarım sadece nasıl göründüğü ya da nasıl hissettirdiği ile ilgili bir şey değildir.
                                Tasarım nasıl çalıştığı ile ilgilidir."
                            </p>
                        </span>
                        <p className="a">
                            Steve Jobs Apple'dan atıldığında şirket batmanın eşiğine gelmişti. Steve Jobs ise 
                            Next Computer ve Pixar Studios'u kurdu. Apple, Steve Jobs'u geri getirmek için 
                            1996'da Next Computer'ı 429 milyon dolara satın aldı, 1997 yılında ise Steve Jobs'u
                            yeniden Apple'ın CEO'su yaptı. Steve Jobs şirketi kurtarmak adına iki yeni Macbook 
                            modeli çıkarttı ve insanlar bu bilgisayarları çok sevdi. İnasnaların sevmesinin de bir nedeni vardı tabi.
                            O neden tasarımdı sevgili okuyucu. Herkes teknoloji geliştirebilir fakat tasarım
                            satar(Örneğin her geliştirici bir web sitesi oluşturabilir fakat her geliştirici benim
                            kadar güzel bir web sitesi tasarlayamaz.). Bildiğin üzere Apple şu an dünyanın en 
                            zengin teknoloji şirketi, bunu da Steve Jobs'a borçlu diyebiliriz.
                        </p>
                        <span className="kant">
                            <p>
                                "Yaptığımız şeylerle gurur duyduğumuz kadar yapmadıklarımızla da gurur duyuyoruz."
                            </p>
                        </span>
                        <p className="a">
                            Aslında Steve Jobs'ın bu satış zekası ve tasarım bilgisi hippi yaşantısından geliyor
                            denebilir. Hippi döneminde yaptığı yolculuklar, okuduğu kitaplar vb. onu insan 
                            psikolojisi konusunda geliştirdiği su götürmez bir gerçek. Tasarım konusunda sadeliği ön planda 
                            tutan Jobs'un derdi hiçbir zaman para olmadı. O en üstteki alıntısında da dediği gibi 
                            günün sonundaki başarıyı hedefliyordu her zaman.
                        </p>
                        <img className="alice-1" src="jobs-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Kalitenin ölçü aracı olun. Bazı insanlar mükemmelliğin beklendiği ortamlara 
                                alışık değildir."
                            </p>
                        </span>
                        <p className="a">
                            Jobs'u erken yaşta kaybetmemizin sebebi pankreasında çıkan tümördü. 2004 yılında 
                            kanser tedavisi görmeye başlayan Steve Jobs zayıflamaya başladı ve kanseri yenemeden
                            5 Ekim 2011'de hayatını kaybetti. Dönemin Apple CEO'su olan Tim Cook, Steve Jobs'un ölümü hakkındaki açıklamasında
                            şunları söyleyecekti: "Apple, vizyon sahibi bir kişiyi ve bir yaratıcı dehayı; dünya inanılmaz
                            bir insanı kaybetti." 
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