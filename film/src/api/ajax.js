import axios from 'axios'

//封装ajax
export default function ajax(url='',params={},type='GET'){
  //声明变量
  let promise;
  return new Promise(((resolve, reject) => {
    //1.判断请求方式
    if ('GET'===type){
      //1.1拼接字符串
      let str = '';
      //Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组
      //params是给定的数组 forEach循环遍历数组 获取属性名
      Object.keys(params).forEach((value,index) => {
        //判断传的url的长度
        if (index+1===Object.keys(params).length){
          //index获取的数组下标
          //value在此获取的数组的名字
          //拼接成url
          str+=value+'='+params[value];
        }else{
          //url传多个值 拼接
          str+=value+'='+params[value]+'&';
          console.log(str)
        }
      });
      //1.2完整路径
      url+='?'+str;
      //1.3发送get请求
      promise = axios.get(url);
    }else if('POST'===type){
      //1.3发送post请求
      promise = axios.post(url,params);
    }
    //2.返回请求结果
    promise.then((response)=>{
      resolve(response.data);
    }).catch((error)=>{
      reject(error);
    });
  }))
}
