function generateCols(){
	var column = 0;
	var colOffset = 0;
	var columnWitdth = (100/12);
	for (i =0; i <=12; i++){
		
		colOffset = columnWitdth;
		console.log( "\ncolumn"+ i + " width = "+ columnWitdth*i + "%\n &  colOffset "+i+ " = " + columnWitdth*i+"%\n");		
	}
}
generateCols();
