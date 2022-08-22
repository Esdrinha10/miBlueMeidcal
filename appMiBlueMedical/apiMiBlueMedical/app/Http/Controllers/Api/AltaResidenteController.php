<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AltaResidente;
use Illuminate\Http\Request;
use DB;

class AltaResidenteController extends Controller
{
    
    public function index()
    {
        $tipos = DB::select("call SP_AltaVehiculo_ResidenteList()");
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
        $tipos = AltaResidente::find($id);
        return $tipos;
    }

   
    public function update(Request $request, $id)
    {
        

        $tipos = new AltaResidente();
        $tipos->placa = $request->placa;

        $call = DB::select("call SP_AltaVehiculo_Residente(?)", array($id));
        return $tipos;

       /* $tipos->save();
        return $tipos;*/
    }

   
    public function destroy($id)
    {
        $tipos = AltaResidente::destroy($id);
        return $tipos;
    }

    
}
