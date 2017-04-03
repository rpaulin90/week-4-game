

game = {

		score: 0,

		wins: 0,

		losses: 0,

		random_number: function(){
			return (Math.floor(Math.random()*102)) + 19;
		},

		random_number_diamond: function(){
			return (Math.floor(Math.random()*12)) + 1;
		}

	}

	var random_goal = game.random_number();

	var random_1 = game.random_number_diamond();

	var random_2 = game.random_number_diamond();

	var random_3 = game.random_number_diamond();

	var random_4 = game.random_number_diamond();

$(document).ready(function() {

	// what happens when the user wins or loses is similar. 
	// We update the corresponding variables to restart the game and either increase wins or losses

	score_keeping = {
		
		winning: 

			function(){

				if(game.score === random_goal){

					alert("you won!!");

					game.wins = game.wins + 1;

					game.score = 0;

					random_goal = game.random_number();

					random_1 = game.random_number_diamond();

					random_2 = game.random_number_diamond();

					random_3 = game.random_number_diamond();

					random_4 = game.random_number_diamond(); 

					$("#score").html(0);

					$("#wins").html("Wins: " + game.wins);

					$("#random-number").html(random_goal);

				}
			},

		losing: 

			function(){

				if(game.score > random_goal){

					alert("you lost! :(");

					game.losses = game.losses + 1;

					game.score = 0;

					random_goal = game.random_number();

					random_1 = game.random_number_diamond();

					random_2 = game.random_number_diamond();

					random_3 = game.random_number_diamond();

					random_4 = game.random_number_diamond(); 

					$("#score").html(0);

					$("#losses").html("Losses: " + game.losses);

					$("#random-number").html(random_goal);

				}

			}
	
	}

	//here we print the target number for the current game

	$("#random-number").html(random_goal);

	//what happens when clicking each button.
	//every time a button is clicked, we check if the user won or lost

	$("#button_1").on("click",function(){


		game.score += random_1;

		$("#score").html(game.score);

		score_keeping.winning();

		score_keeping.losing();

	});

	$("#button_2").on("click",function(){


		game.score += random_2;

		$("#score").html(game.score);

		score_keeping.winning();

		score_keeping.losing();

	});

	$("#button_3").on("click",function(){


		game.score += random_3;

		$("#score").html(game.score);

		score_keeping.winning();

		score_keeping.losing();

	});

	$("#button_4").on("click",function(){


		game.score += random_4;

		$("#score").html(game.score);

		score_keeping.winning();

		score_keeping.losing();

	});


});
