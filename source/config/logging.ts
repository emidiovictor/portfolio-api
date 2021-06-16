const getTimeStamp = (): string => {
  return new Date().toISOString();
}

const info = (namespace: string, message: string, object?: any) => {
  console.info(`[${getTimeStamp()}] [INFO] [${namespace} ${message}]`, object)
}

export default { info };