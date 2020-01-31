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
            <button className="link1" onClick={this.bas}>Kaygı Ve Varoluş : Kierkegaard</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Kierkegaard</h2></div>
                        <p className="a">
                            Sevgili okuyucu şimdi sana ilginç bir filozofdan bahsedeceğim. Büyük ihtimalle adını çok 
                            duymadığın bir filozof bu: Soren Aabye Kierkegaard. İstersen yaşamı hakkında 
                            birkaç bilgi vererek başlayayım anlatmaya.
                            
                        </p>
                        <p className="a">
                            Kierkegaard dindar babasının etkisiyle din eğitimi alarak ve katı bir dini atmosfer 
                            içinde yetişti. Öyledir ki sevgili okuyucu tüm yaşamı boyunca çocukluğunun etkisi görülür.
                            Kendisi de dinsel düşünceleri olan birisi olmakla birlikte sürekli din adamlarıyla, 
                            kurumlarıyla ve düşünceleriyle çatışma halinde oldu. Dini bakımdan 16. yüzyılın reformcu 
                            filozofları ile aynı düşüncede olan Kierkegaard, mevcut Hıristiyanlığın yozlaşmış 
                            olduğunu ileri sürdü ve Hıristiyan inancının tamamen yenilenmesine yönelik eleştiriler 
                            geliştirdi, din ve Tanrı'yı tamamen bireysel bir konu olarak değerlendirdi. Bu yönde giderek 
                            sistematik felsefenin bireyi göz ardı eden bütüncüllüğünü de reddetti. 
                            felsefesinde bireyi merkeze aldı.
                        </p>
                        <span className="kant">
                            <p>
                                "Akıl azaldığı oranda kaygı da azalır."
                            </p>
                        </span>
                        <span className="kant">
                            <p>
                                "Benim için hakiki olan bir hakikat bulmalıyım. Yaşayıp uğruna ölmek isteyeceğim bir fikir."
                            </p>
                        </span>
                        <p className="a">
                            Haydi eğlenceli kısım olan felsefesinden bahsedelim biraz. Kendileri varoluşçu felsefenin
                            öncülerindendir. Aslında Nietzsche gibi bağımsız filozoflardan sayılan Kierkegaard, daha
                            sonraları incelendiğinde varoluşçu felsefeyi savunduğu gözlenmiştir. Ona göre varoluş, 
                            somut ve öznel insanın yaşamıdır. Şimdi sevgili okuyucu burada biraz bekleyelim. 
                            Kierkegaard'ın insan yaşamından ne kastediyor ona bakalım.
                        </p>
                        <img className="alice-1" src="kir-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Evlen! Pişman olacaksın. Evlenme... Yine pişman olacaksın."
                            </p>
                        </span>
                        <p className="a">
                            Kierkegaard'a göre insan yaşamına göre üç farklı aşamadan birinde yer alır. Bu aşamalar:
                            Etik, Estetik ve Dini olarak adlandırılır. Hepsini açıklayalım istersen sevgili okuyucu.
                            Etik aşama, kararlılık ve kuvvetli bir adanmışlık aşamasıdır. Etik insanın merkezi, karar 
                            sorumluluğunu omuzlamış olması sayesinde, kendi içindedir. Estetik aşama hazların ön planda
                            olduğu aşamadır. Bu aşamada, bir açık büfe çeşitliliğindeki zevkleri tek tek deneyerek, 
                            sıkıntıdan ve hayatın acılarından kaçmak tipiktir. Dini aşama ise Tanrı’ya itaat ve adanmışlıkla 
                            nitelendirilir. Dindar aşama, ilk iki aşamanın zirve noktasını, yücelimini 
                            temsil eder. Kierkegaard, aşamaları tanımladıktan sonra, insanların aşama değiştirebileceğinden
                            bahsediyor ve bu değişime 'sıçrama' adını veriyordu. Buna göre,  
                            hiçbir insan başka birinin yardımıyla sıçrama yapamazdı ve sıçrama yapmak isteyen bir insan,
                            ancak ve ancak kendi isteği ile sıçrama yapabilirdi.
                        </p>
                        <p className="a">
                            Bunu bir örnekle anlatayım istersen sevgili okuyucu: Örneğin sınıfta çalışmayan sürekli
                            telefonuyla ilgilenen, derslere ilgisi olmayan, haz düşkünü bir arkadaşını düşün. Sınıfında 
                            kesin olmuştur böyle biri. Öğretmeniniz ise bu çocuğun derslere katılmasını ve ders çalışmaya
                            başlamasını istiyor, yani öğretmen kısaca birini estetik aşamadan etik aşamaya sıçratmaya çalışıyor.
                            İşte bu Kierkegaard'a göre mümkün değil. Çünkü kişi kendi istemediği sürece aşama atlayamaz. Şimdi
                            sana bir soru sorayım o zaman sevgili okuyucu, bu öğretmen bu çocuğun ders çalışmasını nasıl sağlayacak?
                        </p>
                        <span className="kant">
                            <p>
                                "An, zamanın ve ebediyetin birbirini dokundukları bir belirsizlik."
                            </p>
                        </span>
                        <p className="a">
                            Bu sorunun cevabını en son vereceğim. Şimdi değinmem gereken daha önemli bir konu var. Kaygı.
                            Kierkegaard insanın kaygı duymasının varoluşunun bir kanıtı olduğunu düşünmekteydi. Aslında 
                            varlığın aşamalardan oluştuğunu varsayarsak baya mantıklı bir fikir denebilir buna. Sonuçta her aşamanın
                            taşıdığı kendine özgü bir kaygısı var. Estetik aşamanın kaygısı bugünkü hazlar, etik aşamanınki yarının hazları, dini aşamanınki
                            ise ahiret yaşamındaki hazlar denebilir kısaca. Acaba sorduğum sorunun cevabının kaygı ile ilgisi olabilir mi?
                        </p>
                        <img className="alice-1" src="kir-2.jpeg"></img>
                        <p className="a">
                            Evet sevgili okuyucu. Öğretmenin yapması gereken tam da bu. Kaygının yönünü değiştrimek. Öğrencinin 
                            yarınından kaygı duymasını sağlamalı, ona bugünkü hazlarının yarın olamayabileceğini anlatmalı. Eğer
                            Kierkegaard haklı ise...
                        </p>
                        <span className="kant">
                            <p>
                                "Beni bir kere etiketlersen beni inkar edersin."
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