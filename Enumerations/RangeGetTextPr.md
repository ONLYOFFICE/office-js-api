# RangeGetTextPr

The resulting string display properties.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| NewLineParagraph | Optional | Boolean | Defines if the resulting string will include paragraph line boundaries or not. Default value is "false". |
| Numbering | Optional | Boolean | Defines if the resulting string will include numbering or not. Default value is "false". |
| Math | Optional | Boolean | Defines if the resulting string will include mathematical expressions or not. Default value is "false". |
| NewLineSeparator | Optional | String | Defines how the line separator will be specified in the resulting string Default value is "\r". |
| TableCellSeparator | Optional | String | Defines how the table cell separator will be specified in the resulting string. Default value is "\t". |
| TableRowSeparator | Optional | String | Defines how the table row separator will be specified in the resulting string. Default value is "\r\n". |
| ParaSeparator | Optional | String | Defines how the paragraph separator will be specified in the resulting string. Default value is "\r\n". |
| TabSymbol | Optional | String | Defines how the tab will be specified in the resulting string (does not apply to numbering). Default value is "\t". |

## Example

This example returns a text from the specified range.

```javascript
var sText = oRange.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t", "NewLineParagraph": true, "TableCellSeparator": "\t", "TableRowSeparator": "\r\n", "ParaSeparator": "\r\n"});
```