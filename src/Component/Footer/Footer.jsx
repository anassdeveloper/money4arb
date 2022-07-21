import "./Footer.scss";

const Footer = () =>{
    return(
        <footer className="py-3 footer">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">الرئيسية</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">خدمتنا</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">تواصل معنا</a></li>
      
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">من نحن</a></li>
    </ul>
    <p class="text-center">© 2022 Company, money4arab</p>
  </footer>
    )
}

export default Footer;