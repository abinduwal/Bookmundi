<?php

// The array of IDs and prices
$items = array(
  array('id' => 1, 'price' => 100),
  array('id' => 2, 'price' => 220),
  array('id' => 3, 'price' => 330),
  array('id' => 4, 'price' => 470),
  array('id' => 5, 'price' => 505)
);
echo '<pre>';
echo 'The Array of IDs and Prices:<br>';

print_r($items);
echo '<hr>';
function filterItems($items, $threshold) {
  
  $filtered = array();

  // Loop through the items and add the ones with price greater than the threshold to the filtered array and display the filtered Items
  echo 'The list of filtered Items : <br>';
  foreach ($items as $item) {
    if ($item['price'] > $threshold) {
      $filtered[] = $item;
      echo 'Id:'. $item['id']; 
      echo '&nbsp; &nbsp; &nbsp;';
      echo 'Price:'. $item['price'];
      echo '<br>'; 
    }

  }
  echo '<hr>';
  return $filtered;
}

function totalPrice($items) {
 
  $total = 0;
  foreach ($items as $item) {
    $total += $item['price'];
  }

  return $total;
}

$filtered = filterItems($items, 335);

$total = totalPrice($filtered);

echo 'Total filtered Price = '. $total ;


?>
