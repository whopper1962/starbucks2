<?php

use Illuminate\Database\Seeder;

class TweetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $number_of_data = 40;
        for ($i = 0; $i < $number_of_data; $i++) {
            $rand_num = rand(1,3);
            DB::table('tweets')->insert([
                'item_id' => $rand_num,
                'user_id' => 1,
                'texts' => "テスト$rand_num"
            ]);
        }
    }
}
