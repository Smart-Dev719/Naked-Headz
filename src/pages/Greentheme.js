import '../App.css'
import Navbar  from './navbar'
const Greentheme = () => {
    return  (
        <div className="image-center bg-green">
            <div>
                <img class="visible-1600" src="images/images-green/NHWeb_Green_v1.png" alt=""/>
                <img class="visible-1600" src="images/images-green/NHWebsite_Text_Green_v1.png" alt=""/>
                <img class="visible-1080" src="images/images-green/NHWeb_Green_v1-p-1080.png" alt=""/>
                <img class="visible-1080" src="images/images-green/NHWebsite_Text_Green_v1-p-1080.png" alt=""/>
                <img class="visible-800" src="images/images-green/NHWeb_Green_v1-p-800.png" alt=""/>
                <img class="visible-800" src="images/images-green/NHWebsite_Text_Green_v1-p-800.png" alt=""/>
                <img class="visible-500" src="images/images-green/NHWeb_Green_v1-p-500.png" alt=""/>
                <img class="visible-500" src="images/images-green/NHWebsite_Text_Green_v1-p-500.png" alt=""/>   
            </div>

            <Navbar/>
        </div>
        
    );
}

export default Greentheme;