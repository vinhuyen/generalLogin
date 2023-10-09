import BaseApi from './BaseApi';

class AuthApi extends BaseApi {

  login(params = {}) {
    return this.post('auth/login', params);
  }
  logout(params = {}) {
    return this.get('logout/api', params);
  }
  getAuthUser(params = {}) {
    return this.get('auth/getAuthUser', params);
  }
}

export default new AuthApi();