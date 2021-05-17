export function validation(strg)
 {
    let num = parseFloat(strg);
    if (num) {

      return num
    } else {
      return 'Please enter a valid number.';
    }
  }