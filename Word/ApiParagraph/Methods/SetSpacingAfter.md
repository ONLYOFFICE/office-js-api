# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then \nany value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it \nwill be interpreted as false.

## Syntax

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | boolean | false | The true value disables the spacing after the current paragraph. |

## Returns

This method doesn't return any data.

## Example

This example sets the spacing after the current paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetSpacingAfter(1440);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetStyle(myStyle);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);
```
