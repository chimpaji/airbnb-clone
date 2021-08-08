import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component className="w-full" {...pageProps} />;
}

export default MyApp;
