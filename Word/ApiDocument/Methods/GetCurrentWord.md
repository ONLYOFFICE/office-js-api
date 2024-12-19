# GetCurrentWord

Returns the current word or part of the current word.

## Syntax

expression.GetCurrentWord(sWordPart);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sWordPart | Required | undefined &#124; "before" &#124; "after" |  | The desired part of the current word to be returned. |

## Returns

string

## Example

This example shows how to get the current word.

```javascript
let oDocument = Api.GetDocument();
let oPara1 = oDocument.GetElement(0);
oPara1.AddText("The quick brown ");
let oRun = oPara1.AddText("fox");
oPara1.AddText(" jumps over the lazy dog");

oRun.MoveCursorToPos(1);

let oPara2 = Api.CreateParagraph();
oPara2.AddText("The current word is " + oDocument.GetCurrentWord());
oDocument.Push(oPara2);

oPara2 = Api.CreateParagraph();
oPara2.AddText("The part of the word after cursor is " + oDocument.GetCurrentWord("after"));
oDocument.Push(oPara2);

oPara2 = Api.CreateParagraph();
oPara2.AddText("The part of the word before cursor is " + oDocument.GetCurrentWord("before"));
oDocument.Push(oPara2);


```
