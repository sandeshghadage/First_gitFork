export function getLocalData() {
  const userData = localStorage.getItem("userData");
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch {
      return [];
    }
  }
  return [];
}

export function setLocalData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}
