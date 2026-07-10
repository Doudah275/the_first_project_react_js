import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/MainContent";

const Home = () => {
  return (
    <>
      <Header />
      <MainContent pageName="Home" create="name home"/>
      <Footer />
    </>
  );
};

export default Home;
