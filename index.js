const objectDiff = (before, after) => {
  const added = Object.assign({},
    ...Object.keys(after).filter(key =>
      before[key] === undefined
    ).map(key => ({ [key]: after[key] }))
  );

  const removed = Object.assign({},
    ...Object.keys(before).filter(key =>
      after[key] === undefined
    ).map(key => ({ [key]: before[key] }))
  );

  const changed = Object.assign({},
    ...Object.keys(before).filter(key =>
      before[key] !== undefined &&
      after[key] !== undefined &&
      before[key] !== after[key]
    ).map(key => ({
      [`${key}__before`]: before[key],
      [`${key}__after`]: after[key],
    }))
  );

  return {
    removed,
    added,
    changed,
  };
};

console.log(
  JSON.stringify(
    objectDiff(
      { a: 1, b: 2, c: 3 },
      { b: 2, c: 4, d: 0 }
    )
  )
);
