<html>
<title>Submit Success</title>
<link id="theme" rel="stylesheet" type = "text/css" href = "../css/styles.css"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<body>
<?php
$song = $_POST["sname"];
$link = $_POST["link"];

$filepath = "../output/songs.txt";
$songs = [];

if (file_exists($filepath)) {
    $contents = file_get_contents($filepath);
    $songs = json_decode($contents,true);
}

$songs[] = [
    "name" => $song,
    "link" => $link
];

file_put_contents($filepath,json_encode($songs, JSON_PRETTY_PRINT));
?>
<h1> Successfully submitted! </h2>
<h2> <a href='../index.html'>Back to main page</a></h2>

</body>
</html>

