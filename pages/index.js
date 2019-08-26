import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
 export default () => (
     <div>
        <div className="test">
          <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
            />
            <script
              defer
              src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            />
          </Head>
          < Header />
       </div>
       <Banner />
       <Feature />
       </div>
);

