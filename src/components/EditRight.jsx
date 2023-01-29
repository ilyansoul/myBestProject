import React, { Component } from 'react';

class EditRight extends Component {
  render() {
    return (
         <div>
        <form  action='http://localhost:5000/api/signup' method='POST' >
          <div className='BoxInfo'>
            <h1>Inscription</h1>


            <label><b>Nom d'utulisateur</b></label>
            <br />
            <input className='text'
              type="text"
              name="username"
              placeholder="Enter Username"
              value={this.state.formData.username}

              />
            <label><b> Date de Naissance</b></label>
            <br /><br />
            <input
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
             
            />

            <input
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
        
            />

            <input
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
         
            />
            <br /><br />

            <label>Gender</label>
            <div className="multiple-input-container">

              <select 
               name="gender_identity" >

                <optgroup>
                  <option                
                   checked={this.state.formData.gender_identity === "man"}
                   onChange={this.handleChange}

                   
>
                    Homme

                  </option>
                  <option                  
                  checked={this.state.formData.gender_identity === "woman"}
>
                    femme
                  </option>

                </optgroup>

              </select>

             </div>

             <label>Gender Interest</label>
            <div className="multiple-input-container">

              <select name="gender_interest">
                <optgroup >
                  <option                
                   checked={this.state.formData.gender_interest === "man"}
                   
>
                    Homme

                  </option>componentName
                  <option  
                   checked={this.state.formData.gender_interest === "woman"}
>                    Femme
                  </option>

                </optgroup>

              </select>

             </div>

            <label><b>Email</b></label>
            <input className='text'
              type="text"
              placeholder="Enter Email"
              name="email"
              required={true}
             
            />

            <label ><b>Mot de passe</b></label>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="password"
              required={true}
            />

            <label ><b>Confirmation Mot de passe</b></label>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="password-check"
              required={true}
               />
            <br />

            <label ><b>Telephone</b></label>
            <br />

        
            <label>Picture Profile</label>
            <input type="file"
              name='url'
              id='url'
              require={true} />
              <div className='photo-container'>
              <br /><br />
                <img src={this.state.formData.url} alt="profile pic preview" />
              </div>

            <div class="clearfix">

              <button type="submit" className="btn-submit">Sign Up</button>
              {this.state.error && <div className="error-message">{this.state.error}</div>}
            </div>
          </div>
        </form> </div>
    );
  }
}

export default EditRight;
