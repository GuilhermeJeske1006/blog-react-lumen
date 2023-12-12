<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        return response()->json(['blog' => Blog::all()], 200);
    }

    public function store()
    {
        try {
            $blog                 = new Blog();
            $blog->titulo         = request()->titulo;
            $blog->img_capa       = request()->img_capa;
            $blog->subtitulo      = request()->subtitulo;
            $blog->descricao      = request()->descricao;
            $blog->categoria_id   = request()->categoria_id;
            $blog->save();
            
        return response()->json([
            'mensagem' => 'blog cadastrado com sucesso',
            'data' => $blog
            ], 201);

        } catch (\Exception $e) {
            Log::error($e);
    
            return response()->json(['success' => false, 'message' => 'Internal Server Error'], 500);
        }
    }

    public function show(int $id)
    {
        $blog = Blog::find($id);

        return response()->json([
            'blog' => $blog
        ], 200);
    }

    public function update(int $id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return response()->json([
                'mensagem' => 'blog não encontrado',
            ], 404);
        }

        $blog->titulo         = request()->titulo;
        $blog->img_capa       = request()->img_capa;
        $blog->subtitulo      = request()->subtitulo;
        $blog->descricao      = request()->descricao;
        $blog->categoria_id   = request()->categoria_id;
        $blog->save();

        return response()->json([
            'mensagem' => 'blog editado com sucesso',
            'data' => $blog
        ], 200);
    }


    public function destroy(int $id)
    {
        $blog = blog::find($id);
        $blog->delete();

        return response()->json([
            'blog deletado com sucesso'
        ], 200);
    }


}
