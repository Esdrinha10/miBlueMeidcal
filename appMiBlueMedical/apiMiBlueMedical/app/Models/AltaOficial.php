<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AltaOficial extends Model
{
    use HasFactory;
    protected  $fillable = ['placa', 'id_tipo', 'tipo', 'tarifaMin'];
}
