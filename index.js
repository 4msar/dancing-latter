  var colors = ["#5a078e","#f51338","#e91e63","#f44336","#9c27b0","#3f51b5","#2196f3","#009688","#3a873f","#ff5722","#073b8e","#8e075a" ,"#8e0707" ,"#8e5307" ,"#758e07" ,"#1d8e07" ,"#07608e" ,"#57078e" ,"#07108e" ,"#078e5a", "#e44c65", "#272833" ];
var string = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for( var b = 1; b<=120; b++){
  $('#loop').append('<span class="item">'+string[Math.floor(Math.random() * string.length)]+'</span>');
}

var lis = $('.item');
var width = window.innerWidth - 90;
var height = window.innerHeight - 60;

$(document).ready(function(){
	main();
});
$('#btn').click(function(){
  main();
  console.log(lis.length);
});
$('#btn2').click(function(){
  lis.each(function(){
    $(this).clearQueue();
  });
});
function main(){
	$('#msg').hide(300);
  $('#loop').fadeIn(900);
  lis.each(function(){
    $(this).css({
      "background-color" : colors[Math.floor(Math.random() * colors.length)],
      "box-shadow" : "0 0 20px 1px "+ colors[Math.floor(Math.random() * colors.length)],
    });
  });
  for(var n=1; n<=lis.length; n++) {
    lis.each(function(){

      $(this).animate({
        top : Math.floor(Math.random() * height)+'px',
        left : Math.floor(Math.random() * width)+'px',
      }, 1500, 'swing', function(){
        $(this).css({
          "background-color" : colors[Math.floor(Math.random() * colors.length)],
          "box-shadow" : "0 0 20px 1px "+ colors[Math.floor(Math.random() * colors.length)],
        });
      });

    });
  }
}