## kitzo-apis

> A read-focused API layer designed for clear and consistent data access.

##### Root:
🔗 Live Preview: **[kitzo-apis](https://kitzo-apis.onrender.com/)**

current apis:
* games
  * query(id): https://kitzo-apis.onrender.com/games/1
  * query(limit): https://kitzo-apis.onrender.com/games/?limit=10
  * query(title): https://kitzo-apis.onrender.com/games/?title=pubg
  * query(category): https://kitzo-apis.onrender.com/games/?category=action
  * combined(limit, title, category): https://kitzo-apis.onrender.com/games/?limit=10&title=battle&category=fps

#### 🛠️ Technologies Used

- **Express** - Web framework for building the API routes and server logic.
- **CORS** — Enables controlled cross-origin access for clients.
- **dotenv** — Loads and manages environment variables securely.

#### 🧑‍💻 Dependencies

```json
 "dependencies": {
   "cors": "^2.8.5",
   "dotenv": "^17.2.3",
   "ejs": "^3.1.10",
   "express": "^5.1.0"
 }
```

#### ⚙️ Run this project

- Open terminal and run the commands

```bash
git clone https://github.com/riyad-96/kitzo-apis.git
cd kitzo-apis
npm i
npm run dev
```
