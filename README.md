# String: toURI() &amp; transliterate() for JavaScript

Transliteration for JavaScript &amp; Node.js, basically used for URI generation. As small'n'simple as possible, but has a basic Ukrainian/Russian language detection for **"и"** char replacements.

## Usage

Basically, just call `toURI()` with a String and you'll get a SEO friendly URL, separated with dashes (**"-"**) by default. Also, there's a `transliterate()` method, but it always works with `toLowerCase()` right now, not sure should it be improved yet or not.

### Packages:

* `bower install to-uri`
* `npm install to-uri`

### Examples:

```js
toURI("Тест: Чи маємо те, на що чекаємо? + /English Text Remains/?")
// test-chy-mayemo-te-na-shcho-chekayemo+english-text-remains

toURI("Тест: Проверим текст на русском языке")
// test-proverim-tekst-na-russkom-yazyke
```

## Credits

Prepared by [Annexare Studio](https://annexare.com/). Feel free to use it as you need in your apps or send updates into [this public repository](https://github.com/annexare/toURI). It's under MIT license.
