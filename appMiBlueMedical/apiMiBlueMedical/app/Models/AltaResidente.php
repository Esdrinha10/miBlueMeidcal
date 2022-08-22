<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AltaResidente extends Model
{
    protected  $fillable = ['placa', 'id_tipo', 'tipo', 'tarifaMin'];
}
