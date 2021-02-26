import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../dist/css/main.css';

function MyApp({ Component, pageProps }) {
  const { user, isLoading } = pageProps;
  return (

    <UserProvider user={user} >
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </UserProvider>

  )
}

export default MyApp
