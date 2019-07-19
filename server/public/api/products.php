<?php

header('Content-Type: application/json');

require_once('db_connection.php');
require_once('functions.php');

set_exception_handler('handleError');

$query = "SELECT * FROM Products";

$result = mysqli_query($conn, $query);

if (!$result){
  throw new Exception('error with query: '.mysqli_error($conn));
}

$data = [];

while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}

print(json_encode($data));

// $output = file_get_contents('dummy-products-list.json');

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }

?>

