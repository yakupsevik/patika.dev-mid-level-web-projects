import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <h1>(404)</h1>
      <p>This page was not found!</p>
      <p>:(</p>

      <hr style={{ width: "16%" }} />

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Error404;
