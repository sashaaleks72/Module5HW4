import { useEffect, useState } from "react";
import AuthResponse from "../../dtos/AuthResponse";
import { register } from "../../http/fetches";
import { login } from "../../http/fetches";
import classes from "./AuthComponent.module.css";

const AuthComponent = (): JSX.Element => {
    const [email, setEmail] = useState<string>("eve.holt@reqres.in");
    const [password, setPass] = useState<string>("pistol");
    const [token, setTokenState] = useState<AuthResponse>();
    const [isLoginClicked, setLoginState] = useState<number>(0);
    const [isRegisterClicked, setRegisterState] = useState<number>(0);

    useEffect(() => {
        const init = async () => {
            const token = await login(email, password);
            setTokenState(token);
        };

        init();
    }, [isLoginClicked]);

    useEffect(() => {
        const init = async () => {
            const token = await register(email, password);
            setTokenState(token);
        };

        init();
    }, [isRegisterClicked]);

    return (
        <form className={classes.form}>
            <div className="mb-3">
                <label className="form-label">Email: </label>
                <input
                    className="form-control"
                    type="text"
                    value={email}
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password: </label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => {
                        setPass(e.target.value);
                    }}
                />
            </div>

            <div>
                <input
                    className="btn btn-primary mb-3"
                    type="button"
                    onClick={(e) => setRegisterState((c) => c + 1)}
                    value="Register"
                />
                <input
                    className="btn btn-primary mb-3 ms-2"
                    type="button"
                    onClick={(e) => setLoginState((c) => c + 1)}
                    value="Login"
                />
            </div>

            {token?.token && (
                <div className="alert alert-primary" role="alert">
                    {`Returned token: ${token.token}`}
                </div>
            )}
        </form>
    );
};

export default AuthComponent;
