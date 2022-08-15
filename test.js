const hello = () => {
  const arr = [1, 2, 3, 4, 5];

  return (arr[0] = 10);
};

console.log(hello());
