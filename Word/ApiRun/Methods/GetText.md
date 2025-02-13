# GetText

Returns a text from the text run.

## Syntax

```javascript
expression.GetText(oPr, oPr.NewLineSeparator, oPr.TabSymbol);
```

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
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
let text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
doc.Push(paragraph);
```
