# One file with multiple nested components (React root component)

## DOM structure

```
#App            Top level container
  One           Angular component
    Two         React component
      Three     Angular component
        Four    React component using React state
```

## Running it

```sh
git clone git@github.com:bcherny/angular2react-demos.git
cd angular2react-demos/one-file
yarn
yarn run build
yarn run start
# open https://localhost:9000 in a browser
```
