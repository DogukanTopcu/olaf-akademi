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
            <button className="link1" onClick={this.bas}>Her Şeyin Teorisi : Stephen Hawking</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Stephen Hawking</h2></div>
                        <p className="a">
                            Kendisi Einstein'dan bu yana dünyaya gelen en parlak teorik fizikçi olarak kabul edilmektedir.
                            Popüler kültürün bir parçası olması da cabası tabi. Sokakta herhangi bir insana
                            sorsanız, Einstein'den sonra Hawking'i söyleyeceğine adım kadar eminim. Peki ama kim bu Stephen Hawking?
                            Hastalığı neydi? 
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Yaşam ne kadar kötü gözükürse gözüksün her zaman başarılı olacak bir yol vardır.
                                Hayat varsa umut da vardır."
                            </p>
                        </span>
                        <p className="a">
                            Stephen Hawking ALS hastalığının nadir görülen, erken kendini gösterip yavaş ilerleyen
                            bir formundan muzdaripti. Bu hastalık onu henüz 21 yaşındayken vurmuştu. Doktorlar Hawking'e
                            iki yıl ömrü kaldığını söylese de o bundan çok daha uzun yaşamayı başaracaktı. Motor nöronların zamanla
                            %80'ini öldürerek sinir sistemini felç eden ancak beynin zihihnsel faaliyetlerine dokunmayan
                            bu hastalık Hawking'i tekerlekli sandalyeye mahkum edecekti. Soluk borusundan çıkan düşük
                            sesle sadece yakındakileri ile konuşabilen Hawking 1985'te CERN gezisinde yakalandığı
                            zatürre hastalığı nedeniyle hiç konuşamaz oldu. 1986'da koltuğuna yerleştirilen ve
                            yazılara sese dönüştürebilen bilgisayar sayesinde insanlarla iletişim kurabilir hale geldi.
                            Hastalığına rağmen toplam 14 tane teknik, popüler ve çocuk kitabı yazabildi. Bilime 
                            Einstein'dan sonra yeni bir paradigma getireceği düşünülürken, Einstein'ın görüşlerini
                            ilerletmekten öteye gidemeden 14 Mart 2018'de hayatını kaybetmiştir.
                        </p>
                        <img className="alice-1" src="hawking-1.jpg"></img>
                        <span className="kant">
                            <p>
                                "Bir süper kahraman olmayı seçecek olsam Superman olurdum. Superman'da bende 
                                olmayan her şey var."
                            </p>
                        </span>
                        <p className="a">
                            İstersen biraz da çalışmalarına değinelim sevgili okuyucu. Hawking aslında Matematikçi olmak
                            istiyordu, fakat okulun matematik bölümü olmadığından fizik öğrenimi görmeye başladı.
                            Öğrenimini bitirdikten sonra Kozmoloji üzerine çalışmak için Cambridge Üniversitesi'ne
                            gitti. Doktorasını aldıktan sonra Gonville and Caius College'da profesör asistanı
                            oldu. 1973'te uygulamalı matematik ve kuramsal fizik bölümüne geçti. 1979'dan sonra
                            matematik bölümünde Lucasian Matematik Profesörü oldu. Bu profesörlük daha önce 
                            Isaac Barrow ve Isaac Newton'a da verilimişti.
                        </p>
                        <img className="alice-1" src="hawking-2.jpg"></img>
                        <p className="a">
                            Genel görelilik kuramının Big Bang ile başlayıp karadeliklerle sonlandığını gösterdi.
                            Bu sonuç Kuantum mekaniği ile genel görelilik kuramının birleştirilmesi gerektiğini 
                            ortaya koyuyordu. Bu da 20. yüzyılın 2. yarısının en büyük buluşu olarak sayılacaktı. Stephen Hawking
                            kuantum fiziği ve karadeliklerle ilgili iddialarıyla yaşamış bilim insanları arsında 
                            dünyada en çok tanınan isimlereden biridir. Kitapları 40 dile çevrildi, evrenle ilgili 
                            çılgın teorik fikirleri popüler hale getirdi ki bu da çok önemli bir başarıdır okuyucu.
                            Bilimin bu kadar yayılmasında ve sevilmesinde en az Isaac Asimov kadar da etkisi vardır denebilir. Yazarlık konusunda 
                            da çok başarılıdır, kitaplarını okumanı tavsiye ederim sevgili okuyucu. 
                        </p>
                        <p className="a">
                            Stephen Hawking'in Okunması Gereken Kitapları :
                        </p>
                        <p className="a">
                            Zamanın Kısa Tarihi, Her Şeyin Teorisi, Büyük Tasarım, Ceviz Kabuğundaki Evren.
                        </p>
                        <p className="a">
                            Ayrica sevgili okuyucu Isaac Asimov'un "Ben, Robot"unu da okumanı tavsiye edeirm.
                        </p>
                        <span className="kant">
                            <p>
                                "Ölümden korkmuyorum ama ölmek için acele de etmiyorum. Daha yapmak istediğim
                                çok şey var."
                            </p>
                        </span>
                        <p className="a">
                            O da Einstein gibi hayatının sonuna kadar mutlak bilgiyi, her şeyin teorisini bulmaya çalıştı, fakat
                            14 Mart 2018 tarihinde sabaha karşı, Cambridge, İngiltere'deki evinde 76 yaşındayken hayatını kaybetmiştir.
                            Ailesi ölüm sebebini her ne kadar açıklamasa da henüz 21 yaşındayken yakalandığı ve tedavisi olmayan ALS 
                            hastalığı yüzünden öldüğü düşünülmektedir.
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