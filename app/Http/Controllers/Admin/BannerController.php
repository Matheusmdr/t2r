<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/banners/index', [
            'banners' => Banner::orderBy('order', 'asc')->latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/banners/create');
    }

    public function edit(int $bannerId)
    {
        $banner = Banner::findOrFail($bannerId);

        return Inertia::render('admin/banners/edit', [
            'banner' => $banner,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image_path' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
            'image_path_mobile' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'link_url' => 'nullable|url',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $data = $validated;

        // Upload Desktop Image
        if ($request->hasFile('image_path')) {
            $data['image_path'] = '/storage/' . $request->file('image_path')->store('banners', 'public');
        }

        // Upload Mobile Image
        if ($request->hasFile('image_path_mobile')) {
            $data['image_path_mobile'] = '/storage/' . $request->file('image_path_mobile')->store('banners', 'public');
        }

        Banner::create($data);

        return redirect()->back()->with('message', 'Banner criado com sucesso!');
    }

    public function update(Request $request, int $bannerId)
    {
        $banner = Banner::findOrFail($bannerId);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image_path' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'image_path_mobile' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'link_url' => 'nullable|url',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $data = $validated;

        // Atualização da Imagem Desktop
        if ($request->hasFile('image_path')) {
            if ($banner->image_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $banner->image_path));
            }
            $data['image_path'] = '/storage/' . $request->file('image_path')->store('banners', 'public');
        }

        // Atualização da Imagem Mobile
        if ($request->hasFile('image_path_mobile')) {
            if ($banner->image_path_mobile) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $banner->image_path_mobile));
            }
            $data['image_path_mobile'] = '/storage/' . $request->file('image_path_mobile')->store('banners', 'public');
        }

        $banner->update($data);

        return redirect()->back()->with('message', 'Banner atualizado com sucesso!');
    }

    public function destroy(int $bannerId)
    {
        $banner = Banner::findOrFail($bannerId);

        // 1. Deletar imagem desktop
        if ($banner->image_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $banner->image_path));
        }

        // 2. Deletar imagem mobile
        if ($banner->image_path_mobile) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $banner->image_path_mobile));
        }

        // 3. Deletar registro
        $banner->delete();

        return redirect()->back()->with('message', 'Banner removido com sucesso!');
    }
}
