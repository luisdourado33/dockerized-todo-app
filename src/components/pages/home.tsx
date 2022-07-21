import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import IPage from "../../interfaces/page";

const HomePage: React.FC<IPage> = ({ name }) => {
  useEffect(() => {
    console.log(`[${name}] rendering`);
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default HomePage;
