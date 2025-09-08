<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\\Http\\Controllers\\API'], function () {
    //------------Register and Login----------------//
    Route::post('register', 'AuthenticationController@register')->name('register');
    // Token login (not used by SPA Sanctum cookie flow, but kept if needed)
    Route::post('login', 'AuthenticationController@login')->name('login');

    //--------------------Protected API (token)-----------------//
    Route::middleware('auth:sanctum')->group(function () { 
        Route::get('get-user', 'AuthenticationController@userInfo')->name('get-user');
        Route::post('logout', 'AuthenticationController@logOut')->name('logout');
    });
});

// Standard endpoint for SPA to fetch current user via Sanctum cookie session
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
