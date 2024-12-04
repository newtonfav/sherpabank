# SherpaBank

SherpaBank is a fictional banking application designed to emulate real-world banking functionalities. The app includes features such as transaction handling, and real-time balance calculations. It leverages modern web technologies to provide a seamless user experience and integrates with a database for data persistence. The project highlights practical implementations of financial operations, making it a comprehensive model of how banking systems operate in real life.

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

start the development server

```bash
npm run dev
```

start docker

```bash
docker compose up
```

Run prisma generate for type safety

```bash
npx prisma generate
```

Generate migration

```bash
npx prisma migrate dev
```

Seed the database

```bash
npx prisma db seed
```

Start prisma studio

```bash
npx prisma studio
```

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
