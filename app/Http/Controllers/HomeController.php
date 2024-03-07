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
      ->with('user')
      ->limit(5)
      ->orderBy('created_at', 'DESC')
      ->get();

    return Inertia::render('Home', [
      'posts' => $posts,
      'time' => Carbon::now()->toDateTimeString()
    ]);

  }
}
