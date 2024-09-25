import React from "react";

const Hello = () => {
  // return (
  //     <div className='dummyClass>
  //         <h1>Hello Arman</h1>
  //     </div>
  // )

  // createElement method can accept any number of elements as children

  return React.createElement(
    "div",
    // null, // object of key value pair that applied to the element
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, "Hello Arman")
  );
};

export default Hello;
