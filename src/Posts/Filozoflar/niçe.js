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
            <button className="link1" onClick={this.bas}>Tanrı Öldü : Nietzsche</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Nietzsche</h2></div>
                        <p className="a">
                            Sevgili okuyucu sana çok sevilen bir filozoftan bahsetmek istiyorum. Bana kalırsa
                            delinin teki ama aynı zamanda da dünyayı değiştiren ve bugünkü haline getiren 3 büyük filozoftan da bir tanesi 
                            (Diğerleri Karl Marx ve Sigmund Freud). Sana yalnızca Nietzsche'yi anlatmayacağım, 
                            sana Nietzsche'nin aklındakilerini anlatacağım; onun sözlerini değil, sözlerinin içinde
                            yatan anlamı ve kaba bıyıklarının altında yatan ince insanı anlatacağım sevgili okuyucu.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Tanrı öldü. Tanrıdan geriye bir ölü kaldı."
                            </p>
                        </span>
                        <p className="a">
                            En çok konuşulan sözü ile başlayalım dedim: "Tanrı öldü." Böyle Buyurdu Zerdüşt 
                            adlı eserinde geçen bu sözün tamamına bakalım istersen:
                        </p>
                        <span className="kant">
                            <p>
                            "Tanrı öldü. Tanrıdan geriye bir ölü kaldı. Ve onu öldüren biziz. Hâlâ gölgesi 
                            beliriyor uzaklarda. Kendimizi nasıl avutacağız, biz katillerin katilleri? 
                            Neydi bıçaklarımızın altında ölümüne kan döken, dünyanın sahip olmuş olduğu bu 
                            en kutsal ve en kudretli şey; bu kanı kim silecek üzerimizden? 
                            Hangi su var bizi temizleyecek? Hangi teselli şölenlerini, hangi kutsal oyunları 
                            icat etmek zorunda kalacağız? Fazla büyük değil mi bize bu davanın yüceliği? 
                            Buna layık olmak için birer tanrıya dönüşmeli değil miyiz?"
                            </p>
                        </span>
                        <p className="a">
                            Güzel bir yazı öyle değil mi? Ama biraz karmaşık gibi. Neyse konuya dömelim. "Tanrı öldü, 
                            ve onu biz öldürdük." Bu sözüyle -bana kalırsa- sosyal bir çıkarım yaptığı söylenebilir.
                            Döneminde yükselen ateizm, dinin bir tarafa atılması ve saygınlığının yitirilmesi belki
                            de Nietzsche'yi rahatsız etmiş olacak ki bu çıkarımı yapmıştır. Merak etme sevgili okuyucu
                            amacım konuyu 'Nietzsche tanrının varlığına inanıyordu'ya getirmek değil, fakat Nietzsche'nin 
                            tanrının ölmesi durumundan pişman olmadığını da söyleyemeyiz.
                        </p>
                        <p className="a">
                            "Bu kanı kim silecek üzerimizden? 
                            Hangi su var bizi temizleyecek?"
                        </p>
                        <img className="alice-1" src="nietzsche-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Yaşamak acı çekmektir. Hayatta kalmak ise bu acıda bir anlam bulmaktır."
                            </p>
                        </span>
                        <p className="a">
                            Ne isterdim biliyor musun sevgili okuyucu? Nietzsche ile tanışmak. Hayatı anlamışa benziyor
                            ya da öyle görünmeye çalışıyor ha ne dersin? Bilmiyorum ama beni en çok
                            etkileyen görüşü mutluluk tanımı olmuştu. Ona göre mutluluğun büyüklüğü öncesinde çekilen acının büyüklüğüne
                            eşittir. Bir örnek vererek açıklayabilirim sanırım: Everest Dağı'nın zirvesine sert kayaları aşıp 
                            buz gibi soğukta yüksek kayaları tırmanarak ulaşmanın getirdiği mutluluk, oraya helikopterle
                            çıkmanın getirdiği mutluluktan daha fazladır. Umarım anlatabilmişimdir sevgili okuyucu.

                        </p>
                        <span className="kant">
                            <p>
                                "Bizi öldürmeyen şey güçlendirir."
                            </p>
                        </span>
                        <span className="kant">
                            <p>
                                "Yaşamak için bir nedeni olan herkes, her sıkıntının üstesinden gelebilir."
                            </p>
                        </span>
                        <img className="alice-1" src="nietzsche-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Müziksiz bir hayat hata olurdu."
                            </p>
                        </span>
                        <p className="a">
                            En etkili kısma daha gelmedik sevgili okuyucu. Nietzsche'nin deli olmasına neden olan olay: At olayı.
                            Bundan bahsetmemek olmaz.
                        </p>
                        <span className="kant">
                            <p>
                                "Her kim bir canavarla çarpışmayı göze alırsa, bir canavar olmayı da göze alsın.
                                Çünkü karanlığa uzun süre bakarsanız, karanlık da sizin içinize bakmaya başlar."
                            </p>
                        </span>
                        <p className="a">
                            --> Nietzsche bir sabah şehrin merkezine doğru ilerliyordu. Yolda giderken yürümediği için
                            atı kırbaçayan faytoncuyu gördü. Atın hiç hali olmamasına rağmen sahibi onu hareket ettirmek
                            için durmadan kırbaçlıyordu. Nietzsche hızla oraya yaklaştı, faytoncunun bu davranışını kınadıktan
                            sonra yere çöken ata yaklaştı, sarıldı ve ağlamaya başladı. Sert bıyıklarının altından 
                            adeta ince, duygusal bir adam çıkıvermişti sanki. O sırada bilincini kaybetti
                            ve zihni sonsuza dek sürecek olan bir değişime uğradı. Efsaneye göre son sözleri 'Anne,
                            ben bir aptalım.' oldu.
                        </p>
                        <p className="a">
                            Nietzsche'yi tam bitirmedim sevgili okuyucu. Şimdilik bilinmesi gerkenlerde bahsettim.
                            Daha anlatmadığım üst insan, bengi dönüş ve güç istenci konuları da var. Nietzsche'nin
                            ikinci bölümünün gelmesini istiyorsan sevgili okuyucu geliştiricimin g-mail hesabına mesaj atabilirsin.
                            Hesabını alt kısma bıraktım.
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