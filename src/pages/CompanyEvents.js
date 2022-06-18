import React from 'react';
import ReactDOM from 'react-dom';

// function 

class SignInPage extends React.Component{
    state = {
        event:[],
        listOfEvents:[],
        numEvents: 0,
    };

/*
    // DISPLAY ONGOING EVENT
    async componentDidMount(){
        const url = 'http://localhost:8080/api/event';
        try {
            await fetch(url) 
            .then((res) => {
                console.log("------> Received data . . . Converting to JSON <------");
                console.log(res)
                res.json();
            })
            .then((json) => {
                if(json) {
                    console.log("Data converted to JSON . . . Output:");
                    console.log(json);
                }
                else{
                    console.log("JSON data null.")
                }

                console.log("<------ End of Request ------>")

                // console.log('--------------');
                // this.setState({
                //     event: responseJson,
                //     numEvents: responseJson.length,
                // });
                // console.log(this.state.event);
            })
        // .then(() =>{
        //     for(let i in this.state.event){
        //         console.log(this.state.event[i]);
        //         var joined = this.state.listOfEvents.concat(<EventCard card={this.state.event[i]}/>);
        //         this.setState({ listOfEvents: joined });
        //     }
        // });
        } catch (err) {
            // console.error(err.message);
            console.log("Error occured");
        } 
    //    console.log("----------------")
    //    console.log(this.state.listOfEvents)
    };
*/

    render(){

        const style = {
            color: "#000000",
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            // borderColor: "black",
            paddingTop: '30px',
            paddingBottom: '30px',
            paddingLeft: '80px',
            paddingRight: '80px',
            width: '550px',
        }
        return(
            <div style = {{ textAlign: 'center', paddingBottom: '150px' }} >

                {/* <div style = {{ padding }}></div> */}
                <br/><br/> 
                <h1>Upcoming Events</h1>
                <br/>

                <div>
                    <button style = { style }>
                        <h4>Manny Cruz</h4>
                        <p>Date: Saturday May 21st, 2022</p>
                        <p>Time: 8:00pm</p>
                        <p>Location: Lehman Center For The Performing Arts</p>
                        <p>Bronx, NY, 10468</p>
                        
                    </button>
                    <br/><br/>
                </div>  
                
                <br/><br/>
                <h1>Past Events</h1>
                <br/>

                <div>
                    <button style = { style }>
                        <h4>Memorial Lecture with NYS Attorney General Latitia James</h4>
                        <p>Date: Thursday, March 25, 2021</p>
                        <p>Time: 6:30pm</p>
                        <p>Location: Online, Zoom</p>
                    </button>
                    <br/><br/>
                    <button style = { style }>
                        <h4>The Sara Little Turnbull</h4>
                        <p>Date: Thursday, MArch 18th, 2021</p>
                        <p>Time: 3:00pm</p>
                        <p>Location: Lehman College Art Gallery</p>
                        <p>Bronx, NY, 10468</p>                    
                    </button>
                    <br/><br/>
                    <button style = { style }>
                        <h4>Lehman Stages Presents Bronx Tales</h4>
                        <p>Date: Thursday, March 4th, 2021</p>
                        <p>Time: 7:00pm</p>
                        <p>Location: Online</p>
                    </button>
                    <br/><br/>
                </div>
            </div>
        );
    }

}

export default SignInPage;