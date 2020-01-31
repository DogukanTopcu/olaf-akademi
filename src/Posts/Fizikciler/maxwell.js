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
            <button className="link1" onClick={this.bas}>Dünyayı Değiştiren Adam : J. Clerk Maxwell</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>J. Clerk Maxwell</h2></div>
                        <p className="a">
                            Şimdi sana çok önemli bir fizikçiden bahsedeceğim sevgili okuyucu. J. Clerk Maxwell'dan bahsedeceğim.
                            Daha önce belki de hiç duymamış olabilirsin fakat dünyaya kattıkları çok önemli. Başlıkta da yazdığım gibi dünyayı değiştiren adam 
                            kendisi. Nasıl mı değiştirdi? Şimdi sana tam da bundan bahsedeceğim. Yaşamından da bahsetmek isterdim ama çok ilgini çekeceğini
                            düşünmediğimden sana direkt bilime kattıklarını anlatacağım. Hayatı konusunda zengin bir aileden geldiğini 
                            söylemem yetecektir. Devamını Wikipedia'dan okuyabilrisin.  
                            
                        </p>
                        <p className="a">
                            Hadi başlayalım öyleyse. James C. Maxwell, İskoç teorik fizikçi ve matematikçidir. En büyük başarısı 
                            klasik elektromanyetik teorisinde daha önceden birbirleriyle ilişkisiz olarak gözüken elektrik ve 
                            manyetizmanın aynı şey olduğunu kendisine ait olan Maxwell Denklemleri'yle (4 denklem) ispatlamasıdır.
                            Hazır değinmişken Maxwell denklemlerinden bahsedelim öyleyse.
                        </p>
                        <img className="alice-1" src="maxwell-1.jpg"></img>
                        <p className="a">
                            Maxwell denklemleri Lorentz kuvveti yasası ile birlikte klasik elektrodinamik, klasik optik ve elektrik 
                            devrelerine kaynak oluşturan bir dizi kısmi türevli (diferansiyel) denklemlerden oluşur.Bu alanlar modern 
                            elektrik ve haberleşme teknolojilerinin temelini oluşturmaktadır. Şimdi anladın mı sevgili okuyucu bu adamın neden bu
                            kadar önemli bir fizikçi olduğunu. Bu denklemler sadece bununla da kalmaz; elektrik ve manyetik alanların birbirileri, 
                            yükler ve akımlar tarafından nasıl değiştirildiği ve üretildiğini de açıklamaktadır. Aslınada bu çalışmalarında Faraday'dan
                            bahsetmemek de olmaz. Onun elektromanyetik konusunda yaptığı deneyler de Maxwell'ı etkilemiştir. Faraday'ı da
                            öğrenmek istersen bu sayfaya senin için yazdım, okuyabilirsin. Konumuza dönelim. 
                        </p>
                        <p className="a">
                            <u>Maxwell elektrik ve manyetik alanların uzayda dalga formunda sabit ışık hızında ilerlediğini bulmuştur</u>. 
                            1864 yılında Maxwell Elektromanyetik Alanın Dinamik Teorisi adlı kitabı yayınlamıştır. 
                            Işığın aslında aynı ortamda dalga hareketi yaptığı, bunların da elektriksel ve manyetik bulgular olduğu 
                            ilk kez bu kitapta yer almıştır. Elektrik kuvveti ile manyetik kuvveti birleştirdiği elektromanyetizm modeli, 
                            fizikteki en önemli gelişmelerden biri olarak kabul edilir.
                        </p>
                        <p className="a">
                            Unutmadan sana 4 yasanın ismini de vereyim sevgili okuyucu:
                        </p>
                        <ul>
                            <li>
                                1. Yasa :  Elektrik alan için Gauss Yasası 
                            </li>
                            <li>
                                2. Yasa : Manyetizma için Gauss Yasası
                            </li>
                            <li>
                                3. Yasa : Faraday İndüksiyon Yasası
                            </li>
                            <li>
                                4. Yasa : Amper Yasası
                            </li>
                        </ul>
                        <p className="a">
                            Birçok fizikçi tarafından 19. yüzyılda yaşayıp 20. yüzyıl fiziğini en büyük katkıyı sağlayan kişi olarak görülür. 
                            Maxwell'in bilime katkıları Isaac Newton ve Albert Einstein'ınkilerle eşdeğer görülür. 1999'un sonlarında 100 
                            ileri gelen fizikçiyle gerçekleştirilen milenyum oylamasında Maxwell, tüm zamanların en iyi fizikçileri 
                            arasında Einstein ve Newton'dan sonra 3. sırayı almıştır. 1931 yılında Einstein, Maxwell'in doğumgünü 
                            töreninde Maxwell'in çalışmasını "Newton'dan sonra fizikte en verimli ve en önemli çalışmadır" diye 
                            tanımlamıştır. Einstein çalışma odasının duvarına Michael Faraday ve Isaac Newton'un yanı sıra Maxwell'in 
                            de fotoğrafını asmıştı.
                        </p>
                        <p className="a">
                            Gördüğün üzere sevgili okuyucu. Her ne kadar adı çok duyulmasa da bilime katkıları büyüktür. Sana akademik bilgiler
                            vererek sıkmak istemedim. Eğer akademik bilgilerin de olduğu ikinci bölümün de gelmesini istersen geliştiricimin 
                            g-mail hesabını alta bıraktım, ona mesaj atabilirsin. 
                        </p>
                        <p className="a">
                            Eğer Einstein, Faraday, Newton, Hawking, Tesla gibi fizikçilerin başarılarını okumak istersen senin için sayfama yazdım.
                            Okuaybilirsin.
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