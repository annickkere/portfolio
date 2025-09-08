<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

// Sanctum SPA auth endpoints should be on web middleware
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!auth()->attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 422);
    }

    $request->session()->regenerate();
    return response()->json(['message' => 'Logged in']);
});

Route::post('/logout', function (Request $request) {
    auth()->guard('web')->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return response()->json(['message' => 'Logged out']);
});

// Debug route: inspect cookies and CSRF header reception
Route::get('/debug/cookies', function (Request $request) {
    return response()->json([
        'cookies' => $request->cookies->all(),
        'has_session' => $request->hasSession(),
        'session_id' => $request->session()->getId(),
        'csrf_token' => csrf_token(),
    ]);
});
