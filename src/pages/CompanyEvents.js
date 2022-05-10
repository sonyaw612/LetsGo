import React from 'react';
// import ReactDOM from 'react-dom';

class SignInPage extends React.Component{
    state = {
        event:[],
        listOfEvents:[],
        numEvents: 0,
    };
    
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

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
                <h1>List of Events</h1>
                <p>Number of Events: {this.state.numEvents}</p>
            </div>
        );
    }

}

export default SignInPage;