# TocBuildFromPr

Table of contents properties which specify whether to generate the table of contents from the outline levels or the specified styles.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| OutlineLvls | Optional | Number | Maximum number of levels in the table of contents. Default value is "9". |
| StylesLvls | Required | Array | Style levels (for example, [{Name: "Heading 1", Lvl: 2}, {Name: "Heading 2", Lvl: 3}]). If StylesLvls.length > 0, then the OutlineLvls property will be ignored. |

## Example

This example adds a table of contents which is generated from 9 outline levels to the document.

```javascript
var oTocBuildFromPr = {"OutlineLvls": 9};
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": oTocBuildFromPr, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
```