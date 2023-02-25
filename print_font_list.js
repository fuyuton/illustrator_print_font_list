// created by fuyuton
// 

var txt = "Œ©”ä‚×‚½‚¢•¶š—ñ‚ğ‚±‚±‚É‘‚­"


var edgeSpacing = 10;
var columnSpacing = 400;
var docPreset = new DocumentPreset;
docPreset.width = 2000.0;
docPreset.height = 2000.0
var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = "";
var x = edgeSpacing;
var y = (docRef.height - edgeSpacing);
var iCount = textFonts.length;


for(var i=0; i<iCount; i++) {
	sFontName = textFonts[i].name;
	sFontName += " ";
	sFontNames = sFontName + textFonts[i].style;
	var textRef = docRef.textFrames.add();
	textRef.textRange.characterAttributes.size = 10;
	textRef.contents = i + sFontNames + txt; // ‚±‚±‚Å”Ô†‚ÆƒtƒHƒ“ƒg–¼‚Æ•¶š—ñ‚ğ“ü‚ê‚é
	textRef.top = y;
	textRef.left = x;
	if ((x + textRef.width)> docRef.width){
		textRef.remove();
		iCount = i;
		break;
	}
	else{
		// display text frame
		textRef.textRange.characterAttributes.textFont = 
		  textFonts.getByName(textFonts[i].name);
		redraw();
		if( (y-=(textRef.height)) <= 20 ) {
			y = (docRef.height - edgeSpacing);
			x += columnSpacing;
		}
	}
}
