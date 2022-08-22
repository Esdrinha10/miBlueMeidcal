<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrosEntradasSalidas extends Model
{
    use HasFactory;
    protected  $fillable = ['placa', 'tipo', 'tarifaMin', 'entrada'];
}
