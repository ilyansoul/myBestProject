import React, { Component } from 'react';
import './styles/EditUser.css';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      error: null
    };
    this.state = {
      image: null,
      formData: {
        user_id: '',
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        gender_identity: "man",
        gender_interest: "woman",
        url: "",

      }
    };
  }


  handleImageChange = (event) => {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <div>
          <form>
            <div className='user-info'>
              <h1>Inscription</h1>


              <label><b>Nom d'utulisateur</b></label>
              <br />
              <input className='text'
                type="text"
                name="username"
                placeholder="Enter Username"
                value={this.state.formData.username}

                onChange={this.state.handleChange} />
              <label><b> Date de Naissance</b></label>
              <br /><br />
              <input className='text-date'
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                // value={this.state.formData.dob_day}
                onChange={this.handleChange}
              />

              <input className='text-date'
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                // value={this.state.formData.dob_month}
                onChange={this.handleChange}
              />

              <input className='text-date'
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                // value={this.state.formData.dob_year}
                onChange={this.handleChange}
              />
              <br /><br />
              <div className='posi'>
                <label >Gender</label>
                <label >Gender Interest</label>
              </div>


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


                <select name="gender_interest">
                  <optgroup >
                    <option
                      checked={this.state.formData.gender_interest === "man"}

                    >
                      Homme

                    </option>
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
                onChange={this.handleChange}
              />

              <label ><b>Mot de passe</b></label>
              <input className='password'
                type="password"
                placeholder="Enter Password"
                name="password"
                required={true}
                onChange={this.handleChange} />

              <label ><b>Confirmation Mot de passe</b></label>
              <input className='password'
                type="password"
                placeholder="Enter Password"
                name="password-check"
                required={true}
                onChange={this.handleChange} />
              <br />

              <label ><b>Telephone</b></label>
              <br />

              <input className='phone'
                type="phone"
                name="tel"
                placeholder="812345678"
                required={true}
                onChange={this.handleChange}
              />
              <br />

              <label>Picture Profile</label>
              <input type="file"
                name='url'
                id='url'
                require={true}
                onChange={this.handleImageChange}
              />
              <div className='photo-container'>
                <br /><br />
                {this.state.image ? (
                  <img src={this.state.image} alt="Preview" />
                ) : (
                  <img src={'https://images.unsplash.com/photo-1662880195918-63fecf8a8b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'} alt="Preview" />
                )}
              </div>

            </div>
          </form>

        </div>

        <div className='board'>
          <div className='photo-container'>
            ddd
          </div>
        </div>

      </>

    );
  }
}

export default componentName;
