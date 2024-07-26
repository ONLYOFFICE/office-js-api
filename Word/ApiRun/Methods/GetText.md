# GetText

Returns a text from the text run.

## Syntax

expression.GetText(oPr, oPr.NewLineSeparator, oPr.TabSymbol);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPr | Required | object |  | The resulting string display properties. |
| oPr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. |
| oPr.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. |

## Returns

string

## Example

This example returns a text from the text run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("\tThis is a text run");
oParagraph.AddElement(oRun);
var sText = oRun.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the specified run: " + sText);
oDocument.Push(oParagraph);
```
