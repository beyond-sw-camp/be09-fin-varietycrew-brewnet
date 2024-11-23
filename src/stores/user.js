import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const tempAccessToken = ref('');
    const tempRefreshToken = ref('');

    const accessToken = ref('');
    const refreshToken = ref('');
    const userType = ref(''); // hq: 본사, fc: 가맹점, d: 배송기사
    const loginId = ref('');
    const username = ref('');

    const saveTempAccessToken = token => {
      tempAccessToken.value = token;
    };
    const saveTempRefreshToken = token => {
      tempRefreshToken.value = token;
    };

    const saveTokenTempToReal = () => {
      accessToken.value = tempAccessToken.value;
      refreshToken.value = tempRefreshToken.value;

      // temp 토큰은 지우기
      tempAccessToken.value = '';
      tempRefreshToken.value = '';
    };

    const setUserType = type => {
      userType.value = type;
    };

    const setUserData = memberDTO => {
      loginId.value = memberDTO.id;
      username.value = memberDTO.name;
    };

    const clearUserData = () => {
      tempAccessToken.value = '';
      tempRefreshToken.value = '';

      accessToken.value = '';
      refreshToken.value = '';
      userType.value = '';
      loginId.value = '';
      username.value = '';
    };

    return {
      tempAccessToken,
      tempRefreshToken,

      accessToken,
      refreshToken,
      userType,
      loginId,
      username,

      saveTempAccessToken,
      saveTempRefreshToken,
      saveTokenTempToReal,
      setUserType,
      setUserData,
      clearUserData,
    };
  },
  { persist: true },
);
