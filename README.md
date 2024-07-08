# Node Machine Test


### Tech Stack

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/milan-sony/node-machine_test.git
```

Go to the project directory

```bash
  cd node-machine_test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm Start
```

or dev

```bash
  npm run dev
```


## API Reference

#### user register

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `first_name` | `string` | **Required** |
| `last_name` | `string` | **Required** |
| `mobile` | `string` | **Required** |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### user login

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**|
| `password`      | `string` | **Required**|

#### file upload

```http
  POST /api/v1/upload
```


## Packages used

`dotenv` : Manage the environment variable

`jsonwebtoken` : User authentication

`bcrypt` : Password hash

`body-parser` : Parse the data from `req.body`

`multer` : To handle file upload

`nanoid` : For creating user ID
