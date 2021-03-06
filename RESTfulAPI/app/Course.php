<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model {

    protected $table = 'courses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];


    public function teacher()
    {
<<<<<<< HEAD
        return $this->belongsToMany('App\Teacher','disponibilities','teacher_1_id','course_1_id');
=======
        return $this->belongsToMany('App\User','disponibilities','teacher_1_id','course_1_id');
>>>>>>> refs/remotes/scabezas632/master
    }

    public function classrooms()
    {
        return $this->belongsToMany('App\Classroom','schedules','course_2_id','class_id')
            ->withPivot('dia', 'bloque');
    }


}
