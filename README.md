# Daily Quote Chrome Extension

This Chrome extension displays a random quote every 5 seconds, providing users with a daily dose of inspiration and motivation right in their browser.

## Features

- Fetches a random quote from the [Advice Slip API](https://api.adviceslip.com/advice) every 5 seconds.
- Displays the fetched quote in a clean and minimalistic interface.
- Provides users with a seamless experience of receiving daily quotes without any manual intervention.

## Usage

To use the Daily Quote Chrome Extension:

1. Clone or download the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on **Load unpacked** and select the directory where you cloned or downloaded the repository.
5. The extension should now be installed and active in your browser. You'll see a new icon in the toolbar.
6. Click on the extension icon to view a random quote displayed every 5 seconds.

## Manifest

The `manifest.json` file contains the necessary metadata and configuration for the Chrome extension, including its name, version, description, and permissions. The extension's default popup, which displays the random quote, is specified in the manifest.

## Files

- `index.html`: HTML file defining the structure and content of the extension's popup interface.
- `script.js`: JavaScript file containing the logic for fetching random quotes from the API and updating the DOM.
- `manifest.json`: JSON file providing metadata and configuration for the Chrome extension.

## Technologies Used

- **HTML, CSS**: For creating the user interface of the extension popup.
- **JavaScript**: For fetching data from the API and manipulating the DOM dynamically.
- **Adviceslip API**: Used to retrieve random quotes for display in the extension.

## Credits

- **API**: [Advice Slip API](https://api.adviceslip.com/) for providing the random quotes used in the extension.
- **Developer**: [Muhammad Naeem Tahir](https://www.linkedin.com/in/muhammadnaeemtahir/) - Feel free to connect on LinkedIn for more projects and collaborations.

## License

This project is licensed under the [MIT License](LICENSE).

---
Feel free to contribute to this project by forking the repository and submitting pull requests. If you encounter any issues or have suggestions for improvements, please open an issue on GitHub. Thank you for using the Daily Quote Chrome Extension! 🌟