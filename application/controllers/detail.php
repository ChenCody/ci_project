<?php
class Detail extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->view('detail.html');
	}
	public function id()
	{
		//here is to transport id;
	}
}
