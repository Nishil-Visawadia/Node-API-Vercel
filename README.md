# Node.js API on Vercel

Simple Node.js + Vercel example that returns a "Express on Vercel" response.

## Setup

### Create Project

```cmd
mkdir express-api-project
cd express-api-project
```

### Initalize npm (package.json)

```terminal
npm init -y
```

- Install express

```bash
npm install express
```

- Create folder `/api` & create file named `index.ts`. This will be your main server file.

```typescript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
```

- Note: *Use the below only if error is occured*

```bash
npm i --save-dev @types/node
```

- Create `vercel.json`

```json
{
    "version": 2,
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/api"
        }
    ]
}
```

- Use this for vercel login

```bash
vercel login
```

- Development test

```bash
vercel dev
```

- Deployment

```bash
vercel
```

Note: error codes

```bash
npm install -g ts-node
npm install --save-dev @types/express
npm install cors
```
