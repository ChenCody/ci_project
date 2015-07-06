<?php
class Login extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		session_start();
		$this->load->model('common','check');
		$data=$this->input->post('data',TRUE);
		$password=$data['user_psw'];
		$username=$data['user_namr'];
		$flag=$this->check->logincheck($username,$password);
		if ($flag)
		{
			$random=rand(10000000,90000000);
			$authkey=md5($random);
			$this->input->set_cookie("username",$username,3600);
			$this->input->set_cookie("auth",$authkey,3600);
			$_SESSION['authkey'] = $authkey;
			$_SESSION['username'] = $username;
			echo '登录成功';
		}
		else
		{
			echo '登录失败,用户名或密码错误';
		}
	}
}
