import React from 'react'

const Signup = () => {
  return (
    <div className=" container container-main mt-5 col-lg-4">
        <div className="signin-container">
            <form action="" method="post">
                <div className="signin-header text-center">
                    <h1>Sign Up</h1>
                    <p>
                    Already a user? <a href="/signin">Sign in</a>
                    </p>
                </div>
                <hr />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required="" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" required="" />
                <label htmlFor="password">Confirm Password</label>
                <input type="text" id="password" name="password" required="" />
                <div className="d-flex justify-content-center">
                    <button type="submit" id="signin-btn">
                    Sign up
                    </button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Signup