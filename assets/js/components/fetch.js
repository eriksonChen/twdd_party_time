export const api = '';
export const getData = function(url) {
  return fetch(api+url, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'GET',
    mode: "cors", 
    credentials: 'include'
  }).then(res => res.json());
}

export const postData = function(url, obj) {
  return fetch(api+url, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'POST',
    mode: "cors", 
    credentials: 'include',
    body: JSON.stringify(obj)
  }).then(res => res.json());
}

export const block = function(text="loading...", ele=$('html') ){
  return ele.block({
    message: `<h5 class="text-dark"><i class="fa fa-spinner fa-spin m-r-5"></i> ${text}</h5>`
  });
}

export const unblock = function(ele=$('html')){
  return ele.unblock();
}

export const setDate = function(time){
  return dayjs(time).format('YYYY/MM/DD HH:mm');
}

export const toast = {
  init:function(){
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "700",
      "timeOut": "3000",
      "extendedTimeOut": "700",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  },
  success: function(title="更新成功", text=""){
    toastr["success"](text, title);
  },
  warning: function(title="更新失敗", text=""){
    toastr["warning"](text, title);
  },
  error: function(title="更新失敗", text=""){
    toastr["error"](text, title);
  }
}

export const authority = function(){
  return Rx.Observable.from(getData('api/Generic/GetPremission'))
  .map(x=>x.data).toPromise();
}

export const isEmpty = function(str){
  if ( str == "" ) return true;
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(str);
  // return str.replace(/\s+/g, "").length===0;
}

