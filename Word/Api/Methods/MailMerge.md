# MailMerge

Starts the mail merge process.

## Syntax

expression.MailMerge(nStartIndex, nEndIndex);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStartIndex | Optional | number | false | The start index of the document for mail merge process. |
| nEndIndex | Optional | number | Api.GetMailMergeReceptionsCount() - 1 | The end index of the document for mail merge process. |

## Returns

boolean

## Example

This example shows how to start the mail merge process.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
	var oRun = Api.CreateRun();
	oRun.AddText(arrField[i]);
	oParagraph.AddElement(oRun);
	oRun.WrapInMailMergeField();
	oParagraph.AddText(" ");
}
oParagraph.AddText("!");
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge(1);
```
