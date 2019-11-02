<template>
  <div id="my-info">
    <div class="top">
      <span class="icon-back" @click="$router.push('/my')"></span>
      <span class="name ellipsis">我的资料</span>
    </div>
    <div class="info-container">
      <div class="list">
        <div class="item" style="position:reltive;">
          头像
          <div class="right">
            <img :src="avatar" style="width:1rem;height:1rem;border-radius:50%" />
            <i class="icon-more"></i>
            <input
              type="file"
              id="file"
              name="file"
              ref="uploadImg"
              style="position:absolute;left:0;top:0;height:100%;width:100%;opacity:0"
            />
          </div>
        </div>
        <div
          class="item"
          @click.prevent="$router.push({name:'modify_username',params:{userName:userName}})"
        >
          <span>昵称</span>
          <span class="right">
            {{userName?userName:'未填写'}}
            <i class="icon-more"></i>
          </span>
        </div>
        <div class="item" @click.prevent="showSexPanel=true">
          <span>性别</span>
          <span class="right">
            {{userSex?userSex:'未填写'}}
            <i class="icon-more"></i>
          </span>
        </div>
        <div class="item" @click="open('Picker')">
          <span>生日</span>
          {{pickerVisible   }}  
          <i class="icon-more"></i>
        </div>
        <div class="item sign" @click.prevent="$router.push({name:'modify_usersign',params:{sign:sign}})">
          <span>个人签名</span>
          <span class="right">
            <span class="ellipsis sign">{{sign?sign:'未填写'}}</span>
            <i class="icon-more"></i>
          </span>
        </div>
      </div>
      <div class="logout">
        <span class="logout-btn" @click="logout()">退出</span>
      </div>
    </div>
    <mt-datetime-picker :v-if="isback==true" v-model="pickerVisible" @click="openPicker()" type="date" ref="picker" year-format="{value}" month-format="{value}" date-format="{value}"></mt-datetime-picker>
    <div class="modify_sex" v-show="showSexPanel" @click="showSexPanel=false">
      <div class="container" @click.stop>
        <div class="content">
          <div class="title">修改性别</div>
          <div class="item" @click="modifyUserSex('男')">
            <i class="icon-male"></i>男
          </div>
          <div class="item" @click="modifyUserSex('女')">
            <i class="icon-female"></i>女
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DatetimePicker,Indicator,Toast,MessageBox } from "mint-ui";
import { Input } from "element-ui";
Vue.use(Input)
Vue.component(DatetimePicker.name, DatetimePicker);
import "mint-ui/lib/style.css";
import {
    getUserInfo,
    updateUserInfo,
    updateUserSex,
    updateUserBirthday,
    upLoadImg,
    updateUserAvatar
} from "../../../api/index"
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      userSex: "",
      avatar:"",
      avatarSrc:"",
      sign:"",
      jsonData:"",
      showSexPanel: false,
      pickerVisible: new Date(),
      isback: "true"
    };
  },
  created(){//生命周期鈎子函數
    this.loadUserInfo();
  },
  methods: {
      //更新用户信息
    updateUserInfo() {
      if (this.jsonData) {
        this.avatarSrc = this.jsonData.avatar;
        this.avatar = "http://localhost:3000" + this.avatarSrc;
        this.jsonData.user_name
          ? (this.userName = this.jsonData.user_name)
          : (this.userName = "");
        this.jsonData.password
          ? (this.userPwd = this.jsonData.password)
          : (this.userPwd = "");
        this.jsonData.sex
          ? (this.userSex = this.jsonData.sex)
          : (this.userSex = "");
        this.jsonData.birthday
          ? (this.birthday = this.jsonData.birthday)
          : (this.birthday = null);
        this.jsonData.sign
          ? (this.sign = this.jsonData.sign)
          : (this.sign = "");
      }
    },
    async modifyUserSex(sex) {
      if (this.$cookies.get("user_id") && sex) {
        let json = await updateUserSex(this.$cookies.get("user_id"), sex);
        if (json.success_code == 200) {
          this.showSexPanel = false;
          this.userSex = sex;
        }
      }
    },
    changeImg(e) {
      let reader = new FileReader();
      reader.readAsDataURL(this.$refs.uploadImg.files[0]); //发起异步请求
      let _this = this;
      reader.onload = function() {
        //读取完成后，将结果赋值给img的src
        _this.modifyUserAvatar();
        _this.$refs.previewImg.src = this.result;
      };
    },
    //修改用户头像
    async modifyUserAvatar() {
      if (!this.$cookies.get("user_id")) {
        Message.error("请先登录！");
        return false;
      } else {
        let formData = new FormData();
        formData.append("file", this.$refs.uploadImg.files[0]);
        let json = await upLoadImg(formData);
        if (json.success_code === 200) {
          if (json.data.length) {
            let userNewAvatar = "/images/avatar/" + json.data[0].filename;
            json = await updateUserAvatar(
              this.$cookies.get("user_id"),
              userNewAvatar
            );
            if (json.success_code == 200) {
              Toast({
                message: "修改头像成功",
                position: "middle",
                duration: 2000
              });
            }else{
              Toast({
                message: json.message,
                position: "middle",
                duration: 2000
              });
            }
          }
        }
      }
    },
      //加載用戶信息
    async loadUserInfo() {
      if (this.$cookies.get("user_id")) {
        let json = await getUserInfo(this.$cookies.get("user_id"));
        if (json.success_code === 200) {
          this.jsonData = json.data;
          this.updateUserInfo();
        } else {
          this.jsonData = {};
        }
      } else {
        this.jsonData = {};
      }
      Indicator.close();
    },
    //取消按钮
    handleCancel() {
      this.showDatePicker = false;
    },
    //确定按钮
    async handleConfirm(selectedDate) {
      if (this.$cookies.get("user_id") && selectedDate) {
        let json = await updateUserBirthday(
          this.$cookies.get("user_id"),
          selectedDate
        );
        if (json.success_code == 200) {
          this.showDatePicker = false;
          this.birthday = selectedDate;
        }
      }
    },
    //修改用户名
    changeUserName() {
      MessageBox.prompt("修改用户名").then(({ value, action }) => {
        if (value) {
          this.userName = value;
        }
      });
    },
    //修改密码
    changeUserPwd() {
      MessageBox.prompt("修改密码(1-6位)").then(({ value, action }) => {
        if (value && /^[\w_-]{1,6}$/.test(value)) {
          this.userPwd = value;
        } else {
          MessageBox.alert("请输入1到6位密码！");
        }
      });
    },
    open(Picker) {
      this.$refs.picker.open();
    },
    cancelText() {
      this.isback = false;
    },
    // 退出登录
    logout() {
      if (this.$cookies.get("user_id")) {
        this.$cookies.remove("user_id");
        this.$router.push("my");
      }
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
#my-info {
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 0.3125rem;
}

.top {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #dd2727;
  color: #fff;
}

.icon-back {
  font-size: 0.4rem;
  position: absolute;
  left: 0.3rem;
}

.name {
  width: 60%;
  font-size: 0.345rem;
  text-align: center;
}

.save-btn {
  position: absolute;
  right: 0.3rem;
}

.info-container {
  font-size: 0.3125rem;
  position: fixed;
  top: 1rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
}

.list {
  background-color: #fff;
  margin-top: 0.4rem;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.36rem;
  border-bottom: 0.02rem solid #f1f1f1;
  position: relative;
}

.right {
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: center;
  color: #888;
  width: 60%;
}

.sign {
  display: inline-block;
  width: 90%;
  text-align: right;
}

.logout {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  line-height: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  box-sizing: border-box;
}

.logout-btn {
  width: 100%;
  height: 100%;
  background-color: #dd2727;
  color: #fff;
  border-radius: 0.1rem;
}

.modify_sex {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  z-index: 2040;
}

.container {
  position: fixed;
  width: 5rem;
  height: 3rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.08rem;
  z-index: 2041;
}

.content {
  width: 80%;
}

.title {
  font-size: 0.345rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.item {
  margin-bottom: 0.2rem;
  height: 0.6rem;
  display: flex;
  align-items: center;
}

i {
  font-size: 0.375rem;
  margin-right: 0.24rem;
}
</style>
