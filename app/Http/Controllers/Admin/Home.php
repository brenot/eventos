<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class Home extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }
}