import React, {useEffect, useState} from 'react';
import Aditem from './Aditem';

function Home (){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(loading){
            let _list = [];
            for(let i = 0; i < 20; i++){
                _list.push(<Aditem placeholder="{true}" />);
    
    
            }
            setList(_list);
        }

    }, list );
    

   

    return(
        <React.Fragment>
             <div className="home-page flex">
            <div className="ad-list flex">
               {list}
            </div>
            <button className="load-more fontr c333 b anim s18">
                Load more
            </button>  
        </div>
        <div className="app-ribbon flex aic">
            <div className="img">
                <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png" />
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color">Try to olx app</h2>
              <h2 className="slogan font s18 color">Buy sell and find just about any think using the app and mobile</h2>
            </div>
            <div className="links">
            <h2 className="title fontb s20 color">Get Your App Today</h2>
            <div className="flex as">
            <a href="#" className="noul bl" > <img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" /></a>
            <a href="#" className="noul bl" > <img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" /></a> 
            </div>
            </div>
       
    </div>
        </React.Fragment>
       

        


    )

}



export default Home;