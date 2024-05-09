 import React from "react"

 class UserClass extends React.Component {

   constructor  (props) {
      super(props);

      console.log(props);
   }

    render(){
        return (
            <div className="User-card">
            <h2>Name: Ronald</h2>
            <h2>Location: Thrissur</h2>
            <h2>Contact: 8078059674</h2>
        </div>
        )
    }
 }
 export default UserClass;