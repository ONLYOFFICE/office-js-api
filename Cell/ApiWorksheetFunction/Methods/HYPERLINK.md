# HYPERLINK

Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet.

## Syntax

expression.HYPERLINK(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path. |
| arg2 | Required | any |  | Is text or a number that is displayed in the cell. If omitted, the cell displays the Link_location text. |

## Returns

number, string, boolean