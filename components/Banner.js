const Banner = () => (
    <div className="back">
        <div>
            <h2 className="head column is-3 is-offset-7 is-size-5 has-text-white has-text-centered has-text-weight-semibold">
                MODEL PHOTOGRAPY
            </h2>
        <div className="column is-3 is-offset-7">
            <h1 className=" hint has-text-white is-size-2 has-text-weight-bold  has-text-centered">
                CREATIVE
            <span className="color has-text-danger is-size-2 has-text-weight-bold has-text-centered">STUDIO</span>
            </h1>
           
        </div>
            <h3 className=" item has-text-centered has-text-white column is-3 is-offset-7">
            Capturing moments from today
            </h3>
         </div>
        <div className="view">
         <a className=" line column is-3 is-offset-7">
         <hr />
         <h3 className="bottm has-text-centered has-text-white has-text-weight-semibold"> VIEW WORK</h3>
         </a>
         </div>
         
<style jsx>{`
.back{
    background-image:url("https://colorlib.com/preview/theme/shotgear/img/banner_bg.png");
   background-size: cover;
    background-repeat : no-repeat;
   height:40rem;
   background-position: center;
}
.color{
    margin-top: -3.75rem;
    padding-left: 15px;
}
.head{
    padding-top:17rem;
}
.bottm{
    margin-top: -3.25rem;
}
view:hover{
    color:#ff4800;
}
`}

</style>
    </div>
);
export default Banner;
