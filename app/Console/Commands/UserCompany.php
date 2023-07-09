<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UserCompany extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:company';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make a user a company, or remove company privileges.';

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
        $state = $user->is_company ? 'Remove company privileges from this user?' : 'Add company privileges to this user?';
        $confirmed = $this->confirm($state);
        if(!$confirmed) {
            exit;
        }

        $user->is_company = !$user->is_company;
        $user->save();
        $this->info('Successfully changed permissions!');
    }
}
