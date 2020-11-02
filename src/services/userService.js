import axios from 'axios';
import authHeader from './authHeader'

const url = "http://expense-manager-shipmnts.herokuapp.com/api/v1/user/"

class UserService {

  addCategory(name) {
    return axios.post(url + "add_category", {
      name
    }, { 'headers': authHeader() });
  }
  getCategory() {
    return axios.get(url + "categories",{ 'headers': authHeader() });
  }

  addExpanse(category, amount, description) {

    return axios.post(url + "add_expense", {
      category, amount, description
    }, { 'headers': authHeader() });
  }
  getfilterexpanse(start, end) {
    return axios.post(url + "expense_details", {
      start, end
    }, { 'headers': authHeader() });
  }
  getfilterexpansecategory(category) {
    return axios.post(url + "expense_details/"+category, {
      category
    }, { 'headers': authHeader() });
  }
}
export default new UserService();