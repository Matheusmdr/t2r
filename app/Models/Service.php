<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title', 'slug', 'short_description',
        'content', 'features_list', 'plans',
        'cover_image', 'is_active'
    ];

    protected $casts = [
        'features_list' => 'array',
        'plans' => 'array',
        'is_active' => 'boolean',
    ];
}
