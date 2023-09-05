# TocPr

Table of contents properties.

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| ShowPageNums | Boolean | Specifies whether to show page numbers in the table of contents. |
| RightAlgn | Boolean | Specifies whether to right-align page numbers in the table of contents. |
| LeaderType | [TocLeader](./TocLeader.md) | The leader type in the table of contents. |
| FormatAsLinks | Boolean | Specifies whether to format the table of contents as links. |
| BuildFrom | [TocBuildFromPr](./TocBuildFromPr.md) | Specifies whether to generate the table of contents from the outline levels or the specified styles. |
| TocStyle | [TocStyle](./TocStyle.md) | The table of contents style type. |

## Example

This example adds a table of contents with the specified properties to the document.

```javascript
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
```