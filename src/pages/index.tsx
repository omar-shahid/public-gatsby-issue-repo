import React, { useEffect, useState } from "react";
import { withPrefix } from "gatsby";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

interface Props {}

const index: React.FC<Props> = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();
  const [loaded, setIsloaded] = useState(false);

  useEffect(() => {
    setIsloaded(true);
  }, []);
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [loaded]);
  if (!loaded) return <></>;
  return (
    <>
      {authState === AuthState.SignedIn && user ? (
        <>
          <h1>Welcome {user.username}</h1>
          {console.log(user)}
          <AmplifySignOut />
        </>
      ) : (
        <>
          <AmplifyAuthenticator />
        </>
      )}
      {/* <div
        className="h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${withPrefix("/images/bg.svg")}")` }}
      >
        <div className="container flex justify-between h-full m-auto">
          <div className="flex items-center w-full">
            <h1 className="text-white text-8xl w-97 font-heading">
              Complete your task{" "}
              <span className="font-bold underline">Efficiently</span>!
            </h1>
          </div>
          <p>sdfasd</p>
        </div>
      </div> */}
    </>
  );
};
export default index;
