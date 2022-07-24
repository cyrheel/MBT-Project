import { useState, useContext } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN } from 'Hooks/useLogin';
import { CookieContext } from 'Contexts/CookieContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(): JSX.Element {
  // State
  const [loginForm, setLoginForm] = useState({
    email: '',
    hashedPassword: '',
  });
  const [logged, setLogged] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cookie, setCookie } = useContext(CookieContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginUser, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  // Functions
  const login = async (e: any): Promise<void> => {
    e.preventDefault();
    const res = await loginUser({
      variables: {
        email: loginForm.email,
        hashedPassword: loginForm.hashedPassword,
      },
    });
    setCookie(res.data.login);
    navigate('/');
  };

  // Render Functions
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

  // Component Rendering
  if (error) {
    return <RenderError err={error} />;
  } else if (loading) {
    return <RenderLoading />;
  } else {
    return (
      <div className="w-full h-screen flex items-center">
        <form
          className="w-full"
          onSubmit={async (e) => {
            await login(e);
            setLogged(!logged);
          }}
        >
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
}
