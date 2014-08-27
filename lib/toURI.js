/*
 * String transliteration for URI generation purposes.
 * Adds .toURI() to String's prototype for browser usage.
 * With Node.js & AMD support.
 *
 * @link http://annexare.com/
 * @license MIT
 */

;(function () {
    'use strict';

    var pairs = {
            // Cyrillic
            'а': 'a',   'б': 'b',   'в': 'v',   'г': 'g',
            'д': 'd',   'е': 'e',   'ё': 'yo',  'ж': 'zh',
            'з': 'z',   'и': 'y',   'й': 'j',   'к': 'k',
            'л': 'l',   'м': 'm',   'н': 'n',   'о': 'o',
            'п': 'p',   'р': 'r',   'с': 's',   'т': 't',
            'у': 'u',   'ф': 'f',   'х': 'h',   'ц': 'ts',
            'ч': 'ch',  'ш': 'sh',  'щ': 'shch','ъ': '',
            'ы': 'y',   'ь': '',    'э': 'e',   'ю': 'yu',
            'я': 'ya',  'є': 'ye',  'і': 'i',   'ї': 'yi',
            'ґ': 'g',
            // Symbols & Accents
            '\\.': '_',
            '&': 'and',
            '∞': 'infinity',
            '♥': 'love',
            'ä|æ|ǽ': 'ae',
            'ö|œ': 'oe',
            'ü': 'ue',
            'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª': 'a',
            'ç|ć|ĉ|ċ|č': 'c',
            'ð|ď|đ': 'd',
            'è|é|ê|ë|ē|ĕ|ė|ę|ě': 'e',
            'ĝ|ğ|ġ|ģ': 'g',
            'ĥ|ħ': 'h',
            'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı': '',
            'ĵ': 'j',
            'ķ': 'k',
            'ĺ|ļ|ľ|ŀ|ł': 'l',
            'ñ|ń|ņ|ň|ŉ': 'n',
            'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º': 'o',
            'ŕ|ŗ|ř': 'r',
            'ś|ŝ|ş|š|ſ': 's',
            'ţ|ť|ŧ': 't',
            'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ': 'u',
            'ý|ÿ|ŷ': 'y',
            'ŵ': 'w',
            'ź|ż|ž': 'z',
            'ß': 'ss',
            'ĳ': 'ij',
            'ƒ': 'f',
            // Currencies
            '\\$': 'USD',
            '€': 'EUR',
            '£': 'GBP',
            '₴': 'UAH',
            '¢': 'cent'
        },
        isRU = /ы|ъ|э|ё|ъ|[\s|^]и|жь|чь|шь|иа|ие|ии|ио|иу|аи|еи|ои|уи|цк|ц[\s|$]/,
        isUA = /є|i|ї|ґ|зьк|ськ|цьк|ць[\s|$]/,
        strtr = function (string, pairs) {
            // Just like this:
            // http://php.net/manual/en/function.strtr.php
            var str = string;
            for (var key in pairs) if (pairs.hasOwnProperty(key)) {
                str = str.replace(new RegExp(key, 'g'), pairs[key]);
            }
            return str;
        },
        transliterate = function (separateWith) {
            var text = this.toString().trim(),
                space = ' ',
                separator = separateWith || space,
                isUri = (separator !== space);

            if (!text) {
                return '';
            }

            if (isUri) {
                text = text
                    // Strip tags
                    .replace(/(<([^>]+)>)/ig, '');

                if (!text) {
                    return '';
                }
            }

            text = text.toLowerCase();
            if ((text.search(isRU) !== -1) && (text.search(isUA) === -1)) {
                pairs['и'] = 'i';
            }

            text = strtr(text, pairs);

            if (isUri) {
                text = text
                    // Strip whitespace into separator
                    .replace(/\s+/g, separator)
                    // Slashes, ":"
                    .replace(/[\/\\:]+/g, separator)
                    // Unsupported symbols
                    .replace(/[^\d\w\-\+_]+/g, separator)
                    // Multiple dashes
                    .replace(new RegExp('(' + separator + ')+', 'g'), separator)
                    .replace(/\-([+_])\-/g, '$1')
                    // Trim text for specific chars
                    .replace(/^[\-_]+|[\-_]+$/g, '');
            }

            return text;
        },
        toURI = function (separateWith) {
            return transliterate.call(this, separateWith || '-');
        };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = toURI;
    } else if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return toURI;
        });
    } else {
        this.transliterate = function (text, separateWith) {
            return transliterate.call(text, separateWith);
        };
        this.toURI = function (text, separateWith) {
            return toURI.call(text, separateWith);
        };
    }
}.call(this));
