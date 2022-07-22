import clipHeader from "../../photo/clipHeader.jpg";

const Clip = () => {
    return(
      <article>
        <div className="bg-light p-4 rounded my-4">
          <h1>الربح من خلال مشاهدة مقاطع فيديو ClipClaps هو </h1>
          <p className="lead">من خلال هذا التطبيق يمكنك الكسب عند
           مشاهدتك لمقاطع الفيديو الموقع
            صادق و يدعم بايبال و السحب كل يوم أقل مبلغ لسحب هو 0.1 </p>
          <img src={clipHeader} alt="header" className="w-75" /><br></br>
          <a className="btn btn-lg btn-success my-3" href="#" role="button">تحميل »</a>
        </div>
      </article>
    )
}
export default Clip;