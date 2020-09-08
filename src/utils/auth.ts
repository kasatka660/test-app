const sessionTime = 30000;

const auth = {
  authenticate() {
    const date = new Date();
    localStorage.setItem(
      "currentSession",
      (date.getTime() + sessionTime).toString()
    );
  },
  signOut() {
    localStorage.setItem("currentSession", "false");
  },
  isAuthenticated() {
    const date = new Date();
    const storageDate = parseInt(localStorage.getItem("currentSession") || "");
    return date.getTime() < storageDate;
  },
};

export default auth;
