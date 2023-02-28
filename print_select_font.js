// created by fuyuton
// 

const lst = [499, 676, 686]; //����[]�̒��ɁAprint_font_list.js�ŏo�����ꗗ�̐�����","�ŋ�؂��ď���
const txt = "�����ɔ�r�����������������"; // ����""�̊Ԃɕ\�����Ĕ�r�����������������
const fontSize = 20; // �����Ƀt�H���g�T�C�Y������


const lstLength = lst.length;

var width = txt.length * fontSize * 4;
var height = (lstLength+2) * fontSize;



var edgeSpacing = 10;
var columnSpacing = 50;
var docPreset = new DocumentPreset;
docPreset.width =  width;
docPreset.height = height;
var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = "";
var x = edgeSpacing;
var y = (docRef.height - edgeSpacing);
var iCount = textFonts.length;


for(var i=0; i<iCount; i++) {
	var flag = 0;
	for (var j=0; j<lstLength; j++){
		if (lst[j] == i){
			flag = 1;
		}
	}
	if(flag == 0){
		continue;
	}
	
	sFontName = textFonts[i].name;
	sFontName += " ";
	sFontNames = sFontName + textFonts[i].style;
	var textRef = docRef.textFrames.add();
	textRef.textRange.characterAttributes.size = fontSize;
	textRef.contents = txt + i + sFontNames; // �����Ŕԍ��ƃt�H���g���ƕ����������
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
