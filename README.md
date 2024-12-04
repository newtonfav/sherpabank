# SherpaBank

SherpaBank is a fictional banking application designed to emulate real-world banking functionalities. The app includes features such as transaction handling, and real-time balance calculations. It leverages modern web technologies to provide a seamless user experience and integrates with a database for data persistence. The project highlights practical implementations of financial operations, making it a comprehensive model of how banking systems operate in real life.

Here's the deployed version: https://sherpabank.vercel.app/

# Getting Started

Go to any directory on your machine:

```bash
cd directory/to/clone-into/
```

Clone repository:

```bash
git clone https://github.com/newtonfav/sherpabank.git
```

Install all dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add your database connection string and password

```bash
POSTGRES_URL="postgresql://postgres:<your-password>@localhost:5432/<your-database>"

POSTGRES_PASSWORD="password"
```

## Run in development mode

start the development server

```bash
npm run dev
```

start docker in a new terminal

```bash
docker compose up
```

Run prisma generate for type safety

```bash
npx prisma generate
```

Generate migration && seed database

```bash
npx prisma migrate dev
```

Start prisma studio in a new terminal

```bash
npx prisma studio
```

## Deployment

You can choose to deploy the application on vercel, connect your production database, vercel automatically run the `vercel-build` script in package.json

## Technologies Used

- React
- Typescript

- Nextjs
- EsLint
- Prettier
- Tailwind CSS
- Prisma
- Postgres
- Docker

## Author

Favour Oghenekowho
