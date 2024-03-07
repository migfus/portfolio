<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RolePermissionSeeder extends Seeder
{
  public function run(): void {

    // NOTE DASHBOARD
    Permission::create(['name' => 'index dashboard']);

    // NOTE REGISTER
    Permission::create(['name' => 'index register']);
    Permission::create(['name' => 'feedback register']);

    // NOTE DEVICE
    Permission::create(['name' => 'index device']);
    Permission::create(['name' => 'store device']);

    // NOTE PROFILE
    Permission::create(['name' => 'index profile']);
    Permission::create(['name' => 'update profile']);

    $role = Role::create(['name' => 'admin']);
    $role->givePermissionTo([
      'index device',   'store device',
      'index register', 'feedback register',
      'index dashboard',
      'index profile',  'update profile'
    ]);

  }
}
