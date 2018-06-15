	var count =0;
$('#boutton').click( function (){
		count++;
	$('#compteur').html(count);
});
//////////////////////////////////////////
	var count1 =0;
$('#plus').click( function (){
		count1++;
	$('#compteur1').html(count1);
});
$('#moins').click( function (){
		count1--;
	$('#compteur1').html(count1);
});
//////////////////////////////////////////////////
var min = 0;
var max = 100;
var cpt= 0;
var nb = Math.floor( min + (max-min+1)*Math.random());
		console.log(nb);

$('#validate').click(function() {

	var playerNb= $("#playerNb").val();
		console.log(playerNb);
		cpt++
	if (playerNb == nb) {
		$("#result").html("Bravo, tu as trouvé au bout de "+cpt+" fois");
		$("#playerNb").val('');
	}else if (playerNb < nb) {
		$("#result").html("C'est plus grand");
		$("#playerNb").val('');
	}else if (playerNb > nb) {
		$("#result").html("C'est plus petit");
		$("#playerNb").val('');
	}
});
//////////////////////////////////////////////////////////
$('#vert').click(function(){
	$('#rectangle').css('border-color', 'green');
});

$('#black').click(function(){
	$('#rectangle').css('border-color', 'black');
});

$('#hide').click(function(){
	$('#rectangle').hide();
});

$('#show').click(function(){
	$('#rectangle').show();
});

var agrandi =10;
$('#hauteur').click(function(){

	agrandi= agrandi+10;
console.log(agrandi);

	$('#rectangle').css('height', agrandi);

	if(agrandi>=100){
		agrandi=0;
			}
});
//////////////////////////////////////////////////////////////
 $(document).keydown(function(e){
 	var gauche = $("#carre").css('margin-left');

   if (gauche<10) {
   	   console.log(gauche);
   	$("#carre").css('margin-left', "1500");
   }
   switch (e.which){
     case 37: // fleche gauche
       $('#carre').css('margin-left', '-=10');
       break;
     case 38: // fleche haut
       $('#carre').css('margin-top', '-=10');
       break; 
     case 39: // fleche droite
       $('#carre').css('margin-left', '+=10');
       break;
     case 40: // fleche bas
       $('#carre').css('margin-top', '+=10');
       break;
   }

}); 