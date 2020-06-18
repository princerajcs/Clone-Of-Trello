var de = dragula({
  moves: function (el, cont, handle) {
    return true
  }
})
var cs = document.querySelectorAll('.column')
for (var i in cs) {
  de.containers.push(cs[i])
}



function addItem(){
	var ul = document.getElementById("list");
  
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'xyz'); 
  newDiv.style.height = "20px";
        newDiv.style.width = "250px";
       newDiv.style.backgroundColor = 'gray';
  newDiv.appendChild(li);
  
  ul.appendChild(newDiv);
  
  
}


function addItem1(){
  var ul = document.getElementById("list1");
  ul.className="column";
 
  var candidate = document.getElementById("candidate1");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'xyz1'); 
  newDiv.style.height = "20px";
        newDiv.style.width = "250px";
       newDiv.style.backgroundColor = 'gray';
  newDiv.appendChild(li);
  
  ul.appendChild(newDiv);
  
  
}

function removeItem(){
  
  
  

  var candidate = document.getElementById("candidate");
  var elem = document.getElementById(candidate.value);
 elem.parentNode.removeChild(elem);
  var div = document.getElementById('xyz');
if (div) {
    div.parentNode.removeChild(div);
}
    }  


function removeItem1(){
  
  
  
	
  var candidate1 = document.getElementById("candidate1");
  var elem = document.getElementById(candidate1.value);
  elem.parentNode.removeChild(elem);
  var div = document.getElementById('xyz1');
if (div) {
    div.parentNode.removeChild(div);
}
    

}  

var counter = 1;
function addnewboard() {
  
          var i = document.getElementById( 'div1' );
          var j = document.getElementById( 'div2' );
  
          var d = document.createElement( 'div' );
          d.className="column"
          d.id = "list";

          var e = document.createElement( 'div' );
          e.className="column"
          e.id = "list1";

          var ba = document.createElement( 'div' );
          ba.id="div1";
          var bb = document.createElement( 'div' );
          bb.id="div2";
          
          ba.innerHTML = i.innerHTML ;
          bb.innerHTML = j.innerHTML ;
       
          //var p = document.getElementById('main');
  
         d.appendChild(ba);
         e.appendChild(bb);
  
         //d.appendChild(i);
         //e.appendChild(j);
        //var k = document.getElementById( 'maindiv' );
        var k = document.createElement( 'div' );

        k.setAttribute('id',"maindiv" + counter++);
        //k.id = "maindiv";
        var l = document.createElement( 'br' );
        var m = document.createElement( 'button' );
        m.className="close"
        m.id = "cross";
        m.onclick=function(){rem(this)};
        m.innerHTML='&times;'
        //var m = document.getElementById( 'cross' );
        k.appendChild(m);
        k.appendChild(d);
        k.appendChild(l);
        k.appendChild(e);

          document.getElementsByTagName('body')[0].appendChild(k);

         // document.getElementsByTagName('body')[0].appendChild(e);
         de.containers.push(ba);      
         de.containers.push(bb);
      }

      function rem(e) {
        
                var d = document.getElementById(e.parentNode.id);
               // var e = document.getElementById( "cross" + counters1 ++);
               //var p = document.getElementById('main');
                document.getElementsByTagName('body')[0].removeChild(d);
                //p.removeChild(d);
               e.parentNode.parentNode.removeChild(e.parentNode);


               
        
            }