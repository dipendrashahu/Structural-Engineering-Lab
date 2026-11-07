(function(){
var svg=document.getElementById('beam'),s=document.getElementById('load');
if(!svg||!s)return;
var L=70,R=530,Y=140,ink='#202124',ac='#2f6b5a';
function draw(){
var w=+s.value/100,d=46*w,pts=[],i,arrows='';
for(i=0;i<=40;i++){var t=i/40;pts.push((L+(R-L)*t).toFixed(1)+','+(Y+d*Math.sin(Math.PI*t)).toFixed(1));}
for(i=0;i<=8;i++){var t2=i/8,x=L+(R-L)*t2,yb=Y+d*Math.sin(Math.PI*t2)-4,len=10+36*w;
arrows+='<line x1="'+x+'" y1="'+(yb-len)+'" x2="'+x+'" y2="'+yb+'" stroke="'+ac+'" stroke-width="1.5"/><path d="M'+(x-4)+','+(yb-6)+'L'+x+','+yb+'L'+(x+4)+','+(yb-6)+'" fill="none" stroke="'+ac+'" stroke-width="1.5"/>';}
svg.innerHTML='<line x1="'+L+'" y1="'+Y+'" x2="'+R+'" y2="'+Y+'" stroke="#9a9992" stroke-dasharray="4 5"/>'+arrows+
'<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+ink+'" stroke-width="5" stroke-linejoin="round"/>'+
'<path d="M'+L+','+Y+'l-14,24h28z" fill="none" stroke="'+ink+'" stroke-width="2"/><circle cx="'+R+'" cy="'+(Y+10)+'" r="9" fill="none" stroke="'+ink+'" stroke-width="2"/><line x1="'+(R-16)+'" y1="'+(Y+24)+'" x2="'+(R+16)+'" y2="'+(Y+24)+'" stroke="'+ink+'" stroke-width="2"/>';}
s.addEventListener('input',draw);draw();
})();
