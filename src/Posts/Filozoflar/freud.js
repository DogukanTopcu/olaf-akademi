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
            <button className="link1" onClick={this.bas}>Psikanalizin Kurucusu : Freud</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2> Sigmund Freud</h2></div>
                        <p className="a">
                            Freud'u büyük ihtimalle psikanaliz, libido ve ego kavramlarından tanırsın. Ben de bu yazımda bu kavramlara bir açıklık getireceğim. 
                            Libido, ego, psikanaliz ve sürrealizm akımına değineceğim.
                            
                        </p>
                        <p className="a">
                            Libido kavramı ile başlayalım. Libido, insanın doğuştan gelen ve bastırılan cinsel içgüdülerine diyebiliriz ama
                            genel olarak alırsak asıl anlamı şudur: Bastırılmış duyguları insan benliğinde ateşleyen terimdir.
                            Peki ne demek bu bastırılmış duygular? Sana Sofi'nin Dünyası adlı kitapta geçen güzel bir örnekle  açıklayayım bunu.
                        </p>
                        <p className="a">
                            "Şimdi bir tiyatro sahnesinde olduğunu düşün ve sahnede de bir gösteri veriliyor. Kendini bilmezin teki çıkıp gösteriyi
                            sabote etmeye çalışıyor diyelim. Bu durumda görevliler bu kişiyi tiyatro salonundan çıkartır değil mi. Ama bu kapı dışarı 
                            atılan kişi boş durur mu? Tabi ki hayır. Ara ara kapıya vurmaya ve içeri girmeye çalışır, daha doğrusu zorluk 
                            çıkartmaya başlar."
                        </p>
                        <p className="a">
                            Umarım örneği anlatabilmişimdir sevgili okuyucu. Anlamadıysan önemli değil çünkü daha açıklamasını yapacağaım.
                            Şimdi bu zorluk çıkartan kişi senin bir davranışın, bir duygun ve bu kişiyi kapı dışarı eden görevliler de toplum, aile yani kısaca çevre.
                            Bu anlamda senin bu topluma aykırı davranışın bastırılmış oldu, ama tamamen susmadı ve beyninin bir köşesinde hala seni 
                            darlamaya devam edecek. Şimdi de çocukluğuna bakmanı istiyorum sevgili okuyucu. Eminim senin de bastırılmış birçok duygun vardır.
                            Bunlar genellikle ahlak dışı olarak sayılan duygulardır, fakat insan doğasının da bir parçasıdır. Çocukluk demiştim, 
                            bir  örnek vereyim: Çocukken toplum içinde rahatça şarkı söylerken bir komşu sana "Sus artık dır dır başımın etini yedin!"
                            dediyse büyük ihtimalle gururunu kırdı ve herkesin önünde şarkı söyleme konusunda bastırılmış bir duygun oluştu.
                        </p>
                        <span className="kant">
                            <p>
                                "Ne biçim ilerleme kaydediyoruz. Orta Çağda olsa beni yakarlardı. Şimdiyse kitaplarımı yakmakla yetiniyorlar."
                            </p>
                        </span>
                        <p className="a">
                            Peki libido neden cinsellikle bağdaştırılıyor. Bunun iki nedeni var. Birincisi, üstte bahsettiğim bir tanımının da 
                            olması; ikincisi, bastırılan duyguların çoğunluğunun cinsel içerikli duygular olmasıdır. Yani "Libidom yükseldi" gibi yargılar 
                            yanlış değildir. O halde bu konuyla ilgili de konuşalım. Freud libido kavramı konusunda şunları söylüyor:
                        </p>
                        <p className="a">
                            Birey çocukluk döneminde annesine ilgi duyar ve babasını da bir rakip olarak görür. Aynı durumun tersi kız çocuklarında
                            da görülmektedir. Hatta durum öyle bir konuma gelir ki birey büyüdüğünde evlendiği kişinin özellikleri aile bireylerine
                            benzer. Bunu en güzel örneğini "How I Met Your Mother" adlı dizinin bir bölümünde görebilirsin sevgili okuyucu. Şu an
                            hangi bölüm olduğu aklıma gelmiyor. Neyse bu bilgi eşini seçme konusunda seni bilgilendirir umarım okuyucu.
                        </p>
                        <img className="alice-1" src="freud-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "İd neredeyse, ego orada olacaktır."
                            </p>
                        </span>
                        <p className="a">
                            Öyleyse İd, Ego ve Süperego kavramlarına geçelim sevgili okuyucu. Önce kelime anlamlarını vereyim.
                            İd, Alt Bilinç; Ego, Benlik ve Süperego, Üst Benlik anlamlarına gelmektedir ve bunlar Freud'a zihnin oluşum
                            süreçlerini belirtiyordu. Freud bilinci id, ego ve süperego üç ayrı ruhsal kategoriye ayırır.
                            Buradan yola çıkarak da insanın toplum içerisindeki sosyal durumu analiz edebilmektedir.
                        </p>
                        <p className="a">
                            "İd", içimizdeki doyumsuz hayvandır. Kendisini yalnızca ihtiyaçlara göre ayarlayan, eleştiri kabul etmeyen, 
                            güdüsel, durdurulamayan yanımızdır. Buna verilebilecek en iyi örnek cinsellik, saldırganlık, açlık, kin vb. 
                            Bu yönü ağır basan birey vicdan olgusundan yoksundur. İdi baskın olarak bebeklerde görebiliriz. İd için aynı 
                            zamanda kişiliğin çocuksu tarafı da denilebilir.
                        </p>
                        <p className="a">
                            Bilincin orta aşaması olarak da, Freud'un izah ettiği Benlik (Ego), doğa ya da çevre ile id arasinda 
                            bir denge unsurudur. Çevrede ya da doğada bulunan maddelerin uygunluğunu yine tarafsız bir zeminde 
                            kontrol eder ve bu nesnelerin uygun olup olmadığını belirler. Aynı zamanda eleştiri yapan bölüm olup, 
                            güdüleri durdurma ile ilgilenir.  Örneğin alt bilinç olarak izah edilen id acıktığı zaman hemen bir 
                            şeyler bulup yemeyi amaçlar. Ancak benlik (ego) bunun daha uygun bir zamanda olması veya olmaması gerektiğini 
                            hatırlatıp onu dizginler.
                        </p>
                        <p className="a">
                            Üst benlik (süperego) kural ve değerler bütünlüğü içinde insana yön veren bölümdür. Bu bölüme vicdan da 
                            denilebilir. Bu bölüm daha çok emir ve yasaklara göre bir yol belirler. İyi ya da kötüyü birbirinden ayırmaya 
                            başladığımız süreçlerde gelişir ve olgunlaşır. Zamanla aile, anne ve baba, çevre, okul, din, geleneklerden 
                            öğrendiklerimiz içselleştirilir ve bizim değer ve kurallar bütünlüğümüzün oluşmasına yardım eder. Bu açıdan 
                            bu üç temel bilinç şekillenmesinin belli düzeylerde bizlerde yetersiz olması gerçekten iyi olmaz. İnsan, 
                            düşünen bir varlık ve zararı önceden hesaplayabilecek; sonradan öğrenebilecek bir yapıya sahiptir. Kimi bunun 
                            Tanrıdan geldiğini düşünür, kimi de Freud gibi Evrim Kuramı şeklinde izah eder. İkisinde de ortak olgu 
                            vicdandır sevgili okuyucu.
                        </p>
                        <p className="a">
                            Boşuna uzatıp kafa karışıklığı yaratmak istemiyorum sevgili okuyucu, bu kadar yeterli aslında.
                            Akademik bilgiler istiyorsan Freud'un kitaplarını dikkatlice okumanı öneririm. Konuya dönelim. Aklına bir soru
                            takılmış olmalı. Ego ile ilgili. İnsanlar neden egoyu bencil insanlar için kullanıyorlar? Evet bu soru bana da 
                            biraz garip geldi. Oysa bu tip ben merkezli insanlara İd demek daha mantıklı. Ego kavramına haksızlık ediliyormuş 
                            gibi geliyor bana.
                        </p>
                        <img className="alice-1" src="freud-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Gittiğim her yerde, benden önce oraya gitmiş bir şair buldum."
                            </p>
                        </span>
                        <p className="a">
                            Şimdi de son kavramımız olan Psikanalize değinelim. Psikanaliz Sigmund Freud'un çalışmaları üzerine kurulmuş bir 
                            psikolojik kuramlar ve yöntemler ailesidir. Bir psikoterapi tekniği olarak psikanaliz, hastaların zihinsel 
                            süreçlerinin bilinçdışı unsurları arasındaki bağlantıları ortaya çıkarmaya çalışır. Analistin amacı; hastanın 
                            analistine transferansının fark edilmeyen ya da bilinçdışı etkileşimlerinden, yani yaşamını ve ilişkilerini 
                            olumsuz etkileyen ve özgürlüğünü kısıtlayan ilişki kalıplarını fark etmesine yardım etmektir. Psikanaliz aynı zamanda
                            bir edebi akımın gelişmesinde de etkili olmuştur. Bu akım sürrealizmdi. Sürrealizm sarhoşken, bilinç kapalıyken
                            eserin yazılmasıyla oluyordu. Bu teknik şairin veya yazarın derin duygularına inmeye yarıyor ve daha dürüst şiirler, 
                            eserler vermesini sağlıyordu.
                        </p>
                        <span className="kant">
                            <p>
                                "Bir gün dönüp geçmişe baktığınızda, mücadelelerle geçen yılların hayatınızın en güzel yılları olduğunu fark edeceksiniz."
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