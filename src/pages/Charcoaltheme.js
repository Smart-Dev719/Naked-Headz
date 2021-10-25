import '../App.css'
import Navbar  from './navbar'
const Charcoaltheme = () => {
    return  (
        <div className="image-center bg-charcoal">
            <div>
                <img class="visible-1600" src="images/images-charcoal/NHWeb_Charcoal_v1.png" alt=""/>
                <img class="visible-1600" src="images/images-charcoal/NHWebsite_Text_Charcoal_v1.png" alt=""/>
                <img class="visible-1080" src="images/images-charcoal/NHWeb_Charcoal_v1-p-1080.png" alt=""/>
                <img class="visible-1080" src="images/images-charcoal/NHWebsite_Text_Charcoal_v1-p-1080.png" alt=""/>
                <img class="visible-800" src="images/images-charcoal/NHWeb_Charcoal_v1-p-800.png" alt=""/>
                <img class="visible-800" src="images/images-charcoal/NHWebsite_Text_Charcoal_v1-p-800.png" alt=""/>
                <img class="visible-500" src="images/images-charcoal/NHWeb_Charcoal_v1-p-500.png" alt=""/>
                <img class="visible-500" src="images/images-charcoal/NHWebsite_Text_Charcoal_v1-p-500.png" alt=""/>   
            </div>
            <Navbar />
        </div>
    );
}

export default Charcoaltheme;