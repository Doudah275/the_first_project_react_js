import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/MainContent";
import {Helmet} from "react-helmet";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Course</title>
        <meta name="description" content="Learn HTML from scratch with our comprehensive course. Master the fundamentals and advanced concepts of HTML programming." />
        <meta name="keywords" content="HTML, HTML course, learn HTML, HTML programming, web development" />
      </Helmet>
    
      <Header />
      <MainContent pageName="HTML"/>
      <Footer />
    </>
  );
};

export default Html;
