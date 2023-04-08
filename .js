function require(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      const script = xhr.responseText;
      const module = {exports: {}};
      const exports = module.exports;
      eval(script);
      return module.exports;
    }
    throw new Error(`Unable to load module: ${file}`);
}
