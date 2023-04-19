<div>
  <h1 align="center">Quicklink Dashboard</h1>
  <h4 align="center">
    Dashboard for Quicklink a Headless URL Shortener written in Rust
  </h4>
</div>

<div align="center">

[![Discord](https://img.shields.io/discord/1011702194925490186?color=blue&label=discord&logo=discord)](https://discord.gg/yde6mcgs2C)
![Build](https://github.com/whizzes/quicklink-dashboard/workflows/build/badge.svg)
![Tests](https://github.com/whizzes/quicklink-dashboard/workflows/test/badge.svg)
![Lint](https://github.com/whizzes/quicklink-dashboard/workflows/lint/badge.svg)

</div>

## Development

```bash
# clone repository
git clone git@github.com:whizzes/quicklink-dashboard.git

# cd into the new directory
cd ./quicklink-dashboard

# create a `.env` file by copying contents from `.env.example`
cp .env.example .env

# install dependencies
pnpm install

# optional: make sure quicklink server is running
lsof -i -P -n | grep LISTEN

# run on development mode
pnpm run dev:open

# optional: if you don't want the browser to open-up automatically run
# "pnpm run dev" instead
```

## License

Licensed under the MIT License
