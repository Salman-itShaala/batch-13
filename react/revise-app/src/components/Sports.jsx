const Sports = (props) => {
  if (!props.sports1) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      {props.sports1.length === 0 ? (
        <h1>No sports available</h1>
      ) : (
        <div>
          <h1>Sports</h1>

          <ol>
            {props.sports1.map((s) => {
              return <li key={Math.random()}>{s}</li>;
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Sports;
