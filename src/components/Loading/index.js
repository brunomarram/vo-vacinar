import { CircularProgress } from "@material-ui/core";

import "./style.sass";

const Loading = () => {
  return <section className="loading">
    <CircularProgress/>
  </section>;
}
 
export default Loading;