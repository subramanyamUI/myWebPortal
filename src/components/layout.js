import React from "react";
import '../components/layout.scss';

function Layout({ children }) {
  return (
    <div>
      <main className="profile-bg font-sans flex flex-col flex-1 md:justify-center mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;
