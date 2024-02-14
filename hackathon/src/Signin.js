import React from 'react'

const Signin = () => {
  return (
    <div className=" container mt-5 col-lg-4">
        <div className="signin-container">
            <form action="" method="post">
            
            <div className="signin-header text-center">
                <h1>Sign in</h1>
                <p>
                Don't have an account? <a href="{% url 'signup' %}">Sign up</a>
                </p>
            </div>
            <hr />
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required="" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" required="" />
            <p>
                <a id="forgotpassword" href="/">
                Forgot password
                </a>
            </p>
            <div className="d-flex justify-content-center">
                <button type="submit" id="signin-btn">
                Sign in
                </button>
            </div>
            </form>
        </div>
    </div>

  )
}

export default Signin