import coinHeader from "../../photo/coinHeader.jpg";

const Coin = () => {
    return(
      <article>
        <div className="bg-light p-4 rounded my-4">
          <h1>CoinPop يمكنك من الربح بدون حدود حسب وقتك</h1>
          <p className="lead">هذا تطبيق صدقيني صادق و يمكنك
           الكسب بدون حدود حتى لو إشتغلت عليه
            اليوم كامل لن يتوقف عن الدفع لك يمكنك
            تجربة ذلك بنفسك ما عليك سوى تحميل التطبيق
            و إنشاء حساب هذا تطبيق يركز على لعب الألعاب
            و داخل ألعاب ستجد إعلانات كلما عملت أكثر ربحت أكثر</p>
          <img src={coinHeader} alt="header" className="w-75" /><br></br>
          <a className="btn btn-lg btn-success my-3" href="#" role="button">تحميل »</a>
        </div>
      </article>
    )
}
export default Coin;