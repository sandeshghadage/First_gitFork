export default function SignInForm() {
  return (
    <form>
      <label>
        Name
        <br />
        <input className="InputField" type="text" name="name" />
      </label>
      <br />
      <label>
        Lastname
        <br />
        <input className="InputField" type="text" name="lastname" />
      </label>
      <br />
      <label>
        Email
        <br />
        <input className="InputField" type="text" name="email" />
      </label>
      <br />
      <label>
        Password
        <br />
        <input className="InputField" type="password" name="password" />
      </label>
      <br />
      <div id="lastElement">
        <input id="check" type={"checkbox"} />
        Remember me
        <div style={{ color: "grey" }}>Forgot Password?</div>
      </div>
      <input className="submitBtn" type="submit" value="Login" />
    </form>
  );
}
