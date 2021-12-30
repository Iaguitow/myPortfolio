import axios from "axios";

class People {
  getPeople(listPeople = true, page = 1, idPeople = 0) {
    return new Promise((resolve, reject) => {
      try {
        return axios({
          method: 'get',
          url: 'http://192.168.1.144:3000/routes/people',
          withCredentials: true,
          params: { listPeople, page, idPeople },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(function (response) {
          resolve(response.data);
          //console.log(JSON.stringify(response.data));
        }).catch(function (error) {
          reject(error.message);
        }).finally(function () {
          //always executed
          //alert("Finally Called")
        });
      } catch (error) {
        reject(error.message);
      }
    })
  }
}

var people = new People();
export default people;