<?php

namespace Database\Factories;

use App\Models\Bucket;
use Illuminate\Database\Eloquent\Factories\Factory;

class BucketFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Bucket::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'name'        => $this->faker->sentence(6),
            'description' => $this->faker->realText(20),
            'done'        => $this->faker->boolean(),
            'repository'  => $this->faker->boolean() ? null : $this->faker->url()
        ];
    }
}
