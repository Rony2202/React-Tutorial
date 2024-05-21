import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          name: "sample data",
          Username: "just location",
        }
    };

    //console.log( this.props.name + "child constructor");
   
  }

  async componentDidMount(){
    //console.log( this.props.name + "child component did mount");
    // Api call

    const data = await fetch(" https://api.github.com/users/Rony2202");
    const json = await data.json();
    
    this.setState({
      userInfo: json,
    });

    console.log (json);
  }


  componentDidUpdate(){
     console.log ("componentdid Did Update")
  };

  componentWillUnmount() {
    console.log ("component will unmount");
  }

 
  render() {

  

   //console.log( this.props.name + "child render");
   const { name,login,avatar_url } = this.state.userInfo;

    return (
      <div className="User-card">
        <img src= {avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>Username: {login}</h2>
        <h2>Contact: 8078059674</h2>
      </div>
    );
  }
}



export default UserClass;