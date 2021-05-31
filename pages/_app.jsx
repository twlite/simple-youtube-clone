import "tailwindcss/tailwind.css";
import Head from "next/head";

export default function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="theme-color" content="#ff0000" />
                <meta name="apple-mobile-web-app-status-bar" content="#ff0000" />
                <link rel="apple-touch-icon" href="/img/youtube_icon.png" />
                <link rel="shortcut icon" href="/img/youtube_icon.png" type="image/x-icon" />

                <title>YouTube Clone</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}