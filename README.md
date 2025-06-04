# Next.js + Prisma Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with [Prisma](https://www.prisma.io/) as the ORM for database access.

## Project Overview

This app allows users to create, edit, and delete recipes. It is built with Next.js and uses Prisma as the ORM for database access. The main features include:
- Recipe CRUD (Create, Read, Update, Delete)
- Modern UI with Tailwind CSS
- API routes for recipe management

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Set up the database (Prisma)

- Adjust the database connection in `prisma/schema.prisma` if needed (default: SQLite).
- Run the migrations to create the database:

```bash
npx prisma migrate dev
```

- Optional: Start Prisma Studio to browse your database:

```bash
npx prisma studio
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Google Fonts.

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```env
DATABASE_URL="file:./dev.db"
# Add other variables as needed (e.g. NEXTAUTH_SECRET)
```

## API Endpoints

- `GET /api/recipe/load` – Load all recipes
- `POST /api/recipe/add` – Add a new recipe
- `PUT /api/recipe/edit` – Edit an existing recipe
- `DELETE /api/recipe/delete` – Delete a recipe

## Prisma Commands (Quick Reference)

- `npx prisma migrate dev` – Run migrations and update the database
- `npx prisma generate` – Generate Prisma Client (usually done automatically)
- `npx prisma studio` – Visualize your database in the browser

- Run `npx prisma generate` if you change the Prisma schema manually.
- Run `npx prisma migrate dev` to apply new migrations.

## Testing

Currently, no automated tests are included. If you add tests, run them with:

```bash
npm test
```

## Coding Guidelines

- Use Prettier and ESLint for code formatting and linting.
- Follow the existing file and folder structure.

## Contributing

Feel free to open issues or submit pull requests!

## Learn More

To learn more about Next.js and Prisma:

- [Next.js Documentation](https://nextjs.org/docs) – Features and API
- [Prisma Documentation](https://www.prisma.io/docs) – ORM and database workflows
- [Learn Next.js](https://nextjs.org/learn) – Interactive Next.js tutorial

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) – feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

More info: [Next.js deployment documentation](https://nextjs.org/docs/deployment)

---

**Note:**

- The database file (`prisma/dev.db`) is included in `.gitignore` by default and will not be committed.
- For production, you should adjust the database connection in `prisma/schema.prisma` (e.g., PostgreSQL, MySQL, etc.).
