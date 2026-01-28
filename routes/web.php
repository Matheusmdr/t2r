<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

use App\Http\Controllers\Admin\ProductCategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ServiceController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');


Route::get('/metashape',  function () {
    return Inertia::render('metashape');
})->name('public.metashape.index');

Route::get('/sobre',  function () {
    return Inertia::render('sobre');
})->name('public.sobre.index');

Route::get('/contato',  function () {
    return Inertia::render('fale-conosco');
})->name('public.contato.index');

// Listagem e Detalhes de Produtos (Público)
Route::get('/produtos', [ProductController::class, 'indexPublic'])->name('public.products.index');
Route::get('/produtos/{slug}', [ProductController::class, 'showPublic'])->name('public.products.show');

// Listagem e Detalhes de Serviços (Público)
Route::get('/servicos', [ServiceController::class, 'indexPublic'])->name('public.services.index');
Route::get('/servicos/{slug}', [ServiceController::class, 'showPublic'])->name('public.services.show');


// --- ÁREA ADMINISTRATIVA (Restrita) ---

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('admin/dashboard');
    })->name('dashboard');

    Route::get('/products',[ ProductController::class, 'index'])->name('products.index');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/delete/{product}', [ProductController::class, 'destroy'])->name('products.destroy');

    Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
    Route::get('/services/create', [ServiceController::class, 'create'])->name('services.create');
    Route::post('/services', [ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/edit/{service}', [ServiceController::class, 'edit'])->name('services.edit');
    Route::put('/services/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/delete/{service}', [ServiceController::class, 'destroy'])->name('services.destroy');

    Route::get('/product-categories', [ProductCategoryController::class, 'index'])->name('product-categories.index');
    Route::get('/product-categories/create', [ProductCategoryController::class, 'create'])->name('product-categories.create');
    Route::post('/product-categories', [ProductCategoryController::class, 'store'])->name('product-categories.store');
    Route::get('/product-categories/edit/{productCategory}', [ProductCategoryController::class, 'edit'])->name('product-categories.edit');
    Route::put('/product-categories/{productCategory}', [ProductCategoryController::class, 'update'])->name('product-categories.update');
    Route::delete('/product-categories/delete/{productCategory}', [ProductCategoryController::class, 'destroy'])->name('product-categories.destroy');

    Route::get('/settings', [SiteSettingController::class, 'edit'])->name('settings.edit');
    Route::post('/settings', [SiteSettingController::class, 'update'])->name('settings.update');

    Route::post('/departments', [DepartmentController::class, 'store'])->name('departments.store');
    Route::put('/departments/{department}', [DepartmentController::class, 'update'])->name('departments.update');
    Route::delete('/departments/{department}', [DepartmentController::class, 'destroy'])->name('departments.destroy');
});

require __DIR__.'/settings.php';
