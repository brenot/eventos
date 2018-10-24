<?php
namespace App\Data\Models;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Auditable as AuditableTrait;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

abstract class Base extends Model implements AuditableContract
{
    use AuditableTrait;

    /**
     * @var bool
     */
    protected $revisionEnabled = true;

    /**
     * @var bool
     */
    protected $revisionCreationsEnabled = true;

    /**
     * @var array
     */
    protected $dataTypes = [];

    /**
     * @var array
     */
    protected $orderBy = [];

    /**
     * Cache keys to be flushed when a model is saved.
     *
     * @var array
     */
    protected $flushKeys = [];

    private function flushKeys()
    {
        coollect($this->flushKeys)->each(function ($key) {
            Cache::forget($key);
        });
    }

    /**
     * @param $column
     *
     * @return mixed
     */
    public static function getDataTypeOf($column)
    {
        $model = new static();

        return collect($model->dataTypes)->get($column);
    }

    /**
     * @return array
     */
    public function getOrderBy(): array
    {
        return $this->orderBy;
    }

    public function save(array $options = [])
    {
        $this->flushKeys();

        Cache::tags(['search'])->flush();

        return parent::save($options);
    }

    public function sendNotifications()
    {
        return $this;
    }

    public function logEmailWasSent()
    {
        $this->email_sent_at = now();

        $this->save();
    }

    public function sendNotificationsForClass(string $class)
    {
        if (($notifiables = $this->getNotifiables())->count() == 0) {
            return false;
        }

        $notifiables->each(function ($notifiable) use ($class) {
            $notifiable->notify(new $class($this));
        });

        return $this;
    }
}
