# Usufull Libraries:

## React-Icons:

  Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. [Find it here](https://www.npmjs.com/package/react-icons)

  Install:
  ```
  npm install react-icons
  ```
  Example:
  ```
  import { FaBeer } from 'react-icons/fa';

  class Question extends React.Component {
      render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
  }
```

## JSON Server:
  
  Get a full fake REST API with zero coding in less than 30 seconds. [Find it here](https://www.npmjs.com/package/json-server).
  
  Install:
  
  ```
  npm install json-server
  ```
  Example:
  ```
  json-server --watch db.json
  ```

## Concurrently:

  Run multiple commands concurrently. [Find it here](https://www.npmjs.com/package/concurrently).
  
  Install:
  
  ```
  npm install concurrently
  ```
  Example:
  ```
  "start": "concurrently \"command1 arg\" \"command2 arg\""
  ```
