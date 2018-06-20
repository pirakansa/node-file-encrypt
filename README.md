# file-encrypt

## install

```
npm i
npm run build
```

## use local setting

```
cp config/default.json cp config/local.json

# write local setting in config/local.json

NODE_ENV=local npm start run
```

## file-encrypt cmd

```
Usage: npm run start -- [options]

Options:

    -v, --version  output the version number
    -i, --if <n>   input file
    -o, --of <n>   output file
    -e, --encode   do encode
    -d, --decode   do decode
    -h, --help     output usage information
```
