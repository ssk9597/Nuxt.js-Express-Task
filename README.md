## DEV

### Frontend

Nuxt.js

### Backend

Node.js(Express)

## 手順

### ① クローンする

```
git clone git@github.com:ssk9597/Docker-Nuxtjs-Express.git
```

### ② ディレクトリに移動する

```
cd Docker-Nuxtjs-Express
```

### ③Nuxt.js の作成と Docker の起動を行う

```
make nuxt
```

### ④`frontend/.env`に以下を追記する

```
API_URL = "http://app:18080"
API_URL_BROWSER = "http://localhost:18080"
```
