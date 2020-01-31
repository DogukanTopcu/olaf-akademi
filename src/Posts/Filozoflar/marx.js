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
            <button className="link1" onClick={this.bas}>Sosyalizm Yükseliyor : Karl Marx</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Karl Marx</h2></div>
                        <p className="a">
                            Şimdiden peşin peşin söyleyeyim sevgili okuyucu, Karl Marx'ı iki bölümde anlatmayı düşünüyorum.
                            Şimdiki yazacağım Karl Marx daha yüzeysel ve en önemli bilgilerini içeriyor. İkinci anlatacağım ise 
                            daha detaylı çalışmalarından bahsedeceğim. Eğer ikinci kısmın hemen gelmesini istiyorsan geliştiricimin 
                            g-mail hesabını en alta bıraktım orada ona ulaşabilir ve ikinci kısmın yazılmasını sağlayabilirsin.
                            
                        </p>
                        <p className="a">
                            Karl Marx, meşhur Sosyalizm'in kurucusu ve dünyayı sarsan ve şimdiki yaşantımızın oluşmasını sağlayan 3 filozoftan
                            biri (Diğerleri Nietzsche ve Freud). İşçi hakları savunucusu ve varoluşçu aynı zamanda materyalist.
                            Aslında buradan bile yeterli bilgiye sahipsin, fakat sevgili okuyucu ben sana yalnızca Marx'ı anlatmak istemiyorum 
                            ben her filozofu anlattığım gibi Marx'ı ve felsefeyi sana sevdirmeye de çalışacağım.
                            Başta söyleyeyim ben bir programım ve geliştiricim ne derse onu yapabilirim o yüzden eğer sosyalistsen benden 
                            sosyalizmi veya komunizmi savunmamı bekleme. Neyse konumuz Karl Marx ve felsefesi. 
                        </p>
                        <span className="kant">
                            <p>
                                "Cimri aklını yitirmiş bir kapitalist; kapitalist ise aklı başında bir cimridir."
                            </p>
                        </span>
                        <p className="a">
                            Karl Marx'ın hayatını anlatmak çok istemiyorum çünkü çok ilgi çekici ögelere rastlamadım. Ben sana direkt 
                            eğlenceli kısmı anlatacağım, felsefesini ve sosyalizmini.
                        </p>
                        <p className="a">
                            Geliştirdiği Sosyalizm fikrinden başlayalım. Marx radikal sol bir gazetenin (Alman-Fransız Yıllıkları)
                            eş editörüydü. Onun komünist hayatı burada başladı. Şunu belirtelim sosyalizm görüşü Karl marx'tan önce de vardı
                            fakat Marx sosyalzimi geliştirmiş ve siyasi düzeye taşımıştır. Özellikle yazdığı Komünist Manifesto ile 
                            Komünizmi geniş kitelelere ulaştırmış ve sosyalizmi geliştirerek, Bilimsel Sosyalizmi ortaya atmıştır.
                            Bilimsel sosyalizmden bahsetmek gerekirse Karl Marx'ın öncülük ettiği sosyal-politik-ekonomik teoriyi tanımlar.
                            İlk sosyalist düşünce akımları olan Ütopik Sosyalizme karşı, diyalektik materyalizme dayalı, eleştiren-yargılayan 
                            bilimsel olgular çerçevesinde evrensel tezler öne sürer. Bilimsel sosyalizm; tarihsel akımları ve olayları sosyal, 
                            ekonomik ve nesnel koşullar çerçevesinde inceleyerek bugün için olası sonuçları ve gelişmeleri anlamak ve 
                            öngörmek için bilimsel bir metoda başvurur. Bu açıdan bilimsel sosyalistler sosyal ve politik gelişmeleri 
                            'diyalektiğin en elemanter iki unsuru olan zaman ve mekân kavramlarını dikkate alarak' değerlendirirler.
                            Komünist Manifestosunu inceleyecek olursak, bu manifesto sayesinde dünyada küçük gruplar halinde bulunan 
                            komünistleri dünyaya tanıtmış ve komünizmin yayılmasını sağlamıştır. Bu kitap yayımlanmadan önce de bir ansiklopedi
                            yayımlamış fakat çok uzun olduğu için insnalar tarafından okunmamaış ve benimsenememişti.
                        </p>
                        <img className="alice-1" src="marx-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Kitapları yalayıp yutmaya mahkum bir makineyim ben."
                            </p>
                        </span>
                        <p className="a">
                            Biraz da Marxizm'den bahsedelim. Marksizm, özgün bir siyasal felsefe akımı, tarihin diyalektik materyalist 
                            bir yorumuna dayanan ekonomik ve toplumsal bir dünya görüşü, kapitalizmin Marksist açıdan çözümlenmesi, 
                            bir toplumsal değişim teorisi, Karl Marx'ın ve Friedrich Engels'in çalışmalarından çıkarılan, insanın 
                            özgürleşmesiyle ilgili bir düşünce sistemidir.
                        </p>
                        <p className="a">
                            Rusya'da komünist devrime neden olan Marksizm-Leninizm, Leninizm olarak da adlandırılan, Lenin tarafından Marksizmin geliştirilmesine verilen 
                            isimdir. Siyasi alanda farklı hatta birbirinin karşıtı özneler Marksist-Leninist olduklarını öne sürebilirler. 
                            Genel olarak içeriğinde öne çıkan yanlar kapitalizmin bir devrim sonunda devrilmesi, proletarya diktatörlüğünün 
                            kurulması, öncü komünist parti önderliğinde sosyalizm yolunda ilerlenmesidir. Leninizm, kapitalizmin ancak 
                            devrimle devrilebileceğini öne sürerek evrimci reform çabalarını mahkûm eder. Leninizme bağlı bir öncü 
                            partinin temel amacı proletaryaya sınıfı bilincinin taşınmasıdır. Sınıf ve tarih bilincine sahip işçi 
                            sınıfı örgütlenecek ve siyasi iktidara el koyacaktır. Devrimin ardından iktidardaki işçi sınıfı kendi 
                            diktatörlüğünü kurarak sosyalizmi kurmaya girişecektir.
                        </p>
                        <p className="a">
                            Peki sosyalizm nereden ve nasıl ortaya çıktı? Sosyalizmin çıkış amacı kapitalist ekonomiyi ortadan kaldırmak ve yerine ortak 
                            mülkiyet anlayışına dayanan bir ekonomi oluşturmaktı. Bu amaç devrimci, ütopik bir karakter taşıyordu. Zaten 
                            Marx'tan sonra sosyalizmin bilimsel bir nitelik taşıdığını söylemiştik. Ancak sosyalizm 19. yüzyılın sonlarından itibaren fikirsel ayrılığa uğradı. 
                            Bir kısım sosyalist, işçilerin haklarının düzenlenmesinin, ücretlerin arttırılmasının ve çalışma şartlarının 
                            iyileştirilmesinin, sendikalar ve siyasi partiler aracılığıyla olmak üzere aşamalı bir şekilde kanunlar ile 
                            yapılması gerektiğini düşünüyordu. Diğer bir kısım ise devrimci yollardan sosyalizmin sağlanacağına inanıyordu. Böylece sosyalizm, devrimci yolları izleyecek olan 
                            komünizm ve evrimci, reformist yolları izleyecek olan sosyal demokrasi olarak ikiye bölündü. Öncesinde de 
                            Komünizm terimi ilk kez 1827’de İngiltere'de, Robert Owen’ın takipçilerini adlandırmak için kullanılmıştı.
                        </p>
                        <p className="a">
                            Daha anlatacağım ekonomik boyutu da var fakat onu ilk başta belirttiğim gibi ikinci bölümünde anlatmak istiyorum.
                            İkinci bölümün en yakın zamanda gelmesini istiyorsan en alttaki g-mail hesabına mesaj 
                            atabilirsin. Şimdi de felsefesine geçelim ve bitirelim sevgili okuyucu.
                        </p>
                        <img className="alice-1" src="marx-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Din halkın afyonudur."
                            </p>
                        </span>
                        <p className="a">
                            Sana Marx'ın materyalist olduğundan bahsetmiştim sevgili okuyucu. Karl Marx ve Friedrich Engels, Hegelin idealist 
                            diyalektiğini baş aşağı çevirerek iki ayrı kavramı ortaya çıkardılar: diyalektik maddecilik ve tarihin 
                            akışına maddeci bir açıklama getiren tarihsel materyalizm. Marx'ın felsefesinin temelini üretici güçler 
                            ve bu güçlerin toplumsal hayata yansımaları olan ilişkileri(özellikle sınıf ilişkileri;serf-lord,işçi-işveren 
                            vb.) oluşturur. Bu temel toplumsal ilişkilerden bilimsel, ekonomik, hukuki, ahlaki ideolojik formlar ve 
                            değerler doğar. Bütün toplumsal değerler sınıf ilişkilerinin yansımasıdır ve toplumu şekillendiren bu 
                            değerlerin alt yapısını ekonomik çıkara dayalı sınıf ilişkileri oluşturur. Marx ve Engels "maddecilik" 
                            terimini günlük ekonomik ve maddi ihtiyaçların tarihin dönemlerini oluşturan ve şekillendiren etkenler 
                            olduğu yönündeki tarihsel bakış açısı için kullandılar. Alman idealist felsefesine karşı maddecilik 
                            toplum ve gerçekliğin, insanların barınak, yiyecek, giyecek gibi maddi ihtiyaçlarını karşılamak için 
                            devam ettirdikleri basit ekonomik hareketlerden kaynaklandığını söyler. Maddecilik, insanların fiziksel 
                            emek ve üretici faaliyetler ile günlük ihtiyaçlarını karşıladıkları gerçeğini başlangıç noktası olarak alır. 
                            Tek başına bu ekonomik faaliyet, Marx'a göre, siyasi, yasal ve dini modelleri içinde barındıran toplumsal 
                            ilişkiler sistemine neden olur.
                        </p>
                        <p className="a">
                            Büyük ihtimalle materyalizmini pek iyi anlatamadım bu yüzden sana çok basit bir cümle kurarak materyalizmi 
                            anlatabilirim sanırsam. Şimdi, Materyalistlerin ortak yönü insan yaratılışında önce maddenin, sonra da aklın 
                            oluştuğu yönündedir. Hegel'in diyalektik idealizmini değiştirerek, idealist materyalizmi oluşturmuştur. Peki ne demek bu idealist
                            materyalizm? Şöyle anlatayım diyalektik, doğadaki zıtlıkların birleşerek yeni oluşuma girmesidir. ( tez + antitez = sentez )
                            Buna göre doğada oluşan maddeler zıtlıklarıyla birleşip yeni sentezler yaparak aklı oluşturmuştur diyebiliriz.
                        </p>
                        <img className="alice-1" src="marx-3.png"></img>
                        <p className="a">
                            Marx'ın genel olarak felsefeye katkıları şöyledir: baş aşağı olduğunu düşündüğü Hegel’in diyalektik 
                            düşüncesini ayakları üzerine çevirdiğini ifade ederek diyalektiği ekonomi temelinde insanlık tarihine 
                            uygulamıştır. Dolayısıyla Hegel’in tarihsel idealizmini, ekonomi temelinde tarihsel materyalizme 
                            dönüştürmüştür.
                        </p>
                        <p className="a">
                            Evet, sevgili okuyucu sana Marx'ın önemli bilgilerini anlattım. Yine hatırlatayım eğer yakın bir zamanda Marx'ın
                            ikinci kısmının gelmesini istiyorsan geliştiricime g-mail'den ulaşabilirsin.
                        </p>
                        <span className="kant">
                            <p>
                                "Hadi oradan. Son sözler yeterince doğru söz söylememiş aptallar içindir."
                            </p>
                        </span>


                        <p className="gMail">
                            dogukantopcu35@gmail.com
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