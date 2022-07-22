import grewardHeader from "../../photo/grewardHeader.jpeg";

const Grward = () => {
    return(
      <article>
        <div className="bg-light p-4 rounded my-4">
          <h1>تطبيق المهمات السريعة هو Greward صادق ١٠٠ * ١٠٠ أنا أضمن لك ذلك</h1>
          <p className="lead">من خلال هذا التطبيق يمكنك
           القيام ببعض المهام البسيطة
           كإجابة على الإستطلاعات و تحميل تطبيقات
            و بالإضافة لمشاهدة مقاطع فيديو صديقني ستستمتع
            و كأنك تلعب لعبتك المفضلة دعني أصمت و أدعك تجرب ذلك بنفسك</p>
          <img src={grewardHeader} alt="header" className="w-75" /><br></br>
          <a className="btn btn-lg btn-success my-3" href="#" role="button">تحميل »</a>
        </div>
      </article>
    )
}
export default Grward;