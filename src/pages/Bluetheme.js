import '../App.css'
import Navbar  from './navbar'
const Bluetheme = () => {
    return  (
        <div className="image-center bg-blue">
            <div>
                <img class="visible-1600" src="images/images-blue/NHWeb_Blue_v1.png" alt=""/>
                <img class="visible-1600" src="images/images-blue/NHWebsite_Text_Blue_v1.png" alt=""/>
                <img class="visible-1080" src="images/images-blue/NHWeb_Blue_v1-p-1080.png" alt=""/>
                <img class="visible-1080" src="images/images-blue/NHWebsite_Text_Blue_v1-p-1080.png" alt=""/>
                <img class="visible-800" src="images/images-blue/NHWeb_Blue_v1-p-800.png" alt=""/>
                <img class="visible-800" src="images/images-blue/NHWebsite_Text_Blue_v1-p-800.png" alt=""/>
                <img class="visible-500" src="images/images-blue/NHWeb_Blue_v1-p-500.png" alt=""/>
                <img class="visible-500" src="images/images-blue/NHWebsite_Text_Blue_v1-p-500.png" alt=""/>                            
            </div>
            <Navbar />
        </div>
    );    
}

export default Bluetheme;