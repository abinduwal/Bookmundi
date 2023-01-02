<?php

$xml = file_get_contents('http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml');

// Parse XML data into an object
$xml_data = simplexml_load_string($xml);

// Convert XML object to a JSON string
$json = json_encode($xml_data);
// Output the JSON string
print_r($json);
// Convert  JSON string to Object
$arr = json_decode($json);
// Output the object
echo '<br><pre>';

print_r($arr);

?>
