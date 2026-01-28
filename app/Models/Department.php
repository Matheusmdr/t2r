<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Department extends Model
{
    protected $fillable = ['name', 'phone', 'whatsapp', 'email', 'sort_order'];


    protected static function booted()
    {
        static::saved(fn () => Cache::forget('site_footer_data'));
        static::deleted(fn () => Cache::forget('site_footer_data'));
    }
}
