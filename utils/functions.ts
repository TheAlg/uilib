export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

export function generateId() {
  const uniqueId = Math.random().toString(36).substring(2, 12);
  const timestamp = new Date().getTime().toString();
  return `${uniqueId}${timestamp}`;
}

export function validator(value: string, options: string[]) {
  if (options.includes(value)) {
    return value;
  } else {
    console.warn(
      `Invalid value "${value}" for size prop. Using default value "${options[0]}".`
    );
    return options[0];
  }
}
export function isObject() {}
