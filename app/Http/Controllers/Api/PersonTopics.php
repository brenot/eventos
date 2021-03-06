<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\PersonTopics as PersonTopicsRepository;
use App\Http\Requests\PersonTopicStore as PersonTopicStoreRequest;
use App\Http\Requests\PersonTopicUpdate as PersonTopicUpdateRequest;
use Illuminate\Http\Request;

class PersonTopics extends Controller
{
    /**
     * Get all data for a person
     *
     * @return array
     */
    public function allByPerson(Request $request, $personId)
    {
        return app(PersonTopicsRepository::class)->allByPerson($personId);
    }

    /**
     * Get all data for Topic
     *
     * @return array
     */
    public function allByTopic(Request $request, $topicId)
    {
        return app(PersonTopicsRepository::class)->allByTopic($topicId);
    }

    /**
     * Store
     *
     * @param PersonTopicStoreRequest $request
     * @return mixed
     */
    public function store(PersonTopicStoreRequest $request)
    {
        return app(PersonTopicsRepository::class)->storeFromArray(
            $request->all()
        );
    }

    /**
     * @param PersonTopicUpdateRequest $request
     * @param $id
     * @return mixed
     */
    public function update($personId, $id, PersonTopicUpdateRequest $request)
    {
        return app(PersonTopicsRepository::class)->update($id, $request->all());
    }

    public function topicsables($personId)
    {
        return app(PersonTopicsRepository::class)->topicsables($personId);
    }

    /**
     * @param Request $request
     * @param $personId
     * @return mixed
     */
    public function topicize($personId, Request $request)
    {
        //dd($request->get('topics'));
        return app(PersonTopicsRepository::class)->topicize(
            $personId,
            $request->get('topics')
        );
    }

    /**
     * @param $personId
     * @param $id
     * @return mixed
     */
    public function unTopicize($personId, $id)
    {
        return app(PersonTopicsRepository::class)->unTopicize($personId, $id);
    }
}
