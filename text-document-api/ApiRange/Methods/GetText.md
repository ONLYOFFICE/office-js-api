# GetText

Returns a text from the specified range.

## Syntax

```javascript
expression.GetText(oPr, oPr.Numbering, oPr.Math, oPr.NewLineSeparator, oPr.TableCellSeparator, oPr.TableRowSeparator, oPr.ParaSeparator, oPr.TabSymbol);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPr | Required | object |  | The resulting string display properties. |
| oPr.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| oPr.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| oPr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |
| oPr.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| oPr.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oPr.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oPr.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any symbol can be used. The default symbol is "\t". |

## Returns

String

## Example

This example shows how to get a text from the specified range.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("\tONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
let text = range.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t", "NewLineParagraph": true, "TableCellSeparator": "\t", "TableRowSeparator": "\r\n", "ParaSeparator": "\r\n"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified range: " + text);
doc.Push(paragraph);
```
