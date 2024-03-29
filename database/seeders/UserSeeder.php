<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
  public function run(): void {
    User::create([
      'id' => env('DB_USER_MIGFUS'),
      'name' => 'Schwarzenegger R. Belonio',
      'email' => 'migfus20@gmail.com',
      'avatar' => '/images/avatar.jpg',
      'password' => bcrypt('@Onodera.09109123')
    ])->assignRole('admin');
  }
}
