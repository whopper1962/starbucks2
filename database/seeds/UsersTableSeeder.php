<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
// use DateTime;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('uesrs')->insert([
            'name' => 'Whopper',
            'email' => 'whopper@gmail.com',
            'password' => 'Marvel1962',
        ]);
    }
}
