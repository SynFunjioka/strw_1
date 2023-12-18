import Link from "next/link"

export default function Login() {
  return (
    <>
      <form id="login-form" action="" className='login-form'>
        <fieldset>
          <legend>Sign in</legend>
          <div className="form-control">
            <input id="login-email" type="text" name="email" autoComplete="off" required/>
            <label htmlFor="login-email">Email</label>
          </div>
          <div className="form-control">
            <input id="login-password" type="text" name="password" autoComplete="off" required/>
            <label htmlFor="login-password">Password</label>
          </div>
          <button className='btn btn-primary'>Log in</button>
        </fieldset>
      </form>
      <section className='login-info'>
        <h2>Welcome back!</h2>
        <p>
          Don't you have an account? Register now <Link href={"/signup"}>here!</Link>
          {/* <br />or <br /> login with: <br /> */}
        </p>
        <div className="legal">
          &copy; 2023 by Alan Flores
        </div>
      </section>
    </>
  )
}
