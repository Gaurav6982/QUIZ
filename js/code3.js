var questions = [
    ["QUESTION :WHAT IS FORMULA FOR STEFAN'S LAW?","E=σT<sup>4</sup>","E=σT<sup>3</sup>","E=εT<sup>3</sup>","E=εT<sup>4</sup>","A"],

["QUESTION :WHAT IS UNIT OF STEFAN'S CONSTANT?","Wm<sup>2</sup>K<sup>-4</sup>","Wm<sup>-2</sup>K<sup>4</sup>","Wm<sup>-2</sup>K<sup>-4</sup>","Wm<sup>2</sup>K<sup>4</sup>","C"],

["QUESTION :WHAT TYPE OF BULB IS UESD IN THIS EXPERIMENT?","CFL","TUNGSTEN FILAMENT BULB","HALOGEN","METAL HALIDE LAMP","B"],

["QUESTION :GRAPH IS PLOTTED BETWEEN?","x=logP and y=logT","x=V and y=I","x=I and y=V","x=logT and y=logP","D"],

["QUESTION :WHAT SHOULD BE THE VALUE OF SLOPE?","1","3","4","2","C"],

["QUESTION :WHAT IS THE VALUE OF STEFAN'S CONSTANT IN W/m<sup>2</sup>K <sup>4</sup>?","5.670x10<sup>-8</sup>","6.670x10<sup>-8</sup>","7.280x10<sup>-8</sup>","8.280x10<sup>-8</sup>","A"],

["QUESTION :HOW IS R0IS CALCULATED?","R<sub>g</sub>/4.9","R<sub>g</sub>/3.9","R<sub>g</sub>/7.2","R<sub>g</sub>/4.2","B"],

["QUESTION :WHICH OF THE FOLLOWING OPTION IS CORRECT?","P=CT<sup>m+1</sup>","P=CT<sup>m</sup>","P=CT <sup>m+2</sup>","P=CT <sup>m-1</sup>","B"],

["QUESTION :DOES THE AMOUNT OF HEAT RADIATED DEPEND ONTHE WAVELENGTH OF RADIATION?","YES","NO","SOMETIMES","NONE OF THE ABOVE","A"]
];
var f=0,a,b,c,d,question,l;

var x;
var att=0;

	var i,x,w,k=0,t,n=0;
	var ar=[];
	function array(){
		for(i=0;i<7;)
			{	
				k=0;
				x=Math.round(Math.random()*questions.length);
				ar[i]=x;
				
				for(w=0;w<i;w++)
				{	
					 if(ar[i]!=ar[w])
					{
						k++;
					}
				}
				if(k==i)
				{
					i++;
				}

			}

	}
	array();
getquestion();
		function getquestion(){
			t=ar[n];
			if(att>=7)
			{
				alert('You Got '+f+' Marks');
				att=0;
				f=0;
				n=0;
				array();
				getquestion();

			}

			     question=questions[t][0];
			     a = questions[t][1];
			     b = questions[t][2];
			     c = questions[t][3];
			     d = questions[t][4];
			document.getElementById("para1").innerHTML="Question "+(att+1)+" of 7";
			document.getElementById("ques").innerHTML= question;

			document.querySelector('#b1').innerHTML=a;
			document.querySelector('#b2').innerHTML=b;
			document.querySelector('#b3').innerHTML=c;
			document.querySelector('#b4').innerHTML=d;


document.querySelector('#b1').addEventListener('click',checka);
document.querySelector('#b2').addEventListener('click',checkb);
document.querySelector('#b3').addEventListener('click',checkc);
document.querySelector('#b4').addEventListener('click',checkd);
				
				
				
			  //if(x!=0) document.querySelector(".container").innerHTML= " <button class='button' onclick ='prev()'> prev </button>";
		

	}
function checka()
{
     l=document.querySelector('#b1').value;
    run();
}
function checkb()
{
     l=document.querySelector('#b2').value;
    run();
}
function checkc()
{
     l=document.querySelector('#b3').value;
    run();
}
function checkd()
{
     l=document.querySelector('#b4').value;
    run();
}
function run(){
	var ans=questions[t][5];
    
        if(l==ans)
        {
        	f++;
        }

    alert("You Attempted "+l);
    att++;
    n++;
    getquestion();
    
}