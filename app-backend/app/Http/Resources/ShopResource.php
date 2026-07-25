<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image_url' => $this->image_url,
            'address' => $this->address,
            'phone_number' => $this->phone_number,
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}
