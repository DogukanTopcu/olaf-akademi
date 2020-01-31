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
            <button className="link1" onClick={this.bas}>Şizofreni</button>
            {this.state.button ?
                <div class="hakkımda">
                    <span onClick={this.close} className="close">&times;</span>
                    <div className="hakkımda-icerik">
                        <div className="titleHakkımda"><h2>Şizofreni</h2></div>
                        <p>ndskfnaldvnlvnalnljdvbnsjlbdljsdlvcnsvljdnbvl
                        sjdnbvlfjbvldnvjlnsldnvljdnjvsjbvljsdivalc
                        svmmdkvnsdkvnlsdnvjsbvaljbvjbadbsljlsdnvsknvklvsv
                        sklvdns.alsndvlabvjdfbvjbsldnvlknlkdnvskdnvsnfjvsljvsvdvsd
                        ndskfnaldvnlvnalnljdvbnsjlbdljsdlvcnsvljdnbvl
                        sjdnbvlfjbvldnvjlnsldnvljdnjvsjbvljsdivalc
                        svmmdkvnsdkvnlsdnvjsbvaljbvjbadbsljlsdnvsknvklvsv
                        sklvdns.alsndvlabvjdfbvjbsldnvlknlkdnvskdnvsnfjvsljvsvdvsd
                        ndskfnaldvnlvnalnljdvbnsjlbdljsdlvcnsvljdnbvl
                        sjdnbvlfjbvldnvjlnsldnvljdnjvsjbvljsdivalc
                        svmmdkvnsdkvnlsdnvjsbvaljbvjbadbsljlsdnvsknvklvsv
                        sklvdns.alsndvlabvjdfbvjbsldnvlknlkdnvskdnvsnfjvsljvsvdvsd
                            
                        </p>
                    </div>
                </div> : null
                }
        </header>
    );
    }
}
export default Detail;