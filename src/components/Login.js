import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from "./../constans";


const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $username: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $username
    ) {
       user{
        id
        email
        password
        username
       }
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    tokenAuth(username: $email, password: $password) {
      token
    }
  }
`;


const Login = () => {

  
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    username: ''
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ tokenAuth }) => {
      console.log(tokenAuth.token);
      localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
      console.log("a la mitad")
      navigate('/');
      console.log("termino");
    }
  });
  
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ signup }) => {
     // localStorage.setItem(AUTH_TOKEN, signup.token);
      navigate('/');
    }
  });

  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
  <button
    className="pointer mr2 button"
    onClick={formState.login ? login : signup}
  >
    {formState.login ? 'login' : 'create account'}
  </button>
  <button
    className="pointer button"
    onClick={(e) =>
      setFormState({
        ...formState,
        login: !formState.login
      })
    }
  >
    {formState.login
      ? 'need to create an account?'
      : 'already have an account?'}
  </button>
</div>
    </div>
  );
};

export default Login;