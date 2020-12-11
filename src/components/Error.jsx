import React  from 'react';

function Error(props) {
  return (
    <div>
      <figure >
        <div className="sad-mac"></div>
    </figure>
    <figcaption style={{fontSize: props.error.size}} className="sr-text">
      Error {props.error.error}: {props.error.message}
    </figcaption>
  </div>
  );
}

export default Error;
// style=
