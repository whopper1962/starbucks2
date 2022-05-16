<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Item;
use App\Tweet;

class ItemController extends Controller
{
    public function index (Item $item) {
        $client = new \GuzzleHttp\Client();
        $url = 'https://product.starbucks.co.jp/api/category-product-list/beverage/index.json';
        $response = $client->request(
            'GET',
            $url
        );
        $items_from_external_api = json_decode((string)$response->getBody());
        foreach ($items_from_external_api as $item_from_external_api) {
            $same_data_in_items_table = $item->where('product_code', '=', $item_from_external_api->product_code)->first();
            if (!$same_data_in_items_table) {
                $item->create([
                    'product_code' => $item_from_external_api->product_code,
                    'product_name' => $item_from_external_api->product_name,
                    'item_img' => $item_from_external_api->image1,
                    'product_note' => $item_from_external_api->product_note,
                    'catchcopy' => $item_from_external_api->catchcopy
                ]);
            }
        }
        return $item->get();
    }

    public function getDetails ($item_id, Tweet $tweet, Item $item) {
        $response = $item->find($item_id);
        $response->related_tweets = $tweet->where('item_id', '=', $item_id)->get();
        return $response;
    }
}
