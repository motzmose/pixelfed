<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class UserCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {--name=} {--username=} {--email=} {--password=} {--is_admin=0} {--is_company=0} {--is_rolemodel=0} {--is_team=0} {--confirm_email=0}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('Creating a new user...');

        $o = $this->options();

        if( $o['name'] &&
            $o['username'] &&
            $o['email'] &&
            $o['password']
        ) {
            $user = new User;
            $user->username = $o['username'];
            $user->name = $o['name'];
            $user->email = $o['email'];
            $user->password = bcrypt($o['password']);
            $user->is_admin = $o['is_admin'] == 'true';
			$user->is_company = $o['is_company'] == 'false';
			$user->is_rolemodel = $o['is_rolemodel'] == 'false';
            $user->is_team = $o['is_team'] == 'false';
            $user->email_verified_at = $o['confirm_email'] ? now() : null;
            $user->save();

            $this->info('Successfully created user!');
            return;
        }

        $name = $this->ask('Name');

        $username = $this->ask('Username');

        if(User::whereUsername($username)->exists()) {
            $this->error('Username already in use, please try again...');
            exit;
        }

        $email = $this->ask('Email');

        if(User::whereEmail($email)->exists()) {
            $this->error('Email already in use, please try again...');
            exit;
        }

        $password = $this->secret('Password');
        $confirm = $this->secret('Confirm Password');

        if($password !== $confirm) {
            $this->error('Password mismatch, please try again...');
            exit;
        }

        if (strlen($password) < 6) {
            $this->error('Must be 6 or more characters, please try again...');
            exit;
        }

        $is_admin = $this->confirm('Make this user an admin?');
		$is_company = $this->confirm('Make this user a company?');
		$is_rolemodel = $this->confirm('Make this user a rolemodel?');
        $is_team = $this->confirm('Make this user a team member?');
        $confirm_email = $this->confirm('Manually verify email address?');

        if($this->confirm('Are you sure you want to create this user?') &&
            $username &&
            $name &&
            $email &&
            $password
        ) {
            $user = new User;
            $user->username = $username;
            $user->name = $name;
            $user->email = $email;
            $user->password = bcrypt($password);
            $user->is_admin = $is_admin;
			$user->is_company = $is_company;
			$user->is_rolemodel = $is_rolemodel;
            $user->is_team = $is_team;
            $user->email_verified_at = $confirm_email ? now() : null;
            $user->save();

            $this->info('Created new user!');
        }
    }
}
