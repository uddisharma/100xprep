# Contributing to the Project

Thank you for considering contributing to this project! This document provides guidelines to help you set up the project locally and contribute effectively.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) or Yarn
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setting Up the Project Locally

Follow these steps to get started:

### 1. Clone the Repository

```sh
git clone https://github.com/uddisharma/100xprep.git
cd 100xprep
```

### 2. Install Dependencies

```sh
npm install  # or yarn install
```

### 3. Set Up Environment Variables

Copy the example environment file and update it with your own credentials if necessary.

```sh
cp .env.example .env
```

Modify the `.env` file to match your local configuration.

### 4. Start the Database and Redis (Using Docker)

Run the following command to start PostgreSQL and Redis containers:

```sh
docker-compose up -d
```

### 5. Run Database Migrations (If Using Prisma)

If your project uses Prisma, run:

```sh
npx prisma migrate dev  # or yarn prisma migrate dev
```

### 6. Start the Development Server

```sh
npm run dev  # or yarn dev
```

The application should now be running on `http://localhost:3000`.

## Contribution Guidelines

1. Fork the repository and create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit them:
   ```sh
   git commit -m "feat: add your feature"
   ```
3. Push your changes:
   ```sh
   git push origin feature/your-feature-name
   ```
4. Create a pull request from your forked repository to the `main` branch of this repository.

## Code of Conduct

Please be respectful and follow the community guidelines when contributing.
