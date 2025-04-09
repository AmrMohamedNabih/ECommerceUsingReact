import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from './../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] = LoginHook();
    return (
        <Container fluid className="auth-background">
            <Row className="py-5 px-2 d-flex justify-content-center">
                <Col sm="12" md="6" lg="4" className="d-flex flex-column" style={{border: '3px solid #efc4c3', borderRadius:'10px' , padding:'20px' ,backgroundColor: '#ffffff'}}>
                    <label className="mx-auto title-login">Login</label>
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Email..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Password..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button onClick={onSubmit} className="btn-login mx-auto mt-4">
                        {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

                        </Spinner>) : 'Login') : 'Login'}
                    </button>
                    <label className="mx-auto mt-4" style={{ fontSize: '13px' }}>
                        Don't have an account?{" "}
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="auth-text">
                                Click here
                            </span>
                        </Link>
                    </label>

                    <label className="mx-auto">
                        <Link to="/user/forget-password" style={{ textDecoration: 'none' }} className="auth-text">
                            Forgot Password?
                        </Link>
                    </label>


                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}

export default LoginPage
