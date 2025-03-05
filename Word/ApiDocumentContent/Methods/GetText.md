# GetText

Returns the inner text of the current document content object.

## Syntax

```javascript
expression.GetText(oProps, oProps.Numbering, oProps.Math, oProps.TableCellSeparator, oProps.TableRowSeparator, oProps.ParaSeparator, oProps.TabSymbol, oProps.NewLineSeparator);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProps | Required | object |  | The resulting string display properties. |
| oProps.Numbering | Required | boolean |  | Defines if the resulting string will include numbering or not. |
| oProps.Math | Required | boolean |  | Defines if the resulting string will include mathematical expressions or not. |
| oProps.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. Any symbol can be used. The default separator is "\t". |
| oProps.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oProps.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r\n". |
| oProps.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. Any symbol can be used. The default symbol is "\t". |
| oProps.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |

## Returns

string

## Example

This example gets a text from document content element.

```javascript editor-docx
let oDocument = Api.GetDocument();
let oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.Push(oBlockLvlSdt);
let oContent = oBlockLvlSdt.GetContent();
oContent.GetElement(0).AddText("This is a block text content control.");
let oPara = Api.CreateParagraph();
oPara.AddText("This text from DocContent element: " + oContent.GetText());
oDocument.Push(oPara);
```
