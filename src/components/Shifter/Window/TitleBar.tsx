function setTitleBar(type: number, b: any) {
  switch (type) {
    case 0:
      return localStorage.setItem("--titlebar-colour", b);
  }
}
