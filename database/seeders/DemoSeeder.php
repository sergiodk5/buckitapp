<?php

namespace Database\Seeders;

use App\Models\Bucket;
use App\Models\Item;
use App\Models\Todo;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        $user = User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
        ]);
        $user->buckets()->saveMany(Bucket::factory()->count($faker->numberBetween(1, 3))->create(['user_id' => $user->id])->each(function ($b) use ($faker) {
            $b->todos()->saveMany(Todo::factory()->count($faker->numberBetween(1, 9))->create(['bucket_id' => $b->id])->each(function ($t) use ($faker) {
                $t->items()->saveMany(Item::factory()->count($faker->numberBetween(1, 10))->make());
            }));
        }));
    }
}
