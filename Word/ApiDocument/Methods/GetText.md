# GetText

Returns the inner text of the current document content object.

## Syntax

expression.GetText(oProps, oProps.NewLine, oProps.NewLineParagraph, oProps.Numbering, oProps.Math, oProps.TableCellSeparator, oProps.TableRowSeparator, oProps.ParaSeparator, oProps.TabSymbol, oProps.NewLineSeparator);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProps | Required | object |  | The resulting string display properties. |
| oProps.NewLine | Required | boolean |  | Defines if the resulting string will include line boundaries or not (they will be replaced with '\r'). |
| oProps.NewLineParagraph | Required | boolean |  | Defines if the resulting string will include paragraph line boundaries or not. |
| oProps.Numbering | Required | boolean |  | Defines if the resulting string will include numbering or not. |
| oProps.Math | Required | boolean |  | Defines if the resulting string will include mathematical expressions or not. |
| oProps.TableCellSeparator | Required | string |  | Defines how the table cell separator will be specified in the resulting string. |
| oProps.TableRowSeparator | Required | string |  | Defines how the table row separator will be specified in the resulting string. |
| oProps.ParaSeparator | Required | string |  | Defines how the paragraph separator will be specified in the resulting string. |
| oProps.TabSymbol | Required | string |  | Defines how the tab will be specified in the resulting string. |
| oProps.NewLineSeparator | Required | string |  | Defines how the line separator will be specified in the resulting string (this property has the priority over *NewLine*). |

## Returns

string

## Example

This example gets a text from document content element.

```javascript
let oDocument = Api.GetDocument();
let oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.Push(oBlockLvlSdt);
let oContent = oBlockLvlSdt.GetContent();
oContent.GetElement(0).AddText("This is a block text content control.");
let oPara = Api.CreateParagraph();
oPara.AddText("This text from DocContent element: " + oContent.GetText());
oDocument.Push(oPara);
```
