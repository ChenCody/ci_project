<?php
class Mall extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->view('mall.html');
	}
}
