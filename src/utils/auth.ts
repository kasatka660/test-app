const auth = {
  isAuthenticated: true,
  authenticate() {
    this.isAuthenticated = true;
  },
  signOut() {
    this.isAuthenticated = false;
  },
};

export default auth;
