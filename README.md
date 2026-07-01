## Environment Setup

ก่อนรันโปรเจกต์ ให้สร้างไฟล์ `.env` ที่ root project

### Windows PowerShell

```powershell
New-Item .env
```

### macOS / Linux

```bash
touch .env
```

จากนั้นเพิ่ม config นี้ในไฟล์ `.env`

```env
# Config CORS
CORS_ORIGIN=*
# CORS_ORIGIN=http://localhost:5173,http://localhost:3000

# Config PORT
PORT=8080
```

## Install Dependencies

```bash
npm install
```

## Run Project

```bash
npm run dev
```

หรือ

```bash
npm start
```

## API URL

```txt
http://localhost:8080
```

## Swagger Docs

```txt
http://localhost:8080/api-docs
```

## Git Ignore

ควรเพิ่มไฟล์ `.env` และ `node_modules` ใน `.gitignore`

```gitignore
node_modules
.env
server.log
server-error.log
```
