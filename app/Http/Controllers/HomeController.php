<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Product;
use App\Models\Banner;
use Inertia\Inertia;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        $products = Product::latest()->get();
        $banners = Banner::latest()->get();


        return Inertia::render('home', [
            'posts' => $posts,
            'products' => $products,
            'banners' => $banners,
        ]);
    }
}
