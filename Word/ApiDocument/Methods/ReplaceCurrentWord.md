# ReplaceCurrentWord

Replaces the current word or part of the current word with the specified text.

## Syntax

expression.ReplaceCurrentWord(sReplace, sPart);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReplace | Required | string |  | The string to replace the current word with. |
| sPart | Required | undefined &#124; "before" &#124; "after" |  | The desired part of the current word to be replaced. |

## Returns

boolean

## Example

This example shows how to replace the current word.

```javascript
let oDocument = Api.GetDocument();
let oPara1 = oDocument.GetElement(0);
oPara1.AddText("The quick brown ");
let oRun = oPara1.AddText("cat");
oPara1.AddText(" jumps over the lazy dog");
oRun.MoveCursorToPos(1);

oDocument.ReplaceCurrentWord("fox");


```
