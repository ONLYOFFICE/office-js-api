// This example shows how to get the default style parameters for the specified document element.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let paraPr = document.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = document.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");