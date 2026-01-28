<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductCategory extends Model
{
    protected $fillable = ['title', 'slug', 'description', 'is_active'];

    // Relacionamento: Uma categoria tem muitos produtos
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
