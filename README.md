# Starbucks2

### 0. 初期設定
```
cp .env.example .env
```

### 0-2. .envファイルを編集
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="{テーブル名}"
DB_USERNAME="{データベースのユーザー名}"
DB_PASSWORD="{データベースログイン時のパスワード}"

```

### 1.
```
npm install && npm run dev
```

### 2.
```
composer install
```

### 3.
```
php artisan serve
```

### 4.
```
npm run watch
```
