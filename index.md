# String: toURI() &amp; transliterate() for JavaScript

[![Monthly Downloads](https://img.shields.io/npm/dm/to-uri.svg)](https://www.npmjs.com/package/to-uri)
[![NPM](https://img.shields.io/npm/v/to-uri.svg "NPM package version")](https://www.npmjs.com/package/to-uri)
[![Twitter](https://img.shields.io/twitter/follow/annexare.svg?label=follow+@annexare)](https://twitter.com/annexare)

Transliteration for JavaScript &amp; Node.js, basically used for URI generation. As small'n'simple as possible, but has a basic Ukrainian/Russian language detection for **"и"** char replacements.

## Usage

Basically, just call `toURI()` with a String and you'll get a SEO friendly URL, separated with dashes (**"-"**) by default. Also, there's a `transliterate()` method, but it always works with `toLowerCase()` right now, not sure should it be improved yet or not.

### Packages:

* `bower install to-uri`
* `npm install to-uri`

### Examples:

```js
toURI("Тест: Чи маємо те, на що чекаємо? + /English Text Remains/?")
// test-chy-maiemo-te-na-shcho-chekaiemo+english-text-remains

toURI("Тест: Проверим текст на русском языке")
// test-proverim-text-na-russkom-yazyke
```

## Credits

Prepared by [Annexare Studio](https://annexare.com/). Feel free to use it as you need in your apps or send updates into [this public repository](https://github.com/annexare/toURI). It's under MIT license.
