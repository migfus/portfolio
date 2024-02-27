<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
      'time' => Carbon::now()->toDateTimeString()
    ]);
});
Route::get('/settings', function () {
  return Inertia::render('Settings');
});
Route::get('/users', function () {
  return Inertia::render('Users');
});

Route::post('/logout', function () {
  dd('log out');
});
