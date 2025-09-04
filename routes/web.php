<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('r', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

});

Route::prefix('employee')->name('employee.')->group(function () {
    Route::get('/overview', fn () => Inertia::render('employee/overview'))->name('overview');
    Route::get('/education', fn () => Inertia::render('employee/education'))->name('education');
    Route::get('/experience', fn () => Inertia::render('employee/experience'))->name('experience');
    Route::get('/bank', fn () => Inertia::render('employee/bank'))->name('bank');
    Route::get('/training', fn () => Inertia::render('employee/training'))->name('training');
    Route::get('/timeline', fn () => Inertia::render('employee/timeline'))->name('timeline');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
