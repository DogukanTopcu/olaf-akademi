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
            <button className="link1" onClick={this.bas}>Alice harikalar Diyarında Sendromu</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Alice Harikalar Diyarında Sendromu</h2></div>
                        <p className="a">
                            Bu sendrom kısaca tabiriyle: Vücut ve cisim algısında meydana gelen bozulmaların gözlemlendiği bir sendromdur. 
                            Bu sendroma sahip kişiler, nesneleri olduğundan daha büyük veya daha küçük, 
                            olduklarından daha uzak ya da daha yakın algılayabilir ve işitsel bozukluklar yaşayabilirler. 
                            Sendromun belirtilerini şöyledir : 
                            
                        </p>
                        <p className="a">
                            <ul>
                                <li>
                                Vücut imajını farklı algılama, hareketlerde asimetri.
                                </li>
                                <li>
                                Görsel algıda bozukluk.
                                </li>
                                <li>
                                Zaman algısının bozulması.
                                </li>
                                <li>
                                Dokunma duyusundaki bozukluklar (Sert bir cismi yumuşak algılayabilirler.)
                                </li>
                                <li>
                                    Migren
                                </li>
                                <li>
                                Ses algısının bozulması. 
                                </li>
                                <li>
                                Lilliput halüsinasyonları 
                                </li>
                            </ul>
                        </p>
                        <img className="alice-1" src="alice-1.jpg"></img>
                        <p className="a">
                            Bu sendromun belirtilerine baktığımızda bireyin duyu ve ara nöronlardakındaki bozulmalardan
                            kaynaklandığını rahatça söyleyebiliriz. Yaptığım birkaç araştırma ile şu iki hipotezi atabilirim sanırım: 
                            Uç beyindeki duyu değerlendirme bölgelerinin çalışmasındaki aksaklık (Uç beyindeki ara nöronların hatalı çalışması) veya 
                            talamustan kaynaklı olabilir.(Talamus, duyu organlarından gelen duyu nöronlarının 
                            toplanıp uç beyinin ilgili merkezlerine dağıldığı yerdir. Posta teşkilatı da diyebiliriz beynin bu kısmına.)
                        </p>
                        <p className="a">
                            Şimdi merak ediyorsundur talamus fikrine nereden ulaştığımı. Onu da şöyle açıklayayım:
                            Talamustan; işitme, duyma, görme, dokunma duyuları toplanır ve uç beyinin ilgili 
                            bölgelerine gönderilir, fakat koklama duyusu direkt uç beyne gider, talamusta beklemez.
                            Sendromun belirtilerine baktığımda koklama duyusunda bir yanılsamanın olduğuna rastlamadım.
                            Bu sebepten ötürü talamusta bir sıkıntı olabileceğini düşünüyorum.
                        </p>
                        <p className="a">
                            Şimdi biraz dedikodu yapalım seninle sevgili okuyucu. Alice Harikalar Diyarında kitabının yazarı
                            Lewis Carroll’un da bu hastalıktan muzdarip olduğu ve algısında yaşadıklarını hikayeleştirdiği
                            söylenmektedir. Hastalığın belirtilerinden olan migren rahatsızlığına da sahiptir aynı zamanda.
                        </p>
                        <img className="alice-2" src="alice-2.jpg"></img>
                        <p className="a">
                            Neyse konumuza dönelim, bitiriyorum zaten. Bu hastalık genellikle çocuklarda görülmekte ve her 
                            hastanın ortak yönü olarak da migren rahatsızlığı gösterilmektedir.  21 yaşında sendromun ilk belirtilerini 
                            yaşayan bir kadın, 31 yaşında gelip bu deneyimlerini anlatırken ilk başlarda yaşadıkları konusunda 
                            büyük sıkıntılar çektiğini, yaşadığının psikolojik bir hastalık olmadığını, tedavi için birçok 
                            yöntem denediğini, migrenler yüzünden aldığı hiçbir ağrı kesici ilacın işe yaramadığını söylüyor 
                            ve ekliyor : 
                        </p>
                        <span className="kant">
                            <p>
                            “Bazen yatağımda uzanırken kendimi birden pencerenin kenarında dışarıyı izlerken buluyordum. 
                            Ağaçların üzerinden uçan kargaları izliyordum. Uzakta olmasına rağmen sanki çok yakınmış gibi bütün 
                            kuşların üzerindeki detayları görebiliyordum ve ağaçlar sadece bir kol uzunluğundaydı. 
                            Bir süredir bu küçük etkileri görmüyorum ve özledim diyebilirim.”
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