import { TextField } from "@material-ui/core";
import { useState } from "react";
import { HeaderAuth } from "../components/header.auth"
import { Link } from "react-router-dom";
import { IMAGES } from "../configs/images";

export function ResetPassword() {

  const [email, setEmail] = useState('david@seedcode.io')

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="App">
      <HeaderAuth />
      <div className='auth'>
        <p className='subTitle mt200'>We'll get you back</p>

        <p className='title'>Reset Password</p>
        <p className='description'>Please enter the associated email address for your account to <br/>receive a one-time password reset code.</p>

        <div className='container'>
          <div className='box'>
            <img src={IMAGES.IconMarkLogin} alt="icon" />
          </div>
          <div>
            <p className='label'>Email Address</p>
            <TextField
              size="small"
              variant="standard"
              value={email}
              onChange={(e) => onChangeEmail(e)}
              className='input'
            />
          </div>
        </div>

        <br />
        <div className='LoginButton'>Send Code</div>

        <p className='forgetTitle'>I know my password</p>
        <p className='accountTitle'>Don't have an account?</p>
        <Link to='/signup' className='signUpTitle'>Sign Up.</Link>
        <br /><br />
      </div>
    </div>
  );
}
