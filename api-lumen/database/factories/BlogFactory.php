<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titulo' => $this->faker->name,
            'img_capa' => $this->faker->imageUrl(),
            'subtitulo' => $this->faker->name,
            'descricao' => $this->faker->text(),
            'categoria_id' => $this->faker->numberBetween(6, 25),
        ];
    }
}
