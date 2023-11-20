import boot from "./bootstrap.json";

export function getBootValue(path: string) {
  let keys: string[] = path.split(".");
  let value = boot;
  for (const key of keys) {
    if (value && value.hasOwnProperty(key.toUpperCase())) {
      value = value[key.toUpperCase()];
    } else {
      console.error(
        "the key",
        key,
        "doesn't exist on object ",
        value,
        " when accessing ",
        path
      );
      return "";
    }
  }
  if (value && typeof value === "string") {
    return value.toLowerCase();
  }
  return value;
}

export function getOptions(path: string) {
  const value = getBootValue(path);
  return value ? Object.keys(value) : [];
}

export function initComponentDefault(props: object, options: string[]) {
  const dyOptions = {};
  const dyProps = {};

  if (props["playground"]) {
    delete props["playground"];
  }
  for (const key in props) {
    const prop = props[key];
    let type;
    if (typeof prop.type === "function") {
      type = prop.type.name.toLowerCase();
    } else if (typeof prop.type === "object") {
      type = key;
    }
    let value;
    if (key === "options") {
      type = "select";
    }
    if (options[key]) {
      type = "enum";
      value = options[key][0].toLowerCase();
    } else {
      switch (type) {
        case "enum":
          value = [];
          break;
        case "string":
          value = key;
          break;
        case "boolean":
          value = false;
          break;
        case "icon":
          value = "check";
          break;
        case "img":
          value = "http://fakeimg.pl/100x50/?text=Card Image";
          break;
        case "select":
          value = [
            { label: "element 1", value: 1 },
            { label: "element 2", value: 2 },
          ];
          break;
        default:
          value = null;
      }
    }
    dyProps[key] = value;
    dyOptions[key] = { type, value };
    if (key === "img") {
      dyOptions[key].position = {
        value: options.img_position[0],
        options: options.img_position,
      };
    }
    if (key === "icon") {
      dyOptions[key].position = {
        value: options.icon_position[0],
        options: options.icon_position,
      };
    }

    if (options[key]) {
      dyOptions[key].options = options[key];
    }
  }

  console.log("default props initialized ", dyProps);
  return { dyProps, dyOptions };
}

export function bootstrapSize(baseClass: string, size: string) {
  if (!size) {
    return "";
  }
  return baseClass + "-" + getBootValue(`size.${size}`);
}

export function bootstrapButtonVariant(
  baseClass: string,
  variant: string,
  outline: boolean = false
) {
  if (variant === "NONE") {
    return "";
  } else {
    const variantValue = getBootValue(`variant.${variant}`);
    if (outline) {
      return baseClass + "-outline-" + variantValue;
    } else {
      return baseClass + "-" + variantValue;
    }
  }
}

export function bootstrapIcon(
  icon: object | string | undefined,
  size: string = "SMALL"
) {
  let iconObj;
  if (typeof icon === "object") {
    iconObj = { ...icon };
  } else if (typeof icon === "string") {
    iconObj = { src: icon };
  } else {
    return {};
  }
  if (!icon.position) {
    iconObj.position = getBootValue("position.icon." + [position_icon[0]]);
  } else {
    iconObj.position = getBootValue("position.icon." + icon.position);
  }
  switch (size) {
    case "SMALL":
      iconObj.style = {
        fontSize: "18px",
        padding: "0.5rem",
      };
      break;
    case "MEDIUM":
      iconObj.style = {
        fontSize: "24px",
        padding: "0.6rem",
      };
      break;
    case "LARGE":
      iconObj.style = {
        fontSize: "36px",
        padding: "0.7rem",
      };
      break;
  }
  return iconObj;
}

export function bootstrapCardVariant(
  variant: string,
  outline: boolean = false
) {
  if (!variant && variant === "NONE") {
    return "";
  } else {
    const variantValue = getBootValue(`variant.${variant}`);
    const prefix = outline ? "border-" : "text-bg-";
    return prefix + variantValue;
  }
}

export function bootstrapCardImg(img: any) {
  let src;
  if (typeof img === "string") {
    src = img;
  } else if (typeof img === "object" && img?.src) {
    src = img.src;
  } else {
    return undefined;
  }

  const position = img?.position ? img.position : "top";
  var style = "card-img";
  if (position !== "overlay" && position !== "none") {
    style += "-" + position;
  }
  return {
    style: style,
    position: position,
    src: src,
  };
}

export const size = getOptions("size");
export const direction = getOptions("direction");
export const variant = getOptions("variant");
export const position_button = getOptions("position.button");
export const type_button = getOptions("type.button");
export const type_input = getOptions("type.input");
export const position_img = getOptions("position.img");
export const position_icon = getOptions("position.icon");
export const align_card = getOptions("align.card");
