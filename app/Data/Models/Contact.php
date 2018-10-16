<?php
namespace App\Data\Models;

class Contact extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'contact_type_id',
        'contact',
        'contactable_id',
        'contactable_type',
    ];

    public function contactable()
    {
        return $this->morphTo();
    }

    public function contactsType()
    {
        return $this->belongsTo(ContactsType::class);
    }
}
