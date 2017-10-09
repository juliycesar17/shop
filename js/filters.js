angular.module("myExp").filter("roww",function () {
  return function ( arrayLength) {
  if (arrayLength > 1){
    arrayLength = Math.ceil(arrayLength);
    var arr = new Array(arrayLength);
    for (var i=0; i < arrayLength; i++) {
        arr[i] = i;
    }
} else  {
  var arr = new Array(1);
  arr[0] = 1;}
  return arr;
}
}).filter("splitTitle",function () {
  return function (data, title) {
    var t = title.split(/[ ,]+/); //getting new array for brends in one type of ice cream
        return t;
}
}).filter("bbb",function () {
    return function ( data) {
}
})
