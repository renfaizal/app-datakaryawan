import React, {Component} from 'react';

class Login extends Component {

    render(){
        return(
            <div className="columns is-centered has-background-primary	">
            <div className="column is-half">
            <div class="field"/>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
            
                <div class="field"/>
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                
                <div class="field"/>
                <p class="control">
                    <button class="button is-success" type="submit">
                    Login
                    </button>
                </p>
                </div>
                </div>
        );
    }
}
export default Login