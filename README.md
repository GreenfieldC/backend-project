# Next.js + Prisma Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with [Prisma](https://www.prisma.io/) as the ORM for database access.

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

## Prisma Commands (Quick Reference)

- `npx prisma migrate dev` – Run migrations and update the database
- `npx prisma generate` – Generate Prisma Client (usually done automatically)
- `npx prisma studio` – Visualize your database in the browser

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
