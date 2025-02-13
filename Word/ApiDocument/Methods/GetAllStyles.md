# GetAllStyles

Returns all styles of the current document.

## Syntax

```javascript
expression.GetAllStyles();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle[]](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get all styles of the current document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document styles:");
paragraph.SetBold(true);
let styles = doc.GetAllStyles();
for (let i = 0; i < styles.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText(styles[i].GetName());
	doc.AddElement(i + 1, paragraph);
}
```
