<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Project extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
      'user_id', 'name', 'image', 'project_type_id', 'year', 'project_url'
    ];

  public function user() {
    return $this->belongsTo(User::class);
  }

  public function project_type() {
    return $this->belongsTo(ProjectType::class);
  }
}
