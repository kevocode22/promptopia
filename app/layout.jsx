import 'styles/globals.css'
import Navbar from 'components/Navbar';
import SessionProvider from 'components/Provider';

const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({children}) => {
  return(
  <html lang="en">
    <head>
    <link rel="icon" href="/assets/icons/logo.ico" sizes="any" />
    </head>
    <body>
      <SessionProvider>
      <div className="main">
          <main className="app">
            <Navbar/>
            {children}
            </main>
      </div>
      </SessionProvider>
    </body>
  </html>
  )
};

export default RootLayout;
