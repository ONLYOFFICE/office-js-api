# TocPr

Table of contents properties.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| ShowPageNums | Optional | Boolean | Specifies whether to show page numbers in the table of contents. Default value is "true". |
| RightAlgn | Optional | Boolean | Specifies whether to right-align page numbers in the table of contents. Default value is "true". |
| LeaderType | Optional | [TocLeader](./TocLeader.md) | The leader type in the table of contents. Default value is "dot". |
| FormatAsLinks | Optional | Boolean | Specifies whether to format the table of contents as links. Default value is "true". |
| BuildFrom | Optional | [TocBuildFromPr](./TocBuildFromPr.md) | Specifies whether to generate the table of contents from the outline levels or the specified styles. Default value is "{OutlineLvls=9}". |
| TocStyle | Optional | [TocStyle](./TocStyle.md) | The table of contents style type. Default value is "standard". |

## Example

This example adds a table of contents with the specified properties to the document.

```javascript
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
```