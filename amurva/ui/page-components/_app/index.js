
import GlobalLayout from '@/ui/page-components/_app/layout/components/GlobalLayout';
export default function App({ Component, pageProps }) {
    return <GlobalLayout
    layout={pageProps.layout}
    head={pageProps.head || ''}
  >
    <Component {...pageProps} />
  </GlobalLayout>;
  }