const auth = {
  authenticate() {
    localStorage.setItem("currentSession", "true");
  },
  signOut() {
    localStorage.setItem("currentSession", "false");
  },
  isAuthenticated() {
    return !!localStorage.getItem("currentSession");
  },
};

export default auth;
