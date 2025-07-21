# Module Federation Sandbox
Now uses `nx` on top of `rsbuild` and `pnpm`

## Install
```bash
pnpm i
pnpm i --filter provider
pnpm i --filter lib-provider
pnpm i --filter consumer
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
