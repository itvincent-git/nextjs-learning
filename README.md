Use to learn next.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


## Deploy 

First, export the static html:
```shell
pnpm export
```

then Run with nginx in docker:


```shell
docker run -it --rm -d -p 8080:80 --name web -v ~/nextjs-learning/out:/usr/share/nginx/html nginx
```