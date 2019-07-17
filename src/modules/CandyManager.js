const remoteURL = "http://localhost:5002"

export default {
  getCandy(id) {
    return fetch(`${remoteURL}/candies/${id}`)
  },
  getAllCandies() {
    return fetch(`${remoteURL}/candies`)
  },

  getLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`)
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`)
  },

  getEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`)
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees`)
  },

  getCandyType(id) {
    return fetch(`${remoteURL}/candyTypes/${id}`)
  },
  getAllCandyTypes() {
    return fetch(`${remoteURL}/candyTypes`)
  },

  removeAndList(id) {
    return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/candies`))
        .then(e => e.json())
  }


}