# Dead simple live reload module

A lightweight JavaScript helper for automatically reloading the page when changes are detected in local files. Perfect for simple static sites.

## Get started

1. Add the script to your HTML file.

    ```html
    <script src="https://kalabasa.github.io/simple-live-reload/script.js" data-interval="1000" data-debug="true"></script>
    ```

    - `data-interval` (optional): The interval time in milliseconds for polling resource status (default: `1000` ms).
    - `data-debug` (optional): Set to `true` to enable debug logging to the console (default: `false`).

2. Use your favourite local HTTP server, I don’t care.

    ```sh
    python3 -m http.server -d ./site/
    ```

## License

MIT License.
