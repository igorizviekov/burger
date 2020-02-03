import React from "react";

function ProgressBar(props) {
  function ProgressBar({
    color = "#FFE400",
    height = 50,
    progress,
    width,

    ...rest
  }) {
    return (
      <div
        style={{
          border: "1px solid white",
          width: "70%",
          overflow: "hidden",
          margin: "auto",
          marginBottom: "10%"
        }}
        {...rest}
      >
        <div
          style={{
            width: `${progress}%`,
            height,
            backgroundColor: color
          }}
        />
      </div>
    );
  }
  return (
    <div>
      <ProgressBar width={500} progress={props.progress} />
    </div>
  );
}

export default ProgressBar;
