const sentence = "hello there from lighthouse labs";
let ms = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), ms);
  ms += 50;
  if (ms === (50 * (sentence.length))) {
    setTimeout(() => process.stdout.write("\n"), ms)
  }
}