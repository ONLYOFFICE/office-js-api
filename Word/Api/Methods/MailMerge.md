# MailMerge

Starts the mail merge process.

## Syntax

expression.MailMerge(nStartIndex?, nEndIndex?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nStartIndex | Optional | Number | The start index of the document for mail merge process. Default value is `0`. |
| nEndIndex | Optional | Number | The end index of the document for mail merge process. Default value is `Api.GetMailMergeReceptionsCount() - 1`. |

## Returns

Boolean

## Example

This example shows how to start the mail merge process.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "MailMerge.docx");
builder.CloseFile();
```