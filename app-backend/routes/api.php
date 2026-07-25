<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopController;

Route::get('/shops', [ShopController::class, 'index']);
Route::get('/shops/{id}', [ShopController::class, 'show']);
