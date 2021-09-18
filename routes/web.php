<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard/{path?}', function () {
        return view('dashboard.index');
    })->where('path', '.+');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
