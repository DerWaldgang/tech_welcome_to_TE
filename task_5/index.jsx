export const Block1 = ({ imgSrc, imgAlt }) => {
  return <img src={imgSrc} alt={imgAlt} />;
};

export const Block2 = ({ content }) => {
  return <p>{content}</p>;
};

export const Block3 = ({ userData }) => {
  return (
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  );
};

const BlockWrapper = ({ children, mouseEnterCallbak }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

// В APP просто делали следующее:

function App() {
  return (
    <Fragment>
      <BlockWrapper mouseEnterCallbak={() => console.log("hi from Block1")}>
        <Block1
          imgSrc="https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35"
          imgAlt="my picture"
        />
      </BlockWrapper>

      <BlockWrapper mouseEnterCallbak={() => console.log("hi from Block2")}>
        <Block2 content="Magdalena" />
      </BlockWrapper>

      <BlockWrapper mouseEnterCallbak={() => console.log("hi from Block3")}>
        <Block3 userData={{ country: "USA", street: "Maskavas" }} />
      </BlockWrapper>
    </Fragment>
  );
}
