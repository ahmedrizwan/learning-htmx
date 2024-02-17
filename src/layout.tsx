export function Layout(props: { children: any }) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/public/global.css"></link>

        <title>Hello HTMX</title>
      </head>

      <body>{props.children}</body>
    </html>
  );
}
