import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  return (
    <>
      <NavBar
        detailPageMounted={props.detailPageMounted}
        detailPageHeroInView={props.detailPageHeroInView}
      />
    </>
  );
};

export default Header;
