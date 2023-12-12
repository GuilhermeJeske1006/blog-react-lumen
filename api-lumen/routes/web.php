<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use App\Http\Controllers\CategoriaController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/categoria', 'CategoriaController@index');
$router->get('/categoria/{id}', 'CategoriaController@show');
$router->post('/categoria/store', 'CategoriaController@store');
$router->put('/categoria/{id}/update', 'CategoriaController@update');
$router->delete('/categoria/{id}/destroy', 'CategoriaController@destroy');


$router->get('/blog', 'blogController@index');
$router->get('/blog/{id}', 'blogController@show');
$router->post('/blog/store', 'blogController@store');
$router->put('/blog/{id}/update', 'blogController@update');
$router->delete('/blog/{id}/destroy', 'blogController@destroy');