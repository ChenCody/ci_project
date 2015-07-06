<?php
class Ucenter extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function warn()
	{
		echo "<script>alert('请先登录')</script>";
		exit('<script>window.location="../../../index.php"</script>');
	}
	public function check()
	{
		//检查是否登录了
		$flag=$this->input->cookie('auth');
		if(!$flag)
			{
				$this->warn();
			}
		elseif($flag!=$_SESSION['authkey'])
		{
			$this->warn();
		}
		else
		{
			return true;
		}
	}
	public function index()
	{
		$this->warn();
	}
	public function name()
	{
		session_start();
		$this->check();
		$username=$_SESSION['username'];
		$data=array();
		$this->load->view('User_center.html');
	}
}
