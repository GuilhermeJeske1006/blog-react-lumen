<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'titulo',
        'img_capa',
        'subtitulo',
        'descricao',
        'categoria_id'
    ];

    public function categoria()
    {
        return $this->hasMany(Categoria::class);
    }
}
