import React from "react";

function Form() {
  return (
    <div className="form-wrapper">
      <h1 className="form-title">NFT Access</h1>
      <p className="form-text">
        Please fill your detail to access your account.
      </p>
      <form className="form">
        <label className="form-label">
          Email
          <input
            className="form-mail input"
            placeholder="debra.holt@example.com"
            type="text"
          />
          <img width="24" height="24" src="./assets/xIcon.svg" alt="" />
        </label>
        <label className="form-label">
          Password
          <input
            type="{{ showPassword ? 'text' : 'password' }}"
            className="form-pass input"
            placeholder="••••••••"
          />
          <img width="24" height="24" src="./assets/hideIcon.svg" alt="" />
        </label>
        <div className="wrapper">
          <label className="form-label checkbox">
            <input type="checkbox" className="form-check" />
            Remember me
          </label>
          <a href="#" className="form-link">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="form-submit">
          Sign in
        </button>
        <a href="#" className="form-log">
          <img width="24" height="24" src="./assets/Google.svg" alt="" />
          <span>Sign in with Google</span>
        </a>
      </form>
      <a href="#" className="form-register">
        Don’t have an account? <span>Sign up</span>
      </a>
    </div>
  );
}

export default Form;
