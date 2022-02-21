import React from "react";

function Progress(props) {
  return (
    <>
      <div class="progress">
        <div class={`progress-bar ${props.width}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          {props.name}
        </div>
      </div>
    </>
  );
}

export default Progress;
