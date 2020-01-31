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
            <button className="link1" onClick={this.bas}>Yeraltından Notar : Fyodor Dostoyevski</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Fyodor Dostoyevski</h2></div>
                        <p className="a">
                            Harika bir yazarın hayatı da roman gibi olurmuş. Dostoyevski'nin hayatı da öyle sayılır.
                            Sarhoş bir baba, hasta bir anne, ikisini de kaybetmenin acısı, depresyon, sara hastalığı
                            ve sıkı disiplin altında yetişmesi...
                            
                        </p>
                        <p className="a">
                            Yazar olmaya ordudan ayrıldıktan sonra karar verdi. İlk romanı olan "İnsancıklar"ı
                            çok beğenildi ve şair Nikolay Neksarov, Dostoyevski hakkında "Yeni bir Gogol doğdu"
                            diye bahsetti. Ancak diğer kitapları ilk kitabı kadar tutmayacak, sert eleştrilere tabii tutulacaktı. Bu da 
                            Dostoyevski'nin içine kapanmasına, yazarlıktan soğumasına ve siyasete atılmasına neden olacaktı.
                            Siyaset hayatında da Sibirya'ya sürgün edilen Dostoyevski, tam kurşuna 
                            dizilecekken af  kararı çıktı ve idam cezası, 4 yıl kürek ile 6 yıl hapis cezasına 
                            dönüştü. Cezası bittikten sonra ikinci yazarlık dönemine girdi. En çok tanınan romanlarını
                            da  bu dönemde yazdı. Kısaca Gogol'den bile büyük bir yazar oldu.
                        </p>
                        <span className="kant">
                            <p>
                                "İnsan bir gizemdir: Eğer tüm yaşamını onu çözmekle geçirirsen, zamanını boşa harcamış
                                olmazsın. Ben kendim bu gizemle meşgul oluyorum, çünkü ben bir insan olmak istiyorum."
                            </p>
                        </span>
                        <img className="alice-1" src="dostoyevski-2.jpg"></img>
                        <p className="a">
                            Sevgili okuyucu, sana Dostoyevski'nin ünlü eserlerinde geçen sözleri vererek yazımı bitirmek isterim, ve okumanı,
                            gözlem yapmanı isterim. Unutma ki gözlem her zaman kazandırır.
                        </p>
                        <p className="a">-> İnsancıklar</p>
                        <ul>
                            <li>

                               <p className="a">
                               İnsanın hırsız olması için başkasına ait eşyayı çalması gerekmez; başkasına ait sırları 
                               çalmak da hırsızlıktır. Hem de hırsızlığın en bayağısıdır.
                               </p>
                            </li>
                        </ul>
                        <p className="a">-> Yeraltından Notlar</p>
                        <ul>
                            <li>

                               <p className="a">
                               Bir insanın en iyi tarifi iki ayaklı ve nankör olmasıdır.
                               </p>
                            </li>
                            <li>
                               <p className="a">
                               Baylar, yemin ederim, her şeyi fazlasıyla anlamak bir hastalıktır; 
                               hem de tam anlamıyla, gerçek bir hastalık.
                               </p>

                            </li>
                            <li>
                              <p className="a">
                              Orada leş gibi kokan iğrenç yeraltında, alaya alınarak güçlendirilmiş sıçancık yavaş 
                              yavaş kine; soğuk, zehirli, özenle sonu gelmez bir kine boğulur. Kinini kırk yıl en ince, 
                              en utanç verici ayrıntılarına dek anımsayacak; her anımsayışta kendinden daha bir yüz 
                              kızartıcı şeyler ekleyerek, bu uydurmalarıyla kendini yiyip bitirecektir. Bir yandan 
                              kuruntularından utanır; bir yandan da olanları anımsamaktan, yeni baştan kurcalamaktan, 
                              "olabilirdi" düşüncesiyle başka başka uydurmalar eklemekten kendini alamaz. 
                              Bağışlamak nedir bilmez. Belki öç almaya bile kalkışır, ama beceriksizce, miskin miskin, 
                              uzaktan uzağa, sinsice, ne öç almak hakkına, ne de başarısına inanmadan yapar bunu; öbür 
                              yandan öç almak istediği kimseden yüz kat fazla üzüleceğini, ötekinin kılının bile 
                              kıpırdamayacağını ta başta bilir. Ölüm döşeğinde bunları bir kez daha, bunca zaman birikmiş 
                              faizleriyle birlikte anımsayacak ve...Bakın işte, bu soğuk, iğrenç yarı umutsuzlukla, yarı 
                              inançla, kahrından kendini bilinçli olarak yeraltına kırk yıl diri diri gömmede; zorlamayla 
                              yaratılmış durumunun yine de kısmen içinden çıkılabilir olmasında; bütün o içe işleyen 
                              doyurulmamış isteklerinin özünde; kesin olarak verilen kararla bunun peşinden gelen 
                              pişmanlıklar çalkantısında yatmaktadır o garip acı hazzının özü.
                              </p>

                            </li>
                        </ul>
                        <img className="alice-1" src="dostoyevski-1.jpg"></img>
                        <p className="a">-> Suç ve Ceza</p>
                        <ul>
                            <li>
                            Yeni bir adım atmak, yeni bir kelime söylemek, insanların en fazla korktuğudur.
                            </li>
                            <li>
                            Acı ve ızdırap daima büyük bir zeka ve derin bir yürek için kaçınılmazdır. 
                            Gerçekten büyük insanlar, sanıyorum ki, yeryüzündeki en büyük üzüntüye sahiptir.
                            </li>
                        </ul>
                        <p className="a">-> Kumarbaz</p>
                        <ul>
                            <li>
                            İnsan en iyi dostunu burnu sürtmüş bir durumda görmekten gerçekten de hoşlanır; dostlukların büyük bölümü böyle bir mahçubiyet üzerine kuruludur, tüm aklı başında insanların bildiği eski bir gerçektir bu.
                            </li>
                        </ul>
                        <p className="a">-> Karamazov Kardeşler</p>
                        <ul>
                            <li>
                              <p className="a">
                              Baş kaldıranları her zaman yenecek üç güç vardır yeryüzünde bunlar; mucize, sır ve otoritedir.
                              </p>

                            </li>
                            <li>
                            Seninle iyiden iyi tanışmak, kendimi sana tanıtmak istiyorum. Sonra da vedalaşmak... Bence insanların birbirlerini tanımaları için en iyi zaman, ayrılmalarına yakın zamandır.
                            </li>
                        </ul>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div> : null
                }
        </header>
    );
    }
}
export default Detail;