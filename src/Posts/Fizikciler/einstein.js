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
            <button className="link1" onClick={this.bas}>Tanrı Zar Atmaz : Albert Einstein</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Albert Einstein</h2></div>
                        <p className="a">
                            Hem dünyanın en önemli teorik fizikçisi olmak hem de popüler kültürün içerisinde 
                            yer edinmek... Einstein her ikisini de başarmıştı sevgili okuyucu. Ama o çok daha 
                            büyük bir şey yaptı, yillardır süregelen Newtoncu fiziğin kurallarını değiştirdi.
                        </p>
                        <span className="einstein">
                            <p>
                                "Gerçeklikle karşılaltırıldığında bilimde vardığıız düzey ilkeldir, çocuk oyuncağıdır.
                                Ama sahip olduğumuz en değerli şey odur."
                            </p>
                        </span>
                        <p className="a">
                            Hans Muehsam'a yazdığı mektupta geçen bir sözdür bu. Daha gerçeklik hakkında 
                            hiçbir şey bilmediğimizi ve keşfedilecek bir sürü konunun olduğunu söylemektedir burada.
                            E tabi bir insanın çıkıp da evrenin tüm sırlarını ortaya çıkaracağını düşünmezdik fakat
                            Einstein'ın insanlığı bilim konusunda çok ileri taşıdığı da su götürmez bir gerçektir.
                            Özel görelilik, genel görelilik, kütle-enerji eşitliği, ışığın bükülebildiği...
                            Einstein bu fikirleriyle adeta bilim konusunda emekleyen bir bebeği yürütmüştür denebilir.
                        </p>
                        <p className="a">
                            Gereksiz uzun olmaması bakımından hayatından bahsetmeyeceğim sevgili okuyucu. Eğer
                            bahsetmemi istersen geliştiricime g-mail'den 2. yazının gelmesini isteyebilirsin.
                            Hesabı en alta bıraktım. Bu yazımda sana makalelerinden ve fikirlerinden bahsedeceğim
                            sevgili okuyucu. Bu sebepten ötürü seni fiziğin ve Einstein'in altın yılına -Einstein'in
                            Annus Mirabilis (Mucizevi Yıl) dediği- 1905 yılına götürmek isterim. Bu dönemde Einstein
                            birbirinden önemli 4 makale yayımlamıştı:
                        </p>
                        <p className="a">
                            -> 9 Haziran : Işığın Oluşumu ve Dönüşümü Üzerine Bir Görüş.
                        </p>
                        <p className="a">
                            Bu makalesi kuantum kuramının temellerinin atılmasında önemli bir katkı sağladı. 
                            Konusu Fotoelektrik Etki olan makalede Einstein, ışık enerjisinin kuantum olarak adlandırılan
                            yerde farklı miktarlarda emilebileceğini veya yayılabileceğini öngörmektedir. Fotoelektrik
                            Etki üzerindeki araştırmaları sebebiyle Einstein 1921 yılında Nobel Ödülüne layık görülmüştür.
                        </p>
                        <p className="a">
                            -> 17 Temmuz : Durağan Bir Sıvı İçindeki Asılı Duran Parçacıkların Moleküler Kinetik Kuramının
                            Çerçevesindeki Hareketleri Üzerine.
                        </p>
                        <p className="a">
                            Makalenin başlığından da anlaşılacağı üzere Einstein'in Brown Hareketi üzrindeki çalışmasından
                            bahsetmektedir. Brown hareketi kısaca sıvıdaki asıltı büyük taneciklerin küçük taneciklere
                            çarparak yaptığı rastlantısal hareketlerdir.  Bu makalesinde ayrıca atomların varlığına
                            bir kanıt da sunmuştur Einstein.
                        </p>
                        <p className="a">
                            -> 6 Eylül : Hareketli Cisimlerin Elektrodinamiği.
                        </p>
                        <p className="a">
                            Özel görelilik yani izafiyet teorisinden bahsettiği makalesidir. Bu teoremi, uzaklığın
                            ve zamanın gözlemciye bağlı olarak değişebileceğini ifade ederek Newton'un mutlak uzay-zaman
                            kavramını anlamsızlaştırır. Einstein ışığın nerede ve ne hızda olduğuna bakmaksızın her zaman
                            boşlukta yaklaşık 300.000.000 m/s olarak hesaplandığını söylemekle birlikte, zamanın
                            ise gözlemciye bağlı olarak değişebileceğinden bahsetmektedir. Yani evrenin sabiti
                            Newton'un dediği gibi zaman değil ışık hızıdır.
                        </p>
                        <img className="alice-1" src="einstein-1.jpg"></img>
                        <p className="a">
                            -> 21 Kasım : Bir Cismin Eylemsizliği Enerji İçeriğine Bağlı Mıdır?
                        </p>
                        <p className="a">
                            Meşhur E=mc^2 formülünün geçtiği makale bu işte sevgili okuyucu. Bu makalede Einstein kütle-enerji
                            eşitliğini konu edinir, ve her şeyin enrjiden var olduğunu söyler. Aynı zamanda
                            ışığın gravitasyon (kütle çekim) ile bükülebileceğinden bahsetmektedir. Kütle-enerji
                            ilişkisine geri dönelim. Her maddenin enerjiden oluştuğunu söylemiştim, bu enerji
                            öyle bir enerji ki bir atacın enerjisi, Hiroşima'ya atılan atom bombasından
                            çıkan enerjiye eşit büyüklüktedir. 
                        </p>
                        <img className="alice-1" src="einstein-2.jpg"></img>
                        <p className="a">
                            Albert Einstein bu mucizevi yıldan 10 yıl sonra Genel Görelilik Kuramı ile dünyayı bir
                            kez daha sarsmayı başarmıştı. Özel görelilik düzgün doğrusal (ivmesiz) hareketleri
                            kapsarken, genel görelilik ivmeli hareketleri de kapsamaktaydı. Klasik fizikte gravitasyon,
                            kütlesel nesneler arasında çekim gücü olarak algılanıyordu. Örneğin dünyayı yörüngede tutan,
                            kütlesi daha büyük olan güneşin çekim gücüydü. Genel görelilik kuramına göre ise
                            gezegenleri yörüngelerinde tutan yörüngenin yer aldığı uzay kesiminin güneşin kütlesel
                            etkisinde kavisli bir yapı oluşturmasıdır. Genel görelilik aynı zamanda gravitasyon
                            ile eylemsizlik ilkesini "Gravitasyon Alanı" adı altında birleştirdi.
                        </p>
                        <p className="a">
                            Evet sevgili okuyucu, Einstein'in fikirleri ve çalışmaları hakkında az da olsa bilgi
                            sahibisin artık. Yazının gereksiz uzun olmaması adına sana en önemli çalışmalarını verdim.
                            Eğer ikinci bölümünün gelmesini istersen (2. bölümde hayatından ve 1930 sonrası 
                            çalışmalarından bahsetmeyi düşünüyorum) geliştiricime g-mail adresinden ulaşabilirsin,
                            en alta hesabını yazdım.
                        </p>
                        <p className="a">
                            Her şeyden önce sevgili okuyucu şunu unutmamanı isterim Einstein hakkında: Bu adam
                            bir patent ofisinde çalışan sıradan bir insandı ve dünyayı değiştiren fikirler geliştirdi.
                            Eğer sen de kendini geliştirirsen -bu vb. sayfaları okursan- Einstein gibi olabilirsin.
                            Daha gerçeklik hakkında çözülmemiş çok soru var. Unutma ki bilim konusunda insanlık daha yeni yürümeye başladı,
                            koşmasını da sen sağlayabilirsin.
                        </p>
                        <span className="gMail">
                           <p>
                               dogukantopcu35@gmail.com
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