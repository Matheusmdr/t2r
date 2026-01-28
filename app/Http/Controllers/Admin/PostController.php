<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/posts/index', [
            'posts' => Post::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/posts/create');
    }

    public function edit(int $postId)
    {
        $post = Post::findOrFail($postId);

        return Inertia::render('admin/posts/edit', [
            'post' => $post,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'tags' => 'nullable|array', // Assume que o front envia um array de tags
            'is_published' => 'boolean',
        ]);

        $data = $validated;
        $data['slug'] = Str::slug($request->title);

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('posts/covers', 'public');
        }

        Post::create($data);

        return redirect()->back()->with('message', 'Post criado com sucesso!');
    }

    public function update(Request $request, int $postId)
    {
        $post = Post::findOrFail($postId);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'cover_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'tags' => 'nullable|array',
            'is_published' => 'boolean',
        ]);

        $data = $validated;

        // Atualiza slug apenas se o título mudar
        if ($request->title !== $post->title) {
            $data['slug'] = Str::slug($request->title);
        }

        // Atualização da Capa
        if ($request->hasFile('cover_image')) {
            // Deleta a imagem antiga se existir
            if ($post->cover_image) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $post->cover_image));
            }
            $data['cover_image'] = '/storage/' . $request->file('cover_image')->store('posts/covers', 'public');
        }

        $post->update($data);

        return redirect()->back()->with('message', 'Post atualizado com sucesso!');
    }

    public function destroy(int $postId)
    {
        $post = Post::findOrFail($postId);

        // 1. Deletar a capa do Storage
        if ($post->cover_image) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $post->cover_image));
        }

        // 2. Deletar o registro no Banco
        $post->delete();

        return redirect()->back()->with('message', 'Post removido com sucesso!');
    }
}
