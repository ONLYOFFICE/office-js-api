# SetUnderline

Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character\
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current paragraph are displayed underlined. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example specifies that the contents of this paragraph are displayed along with a line appearing directly below the character.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);
```
