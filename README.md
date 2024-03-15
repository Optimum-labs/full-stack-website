# Full Stack Website

This project is a full-stack website template consisting of a optimumai-frontend built with React and a optimumai-dashboard built with Next.js. It allows users to run both the optimumai-frontend and the optimumai-dashboard simultaneously and navigate between them.

## Table of Contents

- [Full Stack Website](#full-stack-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Folder Structure](#folder-structure)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Main Site (React):**
  - Home, About, and Contact pages.
  - React Router for navigation.
- **Dashboard (Next.js):**
  - Dashboard Home, Analytics, and Settings pages.
  - Sidebar navigation component.
- **Concurrent Development:**
  - Run both the optimumai-frontend and the optimumai-dashboard simultaneously during development.

## Folder Structure

```
full-stack-website/
│
├── optimumai-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── public/
│   └── package.json
│
├── optimumai-dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── public/
│   └── package.json
│
└── package.json
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd full-stack-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm start
   ```

4. **Access the main site and the dashboard:**
   - Site: http://localhost:3000
   - Dashboard: http://localhost:3001/

## Contributing

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](#).


## Docker 

sudo docker build -t frontend .
sudo docker run -d -p 80:80 -p 443:443 --network=host frontend

http://localhost:80/frontend/ or http://localhost:443/frontend/
http://localhost:80/dashboard/ or http://localhost:443/dashboard/