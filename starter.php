<!DOCTYPE HTML>

<html>
<head>

<!-- CSS -->
<link rel="stylesheet" href="assets/css/main.css" />

<!-- Fonts/Icons -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script src="https://use.typekit.net/jdv3ucc.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>

</head>

<body class="contact">

<?php
mail('andresbuzzio@gmail.com', $_POST['name'], $_POST['email'], $subject="29");
?>

<div class="thanks">Thanks!</div>
<h1>We will get back to you shortly</h1>
<h2><a href="index.html"><button>Back</button></a></h2>

</body>
</html>
