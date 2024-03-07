<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\Post;

class HomeController extends Controller
{
  public function index() {

    $posts = Post::query()
      ->with(['user' => function($q) {
        return $q->with(['roles' => function($qu) {
          return $qu->first();
        }]);
      }])
      ->limit(5)
      ->orderBy('created_at', 'DESC')
      ->get();

    return Inertia::render('Home', [
      'posts' => $posts,
      'time' => Carbon::now()->toDateTimeString()
    ]);

  }
}
