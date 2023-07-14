<template>
  <ProfileHeader/>
  <h1>profile page</h1>
  <table>
    <tr @click="gotoRests">Order Food</tr>
    <tr @click="changePass">change password</tr>
    <tr v-show="changePassSelected">
        <label for="old-password-input">old password</label>
        <div>
          <input
              id="old-password-input"
              v-model="oldPass"
              :type="isPasswordHidden ? 'oldPass' : 'text'"
              autocomplete="email"
              name="oldPass"
              placeholder="password"
              tabindex="2"
          />
          <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
          </span>
        </div>
        <p v-show="oldPass.$dirty || invalidPassword">
          <span v-if="oldPass.required">password required</span>
          <span v-if="invalidPassword">wrong password</span>

        </p>

      <div>
        <label for="password-input"> new password </label>
      </div>
      <div>
        <input
            id="password-input"
            ref="passwordRef"
            v-model="password"
            title="password"
            placeholder="password"
            :type="isPasswordHidden ? 'password' : 'text'"
            tabindex="2"
            autocomplete="new-password"
        />
        <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
            </span>
      </div>
      <div>
        <p v-show="password.$dirty">
          <span v-if="password.required">password required</span>
        </p>
        <ul v-show="password.$dirty">
          <li v-for="requirement of passwordRequirements"
              :key="requirement.caption">
            <base-icon
                :icon-name="requirement.isMet ? 'tick' : 'close'"
                :icon-color="requirement.isMet ? '#15D1C6' : '#FC3C55'"
            />
            {{ requirement.caption }}
          </li>
        </ul>
      </div>

      <div>
        <label for="password2-input"> new password conformation </label>
      </div>
      <div>
        <input
            id="password2-input"
            ref="passwordRef"
            v-model="password2"
            title="password"
            placeholder="password"
            :type="isPasswordHidden ? 'password' : 'text'"
            tabindex="3"
            autocomplete="new-password"
        />
        <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
            </span>
      </div>
      <div>
        <p v-show="password2.$dirty">
          <span v-if="password2.required">password conf required</span>
        </p>
        <ul
            v-show="password2.$dirty">
          <li v-for="requirement2 of password2Requirements"
              :key="requirement2.caption">
            <base-icon
                :icon-name="requirement2.isMet2 ? 'tick' : 'close'"
                :icon-color="requirement2.isMet2 ? '#15D1C6' : '#FC3C55'"/>
            {{ requirement2.caption2 }}
          </li>
        </ul>
      </div>
      <submit-button :is-disabled="correctOldPass" @click="changePassword">change password</submit-button>
    </tr>
    <tr v-show="changePassSelected"/>
    <tr v-show="changePassSelected"/>
    <tr @click="gotoCart">cart</tr>
    <tr @click="gotoOrderHist">recent order history</tr>
    <tr @click="gotoLoginHist">recent login history</tr>
    <tr @click="gotoSessions">recent open sessions</tr>
    <tr @click="gotoActiveOrders">recent active orders</tr>
  </table>
</template>

<script>
import ProfileHeader from "@/components/shared/ProfileHeader";
import BaseIcon from "@/components/shared/baseIcon.vue";
import SubmitButton from "@/components/shared/submitButton.vue";

export default {
  name: "ProfilePage",
  components: {
    SubmitButton,
    BaseIcon,
    ProfileHeader
  },
  data() {
    return {
      username: '',
      oldPass:'',
      password: '',
      password2:'',
      changePassSelected: false,
      isPasswordHidden:true,
      invalidPassword: true,
      currentOrders: [],
    }
  },
  computed:{
    correctOldPass() {
      // todo: return old pass === user password
      return true
    }
  },
  methods: {
    gotoRests() {
    //   todo: goto restaurants list
    },
    changePass() {
      this.changePassSelected = !this.changePassSelected
      this.oldPass=''
      this.password=''
      this.password2=''
    },
    gotoCart() {
    //   todo goto carts list
    },
    gotoOrderHist() {
    //   todo: show top order history
    },
    gotoLoginHist() {
    },
    gotoSessions() {
    },
    gotoActiveOrders() {
    },
    passwordRequirements() {
      return [
        {
          caption: 'atLeastOneLetter',
          isMet: /.*?[A-Za-z]/.test(this.password)
        },
        {
          caption: 'atLeastOneNumber',
          isMet: /.*[0-9].*/.test(this.password)
        },
        {
          caption: 'minEightChar',
          isMet: this.password.length >= 8
        }
      ]
    },
    password2Requirements() {
      return [
        {
          caption2: 'atLeastOneLetter',
          isMet2: /.*?[A-Za-z]/.test(this.password2)
        },
        {
          caption2: 'atLeastOneNumber',
          isMet2: /.*[0-9].*/.test(this.password2)
        },
        {
          caption2: 'minEightChar',
          isMet2: this.password2.length >= 8
        }
      ]
    },
    changePassword() {
      //todo: implement change password logic
      this.changePass()
    },

    isPasswordRequirementsMet() {
      return this.passwordRequirements.every(item => item.isMet)
    }

  }
}
</script>

<style scoped>

</style>