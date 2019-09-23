const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons`).then(result => result.json())
  },
  inactivate(id) {
    return fetch(`${remoteURL}/patrons/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },body: JSON.stringify({active: false})
  }).then((response=> response))
  }
}