import { useState, ChangeEvent, useContext } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN } from 'Hooks/useLogin';
import { CookieContext } from 'Contexts/CookieContext';
export default function LoginForm(): JSX.Element {
  // State
  const [loginForm, setLoginForm] = useState({
    email: '',
    hashedPassword: '',
  });
  const { cookie, setCookie } = useContext(CookieContext);

  const [loginUser, { data, loading, error }] = useMutation(LOGIN);
  // Functions
  const login = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await loginUser({
      variables: {
        email: loginForm.email,
        hashedPassword: loginForm.hashedPassword,
      },
    });

    return setCookie(res.data.login);
  };
  console.log('cookie', cookie);
  //Uncaught TypeError: Cannot read properties of undefined (reading 'login')
  // console.log(data.login.token);

  //render
  const RenderError = ({ err }: ApolloError | any): JSX.Element => {
    return (
      <div>
        <h1>Error in User login :/</h1>
        {err ? <p>{err.message}</p> : <p>"No error msg"</p>}
        <button
          onClick={() => window.location.replace(window.location.toString())}
        >
          {'<-'}
        </button>
      </div>
    );
  };

  const RenderLoading = (): JSX.Element => {
    return <h1>Loading...</h1>;
  };
  if (error) {
    return <RenderError err={error} />;
  }
  if (loading) {
    return <RenderLoading />;
  }
  return (
    <div className="w-full h-screen flex items-center">
      <form className="w-full" onSubmit={login}>
        <div className="flex flex-col items-center">
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Email</label>
            <input
              className="border border-gray-400 rounded p-1"
              placeholder="📧 you@example.com"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            />
          </div>
          <div className="w-2/3 flex flex-col py-2">
            <label className="pb-1">Password</label>
            <input
              className="border border-gray-400 rounded p-1"
              placeholder="🔑"
              value={loginForm.hashedPassword}
              onChange={(e) =>
                setLoginForm({ ...loginForm, hashedPassword: e.target.value })
              }
            />
          </div>

          <div className="w-2/3 flex flex-col pt-8">
            <button
              type="submit"
              className="border border-gray-400 p-1 rounded"
            >
              Send
            </button>
          </div>
          <div className="w-2/3 flex flex-row pt-8">
            <div className="w-1/2 mr-3">
              <button className="w-full border border-gray-400 p-1 rounded">
                Forgot
              </button>
            </div>
            <div className="w-1/2 ml-3">
              <button className="w-full border border-gray-400 p-1 rounded">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
