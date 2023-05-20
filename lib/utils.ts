export function abbText(text:string, maxLength:number, showThatWasRest = true) {
  if (text.length <= Math.round(maxLength)) {
      return text;
  }
  else {
      return (text === null || text === void 0 ? void 0 : text.slice(0, Math.round(maxLength))) + (showThatWasRest ? "..." : "");
  }
}