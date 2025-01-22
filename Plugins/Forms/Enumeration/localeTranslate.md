# localeTranslate

Translations for the text field. The object keys are the two letter language codes (ru, de, it, etc.) and the values are the button label translation for each language.Example: &#123; "en" : "name", "ru" : "имя" &#125;

## Type

Object

**Type:** Object.&lt;string, string&gt;



## Example

```javascript
var config = &#123;
    "variations": [
        &#123;
            "name": "plugin name",
            "nameLocale": &#123;
                "fr": "french plugin name",
                "es": "spanish plugin name"
            &#125;,
            ...
        &#125;
    ]
&#125;;
