import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/MainContent";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Pageeeeeee</title>
        <meta
          name="description"
          content="Welcome to our home page! Learn HTML, CSS, and JavaScript from scratch with our comprehensive courses."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, web development, programming"
        />
      </Helmet>

      <Header />
      <MainContent pageName="Home" />
      <Footer />
    </>
  );
};

export default Home;
