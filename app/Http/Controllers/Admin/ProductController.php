<?php

namespace App\Http\Controllers\Admin;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;


class ProductController extends Controller
{

    public function indexPublic()
    {
        return Inertia::render('products/index', [
            'products' => Product::with('category')->latest()->get(),
        ]);
    }

    public function showPublic(string $productSlug)
    {

        $product = Product::where('slug', $productSlug)->firstOrFail();
        $relatedProducts = Product::where('id', '!=', $product->id)
                        ->latest()
                        ->take(8)
                        ->get();
        return Inertia::render('products/show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }

    public function index()
    {
        return Inertia::render('admin/products/index', [
            'products' => Product::with('category')->latest()->get(),
            'categories' => ProductCategory::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/products/create', [
            'categories' => ProductCategory::all()
        ]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('admin/products/edit', [
            'product' => $product,
            'categories' => ProductCategory::all()
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'product_category_id' => 'required|exists:product_categories,id',
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $data = $validated;
        $data['slug'] = Str::slug($request->title);

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('products/covers', 'public');
        }

        if ($request->hasFile('gallery_images')) {
            $galleryPaths = [];
            foreach ($request->file('gallery_images') as $image) {
                $galleryPaths[] = '/storage/' . $image->store('products/gallery', 'public');
            }
            $data['gallery_images'] = $galleryPaths;
        }

        Product::create($data);

        return redirect()->back()->with('message', 'Produto criado com sucesso!');
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'product_category_id' => 'required|exists:product_categories,id',
            'description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $data = $validated;

        // Atualiza slug apenas se o título mudar
        if ($request->title !== $product->title) {
            $data['slug'] = Str::slug($request->title);
        }

        // Atualização da Capa
        if ($request->hasFile('cover_image')) {
            // Deleta a imagem antiga se existir
            if ($product->cover_image) {
                Storage::disk('public')->delete($product->cover_image);
            }
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('products/covers', 'public');
        }



        if ($request->gallery_images) {

            if (isset($product) && $product->gallery_images) {
                foreach ($product->gallery_images as $oldPath) {
                    Storage::disk('public')->delete(str_replace('/storage/', '', $oldPath));
                }
            }

            $galleryPaths = [];

            $files = $request->file('gallery_images');



            foreach ($files as $image) {


                if ($image->isValid()) {

                    $path = $image->store('products/gallery', 'public');
                    $galleryPaths[] = '/storage/' . $path;
                }
            }

            $data['gallery_images'] = $galleryPaths;
        }

        $product->update($data);

        return redirect()->back()->with('message', 'Produto atualizado com sucesso!');
    }

    public function destroy(Product $product)
    {
        // 1. Deletar a capa do Storage
        if ($product->cover_image) {
            Storage::disk('public')->delete($product->cover_image);
        }

        // 2. Deletar as imagens da galeria do Storage
        if ($product->gallery_images) {
            foreach ($product->gallery_images as $path) {
                Storage::disk('public')->delete($path);
            }
        }

        // 3. Deletar o registro no Banco
        $product->delete();

        return redirect()->back()->with('message', 'Produto removido com sucesso!');
    }
}
