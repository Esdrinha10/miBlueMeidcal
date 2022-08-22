<?php
use App\Http\Controllers\Api\TiposVehiculosController;
use App\Http\Controllers\Api\AltaOficialController;
use App\Http\Controllers\Api\RegistrosEntradasSalidasController;
use App\Http\Controllers\Api\AltaResidenteController;
use App\Http\Controllers\Api\ComienzaMesController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*Route::get('/tiposVehiculos', 'app/Http/Controllers/AltaOficialController@index');*/
Route::controller(RegistrosEntradasSalidasController::class)->group(function(){
    Route::get('/registrosEntradas', 'index');
    Route::post('/registroEntrada', 'store');
    Route::get('/registroEntrada/{id}', 'show');
    Route::put('/registroEntrada/{id}', 'update');
    Route::delete('/registroEntrada/{id}', 'destroy');
    Route::get('/pagoNoResidente/{id}', 'pagar');
});

Route::controller(TiposVehiculosController::class)->group(function(){
    Route::get('/tiposVehiculos', 'index');
    Route::post('/tipoVehiculo', 'store');
    Route::get('/tipoVehiculo/{id}', 'show');
    Route::put('/tipoVehiculo/{id}', 'update');
    Route::delete('/tipoVehiculo/{id}', 'destroy');
});


Route::controller(AltaOficialController::class)->group(function(){
   Route::get('/AltaOficial', 'index');
   Route::put('/AltaOficial/{id}', 'update');
    
});


Route::controller(AltaResidenteController::class)->group(function(){
    Route::get('/altaResidente', 'index');
    Route::put('/altaResidente/{id}', 'update');
     
 });
 
 Route::controller(ComienzaMesController::class)->group(function(){
    Route::put('/comienzaMes', 'index');
     
 });
 
