<?php
class Ucenter extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->view('User_center.html');
	}
	public function id()
	{
		//here is to transport id;
	}
}
