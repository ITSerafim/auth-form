import React from "react";
import AuthToast from "../components/toasts/AuthToast";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main>
      <img src="picture.png" alt="nature" className="image" />
      {children}
      <AuthToast />
    </main>
  );
}

export default MainLayout;
