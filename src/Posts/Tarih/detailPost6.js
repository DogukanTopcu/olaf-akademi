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
            <button className="link1" onClick={this.bas}>Bilim Yükseliyor : Rönesans</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Rönesans</h2></div>
                        <p className="a">
                            Rönesans diyince ilk aklına ne geliyor sevgili okuyucu? Bana ilk olarak Mona Lisa tablosu geliyor. Sanki Rönesans'ın
                            bir sembolüymüş gibi. Aynı zamanda Leonardo Da Vinci geliyor aklıma. Ama Rönesans bunlardan çok daha fazlası
                            sevgili okuyucu. Neden mi? Hadi gel beraber inceleyelim o zaman.
                            
                        </p>
                        <p className="a">
                            Rönesans (Yeniden Doğuş), Orta Çağ ve Reformasyon arasındaki tarihi dönem olarak bilinir. 15 - 16. yüzyıl İtalya’sında 
                            batı ile klasik antikite (Eski Roma ve Yunan Eserlerinin incelenmesi) arasında sanat, bilim, felsefe ve 
                            mimarlıkta bağın tekrar kurulmasını sağlayan, Antik Yunan filozof ve bilim insanlarının çalışmalarının 
                            çeviri yoluyla alındığı, deneysel düşüncenin canlandığı, insan yaşamı (hümanizm) üzerine yoğunlaşıldığı, 
                            matbaanın bulunmasıyla bilginin geniş kitlelerle paylaşımının arttığı ve radikal değişimlerin yaşandığı 
                            dönemdir. Çok teknik açıkladım, şimdi de nedenlere geçelim öyleyse.
                        </p>
                        <p className="a">
                            <i>Rönesans Neden İtalya'da Başladı?</i>
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    Coğrafi konumu nedeniyle birçok kültürün kesişim noktası olması.
                                </li>
                                <li>
                                    Önemli ticaret yollarının kesişme noktasında bulunması.
                                </li>
                                <li>
                                    Eski Roma İmparatorluğu'nun mirasçısı olması.
                                </li>
                                <li>
                                    Roma'nın dini bir merkez olması.
                                </li>
                                <li>
                                    İtalya'da siyasi birliğin bulunmayışı.
                                </li>
                                <li>
                                    İstanbul'un fethi ile Bizans'lı bilginlerin İtalya'ya göç etmesi.
                                </li>
                            </ul>
                        </span>
                        <p className="a">
                            Bu konuyu anladğını düşünerek diğer konulara geçmek istiyorum. Rönesans hareketinin nedenlerine ve sonçlarına
                            değinmek isityorum. Rönesans coğrafi keşifler sonucu ortaya çıkan ve sanat akımlarını destekleyen Mesen  
                            Sınıfı'nın da etkisiyle dinin dogmalarından kopuş ve bilime sanata yönelme, yani yeniden doğuş hareketidir. 
                            Yeniden doğuş denmesinin sebebi bilim konusunda Antik Yunan ve Roma Medeniyetlerine dönüş anlamında kullanılmaktadır.
                            Rönesans'ın çıkışını anlattığıma göre sonuçlarından da bahsedebilirim herhalde.
                            Sonuçları sana madde madde anlatmak istiyorum çünkü böyle kafanda daha rahat kalacağına inanıyorum.
                        </p>
                        <p className="a">
                            <i>Rönesans'ın Sonuçları :</i>
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    Özgür düşüncenin temelleri atıldı.
                                </li>
                                <li>
                                    Avrupa'da edebiyat, bilim, sanat gibi konularda gelişmeler yaşandı.
                                </li>
                                <li>
                                    Skolastik düşünce terk edildi, deney ve gözleme dayalı pozitşf dğşğnceler yayıldı.
                                </li>
                                <li>
                                    Özgür düşüncenin ortaya çıkmasıyla insanlar, dini eleştirmeye başladı ve bunun sonucunda da reform hareketlerine neden oldu.
                                </li>
                            </ul>
                        </span>
                        <img className="alice-1" src="ronesans-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Ruhun elle birlikte çalışmadığı yerde sanat olmaz."
                            </p>
                            <p>
                                <i>- Leonardo Da Vinci</i>
                            </p>
                        </span>
                        <p className="a">
                            Rönesans'a basit bir dönem olarak bakmak yanlış olurdu. Rönesans üzerinde derin araştırmalar yapan Burkhard: 
                            "Rönesans insanın keşfedilmesidir." demektedir. Gerçekten de Ortaçağ Avrupa’da insanın hiçbir kıymeti yoktu. 
                            Engizisyon mahkemelerinde yüz binlerce insan haksız yere ve çok defa sırf servetlerini ele geçirebilmek için 
                            öldürüldü. Papazlar çeşitli menfaatler karşılığında günahları affediyorlardı. Hatta cennetten yerler 
                            satıyorlardı. Mantık ve insanî esaslar kaybolmuştu. Dünya'nın döndüğü kanısına varan Galile ve daha pek çok 
                            düşünür çeşitli işkenceler görmüş pek çoğu öldürülmüştür. Bu itibarla Rönesans hareketi ilim ve teknolojideki 
                            ilerlemenin yanı sıra insan ve tabiat sevgisini de beraberinde getirdi. Rönesans`ın öncüleri, sanat 
                            faaliyetlerinin yanı sıra edebiyat, tarih ve arkeolojiye de önem verdiler. Resim ve tasvir anlayışı gelişti. 
                            Mimaride Gotik tarzı terk edilerek barok ve rokoko üslubu geliştirildi. Rönesans mimarlığının başlıca 
                            özellikleri ölçü, sadelik ve tabiiliktir. Bu şekilde İtalya’da başlayan Rönesans hareketi kısa zamanda bütün 
                            Avrupa’da yayıldı. Rönesans daha ziyade Fransa’da sanat; Almanya’da dini tablo ve resimler; 
                            İngiltere’de edebiyat; İspanya’da resim ve edebiyat alanında gelişti. İtalya’daki rönesans hareketinde eski 
                            Yunan ve Roma ediplerinden Tacitus, Sophokles, Domosten, Platon, Çiçeron ve Virgil’in eserleri tekrar ortaya 
                            çıkarıldı. İtalyan fikir adamı ve yazarlarından Machiavel, Tasso yetişip eserler verdiler. Machiavel’in Hükümdar 
                            adlı ütopyası meşhurdur. Ressamlardan Rafael aynı zamanda heykeltıraş, mimar ve edebiyatçı da olan Leonardo da Vinci, 
                            Mikelanj bu devirde İtalya’da yetişen sanatkarlardır.
                        </p>
                        <span className="kant">
                            <p>
                                "Mermere sıkışmış bir melek gördüm ve onu özgürlüğüne kavuşturuncaya dek mermeri oydum."
                            </p>
                            <p>
                                <i>- Michelangelo</i>
                            </p>
                            <p>
                                "Bana göre, sadece kendi gücüne dayanıp insan ve para gücüyle iyi bir ordu kurup gelebilecek her türlü saldırıya yanıt verebilen hükümdar, tam hükümdardır."
                            </p>
                            <p>
                                <i>- Machiavelli</i>
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