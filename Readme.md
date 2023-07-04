# Translator API

This is a Node.js API that provides translation services using the
"translate-google" library. It translates text from one language to another
based on the provided input.

## Installation

To run this API locally, make sure you have Node.js and npm (Node Package
Manager) installed on your machine. Then, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server by running the following command:

   ```
   npm start
   ```

   This will start the server on port 5000, and you will see "running" logged in
   the console.

2. Send a POST request to `http://localhost:5000/api/v1/translate` with the
   following payload:

   ```json
   {
   	"trans": "Text to be translated",
   	"lang": "Target language code"
   }
   ```

   Replace `"Text to be translated"` with the text you want to translate, and
   `"Target language code"` with the code of the language you want to translate
   to (e.g., "zh" for Chinese, "es" for Spanish, etc.).

   The API will respond with the translated text in the specified language.

## Dependencies

- express: ^4.18.2
- body-parser: ^1.20.2
- translate-google: ^1.5.0

## Development Dependencies

- nodemon: ^2.0.22

## License

This project is licensed under the ISC license.

Feel free to explore and modify the code according to your needs.
