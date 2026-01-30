<?php

namespace App\Http\Controllers\Admin;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function indexPublic()
    {
        return Inertia::render('services/index', [
            'services' => Service::latest()->get(),
        ]);
    }

    public function index()
    {
        return Inertia::render('admin/services/index', [
            'services' => Service::latest()->get()
        ]);
    }

    public function showPublic(string $serviceSlug)
    {
        $service = Service::where('slug', $serviceSlug)->firstOrFail();

        return Inertia::render('services/show', [
            'service' => $service,
            'relatedServices' => Service::where('id', '!=', $service->id)
                ->latest()
                ->take(8)
                ->get(),
        ]);
    }


    public function create()
    {
        return Inertia::render('admin/services/create');
    }

    public function edit(Service $service)
    {
        return Inertia::render('admin/services/edit', [
            'service' => $service
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'features_list' => 'nullable|array',
            'plans' => 'nullable|array',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $data = $validated;
        $data['slug'] = Str::slug($request->title);

        // Upload da Imagem de Capa
        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('services/covers', 'public');
        }

        Service::create($data);

        return redirect()->route('admin.services.index')->with('message', 'Serviço criado com sucesso!');
    }

    public function update(Request $request, Service $service)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'features_list' => 'nullable|array',
            'plans' => 'nullable|array',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $data = $validated;

        // Atualiza slug apenas se o título mudar
        if ($request->title !== $service->title) {
            $data['slug'] = Str::slug($request->title);
        }

        // Atualização da Imagem de Capa
        if ($request->hasFile('cover_image')) {
            // Deleta a imagem antiga se existir física no disco
            if ($service->cover_image) {
                Storage::disk('public')->delete($service->cover_image);
            }
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('services/covers', 'public');
        }

        $service->update($data);

        return redirect()->route('admin.services.index')->with('message', 'Serviço atualizado com sucesso!');
    }

    public function destroy(Service $service)
    {
        // 1. Deletar a imagem de capa do Storage
        if ($service->cover_image) {
            Storage::disk('public')->delete($service->cover_image);
        }

        // 2. Deletar o registro no Banco
        $service->delete();

        return redirect()->back()->with('message', 'Serviço removido com sucesso!');
    }
}
