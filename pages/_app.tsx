import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true); // SSR ---> Server-Side-Rendering

  useEffect(() => {
    setIsSSR(false);
  }, []); // Using this useEffect ---> defined when the SSR Not load

  if (isSSR) return null;

  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_AUTH_API_TOKEN}`}
      >
        <NavBar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <SideBar />
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
