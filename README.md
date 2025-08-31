# 🌡️ Temperature Converter

A simple, elegant web application for converting temperatures between Celsius and Fahrenheit with real-time conversion as you type.

## ✨ Features

- **Real-time conversion**: Instantly converts temperature as you type
- **Dual conversion**: Convert from Celsius to Fahrenheit and vice versa
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient background with glassmorphic design elements
- **Input validation**: Handles invalid inputs gracefully
- **Clean interface**: Intuitive and user-friendly design

## 📋 How to Use

1. **Celsius to Fahrenheit**: Enter a temperature in the first input field (Celsius), and the Fahrenheit equivalent will appear automatically
2. **Fahrenheit to Celsius**: Enter a temperature in the second input field (Fahrenheit), and the Celsius equivalent will appear automatically
3. Both conversions work simultaneously and update in real-time

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, transitions, and responsive design
- **Vanilla JavaScript**: Real-time temperature conversion logic

## 📁 Project Structure

```
temperature-converter/
│
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Niru-9/Temp-Converter
   ```

2. **Navigate to the project directory**
   ```bash
   cd Temp-Converter
   ```

3. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server extension in VS Code

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Your app will be available at `https://your-username.github.io/repository-name`

## 📐 Temperature Conversion Formulas

The app uses the standard temperature conversion formulas:

- **Celsius to Fahrenheit**: `°F = (°C × 9/5) + 32`
- **Fahrenheit to Celsius**: `°C = (°F - 32) × 5/9`

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Background gradient */
background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);

/* Button gradient */
background: linear-gradient(90deg, #007BFF 0%, #00C6FF 100%);
```

### Adding More Temperature Scales
You can extend the converter to include Kelvin or other temperature scales by:
1. Adding new input fields in `index.html`
2. Creating conversion functions in `script.js`
3. Styling the new elements in `style.css`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 Future Enhancements

- [ ] Add Kelvin temperature scale
- [ ] Include Rankine temperature scale
- [ ] Add temperature history/favorites
- [ ] Implement dark/light theme toggle
- [ ] Add keyboard shortcuts
- [ ] Include temperature-related facts or tips

## 📄 License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute for educational or personal purposes

## 🙏 Acknowledgments

- Temperature conversion formulas from standard physics references
- Design inspiration from modern web design trends
- Icons and emojis for enhanced user experience

---

⭐ **Star this repository if you found it helpful!**
