<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('Home');
Route::post('/post', [HomeController::class, 'post'])->name('Post');
