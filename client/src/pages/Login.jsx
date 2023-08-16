import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo,SubmitBtn } from "../components";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login Succesfull');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate()
  const loginDemoUser = async () =>{ 
    const data={
     email:'test@test.com',
     password:'secret123',
    }
    try {
          await customFetch.post("/auth/login", data);
          toast.success("Explore the portal");
          navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
  return (
    <Wrapper>
      <Form method="post" action="" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="jeevu@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore The App
        </button>
        <p>
          Not a Member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
