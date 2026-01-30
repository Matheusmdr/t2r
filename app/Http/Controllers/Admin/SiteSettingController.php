<?php

namespace App\Http\Controllers\Admin;

use App\Models\SiteSetting;
use App\Models\Department; // Adicione esta importação
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class SiteSettingController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/settings/index', [
            // Garante que settings seja um objeto vazio se não existir
            'settings' => SiteSetting::first() ?: new SiteSetting(),
            // [CORREÇÃO] Envia os departamentos para a mesma tela
            'departments' => Department::orderBy('sort_order', 'asc')->get()
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'address' => 'nullable|string|max:500',
            'facebook_url' => 'nullable|url',
            'instagram_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'youtube_url' => 'nullable|url',
        ]);

        SiteSetting::updateOrCreate(['id' => 1], $validated);

        return redirect()->back()->with('message', 'Configurações atualizadas com sucesso!');
    }
}
