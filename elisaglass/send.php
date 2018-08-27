<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("fogfug1@gmail.com", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$tel ,"From: fogfug1@gmail.com \r\n")) {
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}
// ini_set('display_errors','On');
// error_reporting('E_ALL');    

?>
<div class="bg-show">
	<div class="content">
		<h1>Ваша заявка отправлена</h1>
		<a href="index.html">На главную</a>
	</div>
</div>
<style>
	* {
	   		font-family: Arial, sans-serif;
	  }
	.bg-show {
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100vw;
		min-height: 100vh;
		background-color: #03496a;
	}
	.content {
		width: 600px;
		height: 300px;
		position: fixed;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
	}
	.content h1 {
		font-family: Play, sans-serif;
		font-weight: 700;
		font-style: normal;
		color: rgb(255, 252, 252);
		font-size: 33px;
		text-align: center;
		margin-top: 50px;
		margin-bottom: 73px;
	}
	.content a {
		background: linear-gradient(to bottom,#03A9F4 0%,#0D47A1 100%);
	    color: #FFFFFF;
	    transform: scale(0.97);
	    border: none;
	    font-family: Play, sans-serif;
	    font-weight: 400;
	    font-style: normal;
	    font-size: 20px;
	    padding: 15px 20px;
	    border-radius: 255px;
	   	margin: 20px 220px;
	   	outline: none;
	   	text-decoration: none;

	}
</style>