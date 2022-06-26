<?php



$server = "sql111.epizy.com";
$username = "epiz_32039117";
$password = "waNncALiKQ43";
$dbname = "epiz_32039117_contact_form";

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn)
{
    die("connecion failed:".mysqli_connect_error());
}



?>