# SetKeepNext

Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least
partly rendered on the same page as the following paragraph whenever possible.

## Syntax

```javascript
expression.SetKeepNext(isKeepNext);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isKeepNext | Required | boolean |  | The true value enables the option to keep lines of the paragraph on the same page as the following paragraph. |

## Returns

boolean

## Example

This example specifies that when rendering the document using a paginated view, the contents of the paragraph are at least partly rendered on the same page as the following paragraph whenever possible.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepNext(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
paragraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	paragraph.SetStyle(myStyle);
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
doc.Push(paragraph);
```
