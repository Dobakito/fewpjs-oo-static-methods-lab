class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(string){
    let newString = Formatter.capitalize(string);
    let stringArray = newString.split(' ');
    stringArray = stringArray.map(function(str) {
      if (str.match(/^(the|a|an|but|of|and|for|at|by|from)$/)) {
        return str
      } else {
        return Formatter.capitalize(str);
      }
   });
   return stringArray.join(' ');
  }
}
