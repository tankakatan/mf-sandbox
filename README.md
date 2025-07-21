# Module Federation Sandbox
Now uses `nx` on top of `rsbuild` and `pnpm`

## Install
Install dependencies in all workspaces recursively
```bash
pnpm i -r
```

Alternatively you can run install in a specific workspace only
```bash
pnpm i --filter provider
```

## Run 
```bash
pnpm nx run-many --target=dev --projects=provider,lib-provider,consumer
```

NB: You can also install `nx` globally and run it without `pnpm`

## Build
```bash
pnpm nx run-many --target=build --projects=provider,lib-provider,consumer
```

## Explore
```bash
pnpm nx graph
```
