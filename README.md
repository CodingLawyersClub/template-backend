## ![Back-end template](backend-template.png)

# Getting started

Setting up for local usage:

- Fork this repo 
- Clone the fork
- Create a file named `.env` file in the root directory. Copy and paste the following. We'll fit in later:

```
COOKIE_SECRET=''
SECRET=''
DOMAIN=''
MAILGUN_DOMAIN=''
MAILGUN_API_KEY=''
S3_ACCESS_KEY_ID=''
S3_SECRET_ACCESS_KEY=''
S3_BUCKET=''
```

- `yarn` to install all required dependencies
- Run `brew install mongodb` 
- After installing mongodb, run `sudo mkdir -p /data/db`
- Make it accessible to root user `sudo chmod -R go+w /data/db`

# Running
- Make sure mongo is running with the `mongod` command
- `yarn dev` to start the local server
