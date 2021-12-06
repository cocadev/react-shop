import { TextField } from "@material-ui/core";
import { useState } from "react";
import { HeaderAuth } from "../components/header.auth"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";
import { IMAGES } from "../configs/images";

export function Login() {

  const [email, setEmail] = useState('david@seedcode.io')
  const [password, setPassword] = useState('AAAAAAAAAAAA')
  const [hidden, setHidden] = useState(true);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePwd = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <HeaderAuth />
      <div className="auth">
        <img src={IMAGES.ImgWorkerLogin} className='mt130' alt="login logo" />
        <p className='title'>Log In</p>

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

        <div className='container'>
          <div className='box'>
            <img src={IMAGES.IconKeyLogin} alt="icon" />
          </div>
          <div>
            <p className='label'>Password</p>
            <TextField
              size="small"
              variant="standard"
              value={password}
              type={hidden ? "password" : "text"}
              onChange={(e) => onChangePwd(e)}
              className='input'
            />
          </div>

          <div onClick={()=>setHidden(!hidden)}>
            {hidden && <VisibilityIcon className='eyeIcon' />}
            {!hidden && <VisibilityOffIcon className='eyeIcon' />}
          </div>

        </div>

        <br />
        <div className='LoginButton'>Login</div>

        <Link to='/reset' className='forgetTitle'>Forgot password?</Link>
        <p className='accountTitle'>Don't have an account?</p>
        <Link to='/signup' className='signUpTitle'>Sign Up.</Link>
        <br /><br />
      </div>
    </div>
  );
}
