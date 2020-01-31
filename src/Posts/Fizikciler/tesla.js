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
            <button className="link1" onClick={this.bas}>Dahi : Nikola Tesla</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Nikola Tesla</h2></div>
                        <p className="a">
                            Tesla tamamiyle döneminin çok üzerinde bir mucitti. Yaptığı icatlardan her ne kadar başkaları yararlansa da
                            bugün insanların vazgeçilmezi olmuş durumda. Uzaktan kumandadan radyoya, alternatif akımdan Tesla bobinine
                            ve sayamadığım o dönemde çıkan bir çok icat aslında onun çalışmalarının bir eseriydi. Her ne kadar kendi
                            döneminde pek sayılmasa da şimdiki dönem onu çok benimsemiş ve saymış durumda. Çocukken Edison'u överken şimdi
                            Tesla taraftarı oldu herkes. Ondan diyorum ya o döneminden çok ileride olan bir mucitti.
                            
                        </p>
                        <span className="kant">
                            <p>
                                "Bırakın gerçekleri gelecek söylesin ve herkesi eserlerine ve başarılarına göre değerlendirsin. 
                                Bugün onların olsun; ama uğrunda çalıştığım gelecek benimdir."
                            </p>

                        </span>
                        <p className="a">
                            Tesla'yı anlatmaya yaşamından başlayalım istersen. Avusturya İmparatorluğu'nda doğup büyüyen Tesla, 
                            1870'lerde mühendislik ve fizik alanında ileri bir eğitim aldı ve 1880'lerin başında telefonculukta ve 
                            Continental Edison'da yeni elektrik enerjisi endüstrisinde çalışırken uygulamalı deneyim kazandı. 
                            1884 yılında vatandaşı olacağı Amerika Birleşik Devletleri'ne göç etti. New York'ta kısa bir süre kendi 
                            yoluna koyulmadan önce Edison Machine Works'te çalıştı. Ortaklarının fikirlerini finanse etmeleri ve 
                            pazarlamaları için Tesla, New York'ta çeşitli elektrikli ve mekanik cihazlar geliştirmek için laboratuvarlar 
                            ve şirketler kurdu. Kendisinin alternatif akım (AA) indüksiyon motor ve 1888'de Westinghouse Electric 
                            tarafından lisanslanan ilgili çok fazlı AA patentleri kendisine önemli miktarda para kazandırdı ve 
                            şirketin pazarlayacağı çok fazlı sistemin temel taşı oldu. Patentini alabileceği ve pazarlayabileceği 
                            icatlar geliştirmeye çalışan Tesla, mekanik osilatörler/jeneratörler, elektriksel deşarj tüpleri ve 
                            erken X-ışını görüntüleme ile ilgili çeşitli deneyler yaptı. Ayrıca ilk sergilenenlerden biri olan kablosuz 
                            kumandalı bir tekne inşa etti. Bir mucit olarak tanınan Tesla, laboratuvarındaki ünlülere ve zengin 
                            müşterilere başarılarını gösteriyordu ve halk konferanslarında şovmenliğiyle dikkat çekiyordu. 1890'lar 
                            boyunca New York ve Colorado Springs'teki yüksek voltajlı, yüksek frekanslı güç deneylerinde kablosuz 
                            aydınlatma ve dünya çapında kablosuz elektrik enerjisi dağıtımı konusundaki fikirlerini sürdürdü. 
                            1893 yılında, cihazlarıyla kablosuz iletişim olasılığı hakkında açıklamalar yaptı. Tesla, bu fikirleri 
                            kıtalararası bir kablosuz iletişim ve güç ileticisi olan bitmemiş Wardenclyffe Kulesi projesinde pratik 
                            kullanıma sunmaya çalıştı, ancak bunu tamamlamadan önce parası tükendi
                        </p>
                        <img className="alice-1" src="tesla-1.jpg"></img>
                        <p className="a">
                        Wardenclyffe'tan sonra Tesla, 1910'larda ve 1920'lerde çeşitli derecelerde başarıya sahip bir dizi icatla çalıştı. 
                        Parasının çoğunu harcayan Tesla, New York'ta birçok otelde yaşadı ve ödenmemiş faturaları geride bıraktı. 
                        Ocak 1943'te New York'ta öldü. Tesla'nın çalışması, onun ölümünden sonra 1960'larda Ağırlıklar ve Ölçüler 
                        Genel Konferansı'nda SI birimi olarak manyetik akı yoğunluğuna tesla adı verilene kadar göreceli belirsizliğin 
                        içine düştü. Bu durum 1990'lı yıllardan beri Tesla'ya duyulan ilginin yeniden ortaya çıkmasını sağladı.
                        </p>
                        <p className="a">
                            Burayı da anlatabildiysem sevgili okuyucu icatlarına geçelim istersen. En heyecan yaratan icadı olan alternatif
                            akımından bahsedelim o zaman. Tesla, alternatif akımın ABD'de yayılmasını öncülük eden George Westinghouse
                            ile birlikte yaptığı büyük proje o dönemde heyecan yaratmıştı. Dakikada 250 devir yapan, her biri 1775 amper 
                            veren, 2250 Volt'luk on büyük alternatör, iki fazlı 25 Hz (Hertz)'de 50.000 beygir gücü veya 37.000 kW'lık 
                            çıkış oluşturuyordu. Rotorların her biri, 3 metre çapında, 4,5 metre uzunluğunda (düşey jeneratörlerde 
                            4,5 metre yükseklik) ve 34 ton ağırlığındaydı. Sabit parçaların her biri 50 ton ağırlığındaydı. Gerilim, 
                            iletim için 22.000 Volt'a çıkarıldı. Buna karşılık Edison alterneatif akımın ölümcül olduğunu va kullanılmaması
                            gerektiğini savunuyordu ve çeşitli insanlık dışı deneylerle bunu kanıtlıyordu. Buna karşılık Tesla şöyle diyecekti: 
                        </p>
                        <span className="kant">
                            <p>
                                "...Kendi alternatif akım ve yüksek frekans ile ilgili "frekans yüksek olduğu müddetçe yüksek voltajlardaki 
                                alternatif akımlar derinin yüzeyinde, herhangi bir yaralanmaya neden olmadan salınırlar. Ama bu amatörlerin 
                                becerebileceği bir şey değildir. Sinir dokularına nüfuz edebilecek miliamperler öldürücü bir etki yaratabilir 
                                ama derinin üzerindeki amperler kısa süreler için zarar vermez. Derinin altına sızabilecek düşük akımlarsa, 
                                ister alternatif ister doğru akım olsunlar, ölüme yol açabilir..."
                            </p>
                        </span>
                        <img className="alice-1" src="tesla-3.jpg"></img>
                        <p className="a">
                            Sana diğer icatlarıdan bahsederek sıkmak istemiyorum zaten her yerde duyuyorsundur bunları. 
                            Uzaktan kumanda, yaptığı büyük telsiz, iyonosfer çalışmaları, Tesla bobini vs. bunların her birine
                            Vikipedia'dan da ulaşabilir veya youtube videolarından da izleyebilirsin.
                        </p>
                        <p className="a">
                            Bitirmeden sana ölümünden de bahsedeyim sevgili okuyucu. Tesla para konusunda hiç iyi olmadı. Hayatının 
                            sonunu borçlarından kaçmak için sürekli otel değiştirerek geçirdi. 7 Ocak 1943 tarihinde 86 yaşındayken 
                            New Yorker Oteli'nde vefat etti. Öldükten sonra Tesla'nın bütün dokümanlarına ABD hükümeti tarafından el konuldu.
                        </p>
                        <img className="alice-1" src="tesla-2.jpg"></img>
                        <span className="kant">
                            <p>
                                "Nefretiniz elektriğe dönüştürebilseydi bütün dünyayı aydınlatmaya yeterdi."
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