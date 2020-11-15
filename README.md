# USAGE

```
const fs = require("fs");
const csv2json = require("./lib");

const file = fs.readFileSync("./names.csv", "utf-8");

csv2json.convert(file).then((names) => {
  console.log(names);
});

```

## names.csv

```
First,Last
Zain,Burke
Chandni,Devine
Mylie,O'Sullivan
Craig,Bob
Alma,Pope
Noel,Smart
Yu,Swift
Cristina,Murray
Suhayb,Glenn
Sofie,Sparks
```

# Result

```
[
  { First: 'Zain', Last: 'Burke' },
  { First: 'Chandni', Last: 'Devine' },
  { First: 'Mylie', Last: "O'Sullivan" },
  { First: 'Craig', Last: 'Bob' },
  { First: 'Alma', Last: 'Pope' },
  { First: 'Noel', Last: 'Smart' },
  { First: 'Yu', Last: 'Swift' },
  { First: 'Cristina', Last: 'Murray' },
  { First: 'Suhayb', Last: 'Glenn' },
  { First: 'Sofie', Last: 'Sparks' }
]
```
