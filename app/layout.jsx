import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({children}) => {
  return(
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient">
          <main className="app">
            <Navbar/>
            {children}
            </main>
        </div>
      </div>
    </body>
  </html>
  )
};

export default RootLayout;
