# Portfolio showcase

A React portfolio with an image-rich project showcase, blog detail routes, and a contact form backed by Express and MongoDB.

## What is included

- Projects support any number of images. Select **View project** to open the gallery, use the thumbnails or arrow keys to browse, and press `Esc` to close it.
- Blog cards link to individual detail pages at `/blog/:postId`.
- Contact messages are stored in MongoDB and can be forwarded to Telegram through a bot. The form also provides an **Open in Telegram** fallback with a prefilled message.
- The React site has mock-data fallback, so projects and blog posts still display when the API is offline.

## Run the full stack

1. Optionally copy `server/.env.example` to `server/.env` for local API development. For Docker, create a root `.env` with your Telegram values:

   ```bash
   TELEGRAM_BOT_TOKEN=your_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   ```

2. Start MongoDB and the API:

   ```bash
   npm run docker:up
   ```

3. In another terminal, install frontend packages and start Vite:

   ```bash
   npm install
   npm run dev
   ```

The frontend expects the API at `http://localhost:5000/api`. Set `VITE_API_URL` if you deploy it elsewhere.

## Run the API without Docker

Start MongoDB locally, then:

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The server creates initial projects and posts only when the database is empty. Replace those records in MongoDB or add your own admin endpoints later; the frontend accepts `images` as a string array for each project.
