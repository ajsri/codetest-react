<!doctype html>
	<head>
		<meta charset="utf-8">
		<title>SIAL Code Test - React</title>
		<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
	</head>
	<body>
		<div id="app" style="">
		<?php
		$test = file_get_contents('http://stlouiswings.com/daily-specials/index.php');
		echo $test;
		?>
		</div>
		<script src="https://code.jquery.com/jquery-2.2.2.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js"></script>
		<script>
			console.log($('#app'));
		</script>
	</body>
</html>