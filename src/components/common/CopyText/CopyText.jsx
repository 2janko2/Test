import classNames from "classnames";
import { useState } from "react";

import classes from "./CopyText.module.scss";

function CopyText(props) {
  const [copySucess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.text);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };

  return (
    <div
      className={classNames(
        classes.wrapper,
        copySucess === true && classes.wrapper_active
      )}
      onClick={copyToClipboard}
    />
  );
}

export default CopyText;
