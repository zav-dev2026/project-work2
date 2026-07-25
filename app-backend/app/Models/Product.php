<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'name',
        'image_url',
        'description',
        'price'
    ];

    public function shops(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }
}
