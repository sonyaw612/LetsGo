import React from 'react';
import ReactDOM from 'react-dom';

class SignInPage extends React.Component{
    state = {
        // insert starting variables
        username: 'sally',
        pw: 'abc123',
        success: false,
    }

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
                <h1>Sign-in Page</h1>

                

                {/* <form  onSubmit={this.onFormSubmit} > */}
                {/* <form>
                    <label for = "UserName">UserName</label><br></br>
                    <input type = "text" id = "UserName" onChange = {this.handleChange} value = {this.state.username} />  <br/>
                    
                    <label for = "Password">Password</label><br></br>
                    <input type = "password" id = "Password" onChange = {this.handleChange} value = {this.state.pw} /> <br/>
                    
                    <input type = "submit" value = "Submit" ></input>
                </form> */}

                {/* <div>
                    <h1>Sign-in</h1>
                    <form>
                        <label for = "UserName">UserName</label><br/>
                        <input type = "text" id = "UserName"/>  <br/>
                        <label for = "Password">Password</label><br/>
                        <input type = "password" id = "Password"/> <br/>
                        <input type = "submit" value = "Submit" ></input>
                    </form>
                </div> */}
            </div>
        );
    }

}

export default SignInPage;