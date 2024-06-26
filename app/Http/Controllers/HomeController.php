<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;

use App\Events\TestUpdate;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Project;

class HomeController extends Controller
{
  public function index() {
    $projects = Project::query()
      ->with(['user', 'project_type'])
      ->orderBy('created_at', 'DESC')
      ->limit(4)
      ->get();

    $posts = Post::query()
      ->with(['user' => function($q) {
        return $q->with(['roles' => function($qu) {
          return $qu->pluck('name');
        }]);
      }])
      ->orderBy('created_at', 'DESC')
      ->limit(5)
      ->get();

    return Inertia::render('Home/Index', [
      'posts' => $posts,
      'projects' => $projects,
    ]);
  }


  public function post() {
    TestUpdate::dispatch();

    to_route('Home');
  }
}
