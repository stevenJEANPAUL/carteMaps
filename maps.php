<?php

use Faker\Factory;

require('vendor/autoload.php');
$faker = Faker\Factory::create()
?><!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
crossorigin=""/>
    <link rel="stylesheet" href="maps.css">
</head>
<body>
    <h1 style="padding-left: 30px;">ou acheter le meilleur pain</h1>

    <div class="container">

        <div class="list">
            <?php 
            for($i = 0; $i < 20; $i++):
            ?>
            <div class="item js-marker" data-lat="<?= $faker->latitude(43.57639, 43.60639) ?>" data-lng="<?= $faker->longitude(3.96306, 3.98306) ?>" data-price="<?= $faker->numberBetween(0, 100) ?>">
        <img src="https://via.placeholder.com/330x260" alt="">
        <h4>3 croissants pour le prix de 2</h4>
        <p>
            petite description qui presente le produit
        </p>
        </div>
        <?php endfor; ?>
        </div>
        <div class="map" id="map"></div>
    </div>
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
crossorigin=""></script>
    <script src="vendor.js"></script>
    <script src="app.js"></script>
</body>
</html>