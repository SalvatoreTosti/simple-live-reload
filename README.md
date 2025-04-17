# Simple Live Reload Helper

A lightweight JavaScript helper for automatically reloading the page when changes are detected in local files (when running on `localhost`, `127.0.0.1`, or `[::1]`).

## Features

- Watches the current page and any new resources requested.
- Reloads the page if any resource changes (based on `Last-Modified` or `ETag` headers).
- Configurable interval for checks.
- Debug mode for logging watched files.

## Installation

1. Add the script to your HTML file.

    ```html
    <script src="https://kalabasa.github.io/simple-live-reload/script.js" data-interval="1000" data-debug="true"></script>
    ```

- `data-interval` (optional): The interval time in milliseconds for checking the resource status (default: `1000` ms).
- `data-debug` (optional): Set to `true` to enable debug logging to the console (default: `false`).

## How It Works

- The script checks for any changes to resources loaded by the page by making `HEAD` requests.
- If any resource (e.g., HTML, CSS, JavaScript) has changed (based on `Last-Modified` or `ETag`), the page will automatically reload.

## Development

- If running on `localhost`, `127.0.0.1`, or `[::1]`, the script will start monitoring resources.
- Modify the `interval` or enable `debug` mode to fit your needs.

## License

MIT License.
