<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class Usercontroller extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        $user = User::find($id);

        if(is_null($user))
            return response()->json(['error' => 'User not found!'], 404);
             else
              return response()->json($user);
    }

    public function create(Request $request)
    {
        $user = User::create($request->all());

        if($user)
            return response()->json(['msg' => 'User created successfully!'], 200);       
            
             else
              return response()->json(['error' => 'User not created'], 500);
    }

    
}
