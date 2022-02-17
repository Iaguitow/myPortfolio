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
      case 'toobigimg':
        Toast.show({
            title: "Image too big.",
            status: "error",
            description: "This image is bigger than 1mb, please try compress it before upload on your profile, more than 1mb is too big for a profile image.",
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
            title: "User Not Found",
            status: "error",
            description: "Your E-mail or Password does not exist, please verify your credentials or try register yourself.",
            duration: 2000000,
        })
      break;
      case "User Already Exists":
        Toast.show({
            title: "User Already Exists",
            status: "error",
            description: "Your E-mail already exists, please verify your credentials and try login normally, or try register with another E-mail.",
            duration: 2000000,
        })
      break;
      case "Code Not Found":
        Toast.show({
            title: "Code Not Found",
            status: "error",
            description: "This code had been already used, check the code which was sent to your E-mail or try resent it. ",
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
      case "Recovery Code":
        Toast.show({
            title: "Recovery Code",
            status: "info",
            description: "Your Recovery Code was sent to your registered E-mail.",
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