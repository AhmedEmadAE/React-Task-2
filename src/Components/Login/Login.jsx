import React from "react";

export default function Login() {
    return (
        <>
            <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
        }

        .login-box {
          background-color: #f0fff5;
          border: 2px solid #1abc9c;
          border-radius: 12px;
          padding: 40px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .login-box h2 {
          color: #1abc9c;
          margin-bottom: 30px;
          text-align: center;
        }

        .form-control {
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #ccc;
          padding: 10px;
        }

        .btn-green {
          background-color: #1abc9c;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .btn-green:hover {
          background-color: #16a085;
        }

        .form-label {
          margin-bottom: 5px;
          color: #333;
        }
      `}</style>

            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn-green">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
