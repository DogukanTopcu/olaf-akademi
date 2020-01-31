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
            <button className="link1" onClick={this.bas}>Elmanın Düşmesi İle Gezegen Hareketleri : Isaac Newton</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Isaac Newton</h2></div>
                        <p className="a">
                            Klasik fiziğin kurucusu, aydınlanma çağının öncüsü... Newton'u anlatırken ilk olarak
                            bilimsel yöntemini sonra da çalışmalarından bahsedeceğim.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Sağlam bir tahmin olmadan, hiçbir büyük buluş yapılmamıştır."
                            </p>
                        </span>
                        <p className="a">
                            Isaac Newton bilimsel yöntem olarak Galileo'nun deneyciliğinden etkilenmiş ve deneyi
                            araştırmalarının tek yöntemi yapmıştı. Ona göre bilimin amcı deneyler ile birlikte olayları
                            matematiksel kuramlar ile genelleştirmekti.
                        </p>
                        <span className="kant">
                            <p>
                                "Eğer diğer insanlardan benim için bir şeyler yapmalarını bekleseydim hiçbir şey
                                yapamazdım."
                            </p>
                        </span>
                        <p className="a">
                            Şimdi sırada çalışmaları var. Matematik ile başlayalım istersen. Bu alanda genellikle
                            analitik geometri alanında çalışmalar yapmış; diferansiyel(eğreltilerin teğetleri) ve 
                            integral(eğrilerin oluşturduğu alanlar) konularını incelemiştir. Diferansiyel
                            ve integralin birbirine ters olduğunu bulmuş, eğriler ile ilgili çözümler geliştirmiş ve
                            buna "akış(fluxion) metotları" ismini vermiştir.
                        </p>
                        <p className="a">
                            Hadi sana güzel bir tartışma anlatayım sevgili okuyucu. Leibniz-Newton kalkülüs tartışması.
                            Daha demin sana Newton'un akış metotlarından bahsetmiştim. Newton bu yöntemi 1666'da
                            geliştirdi ve birkaç matematikçi haricinde kimseye söylemedi. 1675'te Paris'te Leibniz
                            kendi diferansiyel yöntemini geliştirecek ve 1684'te yayımlayacaktı. Durum vaziyet bu olunca 
                            bu yöntemin ilk kim tarafından bulunduğu tartışması çıktı. Günümüzde ise tarihçiler Newton 
                            ve Leibniz'in birbirinden habersiz bu yöntemi geliştirdiklerini düşünüyorlar.
                        </p>
                        <img className="alice-1" src="newton-2.jpg"></img>
                        <p className="a">
                            Neyse biz asıl konumuza dönelim ve mekanik konusundaki çalışmalarına değinelim biraz.
                            Kütle çekim ile başlayalım istersen. Hepimiz yerçekiminin olduğunu biliyoruz, gözlemliyoruz. Peki
                            bu kuvveti sağlayan güç ne? İşte Newton'un kütle çekimi tam da bunu anlatıyor. Newton basitçe 
                            elmayı çeken kuvvet ile gezegenlerin güneş sistemi etrafında dönmesini sağlayan kuvvetin
                            aynı kuvvet olduğundan bahsediyordu. Buna göre de kütle çekimin matematiksel ifadesini 
                            verdi. Matematiksel ifadesine göre dünyanın elmaya uyguladığı çekme kuvveti ile elmaının dünyaya uyguladığı çekme
                            kuvveti aynı büyüklükte ve zıt yönlüydüler.
                        </p>
                        <p className="a">
                            Newton yaptığı çalışmalar ile Newton mekaniğini geliştirdi. Bu mekanik her ne kadar
                            dünya şartları altında çalışsa da gezegenlerin konumları konusunda küçük, %1'lik sapmalar
                            yaşatıyordu. Bu minik sapmalar Einstein gibi birinin gözüne batmadan yaklaşık 200
                            yıl boyunca uygulanmıştır.
                        </p>
                        <p className="a">
                            Aynı zamanda Newton optik konusunda karanlık bir odada küçük bir delikten gelen güneş ışını bir prizmadan geçirerek renk
                            tayfı oluşturmuş ve gökkuşaklarının nasıl oluştuğunu açıklamıştır. Optik alanında çalışmalarına
                            devam eden Newton ışığın hareket ettiğini ve sonlu bir hızının olduğunu düşünmüştür.
                        </p>
                        <img className="alice-1" src="newton-1.jpg"></img>
                        <p className="a">
                            En iyisini  en sona sakladım sevgili okuyucu. Newton'un hareket yasaları. Bu yasalar 3 tanedir
                            ve şöyledir :
                        </p>
                        <p className="a">
                            1- Hareketli bir cisim dişarıdan bir kuvvete maruz kalmadıkça doğrusal hareketini 
                            sürdürür. ( EYLEMSİZLİK YASASI )
                        </p>
                        <p className="a">
                            2- Kütlesi m olan bir cisme uygulanan F kuvveti a ivmesi arasında F = m.a bağıntısı
                            vardır. ( DİNAMİĞİN TEMEL YASASI )
                        </p>
                        <p className="a">
                            3- Her etkiye karşı ona eşit ve zıt yönlü bir tepki vardır. ( ETKİ-TEPKİ YASASI )
                        </p>
                        <p className="a">
                            Newton'un hareket yasaları, evrenin bir düzen içinde ve deterministik olduğu sonucuna 
                            varmış ve bu, kendisinden sonraki felsefeyi oldukça etkilemiştir.
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