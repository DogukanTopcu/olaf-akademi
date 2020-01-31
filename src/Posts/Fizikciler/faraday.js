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
            <button className="link1" onClick={this.bas}>Okumamış Dahi : Michael Faraday</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Michael Faraday</h2></div>
                        <p className="a">
                            Elektromanyetik indüklemeyi, manyetik alanın ışığın kutuplanma düzlemini döndürdüğünü buldu. 
                            Elektrolizin temel ilkelerini belirledi. Klor gazını sıvılaştırmayı başaran ilk kişidir ve elektrik motorunu 
                            icat etmiştir. Bunlar inanılmaz başarılar. Ama ben başarılarının değil nasıl başardığının peşindeyim.
                            Okumadan da dahi olunuyormuş dedirten bu dahiyi hadi yakından inceleyelim. 
                            
                        </p>
                        <p className="a">
                            Hep söylenir; ben okuyamadım, babam okutmadı, ekonomik durumumuz iyi olmadığından okuyamadım gibi bir sürü
                            bahane vardır ya, heh işte Faraday da bu durumdan muzdaripti. Faraday, ekonomik nedenlerle uzun süreli bir 
                            eğitim alamadı. Ama öğrenmek isteyen öğreniyor sevgili okuyucu aynı senin bu yazıyı okuyup öğrenme isteğin gibi.
                            Faraday okuma yazmayı ve hesaplamayı kilisenin pazar okulunda öğrendi. Okuma yazma öğrenmesi de onun bir bilim adamı
                            olmasına yetecekti. On dört yaşında bir ciltçiye çırak olarak girdi. Mart 1813'e kadar devam ettiği bu işte 
                            ciltlenmek üzere getirilen kitapları okuyarak bilgisini genişletmeye başladı. Bu sayede gençliğinde pek çok 
                            kitap okudu. Bilhassa fizik kitaplarını büyük bir heves ve arzuyla okuyordu.Eski şişeler ve hurda parçalardan 
                            yaptığı basit bir elektrostatik üreteçten yararlanarak deneyler yapmaya başladı. Gene kendi yaptığı zayıf bir 
                            Volta pilini kullanarak elektrokimya deneyleri gerçekleştirdi.
                        </p>
                        <img className="alice-1" src="faraday-1.jpg"></img>
                        <p className="a">
                            Bilimsel kariyeri nasıl mı başladı? İzle öyleyse. Londra'da bulunan Kraliyet Enstitüsü'nde kimyacı 
                            Sir Humphrey Davy tarafından verilen kimya konferanslarına katılma olanağı buldu. Konferanslarda tuttuğu 
                            notları ciltleyerek iş isteyen bir mektupla birlikte Davy'ye gönderdi ve 1813'te Davy'nin desteğiyle kimya 
                            asistanı oldu. Peki asistan olarak boş mu durdu? Hayır. Sana en üstte bahsettiğim başarıları gerçekleştirdi.
                            Yaptığı deneyler kendinden sonra gelen teorik fizikçiler tarafından kullanıldı.  1820'de Davy'nin yanından 
                            yardımcılık görevinden ayrıldı. 1825'te laboratuvar müdürlüğüne getirildi. 1833'te enstitüye ders verme 
                            mecburiyeti olmaksızın kimya profesörü olarak tayin edildi. Hayatının tümünü enstitünün çalışmalarına adadı.
                        </p>
                        <img className="alice-1" src="faraday-2.jpeg"></img>
                        <p className="a">
                            Hayatını anlatabildiysem çalışmalarına geçelim o zaman. Manyetik etki çalışmaları ile başlayalım. 
                            Elektrik enerjisinden manyetizma üretildiğinden bu yana fen adamlarının en büyük düşüncesi, "Manyetizmadan 
                            elektrik enerjisi elde edilebilir mi?" sorusu olmuştu. Faraday, bir mıknatıs etrafında, tersine karşılıklı 
                            dönebilen bir kablo sistemi geliştirdi ve böylece ilk defa elektrik enerjisi mekanik enerjiye dönüştürülmüş 
                            oldu. Bu keşif, elektrik motorlarının esası kabul edildi.
                        </p>
                        <p className="a">
                            Elektrik alanındaki çalışmalarında bundan sonraki deneylerinin en önemlisi galvanometreye bir kablo bobini 
                            bağlayarak küçük elektrik akımlarını ölçmeye yarayan bir alet yapmasıydı. Bu kablo, bir mıknatısa değdirildiğinde 
                            galvanometrenin iğnesi hareket ediyor, kabloyu ayırdığında iğne ters yöne hareket ediyordu. Böylece Faraday 
                            manyetizmadan elektrik enerjisi elde etmenin yolunu bulmuş oldu. Mekanik enerjiyi bir mıknatıs yardımıyla 
                            elektriğe dönüştürdü. Bu, elektrik jeneratörlerinin esası oldu.
                        </p>
                        <p className="a">
                            Elektriksel kuvvet kimyasal molekülleri, o güne değin sanıldığı gibi uzaktan etkileyerek ayrıştırmıyordu, moleküllerin 
                            ayrışması iletken bir sıvı ortamdan akım geçmesiyle ortaya çıkıyordu. Bu akım bir pilin kutuplarından gelse de 
                            ya da örneğin havaya boşalıyor olsa da, böyleydi. İkinci olarak, ayrışan madde miktarı çözeltiden geçen 
                            elektrik miktarına doğrudan bağımlıydı. Bu bulgular Faraday'ı yeni bir elektrokimya kuramı oluşturmaya 
                            yöneltti. Buna göre elektriksel kuvvet, molekülleri bir gerilme durumuna sokuyordu. 1839'da elektriğe ilişkin 
                            yeni ve genel bir kuram geliştirdi. Elektrik madde içinde gerilmeler olmasına yol açar. Bu gerilmeler hızla 
                            ortadan kalkabiliyorsa gerilmenin art arda ve periyodik bir biçimde hızla oluşması bir dalga hareketi gibi 
                            madde içinde ilerler. Böyle maddelere iletken adı verilir. Yalıtkanlar ise parçacıklarını yerlerinden koparmak 
                            için çok yüksek değerde gerilmeler gerektiren maddelerdir.
                        </p>
                        <p className="a">
                            Faraday, ayrıca mıknatıs kutupları arasında döndürdüğü bir bakır yuvarlak ile devamlı bir akım elde etmeyi de başardı. 
                            1832 ve 1833'te elektrolizin iki temel kanununun formüllerini buldu. 1840 yılında ışık enerjisi ile 
                            elektromanyetik enerjinin birbirine çok benzer, hatta aynı olduğu kuramını geliştirdi.
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