<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    protected $fillable = [
        'address', 'facebook_url', 'instagram_url',
        'linkedin_url', 'youtube_url'
    ];

    protected static function booted()
    {
        static::saved(fn () => Cache::forget('site_footer_data'));
        static::deleted(fn () => Cache::forget('site_footer_data'));
    }
}
