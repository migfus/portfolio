<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;

class PostSeeder extends Seeder
{
  public function run(): void {
    Post::create([
      'user_id' => User::where('email', 'migfus20@gmail.com')->first()->id,
      'content' => json_encode([
        'type' => 'text',
        'content' => 'My first web portfolio 😎',
      ])
    ]);

    Post::create([
      'user_id' => User::where('email', 'migfus20@gmail.com')->first()->id,
      'content' => json_encode([
        'type' => 'embed',
        'content' => 'Cinematic Video of Central Mindanao University',
        'attached' => '<iframe src="https://www.youtube.com/embed/Wv0TYJBRSP0?si=dcL9DEJPjlSoseX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      ])
    ]);
  }
}
