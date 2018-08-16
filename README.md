## ![Back-end template](backend-template.png)

# Getting started

Setting up for local usage:

- Fork this repo 
- Clone the fork
- Create a file named `.env` in the root directory. Copy and paste the following. We'll fit in later:

```
COOKIE_SECRET=cookieSecret
SECRET=secret
DOMAIN=test
MAILGUN_DOMAIN=test
MAILGUN_API_KEY=fakeKey
S3_ACCESS_KEY_ID=fakeKey
S3_SECRET_ACCESS_KEY=fakeKey
S3_BUCKET=fakeBucket
```

- `yarn` to install all required dependencies

# Running
- Make sure mongo is running with the `mongod` command
- `yarn dev` to start the local server
