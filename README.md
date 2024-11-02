
# Developer Skills Portfolio Component

A modern, animated skills showcase component built with React. This component displays programming technologies and frameworks in an elegant card-based layout.

## Features

- **Responsive Layout**: Grid layout for technology cards that adjusts to screen size.
- **Smooth Animations**: Scroll-based animations powered by Framer Motion.
- **Clean, Modern Design**: Styled with styled-components for a sleek look.
- **Multiple Icons Supported**: Easily add or replace technology icons.
- **Customizable**: Modify cards to display any desired technology.

## Technologies Used

- **React**
- **Styled Components**
- **Framer Motion**
- **SVG Icons**

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

---

## Usage

To use the Skills component in your React application, import it and include it in your main component:

```javascript
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Skills />
    </div>
  );
}
```

### Customizing Skills

To add or modify technologies in the Skills component:

1. **Import your technology icon**:
   ```javascript
   import newTechIcon from "../img/your-icon.svg";
   ```

2. **Add a new Card component**:
   ```javascript
   <Card icon={newTechIcon} title="Your Technology" />
   ```

---

## Component Structure

- **Skills.jsx**: Main component for the skills section.
- **Card.jsx**: Reusable card component for each technology.
- **useScroll.js**: Custom hook for scroll-based animations.
- **animation.js**: Animation configurations.

---

## Styling

The component uses `styled-components` for styling. To customize the appearance, you can modify:

- **SkillStyles**: Container styling.
- **Cards**: Grid layout styling.
- **Individual Card components**.

---

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add YourFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License.

## Credits

Icons sourced from [Font Awesome](https://fontawesome.com/).
