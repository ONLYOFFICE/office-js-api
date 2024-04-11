# DateFormPr

Date field properties.

## Type

[FormPrBase](./FormPrBase.md) &#124; [DateFormPrBase](./DateFormPrBase.md)

## Example

This example creates a date form with the common and specific date form properties.

```javascript
var oDateFormPr = {"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"};
var oDateForm = Api.CreateDateForm(oDateFormPr);
```