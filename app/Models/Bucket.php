<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bucket extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'done',
        'repository',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function todos()
    {
        return $this->hasMany(Todo::class);
    }

    public function getTotalTodosAttribute()
    {
        return $this->hasMany(Todo::class)->count();
    }

    public function getCompletedTodosAttribute()
    {
        return $this->hasMany(Todo::class)->where('done', true)->count();
    }

    public function items()
    {
        return $this->hasManyThrough(Item::class, Todo::class);
    }
}
