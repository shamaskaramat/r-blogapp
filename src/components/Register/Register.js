import './register.css';

const Register = () => {
    return (
        <>
            <div className='register'>
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>User</label>
                    <input type="text" placeholder="Enter Your Username . . ." />
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Email . . ." />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Your Password . . . " />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerRegisterButton">Login</button>
            </div>
        </>

    );
};

export default Register;
