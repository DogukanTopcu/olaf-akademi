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
            <button className="link1" onClick={this.bas}>Bilgisayar Dahisi : Bill Gates</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Bill Gates</h2></div>
                        <p className="a">
                            Sana zamanında dünyanın en zengin insanı olmuş (Şu an ikinci sırada) başarılı bir 
                            milyoneri anlatacağım sevgili okuyucu. Yalnızca Microsoft'un sahibi olan Bill Gates'i değil,
                            Afrika'ya sağlık getirmeye çalışan Bill Gates'ten ve onun hayatından da bahsedeceğim.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Ben bazı derslerin sınavlarını geçemedim; ama arkadaşım hepsini geçti. 
                                O şimdi Microsoft'ta başarılı bir mühendis, ben Microsoft'un sahibiyim."
                            </p>
                        </span>
                        <p className="a">
                            Avukat bir baba ve öğretmen bir annenin oğlu olan Bill Gates, henüz on iki yaşındayken 
                            özel bir okulda ilk informatik (bilişim) kurslarına gitti. Okul arkadaşı Paul Allen (daha sonra onunla Microsoft'u kuracaktı.) 
                            ile birlikte boş zamanlarını çoğunlukla bilgisayar yazılımları üzerinde çalışarak geçiriyordu.
                            Bu şirket bir trafik sayım ve kontrol sistemi için yazılımlar üreterek hemen 20.000 dolarlık satış yaptı.
                            MITS şirketinin Altair adını verdikleri en önemli numunesi henüz tekbiçim, kullanılabilir bir 
                            yazılıma sahip olmayıp ancak tamamlanmamış bir işletim sistemine sahipti. Gates ve Allen'ın, Altair 
                            için 1974'te geliştirdikleri yazılım dili BASIC sayesinde bilgisayar kullanıcıları programlarını 
                            kendileri yazabiliyorlardı. MITS şirketi genç araştırmacılardan pazarlama ruhsatını satın alarak 
                            kendilerine sistemi daha da geliştirmeleri için sipariş verdi. Gates bunun üzerine tahsilini 
                            bırakarak Allen ile birlikte Albuquerque/New Mexico'da Microsoft adlı şirketi kurdu.
                        </p>
                        <img className="alice-1" src="bill-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Hayatımda hiçbir hayalim gerçekleşmedi. Peki mutlu muyum? Evet."
                            </p>
                        </span>
                        <p className="a">
                            Peki Microsoft nasıl mı büyüdü? Microsoft, General Electric gibi şirketler, devamlı müşterileri 
                            arasında bulunmaktaydı. Gates 1977'de, aletlerini BASIC ile donatabilmek amacıyla, Apple, Tandy ve 
                            Commodore gibi PC (Personal Computer - Kişisel Bilgisayar) üreticileriyle lisans sözleşmeleri imzaladı. 
                            Ayrıca FORTRAN, COBOL ve Pascal gibi yazılım dillerini geliştirmekle, Microsoft'a bir üstünlük ve 
                            uluslararası pazar yolunun kendilerine açılmasını (1978'den sonra ilk Japonya olmak üzere) sağladı. 
                            Gates 1979'da yalnızca 13 çalışanıyla yaklaşık 3 milyon dolarlık bir satış gerçekleştirebildi.
                            İnanılmaz değil mi? Ama daha bitmedi. PC'ler için yazılması gereken işletim sistemi teklifinin 
                            Gary Kildall tarafından reddedilmesinin ardından IBM, Gates'e yöneldi. Gates, Seattle Computer Products(SCP) 
                            şirketinden 50.000 USD karşılığında DOS işletim sistemini satın aldı ve SCP'de DOS yazılımcılarından 
                            biri olan Tim Paterson'ı kadrosuna dahil etti. DOS işletim sistemi IBM'in ihtiyaçları doğrultusunda 
                            değiştirilerek MS-DOS adını aldı.
                        </p>
                        <p className="a">
                        Microsoft'un yazılım alanındaki kesin başarısı, Apple şirketinin kendilerine verdikleri siparişle gerçekleşti. 
                        Macintosh adını verdikleri örnek oluşturacak nitelikteki bilgisayar için çeşitli uygulama sistemleri 
                        (örneğin Word ve Excel) geliştirildi. Gates şirketini 1986'da anonim şirkete çevirdi. Aradan çok geçmeden yalnız 
                        kendi payının (% 45) borsa değeri 1 milyar doların üzerindeydi. İnanılmaz bir başarı.
                        </p>
                        <span className="kant">
                            <p>
                                "Microsoft başarısız olsaydı, yapay zeka alanında çalışırdım."
                            </p>
                        </span>
                        <p className="a">
                            Microsoft çok büyük bir başarı sağladı, ama tekelleşme ile suçlandı. Federal Mahkeme, 
                            dünyanın en büyük şirketi; bilgisayar yazılım üreticisi Microsoft'un, kendi alanında diğer 
                            şirketleri ezerek anti-tekel yasalarını ihlal ettiğine karar verdi. Microsoft daha küçük şirketlere bölünme 
                            tehlikesi geçirdi. Amerika'yı da suçlamamak lazım, tekel kişiyi güçlendirse de devleti güçsüzleştirir. Bu
                            yüzden rekabet kurumu bir ülke için olmazsa olmazdır sevgili okuyucu. Sonuç olarak Windows rakip şirketlerin
                            de yazılımını bulundurabileceği bir işletim sistemi oldu. Bu da kullanıcının  kazancına oldu diyebiliriz.
                        </p>
                        <p className="a">
                            Bill Gates eşi Melinda Gates ile birlikte Bill and Melinda Gates Foundation'ı kurdu ve Microsoft'tan ayrıldı.
                            Eşi ile kurduğu bu yardım kuruluşu Afrika'da hastalıktan ölen insanlara yardım sağlıyor ve hastalıkların çıkmasını
                            engellemeye çalışıyor. Çalışmaları şu anda da devam etmektedirler. İnternet sitelerini altta vereceğim adresten 
                            inceleyebilirsin sevgili okuyucu.
                        </p>
                            <a className="b" href="https://www.gatesfoundation.org/">Gates Foundation</a>
                        
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
        </header>
    );
    }
}
export default Detail;