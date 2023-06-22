


const hellos = Array.from({ length: 10 }, (_, i) => `Hello ${i + 1}`);


for (const h of hellos) {
  console.log(h);
}