import React, {Component} from 'react';
import './hakkımda.css';
import '../detailPosts.css';

export default class Hakkımda extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            button: false
        }
        this.hakkımdaButton = this.hakkımdaButton.bind(this);
        this.close = this.close.bind(this);
    }
    hakkımdaButton(){
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
        //const {news} = this.props;
        return(
            <header>
                <button onClick={this.hakkımdaButton} className="hakkımdaButton">Hakkımda</button>

                {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Doğukan Topçu</h2></div>
                        <p className="a">
                             Merhaba, ben Olaf'ın sürekli bahsettiği şu geliştiriciyim. Umarım Olaf'ı beğenmişsindir, görünümünün güzel olması için 
                             çok uğraştım. Oluşturmak için de çok aşina olmadığım bir yazılım dili olan react js'i kullandım. Ama yine de başarılı olduğumu düşünüyorum.
                             İstersen sitenin nasıl oluştuğuna anlatayım sana, sonra da kendimden ve Olaf'tan bahsederim.
                            
                        </p>
                        <p className="a">
                            Tasarımına değinelim biraz. Tasarım 
                            olarak genel bilgilerin olduğu sol taraf ve içeriğin olduğu sağ tarf olarak sayfayı iki bölüme ayırdım. Güzel görünmesi bakımından 
                            bir tane de üst bar ekledim. (Bunlar bilgisayarlar için geçerli) Mobil olarak da içerik tam sayfa, genel bilgiler ise üst barda olacak şekilde
                            yeni bir sayfa tasarladım. Devamında ise acaba sayfayı daha güzel yapabilirmiyim diye W3Schools'un How To kısmına bakınmaya başladım. 
                            Daha önce kafamdaki fikir Hakkımda ve Olaf Hakkında kısımlarını tıklandığında sayfanın ortasına gelen yeni bir sayfa ile gösterecektim. Bunun için de
                            Images kısmındaki Modal Image tasarımını değiştirerek kullandım. Modal Image'te resme tıklandıktan sonra resim daha büyük bir şekilde gözüküyordu. 
                            Ben de bunu alıp butona basıldığında gösterilecek şekilde oluşturdum önce. Burada bir noktaya değinelim. Javascript'te olup da react'ta kullanamadığım bir özellik 
                            beni çok uğraştırdı, sonra araştırmalarım sonucu yapmanın bir yolunu buldum. Buton konusuna devam edelim. Sayfa artık geliyordu ama 
                            sayfayı aşağı doğru kaydırdığımda arkadaki ana sayfa da aşağı doğru gitme eğilimi gösteriyor bu da kullanıcıyı rahatsız ediyordu. Ben de
                            başka bir yol buldum. Arkayı siyah tema yapıp tam sayfaya yayılmasını sağladım. Bu şekilde sanki sitenin içerisinden yeni bir sayfa geliyormuş
                            gibi göründü. Sonra aklıma harika bir fikir geldi. Normalde içerik kısmında başlıklara basıldığında yeni bir sayfaya gidilecekti 
                            ben de: "Neden Hakkımda kısmındaki tasarımı içeriklerde de kullanmayayım?" diye düşündüm. Zaten okuma konusunda siyah temayı koymayı düşünüyordum, 
                            şimdi de yaptığım tasarım sayesinde okuyucuya siyah temayı getirmiş oldum.      
                            
                        </p>
                        <p className="a">
                            Şimdi de diğer bir tasarım olan genel başlıklar butonlarına değineyim.(Bahsettiğim şey Fizikçiler, Felsefeciler ve diğerler butonlar)
                            Onlar da  Hakkımda butonunu hazırlarken yaşadığım zorluğu aştıktan sonra 
                            aynı olayı buradaki butonlara da ekleyerek aşmayı başardım. Kodlamayı bilmeyenlerin olduğunu düşünerek detaylarla sıkmak istemiyorum. Eğer merak eden varsa
                            bana g-mail'den ulaşabilir.
                        </p>
                        <p className="a">
                            Biraz kendimden bahsedeyim. Ben Doğukan Topçu, İzmir'in Bergama ilçesinde yaşıyrom. 2003 doğumluyum, Akif Ersezgin Anadolu Lisesi'nde 
                            11. sınıf sayısal bölümündeyim. Bir site yapmak istiyordum fakat beni bu siteyi yapmaya iten itici güç Selman Kahya adında bir yazılım mühendisi'nin
                            -aynı zamanda bir youtuber- yarışması oldu. O sırada okuduğum Sofie'nin Dünyası adlı kitaptan esinlendim ve böyle bir site yapmaya karar verdim.
                            Ben yaratıcı olacaktım, Olaf ise size bilgileri veren kişi olacaktı. İstersen sana biraz da Sofie'nin Dünyası'ndan bahsedeyim. 
                            Eğer kitabı okumadıysan bu paragrafı atlayabilirsin çünkü bu kısmı anlatmamın spoilersız bir versiyonunu bulamadım.
                        </p>
                        <p className="a">
                            Kitap Sofie adlı bir kız çocuğun evine gizemli birinden gelen mektuplarla başlıyor. Bu mektupların konusu ise felsefe. Bir nevi
                            dışarıden verilen bir felsefe dersi diyebiliriz buna. Bu mektupları gönderen ise Alberto Knox isimli bir adamdır.
                            Alberto, Sofi'ye felsefe dersleri vermeye başlar. Bu öğretme sırasında da Albert Knag isimli biri sürekli bu ikiliyi rahatsız etmektedir.
                            Alberto bir gün Albert Kang'ın kim olduğunu anlar. Aslında Albert Knag kızı Hilde'ye hikaye yazan biridir. Bu durumda da kendisi bir hikayenin 
                            içerisinde yaşamaktadır. Bunu anladıktan sonra Sofie ile birlikte bu hikayenin içinden çıkıp gerçek dünyaya yani Albert Knag'ın dünyasına 
                            gitmenin bir çözümünü aramaya başlar. Devamını anlatmayayım zaten büyük bir spoiler verdim sana. 
                        </p>
                        <p className="a">
                            Bu hikayeye göre sen Sofie oluyorsun, ben Albert Knag oluyorum, Olaf da Alberto Knox oluyor. Aslında tam olarak kitapla aynı değil fakat
                            kullanıcıya uygun ve samimi olması için biraz daha değiştirerek sundum. Bir de Olaf isminden bahsedelim. Olaf ismi aslında Talihsiz Serüvenler Dizisi
                            adlı filmdeki kötü tiplemeden geliyor. Ama ben karakterin samimi olmasını istedim, böylelikle okuyucuyu daha çok kendine çekebilirdi.   
                        </p>
                        <p className="a">
                            Evet, artık benim hakkımda da biraz bilgilendin. Yorum yap butonunu getiremediğim için üzgünüm fakat bana g-mail'den ulaşabilirsin.
                            Merak etme react ve ES6'i daha iyi öğrendikten sonra en yakın zamanda bu sayfaya getirmeyi düşünüyorum. Dediğim gibi bana ulaşmak istersen 
                            g-mail hesabımı bıraktım, oardan bana ulaşabilirsin.
                        </p>
                        <span className="gMail">
                           <p>
                               dogukantopcu35@gmail.com
                           </p>
                        </span>
                        <p className="a">
                            Bu arada siteyi oluştururken en çok zorlandığım kısım içeriği yazmak oldu. İçeriğin samimi ve günlük hayatta işe yaramaz bilgilerden ayırıp
                            çeşitli ünlü insanlarla ilgili bilgileri sana vermek ve bilimi sevdirmekti amacım. Feynman'ı anlatırken de dediğim gibi: 
                        </p>
                        <span className="kant">
                            <p>
                                "Sonuçta evde atom bombası tasarlayacak haliniz yoktur herhalde"
                            </p>
                        </span>
                        <p className="a">
                            Bilgiler konusunda genellikle okuduğum kitaplardan ve araştırmalarımdan edindiğim bilgileri yazmaya çalıştım. Eğer sevgili okuyucu, 
                            bilgilerimde bir eksiklik varsa veya yanlış bir bilgiye sahipsem veya bir yerde yazım hatası yaptıysam beni g-mail adresime mesaj atarak uyarabilirsin.
                            Bu arada Olaf hakkında bilgi edinmek istersen de 'Olaf Hakkında' butonuna basarak ulaşabilirsin. İyi okumalar.  
                        </p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
            </header>
        );

    }
}