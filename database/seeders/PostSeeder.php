<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;

class PostSeeder extends Seeder
{
  public function run(): void {
    Post::create([
      'user_id' => User::where('email', 'migfus20@gmail.com')->first()->id,
      'content' => json_encode([
        'type' => 'text',
        'content' => 'My first web portfolio 😎',
      ]),
      'created_at' => Carbon::now()->subDay(1),
    ]);

    Post::create([
      'user_id' => User::where('email', 'migfus20@gmail.com')->first()->id,
      'content' => json_encode([
        'type' => 'embed',
        'content' => 'Cinematic Video of Central Mindanao University',
        'attached' => '<iframe src="https://www.youtube.com/embed/Wv0TYJBRSP0?si=dcL9DEJPjlSoseX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      ]),
      'created_at' => Carbon::now(),
    ]);
  }
}
