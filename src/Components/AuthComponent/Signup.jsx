import React, { Component, Fragment} from 'react';
import "./auth.css";
//import firebas
class Signup extends Component {
    state = {  
        email:"",
        confirmEmail:"",
        password:"",
        profile:"",
        dob:"",
        gender:"",
    }
    handleChange = e =>{
        
        this.setState({[e.target.name]:e.target.value});
        
        console.log(e.target.name);
        console.log(e.target.value)
    };
    handleSubmit = e =>{
        e.preventDefault();
        let{email,confirmEmail,password,profile,dob,gender}=this.state;
        console.log({email,confirmEmail,password,profile,dob,gender});
    }
    render() { 
        let{email,confirmEmail,password,profile,dob,gender}=this.state;
        return  ( 
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4 id="hovr">SignUp With Your Email</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <label>What's Your Email?</label>
                            <input 
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                            className="form-control"
                            placeholder="enter ur email"
                            />
                            </div>
                            {/* end eamil */}
                            <div className="form-group">
                            <label>Confirm Your Email?</label>
                            <input 
                            type="email"
                            name="confirmemail"
                            onChange={this.handleChange}
                            value={confirmEmail}
                            className="form-control"
                            placeholder="enter ur email again"
                            />
                            </div>
                            {/* end email */}
                            <div className="form-group">
                            <label>Create a Pssword</label>
                            <input 
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={password}
                            className="form-control"
                            placeholder="Create a pssword"
                            />
                            </div>
                            {/* passs end */}
                            <div className="form-group">
                            <label>What Should We Call You?</label>
                            <input 
                            type="text"
                            name="profile"
                            onChange={this.handleChange}
                            value={profile}
                            className="form-control"
                            placeholder="enter aprofile name"
                            />
                            </div>
                            {/*  password end- */}
                            <div className="form-group">
                            <label>What Is Your Date Of Birth</label>
                            <input 
                            type="datetime-local"
                            name="dob"
                            onChange={this.handleChange}
                            value={dob}
                            className="form-control"
                            placeholder="enter DOB"
                            />
                            </div>
                            {/* end dob */}
                            <div className="form-group">
                                <label>What Is Your Gender</label>
                                <input 
                                type="radio" 
                                name="gender" 
                                onChange={this.handleChange}
                                value={gender}
                                />
                                Male
                                <input 
                                type="radio" 
                                name="gender"
                                onChange={this.handleChange}
                                value={gender}
                                />
                                Female
                                <input 
                                type="radio" 
                                name="gender"
                                onChange={this.handleChange}
                                value={gender}
                                />
                                Non-binary

                            </div>
                            {/* end gender */}
                            <div className="form-group">
                            <input type="checkbox" name="checkdata"/>
                            Shar my registration data with spotify's content providers for
                            marketing purpose

                            </div>
                            {/* end checkbox */}
                            <p>By clicking on Sign up, you agree to Spotify's 
                                <a href="/" >Terms and Conditions of Use.</a>
                                </p>
                            <p>
                            To learn more about how Spotify collects, uses, shares and protects your personal data please read 
                            <a href="/" >Spotify's Privacy Policy.</a>
                            </p>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">SignUp</button>

                            </div>
                        </form>

                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default Signup;
