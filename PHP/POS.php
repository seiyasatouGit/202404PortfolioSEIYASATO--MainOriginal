<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pos_db";

// データベース接続を確立
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続チェック
if ($conn->connect_error) {
    die("接続に失敗しました: " . $conn->connect_error);
}
?>
