# DateFormPrBase

Specific date field properties.

## Type

Object

## Properties

| **Name**  | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| format | String | The date format, ex: mm.dd.yyyy |
| lang | String | The date language. Possible value for this parameter is a language identifier as defined by * RFC 4646/BCP 47. Example: "en-CA". |

## Example

This example creates a date form with the specific date form properties.

```javascript
var oDateFormPrBase = {"format": "mm.dd.yyyy", "lang": "en-US"};
var oDateForm = Api.CreateDateForm(oDateFormPrBase);
```