# ReplaceCurrentSentence

Replaces the current sentence or part of the current sentence with the specified text.

## Syntax

expression.ReplaceCurrentSentence(sReplace, sPart);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | Required | string |  | The string to replace the current sentence with. |
| sPart | Required | undefined &#124; "before" &#124; "after" |  | The desired part of the current sentence to be replaced. |

## Returns

boolean

## Example

This example shows how to replace the current sentence.

```javascript
let oDocument = Api.GetDocument();

let sText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let oPara1 = oDocument.GetElement(0);
oPara1.AddText(sText);

let oPara2 = Api.CreateParagraph();
oDocument.Push(oPara2);
let oRun = oPara2.AddText(sText);
oRun.MoveCursorToPos(80);
oDocument.ReplaceCurrentSentence("The quick brown fox jumps over the lazy dog.");


```
