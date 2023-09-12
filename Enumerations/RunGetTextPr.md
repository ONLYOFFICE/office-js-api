# RunGetTextPr

The resulting string display properties.

## Type

Object

## Properties

| **Name**  | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| NewLineSeparator | Optional | String | Defines how the line separator will be specified in the resulting string. Default value is "\r". |
| TabSymbol | Optional | String | Defines how the tab will be specified in the resulting string. Default value is "\t". |

## Example

This example returns a text from the text run.

```javascript
var sText = oRun.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
```