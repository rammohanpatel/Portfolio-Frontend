// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import '../Styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
