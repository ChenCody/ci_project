<?php
class login_check extends CI_Model 
{
	  function __construct()
	   {
	        parent::__construct();
	   }
	  function check($username,$password)
	  {
	  	$password=md5($password);
	  	$this->load->database();
	  	$sql="select * from hifi_web.hifi_user where username=? and password=?";
	  	$flag=$this->db->query($sql,array($username,$password))->result();
	  	return $flag;
	  }
	}
	?>