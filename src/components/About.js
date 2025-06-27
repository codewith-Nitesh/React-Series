// import React from "react";
// import Profile from "./Profile";
// import ProfileClass from "./profileClass";

import ProfileClass from "./profileClass";

// const About = () => {
//   return (
//     <div>
//       About section
//       <Profile name="Nitesh" address="Byas" location="majra" />
//       <ProfileClass
//         name="Diya"
//         location="PaontaSahib"
//         email="diya123@gamil.com"
//       />
//     </div>
//   );
// };

// export default About;

class About extends React.Component {
  constructor() {
    super();
    console.log("constructed method is called");
  }
  componentDidMount() {
    console.log("parent component did mount is called");
  }
  render() {
    console.log("render method is called");
    return (
      <ProfileClass
        // name="Diya"
        // location="PaontaSahib"
        // email="diya123@gamil.com"
      />
    );
  }
}

export default About;
