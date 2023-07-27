function decimalToBinary(num) {
  //Write you code here
	let decValue = parseInt(num);
	let binInp = decValue.toString(2);
	return binInp;
}

window.decimalToBinary = decimalToBinary;
