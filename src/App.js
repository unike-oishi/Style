import { CssModules } from "./compornents/CssModules.jsx";
import { InlineStyle } from "./compornents/inlineStyle";
import { StyledComponents } from "./compornents/StyledComponents.jsx";
import { StyledJsx } from "./compornents/StyledJsx.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
