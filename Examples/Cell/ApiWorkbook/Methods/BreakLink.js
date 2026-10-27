// Break the links to other workbooks, replacing the formulas that use them with their values.

// How do I remove external workbook links before sending a spreadsheet?

// Break every link and report the ones a defined name still uses.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
let kept = [];
for (let i = 0; i < sources.length; i++) {
    if (!workbook.BreakLink(sources[i])) {
        kept.push(sources[i]);
    }
}
worksheet.GetRange("A1").SetValue("Links broken: " + (sources.length - kept.length));
worksheet.GetRange("A2").SetValue("Links kept: " + kept.join(", "));
