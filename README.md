This is the Next.js frontend for SMKS Karya Teknik Watangsoppeng.

## Production Static Hosting

The production build creates a static site configured for `/smks`:

```bash
npm run build:prod
```

Upload the **contents** of the generated `out` directory to the hosting directory that serves `https://your-domain.example/smks/` (for example, `public_html/smks/`). Keep the generated `_next` directory and all page directories in place. The export uses directory-style routes, so pages are served as paths such as `/smks/arsip/`. No Node.js process or `next start` is needed on the web host.

The frontend calls the API configured by `NEXT_PUBLIC_API_URL` in `.env-cmdrc` at build time. The production profile currently uses `https://sahabatpenaforkesi.com/smks-api/`. Configure the backend to allow the deployed website's origin through CORS, including `OPTIONS` preflight requests where applicable. Since this is a static client-side app, the API URL and `NEXT_PUBLIC_KEY` are included in browser assets; do not put secrets in these variables.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
