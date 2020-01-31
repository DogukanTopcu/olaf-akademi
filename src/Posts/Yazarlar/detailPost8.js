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
            <button className="link1" onClick={this.bas}>Cesur Yeni Dünya : Aldous Huxley</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Aldous Huxley</h2></div>
                        <p className="a">
                            Sana bir distopya yazarından bahsedeceğim sevgili okuyucu, ve onun Cesur Yeni Dünya'sından 
                            bahsedeceğim.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Dertlerini gözyaşlarında boğmak isteyenlere, dertlerin yüzme bildiğini söyle."
                            </p>
                        </span>
                        <p className="a">
                            Kısaca hayatına deyinelim sonra da Cesur Yeni Dünya distopyasına geçeriz. Huxley, İngiltere'nin 
                            Sussex bölgesindeki Godalming'de doğdu. Eton College'da okuduğu sıralar gözlerindeki bir 
                            rahatsızlık yüzünden kör olma tehlikesiyle karşılaşınca, öğrenimine ara vermek zorunda kaldı. 
                            Sonradan Oxford Üniversitesi'ndeki Balliol College'da okudu. Romanları ve denemeleriyle tanınmış 
                            olmasına karşın kısa hikâyeler, şiir, gezi yazıları, film hikâyeleri ve senaryolar ile de uğraşmıştır. 
                            Roman ve denemelerinde sosyal norm ve idealleri, bilimin insan yaşamında yanlış kullanılımını eleştirmiştir. 
                            Parapsikoloji ve mistik temelli felsefelerle ilgilenmiş ve bu konularda yazılar kaleme almıştır. Özellikle 
                            Türkçeye "Kadim Felsefe" adıyla tercüme edilen "Perennial Philosophy" adlı eseri Perennial Felsefeyi 
                            çeşitli çevrelerde yeniden gündeme taşımıştır. En çok da Cesur Yeni Dünya adlı distopyası ile tanınmaktadır.
                        </p>
                        <img className="alice-1" src="huxley-1.jpg"></img>
                        <p className="a">
                            Hayatı konusuna değindik, şimdi de distopyasına gelelim. Okumama ihtimaline karşılık kitabı anlatmaktan kaçınacağım ama bazı
                            kilit kısımları anlatmadan da olmaz şimdi. Roman her şeyin sistem tarafından düzenlendiği bir dünyada geçiyor. Bu 
                            sistem, çocukların doğma sayısından tutun da popülasyonun hangi sınıflardan oluşacağına ve bu sınıfların kişisel
                            özelliklerine kadar kontrol ediyor. Aslında düzene bakıldığında her şey ideal olduğu çok rahat görülmekte, hasta oranı
                            sıfır durumda, insan popülasyonu istenildiği gibi ayarlanıyor, evlilikler ve doğum yapılması yasak, insanlar cinsel ihtiyaçlarını
                            karşılıklı çıkar şekilde karşılıyorlar.(Tamam bu tanım biraz saçma oldu kabul ediyorum) Anlayacağın insanlığın tüm problemleri bitmiş,
                            savaşlar yok, hastalıklar yok, aslında belli bir mülk kavramı da var diyemeyiz herkes istediğine sahip olabiliyor.
                            Burada sorun şu aslında sevgili okuyucu, insanların robottan bir farkları kalmamış durumda, yaşamak, çalışmak ve eğlenmek
                            dışında yaptıkları hiçbir şey yok, kısacası hayattaki tüm eğlenceni kaybetmekten şikayetçi Huxley. 
                        </p>
                        <p className="a">
                            Bu ne garip distopya der gibisin, e haklısın da. Çoğu kişinin ütoyası bu anlattıklarım. Şu anda da insanlar buna ulaşmaya çalışmıyorlar mı?
                            "Hastalıklar olmasın, evlilik kurumu kalksın, devletler yok olsun ve tek bir dünya devlet içerisinde yaşayalım" diyen bizler değil miyiz?
                            Aslında olay tam da bu. Huxley insanların bu düşüncelerini eleştiriyor. Hatta insnaların bu koşullar altında yaşayamayacağını psikolojisinin 
                            bozulcağını da belirtiyor bir nevi. Soma hapı, tanıdık geldi mi? İnsanlar üzüldüğünde, canları sıkıldığında veya herhangi bir psikolojik
                            rahatsızlıkta bir çeşit uyuşturucu diyebileceğimiz soma hapını atıyorlar ağızlarına. Sence de böyle olmaz mı sevgili okuyucu. Şu son dönemde rahata alışarak
                            büyüyen insanların yetişkinlikte ne tür sıkıntılar, psikolojik bozulmalar yaşadıkları bariz, e böyle bir ortamda da bu tür sıkıntıların çıkmayacağını
                            garanti edemezsiniz.  
                        </p>
                        <img className="alice-1" src="huxley-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Hepimizin aynı fikirde olması iyi bir şey değildir. Yaratıcılığı ortaya çıkaran fikir ayrılıklarıdır."
                            </p>
                        </span>
                        <p className="a">
                            Kitabın başını ve anlatılmak istenilenin ucundan verdiğimi düşünerek kitabın sonuna atlıyorum sevgili okuyucu. Aslında tam sonu diyemem 
                            ama kitabın sonlarına doğru gelip bitiriceğim yazımı. Sana Vahşi'nin başkaldırışını anlatacağım. Aslında anlatmakla kalmayıp kitapta yazan 
                            kısmı vereceğim sana :   
                        </p>
                        <p className="a">
                            Vahşi, Mustafa Mond ile karşılıklı tartışırlar :
                        </p>
                        <p className="a">
                            <i>VAHŞİ : </i>
                        </p>
                        <span className="kant">
                            <p>
                                "Ben keyif aramıyorm. Tanrıyı istiyorum, şiir istiyorum, gerçek tehlike istiyorum, özgürlük istiyorum, iyilik istiyorum.
                                Günah istiyorum."
                            </p>
                        </span>
                        <p className="a">
                            <i>MUSTAFA MOND : </i>
                        </p>
                        <span className="kant">
                            <p>
                                "Aslında siz, mutsuz olma hakkkını istiyorsunuz."
                            </p>
                        </span>
                        <p className="a">
                            <i>VAHŞİ : </i>
                        </p>
                        <span className="kant">
                            <p>
                                "Öyle olsun, mutsuz olma hakkını istiyorum."
                            </p>
                        </span>
                        <p className="a">
                            <i>MUSTAFA MOND : </i>
                        </p>
                        <span className="kant">
                            <p>
                                "Eklemek gerekirse ihtiyarlama, çirkinleşme ve iktidarsiz kalma hakkını da istiyorsunuz; frengi ve kansere yakalanma haklarını,
                                açlıktan nefesi kokma hakkını, sefil olma hakkını, sürekli yarın ne olacak korkusu içinde yaşama hakkını , tifoya yakalanma hakkını, 
                                ve her türden ağıza alınmaz acıyla işkence çekerek yaşama hakkını da istiyorsunuz."
                            </p>
                        </span>
                        <p className="a">
                            <i>VAHŞİ : </i>(uzun bir sessizlikten sonra)
                        </p>
                        <span className="kant">
                            <p>
                                "Hepsini istiyorum!"
                            </p>
                        </span>
                        <p className="a">
                            Umarım kitabı az da olsa anlatabilmişimdir sevgili okuyucu. Ama senin de okumanı tavsiye ederim. Şimdi de son bir tartışmayla konuyu kapatalım
                            1984 vs Cesur Yeni Dünya. İnsanların tartışması şu yönde: Gelecekte hangi distopya gerçekleşecek? İlla bir distopya olacak sanki de. İnsanlar 
                            umidi kesmiş çoktan. Neyse tartışmaya dönelim. 
                        </p>
                        <p className="a">
                            Aslında dünyaya baktığımızda ABD'yi ele alısak Cesur Yeni Dünya'ya daha yakın, fakat Çin hükümetine
                            bakarsak 1984'e yakın olduğu gözlemlenmektedir. Bana kalırsa eğer bir distopya gerçekleşecekse o da Cesur Yeni Dünya'dır. Şundan eminim ki biz 
                            topluluklar, fenomen yöneticilerden ve dünyayı elinde bulunduranlardan çok daha güçlüyüz. Bizi rahatsız edecek hiçbir şey yapamazlar, çünkü biz oldukça
                            onlar da var olmaya devam edecekler. Kimse 1984 gibi bir dünyayı hayal etmiyordur, fakat Cesur Yeni Dünya yoldan geçen birinin 
                            her zaman hayal kurabileceği bir yer. Dertlerinden kurtulmuş ve hayattan memnun olabilmek herkesin hayali. Dünya 1984 gibi olmadan insanlar karşı 
                            çıkacaktır zaten bu düzene. Kendimizi toplumdan soyutlayarak gücümüzü kaybettiğimizin farkında değiliz. Şunu unutmayalım ki 
                            Bütün Uyuyanları Uyandırmaya Bir Tek Uyanık Yeter. Neden halkçılık yaptığımı bilmiyorum ama 1984 gibi fazla kurgusal bir kitabın
                            gerçekte varolabileceğine pek inanmamakla birlikte Aldous Huxley'in Cesur Yeni Dünya'sının da olabilme ihtimalini düşük görmekteyim.
                            Şundan emin ol sevgili okuyucu fiziksel dünya korkunçtur, ideal hiçbir şey yoktur dünyada. İdeal gazlar, atom modelleri, dairenin alanı,
                            prizmalar, koniler bunların hiçbiri fiziksel dünyada yok sadece benzerleri (Platon'a göre yansımaları) var. Hiçbir zaman dümdüz bir doğru çizemeyeceksin,
                            hiç dönem sonu notların 100/100 olmayacak. Bu yüzden hastalıkların tamamen bitmesi, soma hapı,çocuk doğum makineleri,
                            kuluçka tesisleri ve sınıflı toplum yapısı (Kitabına bir eleştri yapacak olursak) biraz fazla ideal olmuş sanki. Ama sevgili okuyucu umudunu kırma sakın. İdeal olamayabiliriz, hiçbir şey 
                            ideal olmayabilir, fakat her şey ideale yaklaşabilir. Gerçek bir gaz belli koşular altında ideale yaklaşabilir, usta bir marangoz tahtadan
                            çok benzeyen bir prizma yapabilir, çok zeki bir öğrenci dönem sonu notunu 99,99/100 yapabilir. Bu sebepten ötürü her ne kadar hiçbir 
                            distopyanın tam anlamıyla olacağına inanmasam da, eğer bir distopya gerçekleşecekse o da Cesur Yeni Dünya'ya benzerdi demeden de 
                            geçemeyeceğim.
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