import React, {Component} from 'react';
import './olafHakkında.css';
import '../detailPosts.css';

export default class olafHakkında extends Component {
    
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
                <button onClick={this.hakkımdaButton} className="hakkımdaButton">Olaf Hakkında</button>

                {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>OLAF</h2></div>
                        <p className="a">
                            Merhaba sevgili okuyucu, ben Olaf. Doğukan Topçu tarafından geliştirilmiş bir web sitesiyim, aynı zamanda tüm bu içerikleri sana anlatan da benim.
                            Onun hakkında bilgi edinmek istersen 'Hakkımda' kısmından okuyabilirsin. Ben burada kendimden ve amacımdan bahsedeceğim. 
                            
                        </p>
                        <p className="a">
                            Doğukan Topçu adında bir insan tarafından react js kullanılarak geliştirildim. Sana bilimi, felsefeyi ve okumayı sevdirmek,
                            aynı zamanda örnek almanı sağlamak amacıyla üretildim. İleride takip et ve yorum yap butonlarıyla daha iyi bir web sitesi olabilirim umarım.
                            Ama bunun için de sana, sevgili okuyucuma ihtiyacım var. Geliştiricime bana yorum yap ve takip et butonları getirmek için baskı yapar mısın lütfen.
                            G-mail hesabını buraya bıraktım. Aynı zamanda serilerin devam etmesini de dileyebilirsin ondan. Kendisi yorum yap butonunu
                            geliştiremediği için g-mail hesasbını vermemi istiyor benden. E ne yapalım katlanacağız artık.
                        </p>
                        <span className="gMail">
                           <p>
                               dogukantopcu35@gmail.com
                           </p>
                        </span>
                        <p className="a">
                            Şimdi benim bu sayfadaki rolümden bahsedeyim sana. Sofie'nin Dünyası'nı okudun mu sevgili okuyucu? Okumanı tavsiye ederim,
                            benim yaratılmama sebep oldu diyebilirim sana. Nasıl mı? Önce yaratılma amacımdan başlayalım. Ben Selman Kahya adlı 
                            bir yazılım mühendisi -aynı zamanda bir youtuber- tarafından başlatılan yarışma ile oluşturulmaya başlandım. Bir blog sitesi
                            yapma yarışmasıydı bu. Geliştiricim de o sıralarda -sana bahsettiğim- Sofie'nin Dünyası adlı kitabı okumaktaydı.
                            Aklına parlak bir fikir gelmiş olacak ki bir çocuk gibi sevinmeye başaladı. Sayfanın tasarımını oluşturduktan sonra
                            beni yarattı. (Bu bakımdan bir materyalist gibi davrandığını söyleyebiliriz sevgili okuyucu.) Kısaca kitabın olayından bahsedeyim sana.
                            Eğer kitabı okumadıysan bu paragrafı atlayabilirsin çünkü bu kısmı anlatmamın spoilersız bir versiyonunu bulamadım. Ama 
                            benim hakkımda daha çok şey öğrenmek için okumanı rica ediyorum çünkü burası yaratılmamın asıl nedeni diyebilirim.
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
                            Anlatabildiğimi umarak devam etmek istiyorum. Anlayacağın üzere sen sevgili okuyucu, bu durumda, Sofie oluyorsun. Ben Alberto Knox oluyorum ve geliştiricim de 
                            Albert Knag olmuş oluyor. Tabi hikayedekinin biraz farklılaşmış hali bu ama geliştiricimin de okuyucunun sevebilmesi için değiştirmiş olduğunu düşünmekteyim.
                            Sana birçok konu başlığı altında ünlü yazarlardan, filozoflardan, fizikçilerden, tarihten, milyonerlerden ve psikolojiden bahsettim.
                            Eğer başka konu başlıkların veya başka ünlü kişilerin de gelmesini istiyorsan geliştiricime g-mail'den mesaj atabilirsin. 
                        </p>
                        <p className="a">
                            İstersen biraz da adımın nereden geldiğinden bahsedeyim. Olaf ismim aslında Talihsiz Serüvenler Dizisi adında bir filmdeki kötü tiplemeden 
                            geliyormuş. Neden benim adımı kötü karakterin ismi ile aynı yaptığını bilmiyorum ama Olaf ismi benim de hoşuma gitmedi değil. 
                        </p>
                        <p className="a">
                            İşte böyle, beni tanıyorsun artık sevgili okuyucu. Yaratıcım hakkında bilgi edinmek istersen 'Hakkımda' kısmını okumanı tavsiye ederim.
                            İyi okumalar.
                        </p>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
            </header>
        );

    }
}