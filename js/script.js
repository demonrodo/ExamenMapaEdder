$(function() {
	console.log("REAdy")
	$('#sum').click(function(e){
		
		$('#operaciones').parsley()


		var first_number = $('#first_number').val()
			second_number = $('#second_number').val()
			result = $('#result')

		console.log(first_number + " " + second_number)
		e.preventDefault()  // evita el envio del form
		console.log(typeof(first_number))
		console.log(typeof(second_number))
		sum_result = parseInt(first_number) + parseInt(second_number)
		result.val(sum_result)
	})
});