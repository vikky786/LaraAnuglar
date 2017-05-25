<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp;
use Config;
//use GuzzleHttp\Subscriber\Oauth\Oauth1;

class AuthController extends Controller
{
    /**
     * Login with Facebook.
     */
    public function facebook(Request $request)
    {
            $user = User::where('facebook', '=', $profile['id']);
            if ($user->first())
            {
                return response()->json(['message' => 'There is already a Facebook account that belongs to you'], 409);
            }
            $token = explode(' ', $request->header('Authorization'))[1];
            //$payload = (array) JWT::decode($token, Config::get('app.token_secret'), array('HS256'));
            $user = User::find($payload['sub']);
            $user->facebook = $profile['id'];
            $user->email = $user->email ?: $profile['email'];
            $user->displayName = $user->displayName ?: $profile['name'];
            $user->save();
            return response()->json(['token' => $this->createToken($user)]);
        
            $user = User::where('facebook', '=', $profile['id']);
            if ($user->first())
            {
                return response()->json(['token' => $this->createToken($user->first())]);
            }
            $user = new User;
            $user->facebook = $profile['id'];
            $user->email = $profile['email'];
            $user->displayName = $profile['name'];
            $user->save();
            return response()->json(['token' => $this->createToken($user)]);
        }
    
}
