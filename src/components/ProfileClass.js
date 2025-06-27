import React from "react";

class ProfileClass extends React.Component {
   intervalId = null
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       count:0,
  //       count1:0
  //   }
  // }

  constructor(){
    super();
    this.state={
      realData:null
    }
    console.log('ctr is called')
  }
// why we use component did mount, its like useEffect of functionalComponent
// api call 
  async componentDidMount() {
  let data = await fetch('https://api.github.com/users/diyaa2554')
  let realData1 = await data.json()
  console.log(realData1)

  this.setState({
    realData: realData1
  }, () => {
    console.log('component did mount')
  });

  this.intervalId = setInterval(()=>{
    console.log('Nitesh')
  },1000)
}


  componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
      cconsole.log('called')
    }
    console.log('component will update is called')
  }

  componentWillUnmount(){
    console.log('component will unmount is called')
    clearInterval(this.intervalId);
  }

  render() {
    // return some piece of jsx
    console.log('render method is called')
    return this.state.realData === null ? <h1>Loading..</h1> :  (
      <>
        <div style={{ border: "1px solid black", margin : '1rem', padding:'1rem' }}>
          <h1>Class Based Component</h1>
          <h3>Name:{this.state.realData.name}</h3>
          <h3>Address:{this.state.realData.followers}</h3>
          <h3>Bio:{this.state.realData.bio}</h3>
          {/* <h3>count:{this.state.count}</h3> */}
          <img src={this.state.realData.avatar_url} alt="img" width='150px' height='150px' />
          {/* <button
        style={{padding:'0.3rem', margin:'0.2rem'}}
          onClick={() => {
           this.setState({
            count:this.state.count+1,
            count1:this.state.count1+1
           })
          }}
        >
          increment
        </button> */}
        </div>
      </>
    );
  }
}

export default ProfileClass;


