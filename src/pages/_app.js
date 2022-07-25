import 'bootstrap/dist/css/bootstrap.css';
import '../styles/css/bootstrap.min.css';
import '../styles/css/owl.carousel.min.css';
import '../styles/css/animate.min.css';
import '../styles/css/magnific-popup.css';
import '../styles/css/fontawesome-all.min.css';
import '../styles/css/themify-icons.css';
import '../styles/css/meanmenu.css';
import '../styles/css/custom-animation.css';
import '../styles/css/aos.css';
import '../styles/css/slick.css';
import '../styles/css/default.css';
import '../styles/css/style.css';
import '../styles/css/responsive.css';
import '../styles/globals.css';

import { Scripts } from '../components/Script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Scripts />
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
