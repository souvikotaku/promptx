import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptX",
  description: "Discover & Share AI Prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <div className="pl-5 pr-5">
          <Nav />
        </div> */}

        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;
