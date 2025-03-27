# SetStrikeout

Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies that the contents of the current paragraph are displayed struck through. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with a single line.");
paragraph.SetStrikeout(true);
```
