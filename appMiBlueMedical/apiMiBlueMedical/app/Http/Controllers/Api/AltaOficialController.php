<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AltaOficial;
use Illuminate\Http\Request;
use DB;

class AltaOficialController extends Controller
{
    
    public function index()
    {
        $tipos = DB::select("call SP_AltaVehiculo_List()");
        return $tipos;
       /* $tipos = TiposVehiculos::all();
        return $tipos;*/
    }

       
    public function store(Request $request)
    {
        $tipos = new AltaOficial();
        $tipos->descripcion = $request->descripcion;
        $tipos->tarifaMin = $request->tarifaMin;


        $call = DB::select("call SP_TiposVehiculos_Insert(?,?)", array($tipos->descripcion,$tipos->tarifaMin));
        return $call;
       
       /* $tipos = new TiposVehiculos();
        $tipos->descripcion = $request->descripcion;
        $tipos->tarifaMin = $request->tarifaMin;

        $tipos->save();*/

    }

    
    public function show($id)
    {
        /*$call = DB::select("call SP_TiposVehiculos_Find(?)", array($id));
        return $call;
*/
        $tipos = AltaOficial::find($id);
        return $tipos;
    }

   
    public function update(Request $request, $id)
    {
        

        $tipos = new AltaOficial();
        $tipos->placa = $request->placa;

        $call = DB::select("call SP_AltaVehiculo_Oficial(?)", array($id));
        return $tipos;

       /* $tipos->save();
        return $tipos;*/
    }

   
    public function destroy($id)
    {
        $tipos = AltaOficial::destroy($id);
        return $tipos;
    }

    
}
