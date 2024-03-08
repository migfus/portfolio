<?php

namespace Database\Seeders;

use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Database\Seeder;


class ProjectSeeder extends Seeder
{
  public function run(): void {
    Project::create([
      'user_id' => env('DB_USER_MIGFUS'),
      'project_type_id' => env('DB_PROJECT_TYPE_STUDENT_PROJECT'),
      'name' => 'Talkibanny',
      'image' => 'https://talkibanny.migfus.net/Images/System/WhiteIcon.png',
      'year' => 2017,
      'project_url' => 'https://talkibanny.migfus.net/Main/home.php',
      'created_at' => Carbon::now()->subDays(2),
    ]);

    Project::create([
      'user_id' => env('DB_USER_MIGFUS'),
      'project_type_id' => env('DB_PROJECT_TYPE_PRIVATE'),
      'name' => 'CMU Journal of Science',
      'image' => 'https://js.cmu.edu.ph/images/header-icon.png',
      'year' => 2018,
      'project_url' => 'https://js.cmu.edu.ph/',
      'created_at' => Carbon::now()->subDays(1),
    ]);

    Project::create([
      'user_id' => env('DB_USER_MIGFUS'),
      'project_type_id' => env('DB_PROJECT_TYPE_PRIVATE'),
      'name' => 'FCHHIS',
      'image' => 'https://fchhis.migfus.net/images/logo.png',
      'year' => 2023,
      'project_url' => 'https://fchhis.migfus.net',
      'created_at' => Carbon::now(),
    ]);
  }
}
