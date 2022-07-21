import mob from "../../images/mob.svg";
import mobile from "../../images/mobile.svg";
import freelance from "../../images/freelance.svg";
import "./Start.scss";
import { Link } from "react-router-dom";


const Start = () => {
    return(
        <main className="start py-5">
           <div className="container py-5">
              <div className="row start_row">
                 <div className="col-lg-4">
                   <div className="card start_row_card">
                      <img src={mobile} alt="mobile" className="w-50" height="100px"/>

                      <div className="card-body start_row_card_body">
                          <h5 className="card-title">كيف تجد مجال في العمل الحر</h5>
                          <p className="card-text">يمكنك
                           البدأ في المجال الذي تحب 
                          و تجعل منه وظيفتك الأساسية
                           التي تدر عليك الكثير
                           من أموال يمكنك تعلم
                           التصميم، التسويق أو البرمجة </p>
                      </div>
                      <button className="btn btn-lg btn-info"><Link to="/web" className="link">ابدأ في التعلم</Link></button>
                    </div>
                 </div>

                 <div className="col-lg-4">
                   <div className="card start_row_card">
                      <img src={mob} alt="mobile" className="w-50" />

                      <div className="card-body start_row_card">
                          <h5 className="card-title">تعلم الربح من التطبيقات </h5>
                          <p className="card-text">هل أنت متفرغ للقيام ببعض المهمات السهلة
                           و كسب بعض دولارات هنا ستجد شرح بعض التطبيقات </p>
                      </div>
                      <button className="btn btn-lg btn-info">
                      <Link to="/mobile" className="link">ابدأ في التعلم</Link>
                      </button>
                    </div>
                 </div>

                 <div className="col-lg-4">
                   <div className="card start_row_card">
                      <img src={freelance} alt="mobile" className="w-50"/>

                      <div className="card-body start_row_card_body">
                          <h5 className="card-title">تعلم الربح من مواقع الويب </h5>
                          <p className="card-text">
                          يمكنك كسب كثير من أموال من خلال زيارة مواقع و تسويق لمنتجاتها أو يمكنك الكسب من مشاهدة 
فيديوهات يوتيوب
                          </p>
                      </div>
                      <button className="btn btn-lg btn-info">
                      <Link to="/freelance" className="link">ابدأ في التعلم</Link>
                      </button>
                    </div>
                 </div>
              </div>
           </div>
        </main>
    )
}
export default Start;