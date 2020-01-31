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
            <button className="link1" onClick={this.bas}>Capgras Sendromu</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Capgras Sendromu</h2></div>
                        <p className="a">
                            Bilimsel olarak Capgras sendromu, sanrısal yanlış tanıma bozuklukları 
                            içinde tanımlanan, az rastlanan ve inatçı sanrılar ile giden bir bozukluktur. Kısaca 
                            Hasta, yakın bir akrabasının bazen de kendisinin tıpatıp benzerleri ile değiştirildiğine inanır. 
                            Sendrom, nadiren saf bir şekilde ortaya çıkar ve genelde şizofreni veya organik psikozla birlikte görülür. 
                            Berbat bir hastalık olmalı sevgili okuyucu. Çocuğundan, annenden veya babandan, kardeşinden korkarak ya da 
                            şüphelenerek hayatını geçirdiğini düşünsene.
                            
                        </p>
                        <span className="kant">
                            <p>
                            "Karşımdaki yüz kardeşime ait fakat o kardeşim değil.."
                            </p>
                        </span>
                        <p className="a">
                            Hastalığın nedeni hakkında birkaç benzer fikir olsa da bana en yakın gelen Hintli nörolog Ramachandran'ın
                            ortaya attığı iddia oldu. Ona göre, sendromun sebebi, yüzleri tanımaya yarayan temporal lob ile tanınan 
                            yüzlere duygusal anlamda tepki vermeyi sağlayan limbik sistem arasındaki bağlantının bir şekilde hasar 
                            görmesi ve düzgün işleyememesidir. Bu hasar yüzünden hasta, karşısında gördüğü tanıdığının yüzünü tanımakta, 
                            fakat hasta bu yüze karşı duygusal anlamda tepki oluşturmamaktadır.
                        </p>
                        <img className="alice-1" src="capgras-1.jpg"></img>
                        <p className="a">
                            Bu yazıyı capgras sendromlu birinin anıları ile bitirmek isterim sevgili okuyucu.
                        </p>
                        <span className="capgras">
                            <p>
                                "Her şey bana biraz garip görünmeye başlıyor, biraz yapay gibi mesela. 
                                Kimi zaman, etrafımdaki hiçbir şeyin gerçek olmadığı duygusuna kapılıyorum. 
                                Sanki her şey bir sahne ve herkes bir rol oynuyor. Kime gerçekten güvenebilirim? Sonunda cesaretimi 
                                toplayıp bu durumdan karıma söz ettim. Bana garip bir şekilde baktı ve bir doktora görünmem gerektiğini 
                                söyledi. Bu davranış pek onun yapacağı şey değil. Aslında, kulağa delice geliyor biliyorum ama gitgide 
                                daha sıklıkla, bu kadını gerçekten tanıyıp tanımadığımı düşünmeye başladım. Son zamanlarda çok sinirli 
                                ve rahatsız görünüyor; eskiden hiç böyle değildi. Aslında tam olarak neyin değiştiğini söyleyemiyorum 
                                ama bütün bu ufak tefek değişiklikler, bana bazen onun aslında benim karım olmadığını düşündürüyor. 
                                Evlendiğimiz sıralarda çekilmiş eski bir takım fotoğraflarla, yakın zamanlarda çekilmiş olanları 
                                karşılaştırdığınızda, bu değişikliklerden bazılarını gerçekten görebilirsiniz. Parmak izlerini 
                                karşılaştırmak bir şeyleri kanıtlayabilir mi diye merak ediyorum… "
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