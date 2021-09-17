<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'done',
        'bucket_id',
    ];

    public function bucket()
    {
        return $this->belongsTo(Bucket::class);
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function getTotalItemsAttribute()
    {
        return $this->hasMany(Item::class)->count();
    }

    public function getCompletedItemsAttribute()
    {
        return $this->hasMany(Item::class)->where('done', true)->count();
    }
}
