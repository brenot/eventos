<?php

namespace App\Data\Repositories;

use DB;
use App\Data\Models\Event;

class Events extends Repository
{
    /**
     * @var string
     */
    protected $model = Event::class;

    /**
     *
     * Return all subEvents to happen in 7 days
     *
     * @return array
     */
    public function allHasSubEventsAboutToHappen()
    {
        return $this->applyFilter(
            $this->newQuery()->hasSubEventsAboutToHappen()
        );
    }

    /**
     *
     * Return all events that have subEvents not finalized.
     *
     * @return array
     */
    public function allHasSubEventsNotFinalized()
    {
        return $this->applyFilter(
            $this->newQuery()->hasSubEventsNotFinalized()
        );
    }

    function selectCurrentClientForEvent($eventId)
    {
        $event = DB::table('events')
            ->where('id', $eventId)
            ->first();

        set_current_client_id($event->client_id);
    }

    public function sendInvitations($eventId)
    {
        $this->selectCurrentClientForEvent($eventId);

        $this->findById($eventId)
            ->subEvents()
            ->confirmed()
            ->get()
            ->each(function ($subEvent) {
                $subEvent
                    ->invitations()
                    ->notSent()
                    ->get()
                    ->each(function ($invitation) {
                        $invitation->sendInvitation();
                    });
            });
    }

    public function sendCredentials($eventId)
    {
        $this->selectCurrentClientForEvent($eventId);

        $this->findById($eventId)
            ->subEvents()
            ->confirmed()
            ->get()
            ->each(function ($subEvent) {
                $subEvent
                    ->invitations()
                    ->credentialsNotSent()
                    ->get()
                    ->each(function ($invitation) {
                        $invitation->sendCredentials();
                    });
            });
    }
}
