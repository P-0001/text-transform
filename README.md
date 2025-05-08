# Text Transformer

A powerful web application for cleaning and transforming text. This tool helps normalize text by removing special characters, handling diacritics, and maintaining a clean, consistent format.

## Purpose
This tool is specifically designed to clean and normalize AI-generated text. AI models often produce text with:
- Inconsistent formatting
- Special characters and symbols
- Unwanted diacritics or accents
- Non-standard punctuation
- Hidden or invisible characters

The Text Transformer helps ensure that AI-generated content is:
- Clean and consistent
- Free from unwanted special characters
- Properly formatted for various use cases
- Ready for further processing or display
- Compatible with different systems and platforms

## Features

- Text normalization and cleaning
- Diacritic (accent) removal
- Special character handling
- Dark/Light mode support
- Copy to clipboard functionality
- Responsive design
- Local storage for input persistence

## Live Demo

Visit the live demo at [https://text-transform-sqx3.onrender.com/]

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/text-transform.git
cd text-transform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

1. Enter your text in the input field
2. Click the "Transform" button
3. View the transformed result
4. Use the copy button to copy the result to your clipboard

## Text Transformation Rules

The transformer applies the following rules to your text:

1. Replaces hyphens with spaces
2. Removes diacritics (accents)
3. Removes special characters

## Development

### Project Structure

```
text-transform/
├── app.js              # Main application file
├── src/
│   └── fix.js          # Text transformation logic
├── public/
│   └── style.css       # Styles
├── views/
│   └── index.ejs       # Main template
└── package.json        # Project dependencies
```

### Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reloading

### API
The API endpoint `/api/transform` accepts POST requests with text data and returns the transformed text.

- Body
    ```json 
    {"inputText": "string"}
    ```



### Dependencies

- Express.js - Web framework
- EJS - Template engine
- Body-parser - Request body parsing
- Node.js - Runtime environment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by [P-0001](https://github.com/P-0001)

## Acknowledgments

- Font Awesome for icons
- Express.js community
- All contributors and users of this project

