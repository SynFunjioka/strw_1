import Link from "next/link";

import Input from "@/shared/components/controls/Input";

export default function Home() {
  return (
    <>
    <section className='signup-info'>
        <h2>Say hello to security!</h2>
        <p>
          Do you have an account? signin now <Link href={"/login"}>here!</Link>
          {/* <br />or <br /> login with: <br /> */}
        </p>
        <div className="legal">
          &copy; 2023 by Alan Flores
        </div>
      </section>
      <form id="login-form" action="" className='signup-form'>
        <fieldset>
          <legend>Sign up</legend>
          <div className="form-control">
            <Input id="register-email" type="text" name="email" autoComplete="off" required/>
            <label htmlFor="register-email">Email</label>
          </div>
          <div className="form-control">
            <input id="register-password" type="text" name="password" autoComplete="off" required/>
            <label htmlFor="register-password">Password</label>
          </div>
          <div className="form-control">
            <input id="register-cpassword" type="text" name="confirm_password" autoComplete="off" required/>
            <label htmlFor="register-cpassword">Confirm password</label>
          </div>
          <button className='btn btn-primary'>Register</button>
        </fieldset>
      </form>
    </>
  )
}