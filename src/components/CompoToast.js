import { Component } from 'react';
import { Toast } from 'native-base'

class Toasts extends Component {

  static showToast(alert, title = "", description = "") {
    switch (alert) {
      case 'Error':
        Toast.show({
            title: title,
            status: "error",
            description: description,
            duration: 2000000,
        })
      break;
      case 'Invalid Input':
        Toast.show({
            title: title,
            status: "error",
            description: description,
            duration: 2000000,
        })
      break;
      case 'User Not Found':
        Toast.show({
            title: "User Not Found!",
            status: "error",
            description: "Your E-mail or Password does not exist, please verify your credentials or try register yourself.",
            duration: 2000000,
        })
      break;
      case "User Already Exists":
        Toast.show({
            title: "User Already Exists",
            status: "error",
            description: "Your E-mail already exists, please verify your credentials or try register with another E-mail.",
            duration: 2000000,
        })
      break;
      case "Sucessfully Registered":
        Toast.show({
            title: "Sucessfully Registered",
            status: "success",
            description: "Sucessfully Registered, please finish your profile, then others will be able to see you.",
            duration: 2000000,
        })
      break;
      default:
        Toast.show({
            text: 'Something Went Wrong',
            buttonText: "Okay",
            duration: 3000
        })
    }
  }
}

export default Toasts