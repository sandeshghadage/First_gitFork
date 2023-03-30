import ButtonSumbit from "./../Local-Components/Button";
import style from "./LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const navigator = useNavigate();

  function HandleRegister() {
    navigator("/");
  }

  function HandleLogin() {
    navigator("/");
  }

  return (
    <div className={style.formContainer}>
      {/* {login ? (
        <div className={style.registrationForm}>
          <form>
            <input placeholder="&#x2709;  Email" type="text" />
            <input placeholder="User Name" type="text" />
            <input placeholder="Password" type="password" />
            <div className={style.submitContainer}>
              <div>
                Already have an account{" "}
                <a onClick={() => setLogin(false)}>Login Here</a>
              </div>
              <ButtonSumbit BtnName={"Register"} onClick={HandleRegister} />
            </div>
          </form>
        </div>
      ) : (
        <div className={style.registrationForm}>
          <form>
            <input placeholder="User Name" type="text" />
            <input placeholder="Password" type="password" />
            <div className={style.submitContainer}>
              <div>
                Dont have an account{" "}
                <a onClick={() => setLogin(true)}>Register Here</a>
              </div>
              <ButtonSumbit BtnName={"Login"} onClick={HandleLogin} />
            </div>
          </form>
        </div>
      )} */}

      <h1>Welcome to home page</h1>
    </div>
  );
}
