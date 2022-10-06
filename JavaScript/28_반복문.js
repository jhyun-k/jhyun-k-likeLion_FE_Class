let data = {
    'one' : '하나',
    'two': '둘',
    'three': '셋',
    'four': '넷',
}

for (const i in data) {
    console.log(i); //key
    console.log(data[i]); //value
    console.log(data.하나);
}

console.log(data.one);

for (const i in data) {
  console.log(data[i]);
}

for (const i in data) {
   console.log(data.i); // error
}