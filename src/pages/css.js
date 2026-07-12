import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/MainContent";
import { Helmet } from "react-helmet";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Course</title>
        <meta
          name="description"
          content="Learn CSS from scratch with our comprehensive course. Master the fundamentals and advanced concepts of CSS programming."
        />
        <meta
          name="keywords"
          content="CSS, CSS course, learn CSS, CSS programming, web development"
        />
      </Helmet>
      <Header />
      <MainContent pageName="CSS" />
      <Footer />
    </>
  );
};

export default Css;
