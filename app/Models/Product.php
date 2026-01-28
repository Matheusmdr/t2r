<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'product_category_id', 'title', 'slug', 'sku',
        'short_description', 'description', 'cover_image',
        'gallery_images', 'tags', 'tech_specs', 'is_active'
    ];

    // Converte JSON do banco para Array/Objeto no React
    protected $casts = [
        'gallery_images' => 'array',
        'tags' => 'array',
        'tech_specs' => 'array',
        'is_active' => 'boolean',
    ];

    // Relacionamento: O produto pertence a uma categoria
    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }
}
