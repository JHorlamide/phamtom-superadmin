class Utils {
  static getErrorMessage(error: any) {
    return error.data.message || error.response?.data?.message || error.message;
  }

  static getAccountStatus(status: string) {
    switch (status) {
      case "APPROVED":
        return "green"
      case "PENDING":
        return "blue"
      default:
        return "red"
    }
  }
}

export default Utils;