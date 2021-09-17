<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data = [
            'id'          => $this->id,
            'name'        => $this->name,
            'description' => $this->description,
            'done'        => $this->done,
            'lists'       => $this->total_items,
            'completed'   => $this->completed_items,
            'tasks'       => ItemResource::collection($this->items),
        ];

        return $data;
    }
}
