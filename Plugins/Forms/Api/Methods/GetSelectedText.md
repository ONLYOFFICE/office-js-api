# GetSelectedText

Returns the selected text from the document.

## Syntax

```javascript
expression.GetSelectedText(prop, prop.NewLine, prop.NewLineParagraph, prop.Numbering, prop.Math, prop.TableCellSeparator, prop.TableRowSeparator, prop.ParaSeparator, prop.TabSymbol, prop.NewLineSeparator);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | Required | object |  | The resulting string display properties. |
| prop.NewLine | Required | boolean |  | Defines if the resulting string will include line boundaries or not (they will be replaced with '\r'). |
| prop.NewLineParagraph | Required | boolean |  | Defines if the resulting string will include paragraph line boundaries or not. |
| prop.Numbering | Required | boolean |  | Defines if the resulting string will include numbering or not. |
| prop.Math | Required | boolean |  | Defines if the resulting string will include mathematical expressions or not. |
| prop.TableCellSeparator | Required | string |  | Defines how the table cell separator will be specified in the resulting string. |
| prop.TableRowSeparator | Required | string |  | Defines how the table row separator will be specified in the resulting string. |
| prop.ParaSeparator | Required | string |  | Defines how the paragraph separator will be specified in the resulting string. |
| prop.TabSymbol | Required | string |  | Defines how the tab will be specified in the resulting string. |
| prop.NewLineSeparator | Required | string |  | Defines how the line separator will be specified in the resulting string (this property has the priority over *NewLine*). |

## Returns

string