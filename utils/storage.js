import AsyncStorage from "@react-native-async-storage/async-storage";

export function setItem(name, value) {
  AsyncStorage.setItem(name, JSON.stringify(value));
}

export async function getItem(name, callback, nullValue) {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value && callback) callback(JSON.parse(value));
    if (!value && nullValue) callback(nullValue);
    return JSON.parse(value);
  } catch (err) {
    alert(err.message);
  }
}
