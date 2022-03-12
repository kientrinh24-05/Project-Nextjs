import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import 'styles/base/_base.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
