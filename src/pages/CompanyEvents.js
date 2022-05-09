import React from 'react';
// import ReactDOM from 'react-dom';

class SignInPage extends React.Component{
    state = {
        event:[],
        listOfEvents:[]
    };
    
    async componentDidMount(){
        const url = "/api/event/";
        try {
            const response = await fetch(url, {
                method: "GET"
            }) .then(response => response.json())
            .then(responseJson => {
            console.log(responseJson);
            console.log('--------------');
            this.setState({event: responseJson});
            console.log(this.state.event);
            console.log("amount of event is " + this.state.event.length);
         }) 
        .then(() =>{
            for(let i in this.state.event){
                console.log(this.state.event[i]);
                var joined = this.state.listOfEvents.concat(<EventCard card={this.state.event[i]}/>);
                this.setState({ listOfEvents: joined });
            }
        });
       } catch (err) {
         console.error(err.message);
       } 
    //    console.log("----------------")
    //    console.log(this.state.listOfEvents)
    };

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
                <h1>Sign-in Page</h1>
            </div>
        );
    }

}

export default SignInPage;