<?php
class register extends CI_Controller
{
public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$this->load->model('common','register');
		$data=$this->input->post('data',TRUE);
		$password=$data['user_psw'];
		$username=$data['user_namr'];
		$email=$data['user_email'];
		//正则表达式,用户名密码的规则
		$subject=$username;
		$pattern='/^[A-Za-z0-9]+$/i';
		$flag=preg_match($pattern,$subject,$matches);
		if(!$matches[0])
		{
			exit('非法的用户名');
		}
		//结束
		$username=$data['user_namr'];
		$flag=$this->register->same_check($username);
		if ($flag)
		{
			exit('用户名重复,请更换');
		}
		$flag=$this->register->register($username,$password,$email);
		if ($flag)
		{
			echo '注册成功,请进行登录';
		}
		else
		{
			echo '注册失败';
		}
	}
}