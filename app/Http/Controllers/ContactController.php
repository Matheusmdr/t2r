<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validação do hCaptcha
        $response = Http::asForm()->post('https://hcaptcha.com/siteverify', [
            'secret' => config('services.hcaptcha.secret'),
            'response' => $request->input('h-captcha-response'),
        ]);

        if (!$response->json('success')) {
            return back()->withErrors(['captcha' => 'Falha na verificação do captcha.']);
        }

        // 2. Validação dos Dados
        $data = $request->validate([
            'nome' => 'required|string|max:255',
            'sobrenome' => 'required|string|max:255',
            'email' => 'required|email',
            'celular' => 'nullable|string',
            'assunto' => 'required|string',
            'mensagem' => 'required|string',
        ]);

        // 3. Lógica de envio (Exemplo de log ou Email)
        // Mail::to('seu-email@dominio.com')->send(new ContactMail($data));

        return back()->with('success', 'Mensagem enviada com sucesso!');
    }
}
