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
            <button className="link1" onClick={this.bas}>Olmak Ya Da Olmamak : William Shakespeare</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>William Shakespeare</h2></div>
                        <p className="a">
                            Sana Shakespeare'in hayatından bahsetmeyeceğim sevgili okuyucu. Amacım seni sıkmak değil Shakespeare'i sana 
                            sevdirmek. Bu sebepten ötürü sana tiyatroya getirdiklerini, eserlerini ve birbirinden güzel sözlerini ve anlamlarını
                            vermek istiyorum. Emin ol bu sana Shakespeare hakkında daha çok bilgi sahibi yapacak inan bana. Belki  
                            gelişitricimi tiyatroya ittiği gibi seni de tiyatro ile ilgilenmeni sağlayabilir. Hadi başlayalım öyleyse.
                            
                        </p>
                        <p className="a">
                            Shakespeare, dünyanın en seçkin drama yazarı olarak kabul edilmektedir. Dram türünün geişitiricisi ve en 
                            önemli yazarıdır kendisi ve harika dil bilgisi yeteneklerine sahiptir. Öyle ki İngiliz diline birçok yeni kelime 
                            türetmiştir. Tiyatro yazarlığı hayatına tarjedi ve komedi oyunları yazarak bşlayan Shakespeare, en ünlü eserleri
                            olan Hamlet, Macbeth, Kral Lear ve Otello trajedi türünün örnekleridir. Romantizm akımının etkisinde olan Shakespeare,
                            bu akımla beraber trajedi ve komedi türlerini birleştirerek Dram türünü tiyatroya kazandirmış ve üç birlik kuralını
                            yıkmıştır. Dünyada tiyatronun yaygınlaşmasını sağlamış ve dünyaya kült eserler bırakmıştır. Öyle ki Hamlet'in 
                            "Olmak ya da olmamak..." ile başlayan tiradı hala çeşitli oyunlarda hatırlatılmaktadır ve popüler kültür içerisinde 
                            yer edinmeyi başarmıştır.
                        </p>
                        <img className="alice-1" src="shakespeare-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Hayat... Bir aptalın anlattığı bir masal bu; sırf gürültü, patırtı, bir anlama geldiği de yok."
                            </p>
                        </span>
                        <p className="a">
                            Verdiğim bilgilerle Shakespeare'in ne kadar önemli bir insan olduğunu biliyorsun artık sevgili okuyucu. Şimdi de
                            sana bazı eserlerinde geçen ve hoşuma giden sözlerini vereceğim. Belki bu Shakespeare'i gerçekten sevmeni 
                            sağlayabilir.
                        </p>
                        <p className="a">
                            MACBETH :
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    "Kendini boşuna harcamış olur insan, dilediğine ulaşıp da sevinç duymazsa. Yıktığın hayat kendininki olsun daha iyi, yıkmakla kazandığın yapmacık bir mutluluksa."
                                </li>
                                <li>
                                    "Bir erkeğe yaraşan her şeyi yapmayı göze alabilirim; ama daha fazlasını yapmak erkeklik değildir."
                                </li>
                                <li>
                                    "Hayat, gelip geçen bir gölgedir."
                                </li>
                            </ul>
                        </span>
                        <p className="a">
                            KRAL LEAR : 
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    "Sinekler neyse yaramaz oğlanlara, biz de oyuz tanrılara. Öldürüyorlar bizi zevkleri için."
                                </li>
                                <li>
                                    "Kaçıklığın tekelini alsak komisyon isterler." - Soytarı
                                </li>
                                <li>
                                    -Cordelia: "Beni tanıdınız mı efendim?"
                                    -Kral Lear: "Tanıdık bir ruhsun sen. Ne zaman öldün?"
                                </li>
                            </ul>
                        </span>
                        <p className="a">
                            OTHELLO : 
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    "İnsanlar göründükleri gibi olmalıdır. Eğer değillerse hiç görünmesinler daha iyi."
                                </li>
                                <li>
                                    "Ne kadar da fakirdir sabrı olmayanlar."
                                </li>
                                <li>
                                    "Yaşamak azap haline geldikten sonra yaşamaya devam etmek ahmaklıktır. Ölüm bizi iyi edecekse ilacımız sayılır."
                                </li>
                            </ul>
                        </span>
                        <p className="a">
                            HAMLET : 
                        </p>
                        <span className="shakespeare">
                            <ul>
                                <li>
                                    "Gerçeği büyültmek ya da küçültmekle bilgisizleri güldürebilirsiniz, ama bu bilenleri üzer; oysa tek bir bilgili
                                    dost, bilgisiz bütün bir kalabalıktan daha önemli olmalıdır sizin için."
                                </li>
                                <li>
                                    "Olmak ya da olmamak, işte bütün mesele bu. Katlanmak mı iyi zalim kaderin oklarına, yumruklarına, yoksa çılgın 
                                    denizlere karşı gelip bir son vermek mi? Ölmek uyumak hepsi bu kadar, yalnızca uyumakla bitebilir bütün a
                                    cıları yüreğin ve çektiği bütün kahırları bedenin..."
                                </li>
                            </ul>
                        </span>
                        <img className="alice-1" src="shakespeare-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Olmak ya da olmamak, işte bütün mesele bu!
                            </p>
                            <p>
                                Düşüncemizin katlanması mı güzel
                                
                            </p>
                            <p>
                                Zalim kaderin yumruklarına, oklarına

                            </p>
                            <p>
                                Yoksa diretip bela denizlerine karşı

                            </p>
                            <p>
                                Dur, yeter demesi mi?

                            </p>
                            <p>
                                Ölmek, uyumak sadece!

                            </p>
                            <p>
                                Düşünün ki uyumakla yalnız

                            </p>
                            <p>
                                Bitebilir bütün acıları yüreğin,

                            </p>
                            <p>
                                Çektiği bütün kahırlar insanoğlunun.

                            </p>
                            <p>
                                Uyumak, ama düş görebilirsin uykuda, o kötü.

                            </p>
                            <p>
                                Çünkü, o ölüm uykularında

                            </p>
                            <p>
                                Sıyrıldığımız zaman yaşamak kaygısından

                            </p>
                            <p>
                                Ne düşler görebilir insan, düşünmeli bunu.

                            </p>
                            <p>
                                Bu düşüncedir felaketleri yaşanır yapan.

                            </p>
                            <p>
                                Yoksa kim dayanabilir zamanın kırbacına?

                            </p>
                            <p>
                                Zorbanın kahrına, gururunun çiğnenmesine

                            </p>
                            <p>
                                Sevgisinin kepaze edilmesine

                            </p>
                            <p>
                            Kanunların bu kadar yavaş
                            </p>
                            <p>
                            Yüzsüzlüğün bu kadar çabuk yürümesine
                            </p>
                            <p>
                            Kötülere kul olmasına iyi insanın
                            </p>
                            <p>
                            Bir bıçak saplayıp göğsüne kurtulmak varken?
                            </p>
                            <p>
                            Kim ister bütün bunlara katlanmak
                            </p>
                            <p>
                            Ağır bir hayatın altında inleyip terlemek
                            </p>
                            <p>

                            Ölümden sonraki bir şeyden korkmasa
                            </p>
                            <p>
                            O kimsenin gidip de dönmediği bilinmez dünya
                            </p>
                            <p>
                            Ürkütmese yüreğini?
                            </p>
                            <p>
                                
                                Bilmediğimiz belalara atılmaktansa
                            </p>
                            <p>
                            Çektiklerine razı etmese insanları?
                            </p>
                            <p>
                            Bilinç böyle korkak ediyor hepimizi:
                            </p>
                            <p>
                                Düşüncenin soluk ışığı bulandırıyor
                            </p>
                            <p>
                                Yürekten gelenin doğal rengini.
                            </p>
                            <p>
                                Ve nice büyük, yiğitçe atılışlar
                            </p>
                            <p>
                                Yollarını değiştirip bu yüzden
                            </p>
                            <p>
                                Bir iş, bir eylem olma gücünü yitiriyorlar."
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