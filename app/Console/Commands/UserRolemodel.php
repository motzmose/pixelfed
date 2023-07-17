<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class UserRolemodel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:rolemodel {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');
        if(ctype_digit($id) == true) {
            $user = User::find($id);
        } else {
            $user = User::whereUsername($id)->first();
        }
        if(!$user) {
            $this->error('Could not find any user with that username or id.');
            exit;
        }
        $this->info('Found username: ' . $user->username);
        $state = $user->is_rolemodel ? 'Remove rolemodel privileges from this user?' : 'Add rolemodel privileges to this user?';
        $confirmed = $this->confirm($state);
        if(!$confirmed) {
            exit;
        }

        $user->is_rolemodel = !$user->is_rolemodel;
        $user->save();
        $this->info('Successfully changed permissions!');
    }
}
