<?php
class Login extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->model('login_check','check');
		$data=$this->input->post('data');
		$password=$data['user_psw'];
		$username=$data['user_namr'];
		$flag=$this->check->check($username,$password);
		if ($flag)
		{
			echo '登录成功';
		}
		else
		{
			echo '登录失败,用户名或密码错误';
		}
	}
}
