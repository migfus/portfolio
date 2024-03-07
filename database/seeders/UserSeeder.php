<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
  public function run(): void {
    User::create([
      'name' => 'Schwarzenegger R. Belonio',
      'email' => 'migfus20@gmail.com',
      'avatar' => '/images/avatar.jpg',
      'password' => bcrypt('@Onodera.09109123')
    ]);
  }
}
