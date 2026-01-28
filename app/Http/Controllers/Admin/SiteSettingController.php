<?php

namespace App\Http\Controllers\Admin;

use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class SiteSettingController extends Controller
{
    /**
     * Exibe o formulário com as configurações atuais.
     */
    public function index()
    {
        return Inertia::render('admin/settings/index', [
            // Retorna o primeiro registro ou um objeto vazio se não existir
            'settings' => SiteSetting::first() ?: new SiteSetting()
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'address' => 'required|string',
            'facebook_url' => 'nullable|url',
            'instagram_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'youtube_url' => 'nullable|url',
        ]);

        // Atualiza o registro ID 1 ou cria se for a primeira vez
        SiteSetting::updateOrCreate(['id' => 1], $validated);

        return redirect()->back()->with('message', 'Configurações atualizadas com sucesso!');
    }
}
