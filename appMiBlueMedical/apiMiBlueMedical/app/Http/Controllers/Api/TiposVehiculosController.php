<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TiposVehiculos;
use Illuminate\Http\Request;
use DB;

class TiposVehiculosController extends Controller
{
    
    public function index()
    {
        $tipos = DB::select("call SP_TiposVehiculos_List()");
        return $tipos;
       /* $tipos = TiposVehiculos::all();
        return $tipos;*/
    }

       
    public function store(Request $request)
    {
        $tipos = new TiposVehiculos();
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
        $tipos = TiposVehiculos::find($id);
        return $tipos;
    }

   
    public function update(Request $request, $id)
    {
        

        $tipos = new TiposVehiculos();
        $tipos->descripcion = $request->descripcion;
        $tipos->tarifaMin = $request->tarifaMin;

        $call = DB::select("call SP_TiposVehiculos_Update(?,?,?)", array($id, $tipos->descripcion,$tipos->tarifaMin));
        return $tipos;

       /* $tipos->save();
        return $tipos;*/
    }

   
    public function destroy($id)
    {
        $tipos = TiposVehiculos::destroy($id);
        return $tipos;
    }

    
}
