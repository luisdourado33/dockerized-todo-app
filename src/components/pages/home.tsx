import React, { useEffect } from "react";
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