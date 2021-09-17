<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BucketResource extends JsonResource
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
            'repository'  => $this->repository,
            'lists'       => $this->total_todos,
            'completed'   => $this->completed_todos,
            'todos'       => TodoResource::collection($this->todos),
        ];

        return $data;
    }
}
