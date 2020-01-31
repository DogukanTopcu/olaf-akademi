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
            <button className="link1" onClick={this.bas}>Kapitalizmin Atası : Merkantilizm</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Merkantilizm</h2></div>
                        <p className="a">
                            Kapitalizm'i sever misin sevgili okuyucu. Herhalde kapitalizmi savunan çok kişi olacağını 
                            pek düşünmüyorum, ama sevmeyen yoktur da diyemem. Şimdi de onun atasını inceleyeceğiz sevgili okuyucu.
                            Nasıl geliştiğini, oluşumunda etkili olan nedenleri inceleyeceğiz.
                        </p>
                        <p className="a">
                            Merkantilizm aslında orta çağın sonları ile sanayi devrimi arasında kalan dönemdir (1500-1800) ve 
                            Avrupa’ya özgüdür.  Bizim bildiğimize göre de 16. yüzyılda Batı Avrupa'da başlamış ekonomik bir teoridir,
                            yani şimdiki kapitalizme evrilmeden önceki ticaret anlayışıdır. Merkantilizme göre bir milletin refahı 
                            anaparanın miktarına bağlıdır ve küresel ticaret hacmi değişmez. Ekonomik servet veya anapara devletin 
                            elinde tuttuğu, altın, gümüş miktarı veya ticari değer ile temsil edilir. Bu da diğer devletlerle olan 
                            ticari dengenin olumlu yönde olması ile en iyi yükseltilir. Merkantilizme göre, yönetim ekonomide korumacı 
                            bir rol oynamalı, dış satımı desteklemeli ve dış alımı sınırlandırmalıdır. Bu açıklamalara göre Merkantilist 
                            sistem bu fikirler üzerinde duran ekonomik sisteme denir.
                        </p>
                        <img className="alice-1" src="merkantilizm-1.jpg"></img>
                        <p className="a">
                            Merkantilist sistem aslına bakarsak coğrafi keşiflerin bir sonucudur diyebiliriz sevgili okuyucu. Coğrafi 
                            Keşifler'in en önemli sonucu bana kalırsa zenginlik kavramını değiştirmesidir. Coğrafi keşiflerden önce 
                            zenginliğin kaynağı toprak olarak sayılıyor ve toprağı fazla olan kişiler zengin sayılıyordu. Coğrafi Keşifler'den
                            sonra zenginliğin kaynağı altın ve gümüş olmaya başladı. Devletler eskiden zengin olmak için toprak almaya çalışırken şimdi,
                            altın ve gümüşe hakim olmak istiyordu. Bu yaklaşıma göre de sömürgeci devletler Merkantilist sistemi oluşturdu.
                            Yani bugünkü kapitalist devletler dünün merkantilist sistemini geliştirmişti. Aynı zamanda bu durum toprak sahibi
                            feoadal beylerin sonunu getirdi ve mutlak krallıkların gücünü arttırdı.
                        </p>
                        <p className="a">
                            Merkantilist sisteme geçen devletler hammadde ve pazar arayışına geçtiler. Hammadde olarak Afrika ve Amerika
                            kıtalarını sömüren bu devletler, pazar olarak da Çin Hindistan ve Osmanlı gibi devletleri kullanmaktaydı.
                            Sömürge devletlerde halkı köleleştiren ve ülkedeki tüm kaynakları hunharca harcayan merkantilist devletlerin amacı,
                            pazar kurduğu devletlerde ise pazarını genişletmek ve içerideki halkı bıktirmaktı, yani ülkeyi içeriden parçalıyordu.
                            Bu sistem devamında da Sanayi Devrimi'ni getirecek ve işçi sınıfının büyümesine, kırdan kente göçlerin başlamasına 
                            sebep olacaktı.
                        </p>
                        <img className="alice-1" src="merkantilizm-2.jpg"></img>
                        <p className="a">
                            Merkantilist sistem içerisinde zenginleşen burjuva sınıfı içerisinde bazı gruplar sanata ve bilimin gelişmesine 
                            yatırım yaparak bu alanda Avrupa'nın gelişmesini sağlıyordu. Avrupa'da bilimin artması İngiltere'de buharlı makinelerin 
                            doğmasına neden oldu. Buharlı makineler, hammadde ve yapılan yatırımlar sayesinde Sanayi Devrimi patlak verdi.
                            Şehirde iş imkanı bulan köylüler çalışmak için kırdan kente göç etti. Şehirlerin nüfusu arttı. Sanayi devrimi ile 
                            üretimi arttıran merkantilist devletler pazarlarını güçlendirmeye çalıştı. Kapitülasyonları yoğunlaştırdı ve pazarlarından
                            hammadde almaya başladı.
                        </p>
                        <img className="alice-1" src="merkantilizm-3.jpg"></img>
                        <p className="a">
                            Bitiriyorum sevgili okuyucu anlatacağım az bir şey kaldı. Sanayi devrimi merkantilist devletler arasında rekabeti
                            arttırdı. Siyasal birliğini tamamlayan Almanya sanayi devrimi ile çok hızlı bir ilerleyiş gösteriyordu. Ama
                            sömürgecilik yarışında çok geride kalmıştı ve bu drum küresel çapta bir savaşın çıkmasına neden olacaktı.
                            Birinci Dünya Savaşı bittiğinde, sömürgecilik yarışı bitmiş, krallıklar yerini cumhuriyetlere bırakmaya başlamış,
                            Türkiye Kurtuluş savaşını vererek kendi bağımsız cumhuriyetini kurmuştu ama sömürgecilik halen daha bitmemişti.
                            Almanya çok ağır yaptırımlara maruz kalmıştı. 
                        </p>
                        <p className="a">
                            Şunu  unutma sevgili okuyucu: Barış antlaşmaları iki devlet halkını de mutlu etmek zorundadır. Aksi takdirde 
                            başka bir savaşın çıkmaması deyim yerindeyse işten bile değildir. Beklendiği üzere Almanya karşı çıktı ve bir savaş daha verildi.
                            Fakat bu savaş bir fikrin yayılmasını da sağlamıştı: Faşizm. Kör milliyetçilik de diyebileceğimiz bu görüş Almanya ve İtalya gibi devletlerde 
                            de görülmüştü, aynı zamanda Rusya'da yapılan sosyalist devrimle zıt düşmekteydi bu görüş. İkinci Dünya Savaşı da Almanya 
                            için hüsranla sonuçlandı. Kazanan devletler Almanya'yı Doğu ve Batı olmak üzere ikiye böldüler. Doğu Almanya SSCB'nin hakimiyeti
                            altındayken, Batı Almanya Avrupalı devletler ve Amerika'nın kontrolündeydi. Sosyalizmi yaymaya çalışan SSCB git gide 
                            ABD'ye rakip olmaya başlayınca Soğuk Savaş çıktı. Amerika Soğuk Savaşta galip gelmek için Avrupalı devletlere maddi 
                            destek sağladı ve NATO'yu kurdu. Silahlanma yarışı başladı ve uzay konsunda yarışıldı. SSCB uzaya insan gönderen ilk
                            devlet olurken, ABD ise uzaya insan gönderen ilk devlet oldu. ABD'nin bu hareketi SSCB'nin sonunu getirecekti.
                        </p>
                        <p className="a">
                            Şimdi soracaksın sevgili okuyucu ben bunları neden anlattım. Bunu anlatmamın sebebi aslında Merkantilist sistemin 
                            dünyaya getirdiği sonuçlardan bahsetmekti. Sanayi Devrimi, Kırdan Kente Göç, Birinci ve İkinci Dünya Savaşları,
                            sanat, edebiyat ve bilimin gelişmesi, faşizm ve sosyalizmin güçlenmesi vb. birçok olaya neden olmuştur, şimdi de
                            şirketler bazında kapitalizm olarak devam etmektedir. Apple, Microsoft, Huawei, Google, Amazon gibi
                            şirketlerle devam etmektedir tarihe etkili olmaya.
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