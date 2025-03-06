# TocStyleLvl

Table of contents style levels.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Lvl | number | Level which will be applied to the specified style in the table of contents. |
| Name | string | Style name (for example, "Heading 1"). |


## Example

This example adds a table of contents which is generated from the specified styles to the document.

```javascript editor-xlsx
let tocStyleLvl = [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}];
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"StylesLvls": tocStyleLvl}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
```
