<?php

namespace Database\Seeders;

use App\Models\ProjectType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectTypeSeeder extends Seeder
{
  public function run(): void {
    ProjectType::create([
      'id' => env('DB_PROJECT_TYPE_PRIVATE'),
      'user_id' => env('DB_USER_MIGFUS'),
      'name' => 'Private'
    ]);

    ProjectType::create([
      'id' => env('DB_PROJECT_TYPE_STUDENT_PROJECT'),
      'user_id' => env('DB_USER_MIGFUS'),
      'name' => 'Student Project'
    ]);
  }
}
