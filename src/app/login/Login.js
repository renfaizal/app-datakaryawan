import React, {Component} from 'react';

class Login extends Component {

    render(){
        return(
            <div className = "container ">
            <section className="hero">
                <div className="hero-body">WELCOME</div>
            </section>
            <div className="columns  is-centered">
                <div className="column is-half ">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                        <input className="input is-hovered" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                        <input className="input is-hovered" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success" type="submit">Login</button>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Login