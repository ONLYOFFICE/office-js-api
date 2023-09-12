# ParaGetTextPr

The resulting string display properties.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| Numbering | Optional | Boolean | Defines if the resulting string will include numbering or not. Default value is "false". |
| Math | Optional | Boolean | Defines if the resulting string will include mathematical expressions or not. Default value is "false". |
| NewLineSeparator | Optional | String | Defines how the line separator will be specified in the resulting string. Default value is "\r". |
| TabSymbol | Optional | String | Defines how the tab will be specified in the resulting string (does not apply to numbering). Default value is "\t". |

## Example

This example gets the paragraph text.

```javascript
var sText = oParagraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
```