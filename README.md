# String.toURI() for JavaScript

Transliteration for JavaScript &amp; Node.js, basically used for URI generation. As small and simple as possible.

## Usage

Basically, just call `.toURI()` for a String and you'll get a URL friendly string, separated with dashes ("-") by default. Example:

```js
"Тест: Чи маємо те, на що чекаємо? + /English Text Remains/?".toURI()
// test-chy-mayemo-te-na-shcho-chekayemo+english-text-remains

"Тест: Проверим текст на русском языке".toURI()
// test-proverim-tekst-na-russkom-yazyke
```

## Credits

Prepared by [Annexare Studio](https://annexare.com/). Feel free to use it as you need in your apps or send updates into [this](https://github.com/annexare/toURI) public repository. It's under MIT license.
