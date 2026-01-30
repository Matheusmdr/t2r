<?php

namespace App\Http\Controllers\Admin;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ProductCategoryController extends Controller
{
    /**
     * Exibe a listagem das categorias.
     */
    public function index()
    {
        $categories = ProductCategory::latest()->get();

        return Inertia::render('admin/product-categories/index', [
            'categories' => $categories
        ]);
    }

    /**
     * Mostra o formulário de criação.
     */
    public function create()
    {
        return Inertia::render('admin/product-categories/create');
    }

    /**
     * Salva uma nova categoria no banco.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_active'   => 'boolean',
        ]);

        // Gerando o slug automaticamente a partir do título
        $validated['slug'] = Str::slug($request->title);

        ProductCategory::create($validated);

        return redirect()->route('admin.product-categories.index')
            ->with('success', 'Categoria criada com sucesso!');
    }

    // /**
    //  * Exibe uma categoria específica (opcional).
    //  */
    // public function show(ProductCategory $productCategory)
    // {


    //     return Inertia::render('admin/product-categories/edit', [
    //         'category' => $productCategory
    //     ]);
    // }

    /**
     * Mostra o formulário de edição.
     */
    public function edit(ProductCategory $productCategory)
    {
        return Inertia::render('admin/product-categories/edit', [
            'category' => $productCategory
        ]);

    }

    /**
     * Atualiza a categoria no banco.
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_active'   => 'boolean',
        ]);

        if ($request->title !== $productCategory->title) {
            $validated['slug'] = Str::slug($request->title);
        }

        $productCategory->update($validated);

        return redirect()->route('admin.product-categories.index')
            ->with('success', 'Categoria atualizada com sucesso!');
    }

    /**
     * Remove a categoria do banco.
     */
    public function destroy(ProductCategory $productCategory)
    {
        $productCategory->delete();

        return redirect()->route('admin.product-categories.index')
            ->with('success', 'Categoria excluída com sucesso!');
    }
}
