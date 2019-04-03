const config = {
  develop: {
    apiBaseURL: "", // 设置API地址
    device: "", // 设置设备信息
    xAppId: 1, // 设置 X-App-Id
    xDeviceId: "sQedrr4E7LU7zRU5F6aWGjaX9FfjvGogWb8wyHmU" // 设置 X-Device-Id
  },
  test: {
    apiBaseURL: "", // 设置API地址
    device: "", // 设置设备信息
    xAppId: "", // 设置 X-App-Id
    xDeviceId: "" // 设置 X-Device-Id
  },
  production: {
    apiBaseURL: "", // 设置API地址
    device: "", // 设置设备信息
    xAppId: undefined,
    xDeviceId: undefined
  }
}

export default config;
