<?php

namespace App\Http\Controllers;

use App\Models\Categoria;

class CategoriaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        return response()->json([
            'categoria' => Categoria::with('blogs')->get()
        ], 200);
    }

    public function store()
    {
        $categoria                 = new Categoria();
        $categoria->nome_categoria = request()->nome_categoria;
        $categoria->save();
        
        return response()->json([
           'mensagem' => 'Categoria cadastrada com sucesso',
           'data' => $categoria
        ], 201);
    }

    public function show(int $id)
    {
        $categoria = Categoria::with('blogs')->findOrFail($id);

        return response()->json([
            'categoria' => $categoria
        ], 200);
    }

    public function update(int $id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json([
                'mensagem' => 'Categoria não encontrada',
            ], 404);
        }

        $categoria->nome_categoria = request()->nome_categoria;
        $categoria->save();

        return response()->json([
            'mensagem' => 'Categoria editada com sucesso',
            'data' => $categoria
        ], 200);
    }


    public function destroy(int $id)
    {
        $categoria = Categoria::find($id);
        $categoria->deleteOrFail();

        return response()->json([
            'Categoria deletada com sucesso'
        ], 200);
    }
}
