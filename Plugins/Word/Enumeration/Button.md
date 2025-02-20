# Button

The skinnable plugin button used in the plugin interface (used for visual plugins with their own window only, i.e. isVisual == true and isInsideMode == false).

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| text | string | The label which is displayed on the button. |
| primary | boolean | Defines if the button is primary or not. The primary flag affects the button skin only. |
| isViewer | boolean | Defines if the button is shown in the viewer mode only or not. |
| textLocale | [localeTranslate](../Enumeration/localeTranslate.md) | Translations for the text field. The object keys are the two letter language codes (ru, de, it, etc.) and the values are the button label translation for each language. |
## Type

Object



## Example

```javascript editor-docx
var config = {
    "variations": [
        {
            "buttons": [
                { 
                    "text": "Cancel",
                    "primary": false,
                    "isviewer": false,
                    "textLocale": {
                        "fr": "Annuler",
                        "es": "Cancelar"
                    }
                }
            ],
            ...
        }
    ]
};
```
