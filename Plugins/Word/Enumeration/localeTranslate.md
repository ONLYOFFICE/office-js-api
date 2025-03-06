# localeTranslate

Translations for the text field. The object keys are the two letter language codes (ru, de, it, etc.) and the values are the button label translation for each language.Example: &#123; "en" : "name", "ru" : "имя" &#125;

## Type

Object

**Type:** Object.&lt;string, string&gt;



## Example

```javascript
var config = {
    "variations": [
        {
            "name": "plugin name",
            "nameLocale": {
                "fr": "french plugin name",
                "es": "spanish plugin name"
            },
            ...
        }
    ]
};
```
