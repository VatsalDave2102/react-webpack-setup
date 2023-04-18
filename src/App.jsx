import White from "./assets/react-logo-white.png";
import "./styles.css"

export const App = () => {
  return (
    <>
      <div className="container">
        <h1>React setup using webpack</h1>
        <img src={White} alt="" width={300} />
      </div>
    </>
  );
};
