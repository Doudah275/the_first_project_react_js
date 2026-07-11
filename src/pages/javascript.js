import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/MainContent";
import {Helmet} from "react-helmet";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Course</title>
        <meta name="description" content="Learn JavaScript from scratch with our comprehensive course. Master the fundamentals and advanced concepts of JavaScript programming." />
        <meta name="keywords" content="JavaScript, JavaScript course, learn JavaScript, JavaScript programming, web development" />
      </Helmet>
    
      <Header />
      <MainContent pageName="Javascript"/>
      <Footer />
    </>
  );
};

export default Javascript;
