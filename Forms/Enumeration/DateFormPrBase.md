# DateFormPrBase

Specific date form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| format | [string](../../Word/string/string.md) | The date format, ex: mm.dd.yyyy |
| lang | [string](../../Word/string/string.md) | The date language. Possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |


## Example

This example creates a date form with the specific date form properties.

```javascript editor-pdf
let dateFormPrBase = {"format": "mm.dd.yyyy", "lang": "en-US"};
let dateForm = Api.CreateDateForm(dateFormPrBase);
```
