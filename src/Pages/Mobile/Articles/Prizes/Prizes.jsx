import prizesHeader from "../../photo/prizesHeader.jpg";

const Prizes = () => {
    return(
      <article>
        <div className="bg-light p-3 rounded my-3">
          <h1>تطبيق رائع و مصنف الأول Prizes</h1>
          <p className="lead">من خلال هذا التطبيق
           يمكنك لعب ألعاب و مشاهدة الإعلانات
           و شراء تذاكر الحظ و إذا كان حظك جيد ستكسب الكثير صديقني
            هذا التطبيق صادق من خلال شهادة الكثير من مستخدمينه
            يركز على لعب ألعاب و كسب بطاقات و مشاهدة الإعلانات
            و إذا حصلت على مركز جيد ستدخل في سحب الأسبوعي و أقل </p>
          <img src={prizesHeader} alt="header" className="w-75" /><br></br>
          <a className="btn btn-lg btn-success my-3" href="#" role="button">تحميل »</a>
        </div>
      </article>
    )
}
export default Prizes;