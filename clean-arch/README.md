# Clean Arch Typescript Implmentation
Example implementation clean-arch with typescript

## Usage
Install dependecy node
```
npm i 
```

Migration with prisma-cli
```
npx prisma migrate dev --name init
```

## Running
Running without open-telemetry
```
npx ts-node index.ts
```

Running with opentelemetry
```
npx ts-node --require ./util/telemetry.ts index.ts
```