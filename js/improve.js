window.onload = function () {
    IsShow1();
    IsShow2();
    IsShow3();

}

function IsShow1() {
  document.getElementById('table1').style.display='inline-block';;
 document.getElementById('table2').style.display='none';
    document.getElementById('table3').style.display='none';

}

function IsShow2() {
     document.getElementById('table1').style.display='none';;
   document.getElementById('table2').style.display='inline-block';
    document.getElementById('table3').style.display='none';

}
function IsShow3() {
    document.getElementById('table1').style.display='none';;
    document.getElementById('table2').style.display='none';
    document.getElementById('table3').style.display='inline-block';

}