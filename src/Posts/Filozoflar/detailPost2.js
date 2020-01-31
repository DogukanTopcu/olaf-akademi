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
            <button className="link1" onClick={this.bas}>Düşünüyorum Öyleyse Varım : Rene Descartes</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Rene Descartes</h2></div>
                        <p className="a">
                            Descartes modern felsefenin babası olarak kabul edilmektedir. Onun fikirleri yüzyıllarca işlenmiş ve gelecekteki
                            filozofların konusunu oluşturmuştur. Biz onu nereden mi tanıyoruz? O ünlü sözünden tabi.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Düşünüyorum, Öyleyse Varım!"
                            </p>
                        </span>
                        <p className="a">
                            Descartes’ın matematiğe katkısı da felsefeye katkısı kadar belirgindir; geliştirdiği Kartezyen Koordinat Sistemi 
                            sayesinde uzaydaki bir noktayı bir numaralar seti olarak işaretleyebilmeyi ve cebirsel denklemleri iki 
                            boyutlu koordinat sisteminde geometrik şekiller olarak göstermeyi sağladı. 
                        </p>
                        <p className="a">
                            Descartes kendi fikirlerini öncüllerininkinden ayrı tutar. “Ruhun Tutkuları”nın, bugün “duygu” diye adlandırdıklarımızın 
                            eski modern versiyonunun bilimsel incelemesinin, giriş kısmında bu konuda daha önce kimse yazmamış gibi 
                            yazacağını söyleyecek kadar ileri gider. Felsefesinin birçok ögesi geç Aristotelesçilik, 16. Yüzyılın 
                            yeniden dirilmiş stoacılığı, içerisinde emsallerini gösterir. Descartes felsefesinde, ekollerden iki temel 
                            noktada farklılık gösterir: korporel maddenin durum ve şekil olarak ayrıldığı ve doğal fenomenlerde doğal 
                            veya ilahi herhangi bir uç nokta olduğu kanılarına karşı çıkar. Teolojisinde, Tanrı’nın yaratma eylemindeki 
                            mutlak özgürlüğü üzerinde durur. Descartes aynı zamanda 17. Yüzyıl kıtasal rasyonalizminin temellerini atmıştır.
                        </p>
                        <img className="alice-1" src="descartes-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "İyi kitaplar okumak, geçmiş yüzyılların en iyi insanlarıyla sohbet etmek gibidir."
                            </p>
                        </span>
                        <p className="a">
                            Onun Metot Üzerine Konuşma’sında, herhangi birinin şüphe olmadan, gerçek olarak bildiği temel prensiplere 
                            varmaya çalışır. Bunu başarmak için hiperbolik/metafizik şüpheyi, bazen metodolojik şüphecilik olarak 
                            adlandırılan metodu kullanır: şüphelenilebilecek herhangi bir düşünceyi reddeder ve onları gerçek bilgi 
                            için sağlam dayanak elde etmekle yeniden kurar.
                            Descartes da felsefesinde kuşkuculuğu kullandı. Gördüğü ve bildiği her şeyden kuşku duyuyordu.
                            Bu konuda başlangıçta, Descartes sadece tek bir prensibe vardı: düşünce vardır. Düşünce ben'den ayrılamaz, 
                            dolayısıyla, ben varım. 
                            Bu felsefe tarihinin en bilindik yargısına dönüşecekti daha sonra. 
                        </p>
                        <p className="a">
                            Sana Descartes'in şüpheci olmasının yanında rasyonalist de olduğunu söylemiştim sevgili okuyucu. O 
                            genellikle doğa bilimlerini geliştirmek için aklın kullanılması gerektiğini vurgulayan ilk düşünce insanı 
                            olarak tanınır. Onun için felsefe bilgiyi somutlaştıran bir düşünce sistemiydi ve bunu şu şekilde ifade etti :
                        </p>
                        <span className="kant">
                            <p>
                                "Tüm felsefe bir ağaç gibi olduğundan; metafizik kök, fizik gövde, ve diğer bilimler bu gövdeden dallanan 
                                dallardır, bu dallar üç ana başlığa indirgenebilir : Tıp, mekanik ve etik. Ahlakın bilimiyle, bilgeliğin 
                                son derecesi olan, diğer bilimlerin en yüksek ve en mükemmel bütün bilgisini anladım."
                            </p>
                        </span>
                        <p className="a">
                            Descartes'in "Düşünüyorum, Öyleyse Varım" alıntısına bir daha deyinmek istiyorum sevgili okuyucu. Descartes'ın bulduğu
                            sonuç aslında sadece kendisinin düşünen bir varlık olduğuydu, gerisinden hala şüphe duyuyordu. Hala gözüyle gördüklerinden,
                            kulağıyla işittiklerinden şüphe duyuyordu. Dediklerimi anlamadıysan Matrix filmini örnek olarak gösterebilirim.
                            Matrix tam da Descartes'ın felsefesine değiniyor bu konuda.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Tıpkı zanaat ustalarımızın mekanik sanatlarını anlayabileceğimiz gibi; ateş, su, hava, yıldızlar ve 
                                semanın ve bizi çevreleyen bütün cisimlerin hareketlerini anlayabiliriz, bu güçleri aynı şekilde uygun o
                                ldukları amaçlar için kullanabilir ve bu şekilde kendimizi tabiatın hakimi yapabiliriz…"
                            </p>
                        </span>
                        <p className="a">
                            Descartes'ın ölümü de kendisi kadar garip oldu. René Descartes 11 Şubat 1650’de Stokholm, İsveç’te, 
                            Fransız büyükelçisinin evini ziyaretinde öldü. İsveç’e Kraliçe Christina tarafından, kendisine öğretmenlik 
                            yapması için davet edilmişti. Ölümünün sebebinin zatürre olduğu söylenmişti. Christina’nın sabah erken 
                            çalışma alışkanlıkları ve yoğun çalışma saatleri yüzünden uykusuz kalıp, sağlığını hepten kaybetmiş 
                            olduğuna inanılıyordu. Ama sevgili okuyucu öte yandan öldürülmüş de olabilirdi. Descartes’ın ölümünden 
                            sonra Kraliçe Christina Roma Katoliği olmak için tahttan çekilmişti, çünkü İsveç hukukuna göre hükümdarların 
                            Protestan olması gerekiyordu. Kraliçe Christina’nın yakından alakalı olduğu tek Roma Katoliği ise Descartes’tı..
                            1663’te Papa Descartes’ın çalışmalarını Yasaklı Kitaplar İçeriğine kattı. Protestan bir milletin içindeki bir 
                            Roma Katoliği olarak, Stokholm’de, vaftiz edilmemiş çocukların gömüldüğü bir mezarlığa gömülmüştür. 
                            Daha sonra Paris’teki Saint-Germain-des-Prés manastırına taşınmıştır. 1792’deki Milli Kongrede Panthéon’a 
                            taşınması kararı alınmışsa da, iki yüz yıl sonra mezarı hala Saint-Germain-des-Prés manastırındaki bir 
                            şapeldeydi. Adına 18. yüzyılda dikilen bir anıt hala İsveç Kilisesi’nde durmaktadır.
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