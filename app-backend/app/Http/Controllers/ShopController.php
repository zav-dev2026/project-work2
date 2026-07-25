<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Http\Resources\ShopResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ShopController extends Controller
{
    /** GetAllShops */
    public function index(): AnonymousResourceCollection
    {
        $shops = Shop::all();

        return ShopResource::collection($shops);
    }

    /** GetShopByIdWithProducts */
    public function show(int $id): ShopResource
    {
        $shop = Shop::with('products')->findOrFail($id);

        return new ShopResource($shop);
    }
}
