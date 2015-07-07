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
		$this->load->model('common','get');
		$result=$this->get->get($username);
		$data['username']=$username;
		$data['email']=$result->email;
		$data['intercoin']=$result->intercoin;
		$data['headpic']=$result->headpic;
		$this->load->view('User_center.html',$data);
	}
	public function addproduct()
	{
		session_start();
		$this->check();
		$username=$_SESSION['username'];
		$this->load->model('common','addproduct');
		//中间是放调用模型的地方
		//结束
		$this->load->view('User_product.html');
	}
	public function logout()
	{
		session_start();
		$this->input->set_cookie("username","",time()-1);
		$this->input->set_cookie("auth","",time()-1);
		session_destroy();
		exit('<script>alert("已成功退出");location="../../../../index.php"</script>');
	}
}
