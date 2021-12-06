import { TextField } from "@material-ui/core";
import { useState } from "react";
import { HeaderAuth } from "../components/header.auth"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IMAGES } from "../configs/images";

export function SignUp() {

  const [firstName, setFirstName] = useState('David')
  const [lastName, setLastName] = useState('Snajder')
  const [email, setEmail] = useState('david@seedcode.io')
  const [phone, setPhone] = useState('217-555-0133')
  const [password, setPassword] = useState('AAAAAAAAAAAA')
  const [confirmPassword, setConfirmPassword] = useState('AAAAAAAAAAAA')
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);

  return (
    <div className="App">
      <HeaderAuth />
      <div className='auth'>
        <p className='subTitle'>Hi there</p>

        <p className='title'>Let's get started</p>

        <div className='container'>
          <div className='box'>
            <img src={IMAGES.IconUserLogin} alt="icon" />
          </div>
          <div>
            <p className='label'>First Name</p>
            <TextField
              size="small"
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='input halfInput'
            />
          </div>
          <div className='ml20'>
            <p className='label'>Last Name</p>
            <TextField
              size="small"
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='input halfInput'
            />
          </div>
        </div>

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
              onChange={(e) => setEmail(e.target.value)}
              className='input'
            />
          </div>
        </div>

        <div className='container'>
          <div className='box'>
            <img src={IMAGES.IconCallLogin} alt="icon" />
          </div>
          <div>
            <p className='label'>Phone Number</p>
            <div className='flagInput'>
              <img src={IMAGES.IconFlagLogin} alt="icon" />
              <ExpandMoreIcon className='downIcon' />
            </div>
            <br /><br />
          </div>

          <TextField
            size="small"
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='input flagTextField'
          />
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
              type={hidden1 ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              className='input'
            />
          </div>
          <div onClick={() => setHidden1(!hidden1)}>
            {hidden1 && <VisibilityIcon className='eyeIcon' />}
            {!hidden1 && <VisibilityOffIcon className='eyeIcon' />}
          </div>
        </div>

        <div className='container'>
          <div className='box'>
            <img src={IMAGES.IconLockLogin} alt="icon" />
          </div>
          <div>
            <p className='label'>Confirm Password</p>
            <TextField
              size="small"
              variant="standard"
              value={confirmPassword}
              type={hidden2 ? "password" : "text"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='input'
            />
          </div>
          <div onClick={() => setHidden2(!hidden2)}>
            {hidden2 && <VisibilityIcon className='eyeIcon' />}
            {!hidden2 && <VisibilityOffIcon className='eyeIcon' />}
          </div>
        </div>

        <br />
        <div className='LoginButton'>Create Account</div>

        <p className='accountTitle'>By signing up you agree to our <span>Terms of Service</span></p>
        <p className='policyTitle'>and you've read our <span>Privacy Policy</span>.</p>

        <p className='accountTitle'>Already have an account?</p>
        <Link className='signUpTitle' to="/">Sign In.</Link>
        <br /><br />
      </div>
    </div>
  );
}
