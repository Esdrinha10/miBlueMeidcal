<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RegistrosEntradasSalidas;
use Illuminate\Http\Request;
use DB;

class RegistrosEntradasSalidasController extends Controller
{
    
    public function index()
    {
        $tipos = DB::select("call SP_RegistrosEntradas_List()");
        return $tipos;
       /* $tipos = TiposVehiculos::all();
        return $tipos;*/
    }

       
    public function store(Request $request)
    {
        $tipos = new RegistrosEntradasSalidas();
        $tipos->placa = $request->placa;


        $call = DB::select("call SP_RegistrosEntradas_Insert(?)", array($tipos->placa));
        return $call;
       
       /* $tipos = new TiposVehiculos();
        $tipos->descripcion = $request->descripcion;
        $tipos->tarifaMin = $request->tarifaMin;

        $tipos->save();*/

    }

    public function pagar($id)
    {

        $pagoSalida = DB::select("call SP_RegistroSalidaPago_Find(?)", array($id));
        return $pagoSalida;
    }
    
    public function show($id)
    {
        /*$call = DB::select("call SP_TiposVehiculos_Find(?)", array($id));
        return $call;
*/
        $tipos = RegistrosEntradasSalidas::find($id);
        return $tipos;
    }

   
    public function update(Request $request, $id)
    {
        

        $tipos = new RegistrosEntradasSalidas();
        $tipos->placa = $request->placa;
        $tipos->tarifaMin = $request->tarifaMin;
        $tipos->entrada = $request->entrada;


        $call = DB::select("call SP_RegistrosSalidas_Update(?,?)", array($id, $tipos->placa));
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
