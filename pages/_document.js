import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#116466" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Web Development Portfolio Site" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <title>Dmitriy's Portfolio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
