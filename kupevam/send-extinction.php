<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$shkafType = $_POST['shkaf_type'];
$shkafWidth = $_POST['shkaf_width'];
$shkafHeight = $_POST['shkaf_height'];
$shkafDepth = $_POST['shkaf_depth'];
$shkafDecor = $_POST['shkaf_decor'];

$shkafType = htmlspecialchars($shkafType);
$shkafWidth = htmlspecialchars($shkafWidth);
$shkafHeight = htmlspecialchars($shkafHeight);
$shkafDepth = htmlspecialchars($shkafDepth);
$shkafDecor = htmlspecialchars($shkafDecor);

$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);

$shkafType = urldecode($shkafType);
$shkafWidth = urldecode($shkafWidth);
$shkafHeight = urldecode($shkafHeight);
$shkafDepth = urldecode($shkafDepth);
$shkafDecor = urldecode($shkafDecor);

$fio = urldecode($fio);
$tel = urldecode($tel);


$shkafType = trim($shkafType);
$shkafWidth = trim($shkafWidth);
$shkafHeight = trim($shkafHeight);
$shkafDepth = trim($shkafDepth);
$shkafDecor = trim($shkafDecor);

$fio = trim($fio);
$tel = trim($tel);

if (mail("3597241@mail.ru", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$tel, "Тип шкафа: ".$shkafType. ". Ширина шкафа: ".$shkafWidth.  ". Высота шкафа: ".$shkafHeight. ". Глубина шкафа: ".$shkafDepth. ". Декорация шкафа: ".$shkafDecor ,"From: 3597241@mail.ru \r\n")) {
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
		background-color: #f8e7cd;
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
		color: #413738;
		font-size: 33px;
		text-align: center;
		margin-top: 50px;
		margin-bottom: 73px;
	}
	.content a {
		background-color: #fbfc00;
	    color: #413738;
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