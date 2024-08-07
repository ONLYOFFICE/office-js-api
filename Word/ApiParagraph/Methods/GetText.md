# GetText

Returns the paragraph text.

## Syntax

expression.GetText(oPr, oPr.Numbering, oPr.Math, oPr.NewLineSeparator, oPr.TabSymbol);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPr | Required | object |  | The resulting string display properties. |
| oPr.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| oPr.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| oPr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. |
| oPr.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). |

## Returns

string

## Example

This example shows how to get the paragraph text.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("\tThis is just a sample text.");
var sText = oParagraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the first paragraph: " + sText);
oDocument.Push(oParagraph);
```
