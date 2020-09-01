  
import React from 'react';


class Forma extends React.Component{
    state = {
        username:"",
        password:"",
        age:"",
        gender:"",
        occupation:"",
    };
    handleChangeUserName = event => {
        this.setState({ username: event.target.value });
    };
    
    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleChangeAge = event => {
        this.setState({ age: event.target.value });
    };
    
    handleCheckFemale = event => {
        this.setState({ female: event.target.checked });
    };

    handleCheckMale = event => {
        this.setState({ male: event.target.checked });
    };

    handleCheckPreferNotToSay = event => {
        this.setState({ prefernottosay: event.target.checked });
    };

    handleChangeOccupation = event => {
        this.setState({ occupation: event.target.value });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render(){
        return(
            <div className="App">
                
                <form>
                    <h1>Username</h1>
                    <br/>
                    <input className="input" placeholder='Username' type='text' value={this.state.username} onChange={this.handleChangeUserName}/>
                    <br/><br/>
                    <h1>Password</h1>
                    <br/>
                    <input className="input" placeholder='Password' id='submit' type='password' value={this.state.password} onChange={this.handleChangePassword}/>
                    <br/> <br/>
                    <h1>Age</h1>
                    <br/>
                    <input className="input" placeholder='Age' type='text' value={this.state.age} onChange={this.handleChangeAge}/>
                    <br/><br/>
                    <h1>Gender</h1>
                    <br/>
                    <label>Female</label>
                    <input name='gender'id='female'  type='radio' checked={this.state.female} onChange={this.handleCheckFemale}/>
                    <label>Male</label>
                    <input name='gender' id='male'type='radio' checked={this.state.male} onChange={this.handleCheckMale}/>
                    <label>Prefer not to say</label>
                    <input name='gender' id=''type='radio' checked={this.state.prefernottosay} onChange={this.handleCheckprefernottosay}/>
                   <br/>
                   <br/>
                   <h1>Occupation</h1>
                   <br/>
                   <input className="input" placeholder='Occupation' type='text' value={this.state.occupation} onChange={this.handleChangeOccupation}/>
                   <br/>
                   <br/>
                   <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Forma;