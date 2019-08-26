const Header = () => (
    <section className="section"> 
<nav className="navbar top is-fixed-top" role="navigation" aria-label="main navigation">
  
    <div className="container">
    <div className="img is-size-4 has-text-centered" > <img src="https://colorlib.com/preview/theme/shotgear/img/logo.png"></img></div>
   
    <a role="button" className="navbar-burger burger  " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  
  <div id="navbarBasicExample" className="navbar-menu  ">
  
    <div className="navbar-end">
      <a className="navbar-item">
        HOME
      </a>

      <a className="navbar-item">
        ABOUT
      </a>
      
      <a className="navbar-item">
     SERVICE
      </a>

      <div className="navbar-item has-dropdown is-hoverable ">
        <a className="navbar-link">
        </a>

        <div className="navbar-dropdown ">
          <a className="navbar-item">
            Protofolio
          </a>
          <a className="navbar-item">
            Protofolio Details
          </a>
         </div>
      </div>
      
      <div className="navbar-item has-dropdown is-hoverable ">
        <a className="navbar-link">
          BLOG
        </a>

        <div className="navbar-dropdown ">
          <a className="navbar-item">
            Blog
          </a>
          <a className="navbar-item">]
         Single Blog
          </a>
          </div>
      </div>
      
      <div className="navbar-item has-dropdown is-hoverable ">
        <a className="navbar-link">
          PAGES
        </a>

        <div className="navbar-dropdown ">
          <a className="navbar-item">
            Elements
          </a>
        </div>
      </div>
      <a className="navbar-item">
            CONTACT
        </a>
        <i className="fas fa-shopping-bag store"></i>
    </div>
  </div>
  </div>

  </nav>

<style jsx>{`
.store{
    margin-top: 1.15rem;
}
.top{
    padding-top: 2rem;
    padding-bottom: .5rem;
}
`}
  </style>
  </section>

 
);
export default Header;