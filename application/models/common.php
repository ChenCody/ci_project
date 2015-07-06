<?php
class common extends CI_Model 
{
	  function __construct()
	   {
	        parent::__construct();
	   }
	  function logincheck($username,$password)
	  {
	  	$password=md5($password);
	  	$this->load->database();
	  	$sql="select * from hifi_web.hifi_user where username=? and password=?";
	  	$flag=$this->db->query($sql,array($username,$password))->result();
	  	return $flag;
	  }
	  function same_check($username)
	  {
	  	$this->load->database();
	  	$sql="select * from hifi_web.hifi_user where username=?";
	  	$flag=$this->db->query($sql,$username)->result();
	  	return $flag;
	  }
	  function register($username,$password,$email)
	  {
	  	$password=md5($password);
	  	$this->load->database();
	  	$intercoin=0;
	  	$sql="insert into hifi_web.hifi_user values(null,?,?,?,?,null)";
	  	$flag=$this->db->query($sql,array($username,$password,$email,$intercoin));
	  	return $flag;
	  }
}
?>