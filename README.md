**Purpose**

It is fairly common in our team to focus on an individual test or describe in order to run it quickly whilst working on that part of the system. However we don't want to commit this focused test as it may cause the build to pass whilst only running a subset of the tests. This lint rule ensures that such a build would fail, because we do not allow focused tests or skipped tests to be pushed to the repository.

### How to use?
```
npm install --save-dev tslint-jasmine-noSkipOrFocus
```
or add
```
"tslint-jasmine-noSkipOrFocus": "1.0.2"
```
to the devDependencies in your package.json.

Add the following to the tslint.config.json:
```
"rulesDirectory": [
    "node_modules/tslint-jasmine-noSkipOrFocus"
],
"no-focused-test": true,
"no-skipped-test": true,
```

**Acknowledgements**

Many thanks to [Minko Gechev](href='https://github.com/mgechev/') for creating [Codelyzer](href='https://github.com/mgechev/codelyzer'), from which I borrowed the very useful test helper.  And of course to [Palantir Technologies](https://palantir.github.io) for creating [TSLint](https://palantir.github.io/tslint/) in the first place.
