import React from "react";

// function Greet() {
//     return <h1>Hello Arman</h1>
// }

// const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>
//                 Hello {props.name} aka {props.heroname}
//             </h1>
//             {props.children}
//         </div>
//     )
// }

// Destructure in functiona parameter
// const Greet = ({ name, heroName }) => {
//   console.log(name, heroName);
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// Destructure in function body
const Greet = (props) => {
    console.log(props);
    const {name, heroName} = props

    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet;
