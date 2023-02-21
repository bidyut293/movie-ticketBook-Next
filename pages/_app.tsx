import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const Router = useRouter();

  // const [page, setPage] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      // setPage(true);
    } else {
      // setPage(false);
      Router.push('./login');
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
