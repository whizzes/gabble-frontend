<div>
  <h1 align="center">Linx Dashboard</h1>
  <h4 align="center">
    Dashboard for Linx a Headless URL Shortener written in Rust
  </h4>
</div>

<div align="center">

![Build](https://github.com/whizzes/linx-dashboard/workflows/build/badge.svg)
![Tests](https://github.com/whizzes/linx-dashboard/workflows/test/badge.svg)
![Lint](https://github.com/whizzes/linx-dashboard/workflows/lint/badge.svg)
![Publish](https://github.com/whizzes/linx-dashboard/workflows/publish/badge.svg)
[![Version](https://img.shields.io/npm/v/@whizzes/linx-dashboard.svg?style=flat)](https://www.npmjs.com/package/@whizzes/linx-dashboard)
[![Downloads](https://img.shields.io/npm/dm/@whizzes/linx-dashboard.svg?style=flat)](https://www.npmjs.com/package/@whizzes/linx-dashboard)

</div>

## Development

```bash
# clone repository
git clone git@github.com:whizzes/linx-dashboard.git

# cd into the new directory
cd ./linx-dashboard

# create a `.env` file by copying contents from `.env.example`
cp .env.example .env

# install dependencies
pnpm install

# optional: make sure linx server is running
lsof -i -P -n | grep LISTEN

# run on development mode
pnpm run dev:open

# optional: if you don't want the browser to open-up automatically run
# "pnpm run dev" instead
```

## License

Licensed under the MIT License
