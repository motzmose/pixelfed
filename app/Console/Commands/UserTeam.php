<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class UserTeam extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:team {id}';

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
        $state = $user->is_team ? 'Remove team privileges from this user?' : 'Add team privileges to this user?';
        $confirmed = $this->confirm($state);
        if(!$confirmed) {
            exit;
        }

        $user->is_team = !$user->is_team;
        $user->save();
        $this->info('Successfully changed permissions!');
    }
}
