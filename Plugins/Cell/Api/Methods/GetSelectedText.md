# GetSelectedText

Returns the selected text from the document.

## Syntax

```javascript
expression.GetSelectedText(prop, prop.Numbering, prop.Math, prop.TableCellSeparator, prop.TableRowSeparator, prop.ParaSeparator, prop.TabSymbol, prop.NewLineSeparator);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | Required | object |  | The resulting string display properties. |
| prop.Numbering | Required | boolean |  | Defines if the resulting string will include numbering or not. |
| prop.Math | Required | boolean |  | Defines if the resulting string will include mathematical expressions or not. |
| prop.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| prop.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| prop.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| prop.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. Any symbol can be used. The default symbol is "\t". |
| prop.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |

## Returns

string

## Example

```javascript editor-xlsx
function CorrectText () {
    switch (window.Asc.plugin.info.editorType) {
        case 'word':
        case 'slide': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                sText = data;
                ExecTypograf (sText);
            });
            break;
        }
        case 'cell': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                if (data == '') {
                    sText = sText.replace (/\t/g, '\n');
                    ExecTypograf (sText);
                }
                else {
                    sText = data;
                    ExecTypograf (sText);
                }
            });
            break;
        }
    }
}
```
