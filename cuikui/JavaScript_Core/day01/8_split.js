var email="935613594@qq.com";
var arr=email.split("@");
var name=arr[0];
var domain=arr[1];
console.log(name,domain);

var html=`
  <li>20</li>
  <li>30</li>
  <li>40</li>
  <li>50</li>
  <li>60</li>
  `;
  var arr=html.replace(/^\s+<li>/i,"")
               .replace(/<\/li>\s+$/i,"")
               .split(/<\/li>\s*<li>/i);
console.log(arr);



