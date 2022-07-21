import img from "../images/img.png";
import "./Home.scss";
import Btn from "../Component/Btn/Btn";

const Home = () => {
    return(
        <div className="Home py-5">
            <div className="container">
                <div className="row Home_row">
                    <div className="col-lg-6 Home_row_box py-4">
                        <h1>أفضل منصة عربية لشرح الربح من الإنترنت بطرق شرعية صادقة </h1>
                         <p>
                         هل تحلم بالعمل عبر إنترنت
                         ، هل تطمح بكسب بعض
                          الدولارات إضافية تعبت من البحث عن طرق
                          و جربت الكثير من التطبيقات و مواقع
                          و كل محاولاتك فشلت ، هل جربت طرق وتم
                          النصب عليك و لم يتم الدفع لك ، لا تقلق
                          إنك في المكان المناسب سنقف معك حتى تكسب 
                         أول دولار من خلال تجربتنا و تعاملنا مع 
                         العديد من المواقع و سنضمن لك حقك 
                         </p>
                        <Btn />
                    </div>
                    <div className="col-lg-6 Home_row_box fcenter">
                       <img src={img} alt="web" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;