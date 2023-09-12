# TocStyleLvl

Table of contents style levels.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| Name | Required | String | Style name (for example, "Heading 1"). |
| Lvl | Required | Number | Style levels (for example, [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}]). Level which will be applied to the specified style in the table of contents. |

## Example

This example adds a table of contents which is generated from the specified styles to the document.

```javascript
var aTocStyleLvl = [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}];
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"StylesLvls": aTocStyleLvl}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
```