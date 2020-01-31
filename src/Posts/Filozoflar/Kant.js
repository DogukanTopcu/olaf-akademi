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
            <button className="link1" onClick={this.bas}>Üzerimdeki Yıldızlı Gökyüzü Ve İçimdeki Ahlak Yasası : Immanuel Kant</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Immanuel Kant</h2></div>
                        <p className="a">
                            Sevgili okuyucu şimdi sana anlatacağım Alman filozof, Immanuel Kant, felsefe 
                            tarihinin en önemli filozoflarından biridir. Zaten sana anlatmamın sebebi de bu. 
                            Dikkatli okumanı tavsiye ederim.                            
                        </p>
                        <p className="a">
                            18. yüzyıl filozoflarından olan Kant, felsefeyi bilimi temellendirmek, sonra da 
                            ahlakın ve dinin rasyonelliğini savunmak için kullandı. Öyle ki dönemin en ünlü 
                            problemelerinden olan Bilginin Kaynağı Problemi ve Ahlakın İlkesi Problemi 
                            konusundaki görüşleri büyük kitleleri etkilemeyi başaracaktı. 
                        </p>
                        <span className="kant">
                            <p>
                                "Algısız kavramlar boş, kavramsız algılar kördür."
                            </p>
                        </span>
                        <p className="a">
                            Bilginin kaynağı konusunda -üstteki sözünde anlaşılacağı üzere- duyu verileri olmadan
                            akılda var olan kavramların boş; sadece duyularla anlamaya çalışan aklın da kör 
                            olduğunu söylemektedir. Yani bilginin kaynağı hem duyulardır, hem de akıldır.
                            Kant'a göre insan, duyuları  aracılığıyla dışarıdan veriler alır ve bunları aklın
                            formlarında işleyerek bilgiyi oluşturur. Descartes'in rasyonalizmi ve Hume'un 
                            emprizmini birleştirerek oluşturduğu bu görüş <u>Kristisizm</u> olarak adlandırılır.
                        </p>
                        <img className="alice-1" src="kant-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Öyle bir eylemde bulunun ki eylemin gerisindeki maksim, herkes için geçerli evrensel
                                bir yasa olsun."
                            </p>
                        </span>
                        <p className="a">
                            Ahlakın İlkesi Problemi konusunda geliştirdiği ödev ahlakında Kant, iyi istenç (iyi isteme) 
                            kavramıyla, şartlar ne olursa olsun her zaman doğru olarak kabul edilebilecek ilkelere
                            göre davranmayı anlatır. Bu davranış akıl eşliğinde yapıldığından insanın ve diğer canlıların
                            güdüsel davranışlarından farklıdır. En önemlisi de sevgili okuyucu Kant'ın ahlak ve iyiyi,
                            eylemin sonucuna göre değil onların arkasındaki <u>amaca</u> göre değerlendirmesidir. 
                            Buradaki amaç Kant'ın deyimiyle ödeve uygun olmalıdır. Ödev bütün insanlar için 
                            geçerli olan ama kişinin arzu ve isteklerine bağlı olmayan evrensel ahlak ilkesi 
                            taşır. Dolayısıyla bir ahlak ilkesi ancak ödevi yerine getirdiği zaman iyi irade olur.
                        </p>
                        <p className="a">
                            Kant ahlaki açıdan -birincisi üstte yazan- 3 ilke öne sunar. Bunlar Kant'ın Maksimleri 
                            olarak adlandırılır. Maksimler kişinin davranışta bulunurken, ödeve uygun davranmasını 
                            sağlayan ilkelerdir. Kişi bu ilkelere göre davranırsa ödeve uygun davranmış olacaktır.
                        </p>
                        <span className="kant">
                            <p>
                                "Kendine ve başkalarına insanlığı bir araç olarak görecek şekilde değil de onu bir 
                                amaç edinecek şekilde davran."
                            </p>
                        </span>
                        <span className="kant">
                            <p>
                                "Her zaman akıllı iradeni, evrensel bir yasa koyucu olarak görevde bulunacağı şekilde davran."
                            </p>
                        </span>
                        <p className="a">
                            Ahlak anlayışını konusunda son bir örnek vererek bitirmek isterim sevgili okuyucu.
                            Bu örnek ödev ahlakını kafana kazımana yardımcı olabilir. Örneğimiz şöyle: Bir çocuk
                            denize düştü ve boğuluyor diyelim, o sırada cankurtaran da boğulan çocuğu görüp 
                            onu kurtarmaya çalışıyor ama yetişemiyor ve çocuk boğularak hayatını kaybediyor.
                            Şimdi cankurtaran sonuç olarak çocuğun hayatını kurtaramadı ama amaç olarak onu kurtarmaya
                            çalıştı. Cankurtaran iyi ahlaklı mı kötü ahlaklı mı? Kant'a göre iyi ahlaklı çünkü
                            ödev bilincinde iyi bir amaç için çabaladı. Umarım örneği anlatabilmişimdir sevgili
                            okuyucu.
                        </p>
                        <img className="alice-1" src="kant-2.jpeg"></img>
                        <p className="a">
                            Artık Kant'ın felsefesi hakkında birçok şeyi biliyorsun. Benim de en sevdiği
                            filozoflardan biridir Kant. İstersen hayatından da biraz bahsedeyim.
                        </p>
                        <p className="a">
                            Kant Doğu Prusya'nın Köingsberg kasabasında doğdu ve hayatı boyunca burada yaşadı.
                            Üniversite eğititmi sırasında öğrencilere özel ders verdi. Eğitimi sırasında Liebniz
                            ve Wolff'tan etkilendi. 1755 yılında "Evrensel Doğal Tarih ve Cennetler Teorisi"
                            adlı eserini yazdı. 1770 yılında mantık ve metafizik kürsüsüne atandı. Daha sonra Hume ver
                            Rousseau etkisiyle eleştirel felsefeyi geliştirdi. 12 Şubat 1804'te Köingsberg'de öldü.
                        </p>
                        <p className="a">
                            Bu yazıyı, 1781 yılıda yayımladığı "Saf aklın Eleştirisi" kitabında geçen ve mezar
                            taşında da yazan o meşhur sözüyle bitirmek isterim sevgili okuyucu: 
                        </p>
                        <span className="kant">
                            <p>
                                "İki şey var ki, ruhumu hep yeni, hep artan bir hayranlık ve müthiş bir saygıyla
                                dolduruyor: Üzerimdeki yıldızlı gökyüzü ve içimdeki ahlak yasası."
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