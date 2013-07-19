# fis-parser-scss

> **WARNING** : Node.js ``v0.10.0`` required!!!

A parser plugin for fis to compile scss file.

## usage

    $ npm install -g fis
    $ npm install -g fis-parser-scss
    $ vi example/fis-conf.js

```javascript
//file : example/fis-conf.js
fis.config.merge({
  modules:{
    parser:{
      scss: 'scss'
    }
  },
  settings:{
    parser:{
      scss: {outputStyle:'compressed'}
    }
  },
  roadmap:{
    ext:{
      scss: 'css'
    }
  }
});
```

`outputStyle` is a `String` to determine how the final CSS should be rendered. Its value should be one of `'nested', 'expanded', 'compact', 'compressed'`.
[Important: currently the argument `outputStyle` has some problem which may cause the output css becomes nothing because of the libsass, so you should not use it now!]
we can use 'nested' or 'compressed'

```javascript
//set scss option
fis.config.set('settings.parser.scss', {outputStyle:'compressed'});
//or
fis.config.merge({
  settings:{
    parser:{
      scss: {outputStyle:'compressed'}
    }
  }
});
```

## example

    $ cd example
    $ fis release -d output

